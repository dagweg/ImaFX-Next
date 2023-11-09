
const SansSerif = "sans-serif"

async function fetchFontData() {
    try {
        const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.GOOGLE_FONT_API_KEY}`)
        if (response.ok) {
            const fontData = await response.json()
            return fontData
        } else {
            console.log("Couldn't get font")
            return null
        }
    }
    catch (error) {
        console.log(error)
    }
}

fetchFontData()
    .then((fontData) => {
        console.log(fontData)
    })

module.exports = {
    SansSerif
}