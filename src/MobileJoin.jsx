import React from 'react';
import { useInteractiveElements } from './useInteractiveElements';

export default function MobileJoin() {
  useInteractiveElements();
  return (
    <>
      
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-[#f5ffc2]/70 backdrop-blur-xl flex justify-between items-center px-6 py-4 shadow-[0_12px_40px_rgba(24,30,0,0.06)]">
<a href="/" className="flex items-center gap-3 cursor-pointer" style={{ cursor: 'pointer' }}><img src="/logo.png" alt="Desire Foundation Logo" className="h-10 w-auto" /><div className="text-2xl font-['Noto_Serif'] font-bold text-[#181e00]" style={{ cursor: 'pointer', userSelect: 'none' }}>Desire Foundation</div></a>
<button className="material-symbols-outlined text-primary text-3xl">menu</button>
</nav>
<main className="pt-24 pb-12 px-6 space-y-12">
{/*  Hero Section  */}
<header className="space-y-6">
<h1 className="font-headline text-4xl font-bold leading-tight tracking-tight text-on-background">Become a part of the legacy.</h1>
<p className="text-on-surface-variant text-lg leading-relaxed max-w-md">Your contribution fuels our archive and supports the artisans preserving our shared heritage.</p>
<div className="relative h-64 w-full rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close-up of skilled hands weaving a complex patterned textile with vibrant threads in a sunlit traditional workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaezRMxxi45JUhx2FIZbtnVFBQt4WoLenHgM2GEuN0wr9V63A8btJrV_cK_syCzzCBJfFw4nEvSOGUoJZUZT2y0hAVtuYY3u4rW8O2xY-qyQPeCgND9cI2ujZ-yR4fkTDPAloqNqyD3ym7tU5z-Z3F2yYTP6OwTjdg9NqZAdhr4eWu-vetQxL26xZowVfS7TiTOyBQbUcvPnaVoMjnU88WrJ0je6obEeSCZqF0wfncgFw3ifWlYYvgsTMqqSKphGTT33NezoofSR2B"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-background/40 to-transparent"></div>
</div>
</header>
{/*  Fast Actions / Donation Tiers (Bento Style)  */}
<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="font-headline text-2xl font-bold text-on-background">Quick Support</h2>
<span className="font-label text-xs font-bold text-primary uppercase tracking-widest">Impact Now</span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="bg-surface-container-low p-6 rounded-xl flex flex-col items-start gap-4 transition-all active:scale-95 text-left">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="volunteer_activism">volunteer_activism</span>
<div>
<div className="font-label text-sm font-semibold opacity-60">Seedling</div>
<div className="font-headline text-xl font-bold">$25</div>
</div>
</button>
<button className="bg-primary text-on-primary p-6 rounded-xl flex flex-col items-start gap-4 transition-all active:scale-95 text-left">
<span className="material-symbols-outlined text-on-primary text-3xl" data-icon="park">park</span>
<div>
<div className="font-label text-sm font-semibold opacity-80">Guardian</div>
<div className="font-headline text-xl font-bold">$100</div>
</div>
</button>
<div className="col-span-2 bg-surface-container-highest p-6 rounded-xl flex items-center justify-between">
<div>
<div className="font-headline text-xl font-bold">Custom Amount</div>
<p className="font-body text-sm opacity-70">Support at your own scale</p>
</div>
<span className="material-symbols-outlined text-secondary text-3xl" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</section>
{/*  Join Us Options - Editorial Layout  */}
<section className="space-y-8">
<div className="space-y-2">
<h2 className="font-headline text-2xl font-bold text-on-background">Ways to Join</h2>
<div className="h-1 w-12 bg-primary"></div>
</div>
{/*  Volunteering  */}
<div className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col">
<div className="h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A group of diverse volunteers smiling and working together in a community garden during a soft overcast day" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC942yc8lfWI59GfNcOp8H1jdQlsZvKeU-09sYjjJeXKi5F8mdeShDr-ViR9A7fy7mCrRvHOlM6yzG8tXnez90LXibwtlbboDHOE6NuK304EtIGJIuaginmVjq3oKU4i_ftKM2mvuXuvS4waO0ZEkECJ0isR6UwWV0adunyFcyspfSvBKW4RZycb4YeER7cK3AGkv7kh81YKXUwWifKu2jUCd3X8Yt6EhNLanmC81TcZ5Rd88QDDoCWzAsfPxQqwbSDmwAknYHITyAP"/>
</div>
<div className="p-6 space-y-4">
<h3 className="font-headline text-xl font-bold">Volunteer your time</h3>
<p className="text-on-surface-variant font-body">Share your skills in archiving, storytelling, or community outreach.</p>
<button className="w-full py-4 bg-surface-container-highest rounded-full font-label font-bold text-primary transition-all active:bg-outline-variant/20">Explore Roles</button>
</div>
</div>
{/*  Corporate Partners  */}
<div className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col">
<div className="h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Professional meeting in a minimalist modern office with large windows showing a cityscape at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7_nr2qineeinoZ6TEdFzvDVCZMtpY31JUFjQPzBouMBx4dJMGv2BTSgBicxz_4QWxVpZLl9Adq268TKmLAQka1CfqXXTCKDr4IilXAgvf3RX6LmaXxQ3-hCpmkw7lLuMGzT41mB-8IioElsZNPvwBMD3-oSqpB5kJ5uhUIw-LVQj4Ae1LKoAEGvPzRJCT2bdMgAVAkU2Zwp-jAad93TnR5EvQYWUjiolQ2xiyjqAy_lQsNuJ5ItFPbD3_ReRKVziucuTxrhUUtGPg"/>
</div>
<div className="p-6 space-y-4">
<h3 className="font-headline text-xl font-bold">Corporate Stewardship</h3>
<p className="text-on-surface-variant font-body">Align your brand with heritage preservation and cultural sustainability.</p>
<a href="/join"><button className="w-full py-4 bg-secondary text-on-secondary rounded-full font-label font-bold transition-all active:scale-[0.98]">Partner With Us</button></a>
</div>
</div>
</section>
{/*  Contact Form - Minimalist Tonal Layout  */}
<section className="bg-surface-container rounded-3xl p-8 space-y-8">
<div className="text-center space-y-2">
<h2 className="font-headline text-2xl font-bold">Inquiry Form</h2>
<p className="text-sm font-body opacity-70">Have a specific idea or question? Reach out.</p>
</div>
<form className="space-y-6">
<div className="space-y-1">
<label className="font-label text-xs font-bold uppercase tracking-wider text-primary">Full Name</label>
<input className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary transition-colors py-3 text-lg font-body" placeholder="Eleanor Vance" type="text"/>
</div>
<div className="space-y-1">
<label className="font-label text-xs font-bold uppercase tracking-wider text-primary">Email Address</label>
<input className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary transition-colors py-3 text-lg font-body" placeholder="eleanor@archive.org" type="email"/>
</div>
<div className="space-y-1">
<label className="font-label text-xs font-bold uppercase tracking-wider text-primary">Interest Area</label>
<select className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary transition-colors py-3 text-lg font-body appearance-none">
<option>Community Impact</option>
<option>Archival Projects</option>
<option>Financial Support</option>
<option>Other</option>
</select>
</div>
<div className="space-y-1">
<label className="font-label text-xs font-bold uppercase tracking-wider text-primary">Message</label>
<textarea className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary transition-colors py-3 text-lg font-body resize-none" placeholder="Tell us how you'd like to help..." rows="3"></textarea>
</div>
<button className="w-full py-5 bg-primary text-on-primary rounded-full font-headline font-bold text-xl shadow-lg shadow-primary/20 active:scale-[0.97] transition-transform" type="submit">Send Message</button>
</form>
</section>
{/*  Stats Counter  */}
<section className="grid grid-cols-2 gap-4 py-8">
<div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
<div className="font-headline text-3xl font-bold text-primary">12k+</div>
<div className="font-label text-xs font-bold opacity-60 uppercase tracking-tighter">Artisans</div>
</div>
<div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
<div className="font-headline text-3xl font-bold text-secondary">45</div>
<div className="font-label text-xs font-bold opacity-60 uppercase tracking-tighter">Projects</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-[#eaf3b7] py-16 px-6 space-y-12">
<div className="space-y-6">
<a href="/" className="flex items-center gap-3 cursor-pointer" style={{ cursor: 'pointer' }}><img src="/logo.png" alt="Desire Foundation Logo" className="h-10 w-auto" /><div className="font-['Noto_Serif'] text-xl text-[#181e00] font-bold" style={{ cursor: 'pointer', userSelect: 'none' }}>Desire Foundation</div></a>
<p className="font-['Plus_Jakarta_Sans'] text-sm text-[#181e00]/60 leading-relaxed">
                Dedicated to the preservation of ethereal heritage and the empowerment of global artisan communities.
            </p>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="flex flex-col gap-4">
<span className="font-bold text-xs uppercase tracking-widest text-[#ab1c6e]">Navigation</span>
<a className="text-sm font-medium text-[#181e00]/80" href="#">Our Story</a>
<a className="text-sm font-medium text-[#181e00]/80" href="#">Impact</a>
<a className="text-sm font-medium text-[#ab1c6e] font-bold" href="#">Join Us</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-bold text-xs uppercase tracking-widest text-[#ab1c6e]">Legal</span>
<a className="text-sm font-medium text-[#181e00]/80" href="#">Privacy Policy</a>
<a className="text-sm font-medium text-[#181e00]/80" href="#">Annual Report</a>
<a className="text-sm font-medium text-[#181e00]/80" href="#">Careers</a>
</div>
</div>
<div className="pt-8 border-t border-black/5 text-xs text-[#181e00]/40 font-['Plus_Jakarta_Sans'] tracking-wide">
            © 2024 Desire Foundation. The Ethereal Archive.
        </div>
</footer>
{/*  Mobile Bottom Navigation Shell (Contextual)  */}
<div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
<div className="bg-[#181e00]/90 backdrop-blur-2xl rounded-full px-8 py-4 flex justify-between items-center shadow-2xl">
<a className="text-white/60 flex flex-col items-center gap-1" href="#">
<span className="material-symbols-outlined text-2xl" data-icon="home">home</span>
</a>
<a className="text-white/60 flex flex-col items-center gap-1" href="#">
<span className="material-symbols-outlined text-2xl" data-icon="auto_stories">auto_stories</span>
</a>
<a className="text-primary flex flex-col items-center gap-1" href="#">
<span className="material-symbols-outlined text-2xl" data-icon="favorite" data-weight="fill">favorite</span>
</a>
<a className="text-white/60 flex flex-col items-center gap-1" href="#">
<span className="material-symbols-outlined text-2xl" data-icon="person">person</span>
</a>
</div>
</div>

    </>
  );
}