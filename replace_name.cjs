const fs = require('fs');
const path = require('path');

const files = [
  'src/Home.jsx',
  'src/About.jsx',
  'src/Work.jsx',
  'src/Join.jsx',
  'index.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace names
    content = content.replace(/The Living Archive/g, 'Desire Foundation');
    content = content.replace(/Living Archive/g, 'Desire Foundation');
    
    fs.writeFileSync(filePath, content);
  }
});

console.log('Replaced "The Living Archive" with "Desire Foundation" in all files.');
