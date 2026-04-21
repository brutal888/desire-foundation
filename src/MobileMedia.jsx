
import React from 'react';
import { useInteractiveElements } from './useInteractiveElements';

export default function MobileMedia() {
  useInteractiveElements();
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      
{/*  */}
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
<main className="pb-32 px-6 max-w-lg mx-auto pt-28">
{/*  */}
<header className="mb-16 reveal-on-scroll">
<div className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant text-[10px] tracking-[0.2em] uppercase font-bold mb-6 rounded-full">
                Global Media
            </div>
<h1 className="font-serif text-4xl leading-tight font-light tracking-tight text-on-surface mb-4">
                Voices of the <span className="italic">Archive</span>
</h1>
<p className="text-on-surface-variant leading-relaxed font-light text-lg">
                Tracing our journey through the eyes of the world. A curated collection of press, stories, and artisanal dialogues.
            </p>
</header>
{/*  */}
<section className="space-y-12">
{/*  */}
<article className="reveal-on-scroll card-tilt group">
<div className="relative mb-6 rounded-3xl overflow-hidden aspect-[4/5] shadow-sm">
<img className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" data-alt="Close-up of intricate gold and emerald silk embroidery under soft gallery lighting, showcasing heritage textile art craftsmanship" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBToAwjoZ4iESIE_vRrhCOZR2G4IrFjzLpo19QsssHi_79UFVZilJh8lfgm8LPQa3c0efD2p10y1EwrzTu5PlJPUnphP9eXC-GroKCmeeS5MS_8VAS-aN84BZY6VgtTknlBr3LX7d2snh441AndJ3xUsZ4uWwOtdUmddfXsiez_uyLlqeZKNH86PtMLx1pl7SdhVJFAX_wT2iMpL9zww0xndYre852ouxqLahWgDhF1E4lZdpVP0og3trvqluq04Pj24rxBHeclGqXe"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-white/80 text-[10px] uppercase tracking-widest mb-2 block">Vogue Heritage</span>
<h2 className="text-white text-2xl font-serif font-light leading-snug">The Renaissance of Sacred Threads</h2>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant text-xs font-medium uppercase tracking-widest">October 24, 2024</span>
<a className="text-tertiary font-medium text-sm flex items-center gap-1" href="/">
                        Read Story <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</article>
{/*  */}
<article className="reveal-on-scroll card-tilt bg-surface-container-low p-6 rounded-3xl" style={{"animationDelay":"0.1s"}}>
<div className="flex flex-col gap-4">
<span className="text-on-primary-fixed-variant text-[10px] uppercase tracking-[0.2em] font-bold">Artisanal Partner</span>
<h2 className="font-serif text-2xl font-light text-on-surface">Weaving History: Desire Foundation Collaboration with UNESCO</h2>
<p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                        A landmark partnership aimed at digitizing three centuries of traditional textile patterns for future generations of artisans and designers...
                    </p>
<div className="pt-4 flex justify-between items-center border-t border-outline-variant/20">
<span className="text-secondary text-[11px] font-medium">September 12, 2024</span>
<button className="text-on-surface font-semibold text-xs underline decoration-primary/30 underline-offset-4">Full Press Release</button>
</div>
</div>
</article>
{/*  */}
<article className="reveal-on-scroll card-tilt" style={{"animationDelay":"0.2s"}}>
<div className="grid grid-cols-5 gap-4">
<div className="col-span-2 aspect-square rounded-2xl overflow-hidden shadow-sm">
<img className="w-full h-full object-cover" data-alt="Artisan hands working on a traditional loom with olive green threads, warm natural sunlight filtering through a window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDE4ohu38Qh1jAmtXaLUrTrRF602Z3awAPP6UzWPZ4ONsiXPoMyqs2LTr5YQUVFIjhAISrmST_DGarsCNJcB8G-zhrVh0RvIS611AJKFTx--U2YYEsYw2V7cmTpYsqnjYM18TMBzZUaaHj6vHPY3Dl-KTn5ZtMnd6DptPTF8KTv_uQ_BGtlGTapbFIF9Vt-4dzHcB_1pC0mR-bg0XeEcWo3ykfUSx3x9VBX-FHlds8jl0ZLX7VqcFwFCuiCFIpXHtb_MhEPKPqRQo9"/>
</div>
<div className="col-span-3 flex flex-col justify-center">
<span className="text-tertiary text-[10px] uppercase tracking-widest mb-1">Media Report</span>
<h3 className="font-serif text-lg font-light leading-tight mb-2">Empowering 500+ Female Weavers in Rural Hubs</h3>
<span className="text-on-surface-variant text-[11px]">Modern Curator Magazine</span>
</div>
</div>
</article>
{/*  */}
<article className="reveal-on-scroll card-tilt bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]" style={{"animationDelay":"0.3s"}}>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary">play_circle</span>
</div>
<span className="text-on-surface-variant text-[11px] uppercase tracking-widest font-medium">Mini-Documentary</span>
</div>
<h2 className="font-serif text-xl font-light text-on-surface">The Silence of the Loom: A Short Film</h2>
<p className="text-on-surface-variant text-sm leading-relaxed">
                        An immersive visual experience capturing the rhythmic sounds and textures of the heritage workshops.
                    </p>
<a className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 mt-2" href="/">
                        Watch Feature <span className="material-symbols-outlined text-sm">open_in_new</span>
</a>
</div>
</article>
</section>
{/*  */}
<section className="mt-24 mb-12 py-12 px-8 bg-surface-container-highest rounded-[2rem] text-center reveal-on-scroll">
<h2 className="font-serif text-2xl font-light mb-4 text-on-surface">Media Relations</h2>
<p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                For press inquiries, high-resolution archival assets, or interview requests regarding our collaborations.
            </p>
<button className="w-full bg-primary text-on-primary py-4 rounded-full font-medium tracking-wide flex items-center justify-center gap-2 group active:scale-95 transition-transform">
                Press Inquiry
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">mail</span>
</button>
</section>
{/*  */}
<footer className="text-center pb-8">
<div className="font-serif italic text-xl mb-4 text-emerald-900">Desire Foundation</div>
<p className="text-[11px] text-stone-500 uppercase tracking-widest leading-relaxed">
                © 2024 Desire Foundation.<br/>Curating History through Partnership.
            </p>
<div className="flex justify-center gap-6 mt-6">
<span className="text-[10px] text-stone-400 font-medium">Ethics of Memory</span>
<span className="text-[10px] text-stone-400 font-medium">Press Inquiry</span>
</div>
</footer>
</main>
{/*  */}
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

    </div>
  );
}
