import * as modifier from './modifiers.js'

export default function handleEffects(effectName, imageURL) {
    switch (effectName) {
        case 'Grayscale':
            modifier.applyGrayscale(imageURL);
            break;
        case 'Sepia':
            modifier.applySepia(imageURL);
            break;
        case 'Vintage':
            modifier.applyVintage(imageURL);
            break;
        case 'Black and White':
            modifier.applyBlackAndWhite(imageURL);
            break;
        case 'Cartoonize':
            modifier.applyCartoonize(imageURL);
            break;
        case 'Oil Painting':
            modifier.applyOilPainting(imageURL);
            break;
        case 'Watercolor':
            modifier.applyWatercolor(imageURL);
            break;
        case 'Pop Art':
            modifier.applyPopArt(imageURL);
            break;
        case 'Blur':
            modifier.applyBlur(imageURL);
            break;
        case 'Sharpen':
            modifier.applySharpen(imageURL);
            break;
        case 'Noise Reduction':
            modifier.applyNoiseReduction(imageURL);
            break;
        case 'Brightness/Contrast':
            modifier.applyBrightnessContrast(imageURL);
            break;
        case 'Saturation':
            modifier.applySaturation(imageURL);
            break;
        case 'Hue/Saturation':
            modifier.applyHueSaturation(imageURL);
            break;
        case 'Color Balance':
            modifier.applyColorBalance(imageURL);
            break;
        case 'Colorize':
            modifier.applyColorize(imageURL);
            break;
        case 'Color Splash':
            modifier.applyColorSplash(imageURL);
            break;
        case 'Crop':
            modifier.applyCrop(imageURL);
            break;
        case 'Resize':
            modifier.applyResize(imageURL);
            break;
        case 'Rotate':
            modifier.applyRotate(imageURL);
            break;
        case 'Flip':
            modifier.applyFlip(imageURL);
            break;
        case 'Add Text to Images':
            modifier.applyAddTextToImages(imageURL);
            break;
        case 'Watermarking':
            modifier.applyWatermarking(imageURL);
            break;
        case 'Red-eye Removal':
            modifier.applyRedEyeRemoval(imageURL);
            break;
        case 'Blemish Removal':
            modifier.applyBlemishRemoval(imageURL);
            break;
        case 'Wrinkle Reduction':
            modifier.applyWrinkleReduction(imageURL);
            break;
        case 'Teeth Whitening':
            modifier.applyTeethWhitening(imageURL);
            break;
        case 'Auto-enhance':
            modifier.applyAutoEnhance(imageURL);
            break;
        case 'Sharpen Image':
            modifier.applySharpenImage(imageURL);
            break;
        case 'Denoise Image':
            modifier.applyDenoiseImage(imageURL);
            break;
        case 'Auto-correct':
            modifier.applyAutoCorrect(imageURL);
            break;
        case 'Impressionism':
            modifier.applyImpressionism(imageURL);
            break;
        case 'Pointillism':
            modifier.applyPointillism(imageURL);
            break;
        case 'Cubism':
            modifier.applyCubism(imageURL);
            break;
        case 'Mosaic':
            modifier.applyMosaic(imageURL);
            break;
        case 'Pixelation':
            modifier.applyPixelation(imageURL);
            break;
        case 'Create Image Collages':
            modifier.applyCreateImageCollages(imageURL);
            break;
        case 'Combine Multiple Images':
            modifier.applyCombineMultipleImages(imageURL);
            break;
        case 'Distortions':
            modifier.applyDistortions(imageURL);
            break;
        case 'Perspective Correction':
            modifier.applyPerspectiveCorrection(imageURL);
            break;
        case 'Tilt-shift':
            modifier.applyTiltShift(imageURL);
            break;
        case 'Remove Background':
            modifier.applyRemoveBackground(imageURL);
            break;
        case 'Add Decorative Frames':
            modifier.applyAddDecorativeFrames(imageURL);
            break;
        case 'Add Borders':
            modifier.applyAddBorders(imageURL);
            break;
        case 'Compress & save':
            modifier.applyCompressAndSave(imageURL);
            break;
        case 'Create Anaglyph':
            modifier.applyCreateAnaglyph(imageURL);
            break;
        default:
            console.log(`Effect "${effectName}" not found or not supported.`);
            break;
    }
}