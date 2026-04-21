
import React from 'react';
import { useInteractiveElements } from './useInteractiveElements';

export default function Work() {
  useInteractiveElements();
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed cursor-none">
      <div className="custom-cursor hidden md:block" id="cursor"></div>
      <div className="custom-cursor-follower hidden md:block" id="cursor-follower"></div>
      
{/*  TopNavBar  */}
<header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-4 rounded-full mt-6 mx-auto max-w-7xl bg-stone-50/70 dark:bg-stone-900/70 backdrop-blur-xl shadow-xl shadow-stone-200/20 dark:shadow-none transition-opacity duration-300">
<div className="flex items-center gap-3"><img src="/logo.png" alt="Desire Foundation Logo" className="h-10 w-auto" /><div className="font-serif italic text-2xl text-emerald-950 dark:text-stone-50">Desire Foundation</div></div>
<nav className="hidden md:flex items-center gap-8">
<a className="tracking-wide uppercase text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-stone-100 transition-colors duration-500" href="/#">Our Story</a>
<a className="tracking-wide uppercase text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-stone-100 transition-colors duration-500" href="/#">Impact</a>
<a className="tracking-wide uppercase text-xs font-semibold text-emerald-800 dark:text-emerald-200 border-b-2 border-emerald-800 dark:border-emerald-200 pb-1" href="/#">Projects</a>
<a className="tracking-wide uppercase text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-stone-100 transition-colors duration-500" href="/#">Join Us</a>
</nav>
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase hover:opacity-80 transition-opacity duration-300">
            Partner With Us
        </button>
</header>
<main className="pt-40 pb-24">
{/*  Hero Section  */}
<section className="max-w-7xl mx-auto px-8 md:px-12 mb-32">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-8">
<h1 className="text-6xl md:text-8xl font-serif text-on-surface leading-[1.1] tracking-tight mb-8">
                        Preserving the <span className="italic text-primary">Unspoken</span> Narrative.
                    </h1>
<p className="text-xl md:text-2xl text-secondary max-w-2xl font-light leading-relaxed">
                        A curated repository of systemic interventions, where heritage craftsmanship meets radical sustainability to redefine global impact.
                    </p>
</div>
<div className="md:col-span-4 flex justify-end">
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase tracking-[0.3em] text-outline mb-4">Current Archive Volume</span>
<span className="text-5xl font-serif text-primary">243.08</span>
<span className="text-xs text-secondary mt-2">Hectares Revitalized</span>
</div>
</div>
</div>
</section>
{/*  Project Filtering & Layout Transitions  */}
<section className="max-w-7xl mx-auto px-8 md:px-12 mb-16">
<div className="flex flex-wrap items-center gap-4 py-8 border-y border-outline-variant/15">
<span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mr-4">Filter Archive:</span>
<button className="px-6 py-2 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold transition-all duration-500">All Collections</button>
<button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-medium hover:bg-surface-container transition-all duration-500">Textile Heritage</button>
<button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-medium hover:bg-surface-container transition-all duration-500">Urban Forestry</button>
<button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-medium hover:bg-surface-container transition-all duration-500">Social Weaver Systems</button>
</div>
</section>
{/*  Curated Gallery (Bento-style Asymmetric Grid)  */}
<section className="max-w-7xl mx-auto px-8 md:px-12 space-y-24">
{/*  Project 1: The Weaver's Archive  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
<div className="md:col-span-7 project-card group">
<div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm bg-surface-container-low">
<img alt="The Weaver's Archive" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" data-alt="close-up of intricate hand-woven textile with deep indigo and gold threads in a dimly lit artisanal studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkmeqXWaU1vS6B-irLXWsDpxfQrTvNtOMF3ulIsw9OyMYvHQMKgSLsiGGGnWnH9KSq6NZfhlLZp_AVD4_ZzN7mF3-naY-Tl9Be-riVROhi7xqYJISSHtYcsUuXQtB4UcoI5xITQHfdUb3PScW5hGv5oODZyVEbcbVK4KdI4ot1aGBE27XltXX3iwYa1o7rw5lElE_r9vr4v6GLLz0KwL_t6XyyTSGA2ztoRqeFmgNYKOBnZJLl8FulA8clMGSlrIOzHmL6Lcx8eNt_"/>
</div>
</div>
<div className="md:col-span-5 md:-ml-24 z-10">
<div className="bg-surface-container-lowest p-10 md:p-16 shadow-2xl shadow-on-surface/5">
<span className="text-[10px] uppercase tracking-widest text-tertiary font-bold mb-4 block">Case Study 01 / Textile Heritage</span>
<h2 className="text-4xl font-serif text-on-surface mb-6 leading-tight">The Weaver's Archive</h2>
<p className="text-secondary leading-relaxed mb-8 font-light">
                            A systemic restoration of forgotten loom techniques in the Varanasi belt. By digitizing 400-year-old patterns and securing direct-to-artisan trade routes, we increased local household income by 312% while preserving intangible cultural assets.
                        </p>
<div className="flex flex-col gap-4">
<button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest group">
<span className="w-10 h-px bg-primary transition-all duration-500 group-hover:w-16"></span>
                                Inquire about this Project
                            </button>
<button className="text-[10px] uppercase tracking-widest text-secondary underline decoration-tertiary/30 underline-offset-4 hover:decoration-tertiary transition-all">
                                Request Detailed Impact Report
                            </button>
</div>
</div>
</div>
</div>
{/*  Project 2: The Urban Orchard  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
<div className="md:col-span-5 order-2 md:order-1 z-10 md:-mr-24">
<div className="bg-surface-container-lowest p-10 md:p-16 shadow-2xl shadow-on-surface/5">
<span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4 block">Case Study 02 / Urban Forestry</span>
<h2 className="text-4xl font-serif text-on-surface mb-6 leading-tight">The Urban Orchard</h2>
<p className="text-secondary leading-relaxed mb-8 font-light">
                            Transforming neglected industrial zones into self-sustaining permaculture hubs. This project established a decentralized food network that provides organic produce to 12,000 residents while reducing local heat-island effects by 4.2°C.
                        </p>
<div className="flex flex-col gap-4">
<button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest group">
<span className="w-10 h-px bg-primary transition-all duration-500 group-hover:w-16"></span>
                                Inquire about this Project
                            </button>
<button className="text-[10px] uppercase tracking-widest text-secondary underline decoration-tertiary/30 underline-offset-4 hover:decoration-tertiary transition-all">
                                Request Detailed Impact Report
                            </button>
</div>
</div>
</div>
<div className="md:col-span-7 order-1 md:order-2 project-card group">
<div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm bg-surface-container-low">
<img alt="The Urban Orchard" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" data-alt="modern urban rooftop garden with lush fruit trees and vegetable beds overlooking a city skyline at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC85369thcsgrfzcLqWs13UBPp4JOwZPcKtGzMKPx8FUUW9gQSyBtJN-KgmdDQ6q0ZvH1v6UtbCFLrm5Ilelpm7g_YhCVbxjCYKjCE4HPx7BrgMNX4X5SNN8CsnZ1_0wfOwid6pHGYYJ6lR7M_nqGBVuUJj46Maz8Rr8zA5rUqur3sQJXNbwLkQ1T8lDNR-QLt-HcADRTakW9N_GX0MLZZTwinpNSS2xFwtX89SSMTrSe9gJbdzQFyzvoK9Fq8gDumExz-TUYVUnuHy"/>
</div>
</div>
</div>
{/*  Project 3: Echoes of Jaipur  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
<div className="md:col-span-8 project-card group">
<div className="aspect-[16/9] overflow-hidden rounded-sm bg-surface-container-low">
<img alt="Echoes of Jaipur" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" data-alt="architectural detail of a pink sandstone palace in Jaipur with intricate carvings and soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi_Tb_Antnp8Mq4ZVMUKbKsHGleJE-hYQfhnLoTssWRuWr1hF98wf0AtR8ZxjB_K8TJNM9tsejeMl4VdpomSIRUrldfYtosXFrcn86j7IZKfakVMJjCd_6UUzyGVL2TaTbfGb0K1i4ZU814VMRwqY79BipciTQ6Xy1piLHA3D2AdWnWsKHCU6aGTtV4kcbwF663fdZ1dVQxhNkiHowDfKP4cJ9A6Fi4Zmtt-ZtMsK_RKeMUKBhlKO62sYwuZuZnQpBlQ2zJ06WRS97"/>
</div>
</div>
<div className="md:col-span-4">
<div className="pt-8">
<span className="text-[10px] uppercase tracking-widest text-tertiary font-bold mb-4 block">Case Study 03 / Social Architecture</span>
<h2 className="text-4xl font-serif text-on-surface mb-6 leading-tight">Echoes of Jaipur</h2>
<p className="text-secondary leading-relaxed mb-10 font-light italic">
                            "A dialogue between the stone and the citizen."
                        </p>
<p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                            A reimagining of heritage conservation that involves the local community as primary stakeholders. We developed a collaborative governance model that maintains historical facades while integrating modern sanitation and digital infrastructure.
                        </p>
<button className="bg-primary text-on-primary px-8 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase hover:opacity-90 transition-all">
                            Inquire about this Project
                        </button>
</div>
</div>
</div>
</section>
{/*  Artisanal Partnership Section  */}
<section className="mt-40 bg-surface-container-low py-32">
<div className="max-w-7xl mx-auto px-8 md:px-12 text-center">
<h3 className="text-xs uppercase tracking-[0.4em] text-tertiary font-bold mb-8">Begin Your Story</h3>
<h2 className="text-5xl md:text-7xl font-serif text-on-surface max-w-4xl mx-auto mb-12 leading-tight">
                    Every thread tells a story. How will you join the weave?
                </h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-8">
<button className="bg-primary text-on-primary px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-all">
                        Artisanal Partnership
                    </button>
<button className="text-on-surface px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase outline-variant outline outline-1 hover:bg-surface-container-high transition-all">
                        Request Portfolio Catalog
                    </button>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full py-20 px-8 md:px-24 grid grid-cols-1 md:grid-cols-4 gap-12 bg-stone-100 dark:bg-stone-950">
<div className="md:col-span-1">
<div className="font-serif text-3xl text-emerald-900 dark:text-emerald-100 mb-6">Desire Foundation</div>
<p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-sans">
                Curating History Through Fine Textile Artistry. 
                A global initiative dedicated to the preservation of tactile heritage and sustainable ecological growth.
            </p>
</div>
<div>
<div className="uppercase tracking-widest text-[10px] text-stone-800 dark:text-stone-200 font-bold mb-6">The Archive</div>
<ul className="space-y-3">
<li><a className="text-sm font-sans text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700" href="/#">About</a></li>
<li><a className="text-sm font-sans text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700" href="/#">Careers</a></li>
<li><a className="text-sm font-sans text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700" href="/#">Contact</a></li>
<li><a className="text-sm font-sans text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700" href="/#">Ethics</a></li>
</ul>
</div>
<div>
<div className="uppercase tracking-widest text-[10px] text-stone-800 dark:text-stone-200 font-bold mb-6">Resources</div>
<ul className="space-y-3">
<li><a className="text-sm font-sans text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700" href="/#">Annual Reports</a></li>
<li><a className="text-sm font-sans text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700" href="/#">Facebook</a></li>
<li><a className="text-sm font-sans text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700" href="/#">Instagram</a></li>
<li><a className="text-sm font-sans text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700" href="/#">LinkedIn</a></li>
</ul>
</div>
<div className="md:col-span-1">
<div className="uppercase tracking-widest text-[10px] text-stone-800 dark:text-stone-200 font-bold mb-6">Stay Informed</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-outline-variant/40 py-2 focus:outline-none focus:border-primary transition-colors text-sm" placeholder="Your email address" type="email"/>
<button className="absolute right-0 bottom-2 text-primary font-bold text-xs uppercase tracking-widest">Submit</button>
</div>
<p className="text-[10px] text-stone-400 mt-12 leading-loose">
                © 2024 Desire Foundation. Curating History Through Fine Textile Artistry.
            </p>
</div>
</footer>

    </div>
  );
}
