const processImage = async () => {
    try {
        const response = await fetch('http://localhost:5000/processImage/grayscale', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageUrl: imageURL }),
        });

        if (response.status === 200) {
            const data = await response.json();
            const processedImageURL = data.processedImageURL;
            setImageURL(processedImageURL);
        } else {
            console.error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        console.error(`Request error: ${error}`);
    }
}


export default processImage