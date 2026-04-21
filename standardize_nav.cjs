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

        // Standardize Navbar to Fixed + Correct Padding
        // We ensure all headers are 'fixed top-0' and main content has 'pt-32' (Desktop) or 'pt-24' (Mobile)
        // But for Mobile, we might need even more if the header is tall.
        
        const isMobile = file.includes('Mobile');
        const padding = isMobile ? 'pt-28' : 'pt-32';

        // Replace any existing pt- class on main
        content = content.replace(/<main className="([^"]*)"/g, (match, classes) => {
            let newClasses = classes.replace(/pt-\d+/g, '').trim();
            newClasses = (newClasses + ' ' + padding).trim();
            return `<main className="${newClasses}"`;
        });

        // Ensure header is fixed
        content = content.replace(/<(header|nav) className="([^"]*)"/g, (match, tag, classes) => {
            if (classes.includes('fixed') || classes.includes('sticky') || classes.includes('TopAppBar')) {
                let newClasses = classes.replace(/sticky/g, 'fixed').trim();
                if (!newClasses.includes('fixed')) newClasses += ' fixed';
                if (!newClasses.includes('top-0')) newClasses += ' top-0';
                if (!newClasses.includes('z-50')) newClasses += ' z-50';
                return `<${tag} className="${newClasses}"`;
            }
            return match;
        });

        fs.writeFileSync(filePath, content);
    }
});

console.log('Navbars standardized to fixed with consistent padding.');
