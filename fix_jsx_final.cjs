const fs = require('fs');
const path = require('path');

function fixJsx(content) {
    // Fix style attributes
    // This regex matches style="prop: value; prop2: value2;"
    content = content.replace(/style="([^"]*)"/g, (match, styleString) => {
        const styleObj = styleString.split(';').filter(s => s.trim()).reduce((acc, style) => {
            const [key, value] = style.split(':');
            if (key && value) {
                // Convert kebab-case to camelCase
                const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                acc[camelKey] = value.trim();
            }
            return acc;
        }, {});
        return `style={${JSON.stringify(styleObj)}}`;
    });

    // Fix padding-top for overlapping navbar
    content = content.replace(/className="pt-24"/g, 'className="pt-32"');
    content = content.replace(/className="pt-28"/g, 'className="pt-32"');

    return content;
}

const files = ['src/DesktopMedia.jsx', 'src/MobileMedia.jsx'];
files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = fixJsx(content);
        fs.writeFileSync(filePath, content);
    }
});

console.log('JSX styles and padding fixed.');
