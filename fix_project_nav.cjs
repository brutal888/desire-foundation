const fs = require('fs');
const path = require('path');

// Extract Navbar from DesktopHome
const desktopHomeContent = fs.readFileSync('src/DesktopHome.jsx', 'utf8');
const desktopNavMatch = desktopHomeContent.match(/<nav className="fixed top-0 z-50 w-full flex justify-between items-center px-12 py-4[\s\S]*?<\/nav>/);
const desktopNav = desktopNavMatch ? desktopNavMatch[0] : null;

// Extract Navbars from MobileHome
const mobileHomeContent = fs.readFileSync('src/MobileHome.jsx', 'utf8');
const mobileTopNavMatch = mobileHomeContent.match(/<nav className="fixed top-0 w-full z-50 bg-\[#f5ffc2\]\/70 backdrop-blur-xl flex justify-between items-center px-6 py-4[\s\S]*?<\/nav>/);
const mobileTopNav = mobileTopNavMatch ? mobileTopNavMatch[0] : null;

const mobileBottomNavMatch = mobileHomeContent.match(/<div className="fixed bottom-0 w-full z-50 bg-\[#f5ffc2\]\/90[\s\S]*?<\/div>/);
const mobileBottomNav = mobileBottomNavMatch ? mobileBottomNavMatch[0] : null;

const filesToFix = ['src/DesktopWork.jsx', 'src/MobileWork.jsx', 'src/DesktopJoin.jsx', 'src/MobileJoin.jsx'];

filesToFix.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    if (file.includes('Desktop') && desktopNav) {
        // Replace header/nav with unified desktop nav
        content = content.replace(/<(header|nav) className="fixed top-0[\s\S]*?<\/(header|nav)>/, desktopNav);
        // Ensure pt-48 for projects to avoid overlap
        content = content.replace(/className="pb-24 pt-32"/, 'className="pb-24 pt-48"');
        content = content.replace(/className="pt-32"/, 'className="pt-48"');
    } else if (file.includes('Mobile') && mobileTopNav && mobileBottomNav) {
        // Replace top nav
        content = content.replace(/<(header|nav) className="fixed top-0[\s\S]*?<\/(header|nav)>/, mobileTopNav);
        // Replace bottom nav (and fix the top-0 bug)
        content = content.replace(/<(header|nav|div) className="[^"]*fixed bottom-0[\s\S]*?<\/(header|nav|div)>/, mobileBottomNav);
        // Ensure pt-48 for mobile to avoid overlap
        content = content.replace(/className="pb-12 pt-28"/, 'className="pb-12 pt-48"');
        content = content.replace(/className="pt-28"/, 'className="pt-48"');
    }

    fs.writeFileSync(file, content);
});

console.log('Project and Join pages navbars unified and overlapping fixed.');
