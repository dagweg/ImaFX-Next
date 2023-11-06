const sharp = require('sharp')

// Function to create a grayscale image
function applyGrayscaleEffect(imageURL) {
    console.log('hooray')
}

// Function to create a sepia image
function applySepiaEffect(imageURL) {
    // Implement the Sepia effect and return the new URL
}

// Function to create a vintage image
function applyVintageEffect(imageURL) {
    // Implement the Vintage effect and return the new URL
}

// Function to create a black and white image
function applyBlackAndWhiteEffect(imageURL) {
    // Implement the Black and White effect and return the new URL
}

// Function to create a cartoonized image
function applyCartoonizeEffect(imageURL) {
    // Implement the Cartoonize effect and return the new URL
}

// Function to create an oil painting image
function applyOilPaintingEffect(imageURL) {
    // Implement the Oil Painting effect and return the new URL
}

// Function to create a watercolor image
function applyWatercolorEffect(imageURL) {
    // Implement the Watercolor effect and return the new URL
}

// Function to apply blur effect
function applyBlurEffect(imageURL) {
    // Implement the Blur effect and return the new URL
}

// Function to apply sharpen effect
function applySharpenEffect(imageURL) {
    // Implement the Sharpen effect and return the new URL
}

// Function to apply noise reduction effect
function applyNoiseReductionEffect(imageURL) {
    // Implement the Noise Reduction effect and return the new URL
}

// Function to adjust brightness and contrast
function applyBrightnessContrastEffect(imageURL) {
    // Implement the Brightness/Contrast effect and return the new URL
}

// Function to adjust saturation
function applySaturationEffect(imageURL) {
    // Implement the Saturation effect and return the new URL
}

// Function to adjust hue and saturation
function applyHueSaturationEffect(imageURL) {
    // Implement the Hue/Saturation effect and return the new URL
}

// Function to adjust color balance
function applyColorBalanceEffect(imageURL) {
    // Implement the Color Balance effect and return the new URL
}

// Function to colorize an image
function applyColorizeEffect(imageURL) {
    // Implement the Colorize effect and return the new URL
}

// Function to apply color splash effect
function applyColorSplashEffect(imageURL) {
    // Implement the Color Splash effect and return the new URL
}

// Function to crop an image
function applyCropEffect(imageURL) {
    // Implement the Crop effect and return the new URL
}

// Function to resize an image
function applyResizeEffect(imageURL) {
    // Implement the Resize effect and return the new URL
}

// Function to rotate an image
function applyRotateEffect(imageURL) {
    // Implement the Rotate effect and return the new URL
}

// Function to flip an image
function applyFlipEffect(imageURL) {
    // Implement the Flip effect and return the new URL
}

// Function to auto-enhance an image
function applyAutoEnhanceEffect(imageURL) {
    // Implement the Auto-enhance effect and return the new URL
}

// Function to denoise an image
function applyDenoiseEffect(imageURL) {
    // Implement the Denoise effect and return the new URL
}

// Function to auto-correct an image
function applyAutoCorrectEffect(imageURL) {
    // Implement the Auto-correct effect and return the new URL
}

// Function to create a pixelated image
function applyPixelationEffect(imageURL) {
    // Implement the Pixelation effect and return the new URL
}

// Function to remove background
function applyRemoveBackgroundEffect(imageURL) {
    // Implement the Remove background effect and return the new URL
}

// Function to add decorative frames
function applyAddDecorativeFramesEffect(imageURL) {
    // Implement the Add Decorative Frames effect and return the new URL
}

// Function to add borders
function applyAddBordersEffect(imageURL) {
    // Implement the Add Borders effect and return the new URL
}

// Function to compress and save an image
function applyCompressAndSaveEffect(imageURL) {
    // Implement the Compress & save effect and return the new URL
}

// Function to create an anaglyph image
function applyCreateAnaglyphEffect(imageURL) {
    // Implement the Create Anaglyph effect and return the new URL
}


// why is this not being accepted as import in the express backend????????????????
const effectMapping = {
    'Grayscale': applyGrayscaleEffect,
    'Sepia': applySepiaEffect,
    'Vintage': applyVintageEffect,
    'Black and White': applyBlackAndWhiteEffect,
    'Cartoonize': applyCartoonizeEffect,
    'Oil Painting': applyOilPaintingEffect,
    'Watercolor': applyWatercolorEffect,
    'Blur': applyBlurEffect,
    'Sharpen': applySharpenEffect,
    'Noise Reduction': applyNoiseReductionEffect,
    'Brightness/Contrast': applyBrightnessContrastEffect,
    'Saturation': applySaturationEffect,
    'Hue/Saturation': applyHueSaturationEffect,
    'Color Balance': applyColorBalanceEffect,
    'Colorize': applyColorizeEffect,
    'Color Splash': applyColorSplashEffect,
    'Crop': applyCropEffect,
    'Resize': applyResizeEffect,
    'Rotate': applyRotateEffect,
    'Flip': applyFlipEffect,
    'Auto-enhance': applyAutoEnhanceEffect,
    'Denoise': applyDenoiseEffect,
    'Auto-correct': applyAutoCorrectEffect,
    'Pixelation': applyPixelationEffect,
    'Remove background': applyRemoveBackgroundEffect,
    'Add Decorative Frames': applyAddDecorativeFramesEffect,
    'Add Borders': applyAddBordersEffect,
    'Compress & save': applyCompressAndSaveEffect,
    'Create Anaglyph': applyCreateAnaglyphEffect,
};

module.exports = { effectMapping }



