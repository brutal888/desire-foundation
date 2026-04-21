import React from 'react';
import { useInteractiveElements } from './useInteractiveElements';

export default function MobileHome() {
  useInteractiveElements();
  return (
    <>
      
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-[#f5ffc2]/70 backdrop-blur-xl flex justify-between items-center px-6 py-4 md:px-12 md:py-6 shadow-[0_12px_40px_rgba(24,30,0,0.06)]">
<a href="/" className="flex items-center gap-3 cursor-pointer" style={{ cursor: 'pointer' }}><img src="/logo.png" alt="Desire Foundation Logo" className="h-10 w-auto" /><div className="text-2xl font-['Noto_Serif'] font-bold text-[#181e00] tracking-tight" style={{ cursor: 'pointer', userSelect: 'none' }}>Desire Foundation</div></a>
{/*  Mobile Navigation  */}
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer md:hidden">menu</span>
</div>
{/*  Desktop Navigation  */}
<div className="hidden md:flex gap-8 items-center">
<a className="text-[#ab1c6e] font-bold border-b-2 border-[#ab1c6e] font-['Noto_Serif'] tracking-tight" href="/about">Our Story</a>
<a className="text-[#181e00]/80 font-medium hover:text-[#ab1c6e] hover:scale-[1.02] transition-all duration-400 font-['Noto_Serif'] tracking-tight" href="/media">Media</a>
<a className="text-[#181e00]/80 font-medium hover:text-[#ab1c6e] hover:scale-[1.02] transition-all duration-400 font-['Noto_Serif'] tracking-tight" href="/work">Projects</a>
<a className="text-[#181e00]/80 font-medium hover:text-[#ab1c6e] hover:scale-[1.02] transition-all duration-400 font-['Noto_Serif'] tracking-tight" href="/join">Join Us</a>
</div>
</nav>
<main className="overflow-x-hidden pt-28">
{/*  Hero Section: Ethereal Archive Narrative  */}
<section className="px-6 pb-16 md:px-12">
<div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl mb-8 group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" data-alt="cinematic shot of diverse children laughing in a sunlit library with warm golden dust particles floating in the air" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxgnjwBi1nzEqSB_aReXVgzLWBZgPQU5N6C6_MFzodLoL2P5l3qSKJi_SO_KGUQI-kfmM4ZOsBBwKEKD-pjfHaj8NHp-Zd6Pr6KMD7HuZFaYTIJuYVfNZXJBjyE2GNwBOA-uj8MbWGx-NGW4_4HcsC7C9HaQB1xujE4bn7UWHbDpAysgV9Z9EL7yL6k3ZOeXPzq_vaEj_KHTrAL7ba9VZCrMobvI1R3jpREjNwV3t_tCnEb6NVaLu3yLaMfgj-qPv6FkmpN-0V2AdJ"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent flex flex-col justify-end p-8">
<span className="font-label text-xs uppercase tracking-[0.2em] text-white/80 mb-2">Our 2024 Mission</span>
<h1 className="font-headline text-4xl text-white font-bold leading-tight">Empowering the Unseen</h1>
</div>
</div>
<div className="max-w-xl">
<p className="text-xl font-headline text-on-surface/90 leading-relaxed mb-6 italic">
                "We believe every individual is an archive of potential, waiting to be unlocked by compassion and opportunity."
            </p>
<div className="flex items-center gap-2 text-primary font-semibold">
<span className="w-12 h-[1px] bg-primary"></span>
<span className="font-label text-sm uppercase tracking-widest">Discover our journey</span>
</div>
</div>
</section>
{/*  Impact Stats: Tonal Layering  */}
<section className="bg-surface-container-low py-20 px-6 md:px-12">
<div className="grid grid-cols-1 gap-12 text-center">
<div className="group">
<p className="font-label text-sm text-secondary uppercase tracking-[0.3em] mb-3">Lives Impacted</p>
<h2 className="font-headline text-6xl font-bold text-on-surface tracking-tighter">1.2M+</h2>
<div className="w-8 h-1 bg-primary/20 mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-500"></div>
</div>
<div className="group">
<p className="font-label text-sm text-secondary uppercase tracking-[0.3em] mb-3">Villages Transformed</p>
<h2 className="font-headline text-6xl font-bold text-on-surface tracking-tighter">450</h2>
<div className="w-8 h-1 bg-primary/20 mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-500"></div>
</div>
<div className="group">
<p className="font-label text-sm text-secondary uppercase tracking-[0.3em] mb-3">Active Projects</p>
<h2 className="font-headline text-6xl font-bold text-on-surface tracking-tighter">12</h2>
<div className="w-8 h-1 bg-primary/20 mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-500"></div>
</div>
</div>
</section>
{/*  Featured Projects: Asymmetrical Horizontal Scroll  */}
<section className="py-24 overflow-hidden">
<div className="px-6 md:px-12 mb-12">
<h3 className="font-headline text-3xl font-bold mb-2">Ongoing Initiatives</h3>
<p className="font-body text-on-surface-variant max-w-sm">Explore our curated collection of active community transformations across the globe.</p>
</div>
<div className="flex gap-6 overflow-x-auto pb-12 px-6 snap-x no-scrollbar">
{/*  Project 1  */}
<div className="snap-center shrink-0 w-[85%] md:w-[400px]">
<div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow h-full flex flex-col">
<div className="h-64 mb-6 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" data-alt="sustainable farming cooperative with lush green rows of crops and a woman working with a gentle smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXYwdASVADqbN2E_ou2TcdRetB2sBOU8LY0M6OMgfIPT7yuSghzZxXafYYT2DgKeIGiYdXRwNMOMBU3OqQtu-PBlan62cX-PlY3yTcnttIvJYoMTE6swWiMJkcTXIOtZt2D2oQp8abJDyqom-hXN6VEEc_VFbkwEcUh1tec2EA0ZBHo1H8ELP8eoQt2Yvip3puASj3M1BJClwaT-Gnverr4oaIzQ46aZ3Dy8ZJ4DHjXJJ3I8ctIsZpgEIwwY-Thg_KCqOZk7Sv15ui"/>
</div>
<span className="font-label text-[10px] text-tertiary uppercase tracking-widest font-bold mb-2">Environment</span>
<h4 className="font-headline text-xl font-bold mb-3">Green Horizon Initiative</h4>
<p className="text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">Implementing regenerative agriculture practices in semi-arid regions to ensure food security.</p>
<button className="text-primary font-label text-sm font-bold flex items-center gap-2 self-start hover:gap-4 transition-all">
                        Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
{/*  Project 2 (Asymmetric Height)  */}
<div className="snap-center shrink-0 w-[85%] md:w-[400px] mt-8">
<div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow h-full flex flex-col border-t-4 border-secondary/20">
<div className="h-48 mb-6 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" data-alt="close-up of a child writing in a notebook with focused expression in a bright modern classroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB59VLOjD0bj_DO-SImrhOXATX3Xy0n4wbExy2_DAQ5p6jWy7kpAWCHocXHHNZBPhjfwDynkrcUx7Mf7oi8sz06a7ibXuiMmTeQOz5tMO-nF9KshWhBeMxNTWsTO3ZQJ_2LWqZbLbt5nrayhcTf1Ar7e9OmE0uHP1PBKwhNrylPJq66pj0IohAF_J-c2NcAZNwWUOryV2Q4l9tgN0TBYzRaIXZxQBE2UlG4gS9qvxoFKmLT8Eq1JIETTGtnObrhF8tDm0oBFbVxDu-_"/>
</div>
<span className="font-label text-[10px] text-secondary uppercase tracking-widest font-bold mb-2">Education</span>
<h4 className="font-headline text-xl font-bold mb-3">The Literacy Archive</h4>
<p className="text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">Building digital-first libraries in remote mountain villages to bridge the knowledge gap.</p>
<button className="text-primary font-label text-sm font-bold flex items-center gap-2 self-start hover:gap-4 transition-all">
                        Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
{/*  Project 3  */}
<div className="snap-center shrink-0 w-[85%] md:w-[400px]">
<div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow h-full flex flex-col">
<div className="h-64 mb-6 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" data-alt="modern medical clinic interior with soft natural light and clean minimalist design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvZb7Pe5UdOWxHTYaC_0x1u9pnS4aDW6OgbnrSjdI-CBRNFfGZayDUjGLYXpCzL1G40bu3fZgZTw3_U47yChiRRfnNfmQ0qQ8Q7l35-fk17FJiCm--e1ah_xQ6zSYnMCf6djfjcOvjBtq5E7JRN3ADOjxyHYfzoF2gvI7cAaduouYg2RzJbtOtm7ZSLJg15Unh1eOsnht_9ZZiBxe-pgbnCm3yMWdHrUSel3C2mpOo-RoUv4NnnlvacU_NktPqCu0CCB0dP4kH_U7v"/>
</div>
<span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold mb-2">Health</span>
<h4 className="font-headline text-xl font-bold mb-3">Vitality Nodes</h4>
<p className="text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">Deploying modular healthcare units to provide essential services to nomadic tribes.</p>
<button className="text-primary font-label text-sm font-bold flex items-center gap-2 self-start hover:gap-4 transition-all">
                        Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
{/*  Bento Grid Call-to-Action  */}
<section className="px-6 md:px-12 py-16">
<div className="grid grid-cols-6 gap-4">
<div className="col-span-6 bg-primary text-white p-8 rounded-2xl flex flex-col justify-between aspect-square md:aspect-auto">
<div>
<h3 className="font-headline text-3xl font-bold mb-4">Become a Partner</h3>
<p className="opacity-90 leading-relaxed max-w-xs">Collaboration is the cornerstone of systemic change. Join us in building a more resilient future.</p>
</div>
<button className="bg-white text-primary px-8 py-4 rounded-full font-label font-bold text-sm self-start shadow-xl active:scale-95 transition-transform">
                    Connect With Us
                </button>
</div>
<div className="col-span-3 bg-surface-container-high p-6 rounded-2xl aspect-square flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined text-4xl text-secondary mb-4">groups</span>
<span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Volunteer</span>
</div>
<div className="col-span-3 bg-surface-container p-6 rounded-2xl aspect-square flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined text-4xl text-tertiary mb-4">handshake</span>
<span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Collaborate</span>
</div>
</div>
</section>
{/*  Newsletter Subscription  */}
<section className="py-24 px-6 md:px-12 bg-surface">
<div className="max-w-md mx-auto text-center">
<h4 className="font-headline text-2xl font-bold mb-4">The Archive Dispatch</h4>
<p className="font-body text-on-surface-variant mb-8 leading-relaxed">Monthly insights into our impact and stories from the field, delivered with grace.</p>
<div className="relative">
<input className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 text-on-surface placeholder:text-on-surface-variant/40 transition-all" placeholder="Your email address" type="email"/>
<button className="absolute right-0 bottom-3 text-primary font-bold font-label uppercase text-xs tracking-widest">Subscribe</button>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full py-16 px-6 md:px-12 bg-[#eaf3b7]">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
<div className="md:col-span-1">
<a href="/" className="flex items-center gap-3 cursor-pointer" style={{ cursor: 'pointer' }}><img src="/logo.png" alt="Desire Foundation Logo" className="h-10 w-auto" /><div className="font-['Noto_Serif'] text-lg text-[#181e00] font-bold mb-6" style={{ cursor: 'pointer', userSelect: 'none' }}>Desire Foundation</div></a>
<p className="font-['Plus_Jakarta_Sans'] text-sm tracking-wide text-[#181e00]/60 leading-relaxed">
                Preserving human dignity through architectural philanthropy and systematic compassion.
            </p>
</div>
<div className="grid grid-cols-2 col-span-2 gap-8 md:gap-12">
<div className="flex flex-col gap-4">
<h5 className="font-label font-bold text-xs uppercase tracking-widest text-secondary">Initiatives</h5>
<a className="font-['Plus_Jakarta_Sans'] text-sm text-[#181e00]/60 hover:text-[#ab1c6e] underline-offset-4 hover:underline transition-all" href="/">Annual Report</a>
<a className="font-['Plus_Jakarta_Sans'] text-sm text-[#181e00]/60 hover:text-[#ab1c6e] underline-offset-4 hover:underline transition-all" href="/work">Projects</a>
<a className="font-['Plus_Jakarta_Sans'] text-sm text-[#181e00]/60 hover:text-[#ab1c6e] underline-offset-4 hover:underline transition-all" href="/about">Our Story</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="font-label font-bold text-xs uppercase tracking-widest text-secondary">Organization</h5>
<a className="font-['Plus_Jakarta_Sans'] text-sm text-[#181e00]/60 hover:text-[#ab1c6e] underline-offset-4 hover:underline transition-all" href="/">Privacy Policy</a>
<a className="font-['Plus_Jakarta_Sans'] text-sm text-[#181e00]/60 hover:text-[#ab1c6e] underline-offset-4 hover:underline transition-all" href="/">Careers</a>
<a className="font-['Plus_Jakarta_Sans'] text-sm text-[#181e00]/60 hover:text-[#ab1c6e] underline-offset-4 hover:underline transition-all" href="/">Contact Us</a>
</div>
</div>
<div className="flex flex-col gap-6 items-start">
<div className="flex gap-4">
<span className="material-symbols-outlined text-[#006689] cursor-pointer hover:text-primary transition-colors">public</span>
<span className="material-symbols-outlined text-[#006689] cursor-pointer hover:text-primary transition-colors">diversity_1</span>
<span className="material-symbols-outlined text-[#006689] cursor-pointer hover:text-primary transition-colors">mail</span>
</div>
<p className="font-['Plus_Jakarta_Sans'] text-xs text-[#181e00]/40 leading-relaxed">
                © 2024 Desire Foundation. Desire Foundation.
            </p>
</div>
</div>
</footer>
{/*  BottomNavBar for Mobile  */}
<div className="fixed bottom-0 w-full z-50 bg-[#f5ffc2]/90 backdrop-blur-xl border-t border-outline-variant flex justify-around items-center py-3 px-6 md:hidden">
<a className="flex flex-col items-center gap-1 text-primary" href="/">
<span className="material-symbols-outlined">home</span>
<span className="font-label text-[10px] font-bold uppercase tracking-tighter">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface-variant/60" href="/">
<span className="material-symbols-outlined">auto_stories</span>
<span className="font-label text-[10px] font-bold uppercase tracking-tighter">Media</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface-variant/60" href="/">
<span className="material-symbols-outlined">handshake</span>
<span className="font-label text-[10px] font-bold uppercase tracking-tighter">Partner</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface-variant/60" href="/">
<span className="material-symbols-outlined">account_circle</span>
<span className="font-label text-[10px] font-bold uppercase tracking-tighter">Join</span>
</a>
</div>

    </>
  );
}