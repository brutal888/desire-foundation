const fs = require('fs');
const path = require('path');

const files = ['src/Home.jsx', 'src/About.jsx', 'src/Work.jsx', 'src/Join.jsx'];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace HTML comments
    content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    
    // Replace inline styles (simplistic approach for common ones)
    // E.g. style="background-image: url('...')" -> style={{backgroundImage: "url('...')"}}
    content = content.replace(/style="([^"]*)"/g, (match, p1) => {
      const styleObj = p1.split(';').filter(Boolean).map(s => {
        const [key, value] = s.split(':').map(str => str.trim());
        if (!key || !value) return '';
        // camelCase the key
        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${camelKey}: '${value.replace(/'/g, "\\'")}'`;
      }).filter(Boolean).join(', ');
      return `style={{ ${styleObj} }}`;
    });

    // Fix empty href tags or unescaped characters if any
    content = content.replace(/ href="#"/g, ' href="/#"');

    fs.writeFileSync(filePath, content);
  }
});

// Clean up html files
const htmlFiles = ['about.html', 'work.html', 'join.html'];
htmlFiles.forEach(file => {
  const p = path.join(__dirname, file);
  if (fs.existsSync(p)) fs.unlinkSync(p);
});

console.log('Fixed JSX files and cleaned up HTML files.');
