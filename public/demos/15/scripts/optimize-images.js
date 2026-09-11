const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'assets', 'images');
fs.mkdirSync(output, { recursive: true });

const images = [
  ['log01.jpg', 'logo.webp', 96, 96],
  ['hero-pet.jpg', 'hero-pet.webp', 1200, 800],
  ['caminha.jpg', 'caminha.webp', 560, 416],
  ['brinquedo.jpg', 'brinquedo.webp', 560, 416],
  ['coleira.jpg', 'coleira.webp', 560, 416],
  ['bandana.jpg', 'bandana.webp', 560, 416],
];

Promise.all(images.map(([source, target, width, height]) =>
  sharp(path.join(root, source))
    .resize(width, height, { fit: 'cover', withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(path.join(output, target))
)).then(() => console.log('Imagens WebP geradas com sucesso.'));
