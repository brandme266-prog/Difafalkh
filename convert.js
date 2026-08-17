import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imgDir = path.resolve('./public/images');

fs.readdir(imgDir, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    if (file.endsWith('.png')) {
      const inputPath = path.join(imgDir, file);
      const outputPath = path.join(imgDir, file.replace('.png', '.webp'));
      
      sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => {
          console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);
          fs.unlinkSync(inputPath); // Delete the original PNG
        })
        .catch(console.error);
    }
  });
});
