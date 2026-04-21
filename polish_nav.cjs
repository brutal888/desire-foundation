const fs = require('fs');
const path = require('path');

const files = [
    'src/DesktopHome.jsx', 'src/DesktopAbout.jsx', 'src/DesktopWork.jsx', 'src/DesktopJoin.jsx', 'src/DesktopMedia.jsx',
    'src/MobileHome.jsx', 'src/MobileAbout.jsx', 'src/MobileWork.jsx', 'src/MobileJoin.jsx', 'src/MobileMedia.jsx'
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Fix Logo
        content = content.replace(/<div className="text-2xl font-serif italic text-emerald-900 dark:text-stone-100">Desire Foundation<\/div>/g, 
            '<a href="/" className="text-2xl font-serif italic text-emerald-900 dark:text-stone-100" style={{ cursor: "pointer", userSelect: "none" }}>Desire Foundation</a>');
        
        // Fix Navigation Links
        content = content.replace(/href="#"/g, (match, offset, string) => {
            const part = string.substring(offset - 30, offset + 30);
            if (part.includes('Story') || part.includes('About') || part.includes('Archive')) return 'href="/about"';
            if (part.includes('Projects') || part.includes('Work') || part.includes('Collaborations')) return 'href="/work"';
            if (part.includes('Join') || part.includes('Partners') || part.includes('Connect') || part.includes('Heritage')) return 'href="/join"';
            if (part.includes('Media')) return 'href="/media"';
            return 'href="/"';
        });

        // Special fix for Media link in nav which might have been missed
        content = content.replace(/href="\/about"([^>]*>Media<\/a>)/g, 'href="/media"$1');
        content = content.replace(/href="\/about"([^>]*>Media<\/span>)/g, 'href="/media"$1');

        fs.writeFileSync(filePath, content);
    }
});

console.log('Final polish applied to all screens.');
