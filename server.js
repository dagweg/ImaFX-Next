const express = require('express');
const app = express();
const sharp = require('sharp');
const Datauri = require('datauri');
const cors = require('cors')
const fetch = require('node-fetch');


const port = 3000;

app.use(express.json()); // Parse JSON request bodies
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.post('/processImage/grayscale', async (req, res) => {
    try {
        const imageUrl = req.body.imageUrl;
        console.log("URL: " + imageUrl)
        // Fetch the image from the provided URL
        const response = await fetch(imageUrl);
        const imageBuffer = await response.buffer();

        const imageMetaData = await sharp(imageBuffer).metadata()
        const imageFormat = imageMetaData.format

        const processedImage = await sharp(imageBuffer);

        if (imageFormat === 'jpeg') {
            processedImage.grayscale();
        } else {
            processedImage.toFormat('jpeg').grayscale();
        }

        const processedImageBuffer = processedImage.toBuffer();

        const dataUri = new Datauri();
        dataUri.format('.jpg', processedImageBuffer);
        console.log(dataUri.content)
        res.json({ processedImageUrl: dataUri.content });
    } catch (error) {
        console.log('Image processing failed: ' + error);
        res.status(500).json({ error: 'Image processing failed' });
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
