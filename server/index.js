const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')
const { effectMapping } = require('./controllers/imageProcessingController')

// Middleware to parse JSON
app.use(express.json());
app.use(cors())
// app.use('/assets', express.static('../../client/src/assets/logo.png'));

app.get('/modify/:payload', (req, res) => {
    const effectType = req.params.payload; // The entire :payload is the effectType
    const imageBuffer = req.query.imageBuffer;
    console.log(effectType);
    console.log(imageBuffer);

    if (effect in effectMapping) {
        // Assuming effectMapping is an object that contains effect functions
        const newURL = effectMapping[effectType](imageBuffer);

        res.json({
            newURL: newURL
        });
    }
});


// Start the Express server
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
