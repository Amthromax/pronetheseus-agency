import { createRequire } from 'module';
const require = createRequire(import.meta.url);

async function enhanceImage() {
  try {
    const sharp = require('sharp');
    const inputPath = 'f:/claude ai setup/Amthromax AI Alchemy2/public/colosseum-hero-sketch.jpg';
    const outputPath = 'f:/claude ai setup/Amthromax AI Alchemy2/public/colosseum-hero-sketch-hd.png';

    const metadata = await sharp(inputPath).metadata();
    console.log('Original image dimensions:', metadata.width, 'x', metadata.height);

    // Upscale 2x with lanczos3, sharpen lines, boost contrast
    await sharp(inputPath)
      .resize({
        width: metadata.width ? metadata.width * 2 : 2560,
        kernel: sharp.kernel.lanczos3
      })
      .sharpen({
        sigma: 1.8,
        m1: 1.2,
        m2: 2.5,
        x1: 2.0,
        y2: 10.0
      })
      .linear(1.15, -15)
      .png({ quality: 100, compressionLevel: 6 })
      .toFile(outputPath);

    console.log('SUCCESS: Enhanced HD image created at', outputPath);
  } catch (err) {
    console.error('Error enhancing image:', err);
  }
}

enhanceImage();
