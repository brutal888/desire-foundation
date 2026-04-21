const fs = require('fs');
const path = require('path');

const activeClass = "text-emerald-800 dark:text-emerald-200 border-b-2 border-emerald-800 dark:border-emerald-200 pb-1";
const inactiveClass = "text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-stone-100 transition-colors duration-500";

const pages = [
    { file: 'src/DesktopAbout.jsx', path: '/about' },
    { file: 'src/DesktopMedia.jsx', path: '/media' },
    { file: 'src/DesktopWork.jsx', path: '/projects' },
    { file: 'src/DesktopJoin.jsx', path: '/join' },
    { file: 'src/DesktopHome.jsx', path: '/' }
];

pages.forEach(page => {
    const filePath = path.join(__dirname, page.file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Reset all links to inactive
        content = content.replace(new RegExp(activeClass.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), inactiveClass);
        
        // Set the current page link to active
        // This is a bit tricky since we need to find the right <a> tag
        const linkRegex = new RegExp(`(<a[^>]*href="${page.path}"[^>]*class=")[^"]*(")`, 'g');
        content = content.replace(linkRegex, `$1tracking-wide uppercase text-xs font-semibold ${activeClass}$2`);
        
        // Special case for Home page where / is the root and might match others
        // But usually Home doesn't have an 'active' link in the nav if it's just the logo
        
        fs.writeFileSync(filePath, content);
    }
});

console.log('Active navigation links updated for each page.');
