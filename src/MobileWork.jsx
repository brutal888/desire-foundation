import React from 'react';
import { useInteractiveElements } from './useInteractiveElements';

export default function MobileWork() {
  useInteractiveElements();
  return (
    <>
      
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 glass-header shadow-[0_12px_40px_rgba(24,30,0,0.06)] px-6 py-4 flex justify-between items-center md:px-12 md:py-6">
<h1 className="text-xl md:text-2xl font-headline font-bold text-on-background">Desire Foundation</h1>
<button className="md:hidden text-primary">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
<nav className="hidden md:flex gap-8 items-center">
<a className="text-on-background/80 font-medium hover:text-primary transition-all duration-400" href="/about">Our Story</a>
<a className="text-on-background/80 font-medium hover:text-primary transition-all duration-400" href="/media">Media</a>
<a className="text-primary font-bold border-b-2 border-primary" href="/work">Projects</a>
<a className="text-on-background/80 font-medium hover:text-primary transition-all duration-400" href="/join">Join Us</a>
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-semibold hover:scale-[1.05] transition-transform duration-400">Donate Now</button>
</nav>
</header>
<main className="pb-12 pt-28">
{/*  Editorial Header Section  */}
<section className="px-6 mb-12">
<span className="font-label text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">Portfolio of Purpose</span>
<h2 className="font-headline text-4xl font-bold text-on-background leading-tight mb-4">Our Work</h2>
<p className="text-on-surface-variant leading-relaxed text-lg max-w-md">
                Exploring the delicate intersection of heritage preservation and modern empowerment through our curated archives.
            </p>
</section>
{/*  Project Gallery (Mobile-First Single Column)  */}
<section className="px-6 space-y-12">
{/*  Project Card 1  */}
<article className="flex flex-col gap-6">
<div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg bg-surface-container-low">
<img alt="" className="w-full h-full object-cover" data-alt="Intimate portrait of an elderly artisan weaver in a sun-drenched workshop in rural Rajasthan, focused on her intricate handiwork" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcLyEFAvZBRMiqqGbZXz--_8sGSRDKaUyRNqjfygSHmGBBB8oTqqOonFr3DtV4U2PZPpviKDfgiqF0_zeL7ZJvefj90LXFBSFIpIHS-yAtbMM5Npxyom_wwtafNMueanG9j2cwLvg_fNZZQbSGwpoRHRN7pn9mhu-eYQz6iFNr-8tB6ykc3M2e_cg0cyuaagV2TTq5Bu22YWClcZH72YC2SJJL7SvCveqIdL9--TAAVZ7C_3-o1WZKSJdAUuJijt-Rax__Kf7-CcBR"/>
<div className="absolute top-4 left-4">
<span className="bg-surface/90 backdrop-blur-md text-on-surface px-3 py-1 rounded-full text-xs font-label font-bold tracking-wider uppercase">Legacy Preservation</span>
</div>
</div>
<div className="space-y-3">
<h3 className="font-headline text-2xl font-bold text-on-background">The Weaver's Archive</h3>
<p className="text-on-surface-variant font-body leading-relaxed">Documenting and revitalizing 14th-century weaving techniques across the Thar desert through digital mapping and direct grants.</p>
<div className="flex items-center gap-4 pt-2">
<div className="flex flex-col">
<span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Media</span>
<span className="font-headline text-lg font-semibold text-primary">420 Artisans</span>
</div>
<div className="h-8 w-[1px] bg-outline-variant/30"></div>
<div className="flex flex-col">
<span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Region</span>
<span className="font-headline text-lg font-semibold text-secondary">Rajasthan</span>
</div>
</div>
<button className="flex items-center gap-2 text-primary font-bold text-sm pt-2 group">
                        EXPLORE PROJECT
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</article>
{/*  Project Card 2  */}
<article className="flex flex-col gap-6">
<div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg bg-surface-container-low">
<img alt="" className="w-full h-full object-cover" data-alt="Overhead shot of a vibrant community gathering in a lush garden setting, with diverse groups of people sharing tea and conversation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqA9_y2S7yQZR42mV2bjQi9L2rHfIp5jGKAmH3p-6yuh00SZHQDmzUxIBxduxdYARmmAtDV6oExj6S8jelrGHzaJqZlLwe0XF5Tb9Jf1E6STKmVCSiAoOaFfndJwOIn9pAxvNTHcwLRMzf62hTcA31djGcwPmNd-vIA6q2Vxw8LVlnqZ8dbcchbcQ7Ikdy5Sp9ITOgLeI66-CcqKoJCL5fDPsFSGMy75Kx4JvDJXLcnlCAJWqWA04IQEbmbYJ-WbEjRpN36r9GW1My"/>
<div className="absolute top-4 left-4">
<span className="bg-surface/90 backdrop-blur-md text-on-surface px-3 py-1 rounded-full text-xs font-label font-bold tracking-wider uppercase">Community Vitality</span>
</div>
</div>
<div className="space-y-3">
<h3 className="font-headline text-2xl font-bold text-on-background">The Urban Orchard</h3>
<p className="text-on-surface-variant font-body leading-relaxed">Transforming forgotten city corners into edible landscapes that serve as educational hubs for sustainable living.</p>
<div className="flex items-center gap-4 pt-2">
<div className="flex flex-col">
<span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Produce</span>
<span className="font-headline text-lg font-semibold text-primary">12k KG / Year</span>
</div>
<div className="h-8 w-[1px] bg-outline-variant/30"></div>
<div className="flex flex-col">
<span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Location</span>
<span className="font-headline text-lg font-semibold text-secondary">New Delhi</span>
</div>
</div>
<button className="flex items-center gap-2 text-primary font-bold text-sm pt-2 group">
                        EXPLORE PROJECT
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</article>
{/*  Project Card 3  */}
<article className="flex flex-col gap-6">
<div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg bg-surface-container-low">
<img alt="" className="w-full h-full object-cover" data-alt="Sunlight streaming through tall library shelves, illuminating antique books and dust motes in a quiet, majestic archival hall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfq8PI1yReFfJMemwbxGlRsdXpELT6AmNQzLokEP-zjyecivbQKwrdrOn3Nipqsvfhffw6JmS4rPHTs3W7yrF7aEKZh2mhW2QzIEW_oSq4c5oNDs7K3bOhnp8qYtUrMRe31JoLTtLEYEBgsV3QfWOcIcEFanadh0HTw6sFTgdFB5ITo8DwXQ33sSLPDDhrcXW4T_7UA6lujPdSWTULdybz8D1XzuCrAK7FVbR6wrObNvacCcYYJWHJMXmDfKpaTe2uzLMOOV3gZwUW"/>
<div className="absolute top-4 left-4">
<span className="bg-surface/90 backdrop-blur-md text-on-surface px-3 py-1 rounded-full text-xs font-label font-bold tracking-wider uppercase">Ethereal Archive</span>
</div>
</div>
<div className="space-y-3">
<h3 className="font-headline text-2xl font-bold text-on-background">Echoes of Jaipur</h3>
<p className="text-on-surface-variant font-body leading-relaxed">A digital soundscape and visual record of the Pink City's morning rituals, preserving the auditory history of its streets.</p>
<div className="flex items-center gap-4 pt-2">
<div className="flex flex-col">
<span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Records</span>
<span className="font-headline text-lg font-semibold text-primary">3,400+ Files</span>
</div>
<div className="h-8 w-[1px] bg-outline-variant/30"></div>
<div className="flex flex-col">
<span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Type</span>
<span className="font-headline text-lg font-semibold text-secondary">Aural History</span>
</div>
</div>
<button className="flex items-center gap-2 text-primary font-bold text-sm pt-2 group">
                        EXPLORE PROJECT
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</article>
</section>
{/*  CTA Section  */}
<section className="mt-20 mx-6 bg-surface-container p-8 rounded-3xl text-center shadow-[0_12px_40px_rgba(24,30,0,0.06)]">
<h2 className="font-headline text-2xl font-bold text-on-background mb-4">Support Our Ongoing Missions</h2>
<p className="text-on-surface-variant mb-8 font-body">Your contribution ensures these archives and artisans continue to flourish for generations.</p>
<div className="flex flex-col gap-3">
<button className="w-full bg-primary text-on-primary py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-400">Support a Project</button>
<a href="/join"><button className="w-full border-2 border-primary/20 text-primary py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-colors">Partner With Us</button></a>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full py-16 px-6 bg-surface-container text-on-surface font-body">
<div className="flex flex-col gap-12 max-w-7xl mx-auto">
<div className="space-y-4">
<h2 className="font-headline text-lg font-bold text-on-background">Desire Foundation</h2>
<p className="text-on-surface/60 text-sm max-w-xs">Building bridges between tradition and tomorrow through meticulous archival and community support.</p>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="flex flex-col gap-4">
<h3 className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Resources</h3>
<a className="text-on-surface/60 text-sm hover:text-primary transition-all" href="/">Privacy Policy</a>
<a className="text-on-surface/60 text-sm hover:text-primary transition-all" href="/">Annual Report</a>
</div>
<div className="flex flex-col gap-4">
<h3 className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Company</h3>
<a className="text-on-surface/60 text-sm hover:text-primary transition-all" href="/">Contact Us</a>
<a className="text-on-surface/60 text-sm hover:text-primary transition-all" href="/">Careers</a>
</div>
</div>
<div className="pt-8 border-t border-outline-variant/10">
<p className="text-on-surface/40 text-[10px] font-label uppercase tracking-wider">© 2024 Desire Foundation. The Ethereal Archive.</p>
</div>
</div>
</footer>
{/*  Bottom Nav (Mobile Only)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-xl flex justify-around items-center py-4 px-6 z-50 shadow-[0_-12px_40px_rgba(0,0,0,0.05)] top-0">
<a className="flex flex-col items-center gap-1 text-on-surface/60 group" href="/">
<span className="material-symbols-outlined text-2xl group-hover:text-primary">home</span>
<span className="text-[10px] font-label font-bold uppercase tracking-widest">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-primary" href="/">
<span className="material-symbols-outlined text-2xl font-variation-settings: 'FILL' 1;">work</span>
<span className="text-[10px] font-label font-bold uppercase tracking-widest">Projects</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface/60 group" href="/">
<span className="material-symbols-outlined text-2xl group-hover:text-primary">volunteer_activism</span>
<span className="text-[10px] font-label font-bold uppercase tracking-widest">Media</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface/60 group" href="/">
<span className="material-symbols-outlined text-2xl group-hover:text-primary">person</span>
<span className="text-[10px] font-label font-bold uppercase tracking-widest">Profile</span>
</a>
</nav>

    </>
  );
}