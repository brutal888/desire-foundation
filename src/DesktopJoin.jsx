
import React from 'react';
import { useInteractiveElements } from './useInteractiveElements';

export default function Join() {
  useInteractiveElements();
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed ">
      
      
      
{/*  TopAppBar  */}
<nav className="fixed top-0 z-50 w-full flex justify-between items-center px-12 py-4 bg-stone-50/70 dark:bg-stone-900/70 backdrop-blur-xl shadow-xl shadow-stone-200/20 dark:shadow-none reveal active">
<a href="/" className="flex items-center gap-3 cursor-pointer" style={{ cursor: 'pointer' }}><img src="/logo.png" alt="Desire Foundation Logo" className="h-10 w-auto" /><div className="font-serif italic text-2xl text-emerald-950 dark:text-stone-50" style={{ cursor: 'pointer', userSelect: 'none' }}>Desire Foundation</div></a>
<div className="hidden md:flex items-center space-x-8">
<div className="magnetic-wrap"><a className="tracking-wide uppercase text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-stone-100 transition-colors duration-500" href="/about">Our Story</a></div>
<div className="magnetic-wrap"><a className="tracking-wide uppercase text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-stone-100 transition-colors duration-500" href="/media">Media</a></div>
<div className="magnetic-wrap"><a className="tracking-wide uppercase text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-stone-100 transition-colors duration-500" href="/projects">Projects</a></div>
<div className="magnetic-wrap"><a className="tracking-wide uppercase text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-stone-100 transition-colors duration-500" href="/join">Join Us</a></div>
</div>
<div className="magnetic-wrap">
<a href="/join"><button className="bg-primary text-on-primary rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity duration-300">
                Partner With Us
            </button></a>
</div>
</nav>
<main className="pt-48">
{/*  Hero Section  */}
<section className="relative px-12 py-24 mb-12 overflow-hidden">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-7 z-10">
<span className="text-tertiary font-medium tracking-[0.2em] text-xs uppercase mb-6 block">Building Shared Heritage</span>
<h1 className="text-6xl md:text-8xl font-headline font-bold leading-tight mb-8 tracking-tighter text-on-surface">
                        Begin Your <br/><span className="italic font-normal">Story</span>
</h1>
<p className="text-xl text-secondary max-w-xl leading-relaxed font-light">
                        We invite institutions, visionaries, and researchers to join our mission of preserving the tactile threads of global history. Together, we weave the digital archive of tomorrow.
                    </p>
</div>
<div className="md:col-span-5 relative">
<div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-1000">
<img className="w-full h-full object-cover" data-alt="close-up of intricate hand-woven antique silk textiles with gold thread detailing in soft ambient museum lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCABRJosR-JW-cN4dlo_LcUTZlgt_AjI_VfJr8cV2Mjx7-MFngibAU7St0mm6nuwqO9B86wualZLlkJ4TqF-pMQItlI5McH7aedkV_silB9i8NbiAvZaBRcAeDlOYNio5ctiDKvfgrUFPvrEFoF9ihGacsUvu_QgnjgHtBcRmb4DPutlg6FuY9k974L1JUJCydFgLCPIaPEIclh7bDL9iTs0epahb1tHGfpirDrPRXA7yov4fYnDqDbzMPD-byEIqkAs5Wo7kr9IQCk"/>
</div>
<div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl"></div>
</div>
</div>
</section>
{/*  Strategic Alliances Section  */}
<section className="py-32 bg-surface-container-low">
<div className="max-w-[1400px] mx-auto px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4 perspective-lg">
<div className="space-y-4 pt-12">
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:scale-105 transition-transform duration-700 glass-card">
<span className="material-symbols-outlined text-primary mb-4 block" style={{ fontSize: '40px' }}>corporate_fare</span>
<h3 className="font-headline text-xl font-bold mb-2">Corporate Alliances</h3>
<p className="text-sm text-secondary leading-relaxed">Sustainable ESG integration through cultural preservation initiatives.</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:scale-105 transition-transform duration-700 glass-card">
<span className="material-symbols-outlined text-primary mb-4 block" style={{ fontSize: '40px' }}>public</span>
<h3 className="font-headline text-xl font-bold mb-2">NGO Synergy</h3>
<p className="text-sm text-secondary leading-relaxed">Amplifying community impact through shared ethical resources.</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:scale-105 transition-transform duration-700 glass-card">
<span className="material-symbols-outlined text-primary mb-4 block" style={{ fontSize: '40px' }}>account_balance</span>
<h3 className="font-headline text-xl font-bold mb-2">Institutional Tie-ups</h3>
<p className="text-sm text-secondary leading-relaxed">Establishing permanent archival standards for global heritage.</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-4xl md:text-5xl font-headline mb-8 text-on-surface">Strategic Alliances</h2>
<p className="text-lg text-secondary mb-10 leading-relaxed">
                            Our corporate and NGO partnerships are designed for deep integration. We seek organizations committed to artisan dignity and the longevity of cultural narratives. 
                        </p>
<ul className="space-y-6 mb-12">
<li className="flex items-center gap-4 text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                                Co-branded archival expeditions
                            </li>
<li className="flex items-center gap-4 text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                                Sustainable supply chain documentation
                            </li>
<li className="flex items-center gap-4 text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                                Global heritage protection advocacy
                            </li>
</ul>
</div>
</div>
</div>
</section>
{/*  Creative Residency & Knowledge Exchange  */}
<section className="py-32 bg-surface">
<div className="max-w-[1400px] mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
{/*  Creative Residency  */}
<div className="group relative p-12 rounded-2xl overflow-hidden bg-surface-container-low transition-all duration-700 hover:bg-surface-container">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-9xl">auto_awesome</span>
</div>
<h3 className="text-3xl font-headline mb-6">Creative Residency</h3>
<p className="text-secondary leading-relaxed mb-8">
                        For artists, filmmakers, and digital storytellers. Gain exclusive access to our physical and digital archives to reinterpret ancestral wisdom through a modern lens.
                    </p>
<a className="text-tertiary font-medium flex items-center gap-2 hover:gap-4 transition-all" href="/#">
                        Explore Fellowships <span className="material-symbols-outlined">arrow_right_alt</span>
</a>
</div>
{/*  Knowledge Exchange  */}
<div className="group relative p-12 rounded-2xl overflow-hidden bg-surface-container-low transition-all duration-700 hover:bg-surface-container">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-9xl">school</span>
</div>
<h3 className="text-3xl font-headline mb-6">Knowledge Exchange</h3>
<p className="text-secondary leading-relaxed mb-8">
                        Collaborative programs for universities and research institutions. We provide open data access for ethnographic studies and textile conservation research.
                    </p>
<a className="text-tertiary font-medium flex items-center gap-2 hover:gap-4 transition-all" href="/#">
                        Academic Programs <span className="material-symbols-outlined">arrow_right_alt</span>
</a>
</div>
</div>
</section>
{/*  Inquiry Form Section  */}
<section className="py-32 bg-surface-container-highest">
<div className="max-w-[1200px] mx-auto px-12">
<div className="bg-surface-container-lowest rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-primary-container to-tertiary"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5">
<h2 className="text-4xl font-headline mb-6">Submit a Proposal</h2>
<p className="text-secondary mb-12">
                                We review professional collaboration inquiries on a rolling basis. Please provide context regarding your organization or research intent.
                            </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary">verified</span>
<div>
<p className="font-bold text-sm">Response Time</p>
<p className="text-sm text-secondary">Our curators respond within 14 business days.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary">encrypted</span>
<div>
<p className="font-bold text-sm">Ethical Handling</p>
<p className="text-sm text-secondary">Your data is handled with ancestral dignity and privacy.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<form className="space-y-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="relative input-group h-12">
<input className="floating-label-input w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 px-0 py-2 text-on-surface transition-all" id="full_name" placeholder=" " type="text"/>
<label className="absolute left-0 top-2 text-outline-variant pointer-events-none transition-all duration-300 origin-left" htmlFor="full_name">Full Name</label>
<div className="input-focus-line relative"></div>
</div>
<div className="relative input-group h-12">
<input className="floating-label-input w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 px-0 py-2 text-on-surface transition-all" id="email" placeholder=" " type="email"/>
<label className="absolute left-0 top-2 text-outline-variant pointer-events-none transition-all duration-300 origin-left" htmlFor="email">Institutional Email</label>
<div className="input-focus-line relative"></div>
</div>
</div>
<div className="relative input-group h-12">
<input className="floating-label-input w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 px-0 py-2 text-on-surface transition-all" id="organization" placeholder=" " type="text"/>
<label className="absolute left-0 top-2 text-outline-variant pointer-events-none transition-all duration-300 origin-left" htmlFor="organization">Organization / Institution</label>
<div className="input-focus-line relative"></div>
</div>
<div className="relative input-group h-12">
<select className="floating-label-input w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 px-0 py-2 text-on-surface-variant appearance-none transition-all" id="partnership_type">
<option disabled="" selected="" value=""></option>
<option value="strategic">Strategic Alliance</option>
<option value="residency">Creative Residency</option>
<option value="academic">Academic Exchange</option>
</select>
<label className="absolute left-0 top-2 text-outline-variant pointer-events-none transition-all duration-300 origin-left" htmlFor="partnership_type">Nature of Partnership</label>
<div className="input-focus-line relative"></div>
</div>
<div className="relative input-group">
<textarea className="floating-label-input w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 px-0 py-2 text-on-surface transition-all resize-none" id="proposal" placeholder=" " rows="4"></textarea>
<label className="absolute left-0 top-2 text-outline-variant pointer-events-none transition-all duration-300 origin-left" htmlFor="proposal">Proposal Brief</label>
<div className="input-focus-line relative"></div>
</div>
<button className="w-full md:w-auto bg-primary text-on-primary px-12 py-4 rounded-full font-semibold hover:bg-on-primary-container transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" type="submit">
                                    Submit Proposal
                                </button>
</form>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full py-20 px-12 bg-[#f5f3ee] dark:bg-stone-900 border-t border-transparent tonal-shift">
<div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
<div className="space-y-4">
<a href="/" className="flex items-center gap-3 cursor-pointer" style={{ cursor: 'pointer' }}><img src="/logo.png" alt="Desire Foundation Logo" className="h-10 w-auto" /><div className="text-lg font-serif text-[#1b1c19] dark:text-[#fbf9f4] font-headline" style={{ cursor: 'pointer', userSelect: 'none' }}>Desire Foundation</div></a>
<p className="font-['Plus_Jakarta_Sans'] text-sm tracking-wide text-[#4e6450] dark:text-[#8ca38d] max-w-xs">
                    © Desire Foundation. Preserving the threads of history.
                </p>
</div>
<div className="flex flex-wrap gap-8 font-['Plus_Jakarta_Sans'] text-sm tracking-wide">
<a className="text-[#5b5f63] dark:text-stone-400 hover:text-[#8b4b5a] transition-colors" href="/#">Artisan Dignity</a>
<a className="text-[#5b5f63] dark:text-stone-400 hover:text-[#8b4b5a] transition-colors" href="/#">Cultural Preservation</a>
<a className="text-[#5b5f63] dark:text-stone-400 hover:text-[#8b4b5a] transition-colors" href="/#">Legal</a>
<a className="text-[#5b5f63] dark:text-stone-400 hover:text-[#8b4b5a] transition-colors" href="/#">Privacy</a>
</div>
</div>
</footer>

    </div>
  );
}
