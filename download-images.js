// Script to download images for the Pentasoft project
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('Created images directory');
}

// List of placeholder images to download
const images = [
  // Logo images
  { name: 'logo.svg', url: 'https://raw.githubusercontent.com/tailwindtoolbox/Rainblur-Landing-Page/master/images/logo.svg' },
  { name: 'logo-2.svg', url: 'https://raw.githubusercontent.com/tailwindtoolbox/Rainblur-Landing-Page/master/images/logo.svg' },
  
  // About images
  { name: 'about-image.svg', url: 'https://raw.githubusercontent.com/tailgrids/play-tailwind/main/public/images/about/about-image.svg' },
  { name: 'about-image-2.svg', url: 'https://raw.githubusercontent.com/tailgrids/play-tailwind/main/public/images/about/about-image-2.svg' },
  
  // Author images (using placeholders)
  { name: 'author-01.png', url: 'https://via.placeholder.com/80x80.png?text=Author+1' },
  { name: 'author-02.png', url: 'https://via.placeholder.com/80x80.png?text=Author+2' },
  { name: 'author-03.png', url: 'https://via.placeholder.com/80x80.png?text=Author+3' },
  
  // Blog images (using placeholders)
  { name: 'blog-01.jpg', url: 'https://via.placeholder.com/370x250.jpg?text=Blog+1' },
  { name: 'blog-02.jpg', url: 'https://via.placeholder.com/370x250.jpg?text=Blog+2' },
  { name: 'blog-03.jpg', url: 'https://via.placeholder.com/370x250.jpg?text=Blog+3' },
];

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(imagesDir, filename));
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(imagesDir, filename), () => {}); // Delete the file if there's an error
      console.error(`Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.name);
    } catch (error) {
      console.error(`Failed to download ${image.name}`);
    }
  }
  
  console.log('All downloads completed!');
}

downloadAllImages();