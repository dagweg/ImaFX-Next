import sharp from "../../node_modules/sharp/lib/index";


async function blobToBuffer(blob: Blob) {
    return Buffer.from(await blob.arrayBuffer());
}

async function applyGrayscaleEffect(blob: Blob) {
    try {
        const imageBuffer = await blobToBuffer(blob);
        const grayscaleImage = await sharp(imageBuffer).grayscale(true).toBuffer();
        return grayscaleImage;
    } catch (error) {
        console.error("Error applying grayscale effect:", error);
        throw error;
    }
}

// Function to create a sepia image
async function applySepiaEffect(blob: Blob) {
    // Implement the Sepia effect and return the new URL
}

// Function to create a vintage image
async function applyVintageEffect(blob: Blob) {
    // Implement the Vintage effect and return the new URL
}

// Function to create a black and white image
async function applyBlackAndWhiteEffect(blob: Blob) {
    // Implement the Black and White effect and return the new URL
}

// Function to create a cartoonized image
async function applyCartoonizeEffect(blob: Blob) {
    // Implement the Cartoonize effect and return the new URL
}

// Function to create an oil painting image
async function applyOilPaintingEffect(blob: Blob) {
    // Implement the Oil Painting effect and return the new URL
}

// Function to create a watercolor image
async function applyWatercolorEffect(blob: Blob) {
    // Implement the Watercolor effect and return the new URL
}

// Function to apply blur effect
async function applyBlurEffect(blob: Blob) {
    // Implement the Blur effect and return the new URL
}

// Function to apply sharpen effect
async function applySharpenEffect(blob: Blob) {
    // Implement the Sharpen effect and return the new URL
}

// Function to apply noise reduction effect
async function applyNoiseReductionEffect(blob: Blob) {
    // Implement the Noise Reduction effect and return the new URL
}

// Function to adjust brightness and contrast
async function applyBrightnessContrastEffect(blob: Blob) {
    // Implement the Brightness/Contrast effect and return the new URL
}

// Function to adjust saturation
async function applySaturationEffect(blob: Blob) {
    // Implement the Saturation effect and return the new URL
}

// Function to adjust hue and saturation
async function applyHueSaturationEffect(blob: Blob) {
    // Implement the Hue/Saturation effect and return the new URL
}

// Function to adjust color balance
async function applyColorBalanceEffect(blob: Blob) {
    // Implement the Color Balance effect and return the new URL
}

// Function to colorize an image
async function applyColorizeEffect(blob: Blob) {
    // Implement the Colorize effect and return the new URL
}

// Function to apply color splash effect
async function applyColorSplashEffect(blob: Blob) {
    // Implement the Color Splash effect and return the new URL
}

// Function to crop an image
async function applyCropEffect(blob: Blob) {
    // Implement the Crop effect and return the new URL
}

// Function to resize an image
async function applyResizeEffect(blob: Blob) {
    // Implement the Resize effect and return the new URL
}

// Function to rotate an image
async function applyRotateEffect(blob: Blob) {
    // Implement the Rotate effect and return the new URL
}

// Function to flip an image
async function applyFlipEffect(blob: Blob) {
    // Implement the Flip effect and return the new URL
}

// Function to auto-enhance an image
async function applyAutoEnhanceEffect(blob: Blob) {
    // Implement the Auto-enhance effect and return the new URL
}

// Function to denoise an image
async function applyDenoiseEffect(blob: Blob) {
    // Implement the Denoise effect and return the new URL
}

// Function to auto-correct an image
async function applyAutoCorrectEffect(blob: Blob) {
    // Implement the Auto-correct effect and return the new URL
}

// Function to create a pixelated image
async function applyPixelationEffect(blob: Blob) {
    // Implement the Pixelation effect and return the new URL
}

// Function to remove background
async function applyRemoveBackgroundEffect(blob: Blob) {
    // Implement the Remove background effect and return the new URL
}

// Function to add decorative frames
async function applyAddDecorativeFramesEffect(blob: Blob) {
    // Implement the Add Decorative Frames effect and return the new URL
}

// Function to add borders
async function applyAddBordersEffect(blob: Blob) {
    // Implement the Add Borders effect and return the new URL
}

// Function to compress and save an image
async function applyCompressAndSaveEffect(blob: Blob) {
    // Implement the Compress & save effect and return the new URL
}

// Function to create an anaglyph image
async function applyCreateAnaglyphEffect(blob: Blob) {
    // Implement the Create Anaglyph effect and return the new URL
}


// why is this not being accepted as import in the express backend????????????????
type EffectFunction = (input: Blob) => any
const effectMapping: { [key: string]: EffectFunction } = {
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

export default effectMapping



