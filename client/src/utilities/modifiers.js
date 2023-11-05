export const grayscale = (imageURL) => {

    fetch('http://localhost:5000/modifier/grayscale', {
        method: "POST",
        body: {
            url: imageURL
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            // setImageURL(data.url)
        })
        .catch((error) => { console.log(error) })
}