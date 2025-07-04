// compress-images.js
import imagemin from 'imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import webp from 'imagemin-webp';

const run = async () => {
  const files = await imagemin(['imagesToCompress/*.{jpg,jpeg,png,webp}'], {
    destination: 'compressedNewImages',
    plugins: [
      mozjpeg({ quality: 65 }),
      pngquant({
        quality: 50-70
      }),
      webp({ quality: 40 }) // Optional: outputs WebP versions
    ]
  });

  console.log('Images compressed:', files.length);
};

run();
