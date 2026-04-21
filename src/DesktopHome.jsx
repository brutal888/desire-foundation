
import React from 'react';
import { useInteractiveElements } from './useInteractiveElements';

export default function Home() {
  useInteractiveElements();
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed ">
      
      
      
{/*  Custom Cursor Elements  */}


{/*  Top Navigation Bar  */}
<nav className="sticky top-0 z-50 w-full flex justify-between items-center px-12 py-4 bg-stone-50/70 dark:bg-stone-900/70 backdrop-blur-xl shadow-xl shadow-stone-200/20 dark:shadow-none reveal active">
<a href="/" className="flex items-center gap-3 cursor-pointer" style={{ cursor: 'pointer' }}><img src="/logo.png" alt="Desire Foundation Logo" className="h-10 w-auto" /><div className="font-serif italic text-2xl text-emerald-950 dark:text-stone-50" style={{ cursor: 'pointer', userSelect: 'none' }}>Desire Foundation</div></a>
<div className="hidden md:flex items-center space-x-8">
<div className="magnetic-wrap"><a className="tracking-wide uppercase text-xs font-semibold text-emerald-800 dark:text-emerald-200 border-b-2 border-emerald-800 dark:border-emerald-200 pb-1" href="/about">Our Story</a></div>
<div className="magnetic-wrap"><a className="tracking-wide uppercase text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-stone-100 transition-colors duration-500" href="/about">Impact</a></div>
<div className="magnetic-wrap"><a className="tracking-wide uppercase text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-stone-100 transition-colors duration-500" href="/projects">Projects</a></div>
<div className="magnetic-wrap"><a className="tracking-wide uppercase text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-stone-100 transition-colors duration-500" href="/join">Join Us</a></div>
</div>
<div className="magnetic-wrap">
<a href="/join"><button className="bg-primary text-on-primary rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity duration-300">
                Partner With Us
            </button></a>
</div>
</nav>
{/*  Hero Section  */}
<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
{/*  Parallax Background  */}
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover scale-110 opacity-40 mix-blend-multiply transition-transform duration-[100ms] ease-out" data-alt="close-up of intricate hand-woven textile with neutral earthy tones and rich textural patterns in soft natural light" id="hero-parallax-bg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1cScQhQTjA8u-PMiXsK3WsrGN7RSnQx6K8aUoE8FqX2BPKIDrHW9VdAa_VAYWcEyWHowOt8CNjA1JxRTpaApTg754KxChDZUoZ8fNzHQgtBpUg4yPyMUW8JBYmEsku6Gav1aHTJ9n318o0ejWuZtpSuz2thGsII2odD5RXonUVvijpMOiy8l8ySXoLeBErdkGJI_iionNA5KWDwXth861vryI4Ex3bHlBWjEuoviKbJtYALwIOFiAN368PvWNqiiw9bhNu4PpqN3s"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-8 text-center reveal active">
<span className="inline-block font-label text-xs uppercase tracking-[0.4em] text-primary mb-6">Artisanal Empowerment Collective</span>
<h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-on-surface leading-[0.9] tracking-tighter mb-8">
                Weaving the <br/>
<span className="italic font-normal">Future</span> of <br/>
                Heritage
            </h1>
<p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
                A professional collective dedicated to artisan empowerment and cultural preservation. We archive the past to build sustainable futures.
            </p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<div className="magnetic-wrap">
<a href="/join"><button className="bg-primary text-on-primary rounded-full px-10 py-5 text-sm font-bold uppercase tracking-widest hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                        Join the Movement
                    </button></a>
</div>
<div className="magnetic-wrap">
<a href="/join"><button className="group flex items-center gap-3 font-bold uppercase tracking-widest text-xs py-5 px-6">
<span className="w-12 h-[1px] bg-outline-variant group-hover:w-16 group-hover:bg-primary transition-all duration-500"></span>
                        Inquire for Partnership
                    </button></a>
</div>
</div>
</div>
</header>
{/*  The Archive in Motion (Key Metrics)  */}
<section className="py-32 px-8 bg-surface-container-low relative overflow-hidden reveal">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-5xl text-on-surface mb-6">The Archive in Motion</h2>
<p className="text-on-surface-variant leading-relaxed">Our impact is measured in generations. We track the delicate thread of heritage through tangible growth and cultural resilience.</p>
</div>
<div className="text-primary font-headline text-8xl opacity-10 hidden lg:block">01</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
{/*  Metric Card 1  */}
<div className="tilt-card bg-surface-container-lowest p-12 rounded-xl shadow-stone-200/20">
<span className="material-symbols-outlined text-primary text-4xl mb-8" data-icon="diversity_3">diversity_3</span>
<h3 className="font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">Artisans Empowered</h3>
<div className="font-headline text-6xl text-on-surface mb-6">1,240+</div>
<p className="text-sm leading-relaxed text-on-surface-variant">Skilled practitioners across twelve distinct weaving traditions given access to global markets.</p>
</div>
{/*  Metric Card 2  */}
<div className="tilt-card bg-surface-container-lowest p-12 rounded-xl shadow-stone-200/20 md:translate-y-12">
<span className="material-symbols-outlined text-primary text-4xl mb-8" data-icon="public">public</span>
<h3 className="font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">Regions Preserved</h3>
<div className="font-headline text-6xl text-on-surface mb-6">24</div>
<p className="text-sm leading-relaxed text-on-surface-variant">Active preservation hubs operating in heritage-rich communities across Southeast Asia and the Andes.</p>
</div>
{/*  Metric Card 3  */}
<div className="tilt-card bg-surface-container-lowest p-12 rounded-xl shadow-stone-200/20">
<span className="material-symbols-outlined text-primary text-4xl mb-8" data-icon="history_edu">history_edu</span>
<h3 className="font-label uppercase tracking-widest text-xs text-on-surface-variant mb-2">Cultural Assets</h3>
<div className="font-headline text-6xl text-on-surface mb-6">8.5k</div>
<p className="text-sm leading-relaxed text-on-surface-variant">Individual patterns and dyeing techniques digitally archived for the next thousand years.</p>
</div>
</div>
</div>
</section>
{/*  Our Philosophical Foundation  */}
<section className="py-40 bg-surface reveal">
<div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
<div className="relative tilt-card">
<div className="aspect-[4/5] bg-surface-container-highest rounded-2xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="detail shot of hands expertly working on a traditional loom with neutral silk threads in a bright studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByAQchKJQ8F6DZ2bw1RrHDr_fHUDJ3zc0lzuRfaZkvByuzYJ6LzYx4Mu5si-hq263qOaO-iiyPQwrzCfHmQqjmzgCRGVV9uKxS7UYUIVpUGTHFCXOFcTCY0q5iD2zYtZU2rBVe7uI8rw_7Mso0Uorl9C3Pt6NS7WoywZgRc3H0607hcTDJd_oipnuUP9Rga7ysPoad2Z4KX0Od3V_wMdsywhQyeRryRtGaEmEGZo_GdVBUw74zuf0IT-Gb3kuhHO9kONrClEKLzBKW"/>
</div>
<div className="absolute -bottom-10 -right-10 w-64 aspect-square bg-tertiary-container/30 backdrop-blur-xl rounded-full flex items-center justify-center p-8 text-center border border-white/20">
<p className="font-headline italic text-on-tertiary-container text-sm">"Dignity is woven into every thread we preserve."</p>
</div>
</div>
<div className="space-y-10">
<h2 className="font-headline text-5xl md:text-6xl text-on-surface leading-tight">Our Philosophical Foundation</h2>
<div className="w-20 h-[2px] bg-tertiary"></div>
<p className="text-xl font-body leading-relaxed text-on-surface-variant">
                    We believe that true cultural preservation is only possible through economic empowerment. Dignity through work is not just a slogan; it is the structural integrity of our archive. 
                </p>
<p className="text-on-surface-variant leading-relaxed">
                    Desire Foundation operates as a bridge between the ancient wisdom of master weavers and the sophisticated demands of the modern world. By valuing the artisan as a living historical record, we ensure their survival and their growth.
                </p>
<div className="magnetic-wrap">
<button className="font-label text-xs uppercase tracking-[0.3em] text-tertiary border-b border-tertiary pb-2 hover:opacity-60 transition-opacity">
                        Explore Our Ethics Manifesto
                    </button>
</div>
</div>
</div>
</section>
{/*  Ongoing Initiatives (Grid of Projects)  */}
<section className="py-32 px-8 bg-surface-container-low reveal">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-24">
<h2 className="font-headline text-5xl text-on-surface mb-4">Ongoing Initiatives</h2>
<p className="text-on-surface-variant max-w-xl mx-auto">Collaborations that transform heritage into contemporary impact.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
{/*  Project 1  */}
<div className="group relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-2xl transition-all duration-700 tilt-card">
<div className="aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" data-alt="collection of hand-dyed indigo textiles hanging in a minimalist open-air workshop with sunlight filtering through" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1Q_NgSI1Mgh5pCXHOp-5fk22YGxpvX4SyvYqcOdN_inM2sdFrYBZKriroNPBui5xePil4wdAIptbfMjdb5o_g50b_8AtFHUA8nuV6_vxPCmOFDJUHd8ndIIGdW5CzKW7xn3TQJu1GvyR1V8Nl9r1kzywZCtH-uDn_p4hE7SNVgBBbZ4jc61vRBqOgqGTYwyM_7MsJKYnnfgaIw3pXvQQYc0Y3CIqPEl7GJM4C-B3GTOBXo7Z0AdsMz2Js4-UCqejsitVctwEd5lc0"/>
</div>
<div className="p-8">
<h4 className="font-headline text-2xl mb-4">The Indigo Revival</h4>
<p className="text-sm text-on-surface-variant leading-relaxed mb-6">Restoring natural fermentation vats in Northern Vietnam through community-led cooperatives.</p>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary font-bold">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Active Phase
                        </div>
</div>
</div>
{/*  Project 2  */}
<div className="group relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-2xl transition-all duration-700 lg:translate-y-20 tilt-card">
<div className="aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" data-alt="artisanal paper making process with raw pulp and wooden frames in a bright traditional workshop setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRNByXwap_lD_fRDOBqD5PckWD9ULbXYJYEPKn3fWXHI94o2cpgQE1xFZ40_nNm_DzMdQzXRNZNNtbj-9j7AvLbgLG4G41isKyVuevk14FQIOHMLPp5OYeKTpUKN3drLduQVItGwWMg0gmVLPkV-7LFLB4n6vOEc4pOXb33l-yIjI1T1GKcZMXgzwJ6qcktL5LIyLSi-PCNFBXwTBOt8rJ9tk9y3VQQIPOEN9TK29nTa6gTK-6jWf6aOzZUfQOcqHCfiSU5uQdr4Vj"/>
</div>
<div className="p-8">
<h4 className="font-headline text-2xl mb-4">Paper &amp; Pith</h4>
<p className="text-sm text-on-surface-variant leading-relaxed mb-6">Archiving the sacred art of mulberry paper production and its role in ceremonial textiles.</p>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary font-bold">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
                            Documentation Phase
                        </div>
</div>
</div>
{/*  Project 3  */}
<div className="group relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-2xl transition-all duration-700 tilt-card">
<div className="aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" data-alt="overhead view of colorful spools of high-quality silk thread arranged in an aesthetically pleasing gradient" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK-mdyuIhOPhhKD1_pYw8KBJGTnu1d5br-lu7_Z90ZsGQEDovJdwqrq2dVY6hX3gIDAJIvGrrQm63qwlyCG3u3X2h1Kd_mWdiFluBhvScI11l1nNpj007CRtkqd_uJ115V6bI8AigjZD_Em532Ku0938-yqukosoYxyUsygF2YKx7ukBJXILMMgy1Wm9fBxU2gDGemXCqDwnDto_9NzgU9pNtYCeURLxqX-1MqBwq-CfcRYbu1BCy_B6A7_vg0KcteHi6wYDvWuxzq"/>
</div>
<div className="p-8">
<h4 className="font-headline text-2xl mb-4">Future Threads</h4>
<p className="text-sm text-on-surface-variant leading-relaxed mb-6">A design residency program pairing contemporary fashion architects with heritage master weavers.</p>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary font-bold">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Accepting Partners
                        </div>
</div>
</div>
</div>
<div className="mt-40 text-center">
<div className="magnetic-wrap">
<button className="bg-surface-container-highest border border-outline-variant/30 text-on-surface rounded-full px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500">
                        View Full Project Archive
                    </button>
</div>
</div>
</div>
</section>
{/*  Footer  */}
<footer className="w-full py-20 px-8 md:px-24 grid grid-cols-1 md:grid-cols-4 gap-12 bg-stone-100 dark:bg-stone-950 text-stone-800 dark:text-stone-200 reveal">
<div className="col-span-1 md:col-span-1">
<a href="/" className="flex items-center gap-3 cursor-pointer" style={{ cursor: 'pointer' }}><img src="/logo.png" alt="Desire Foundation Logo" className="h-10 w-auto" /><div className="font-serif text-3xl text-emerald-900 dark:text-emerald-100" style={{ cursor: 'pointer', userSelect: 'none' }}>Desire Foundation</div></a>
<p className="font-sans text-sm leading-relaxed text-stone-500 dark:text-stone-400">© 2024 Desire Foundation. Curating History Through Fine Textile Artistry.</p>
</div>
<div>
<span className="uppercase tracking-widest text-[10px] text-stone-400 mb-6 block">Foundation</span>
<ul className="space-y-4">
<li><a className="text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700 ease-in-out text-sm" href="/about">About</a></li>
<li><a className="text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700 ease-in-out text-sm" href="/join">Careers</a></li>
<li><a className="text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700 ease-in-out text-sm" href="/#">Annual Reports</a></li>
<li><a className="text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700 ease-in-out text-sm" href="/#">Ethics</a></li>
</ul>
</div>
<div>
<span className="uppercase tracking-widest text-[10px] text-stone-400 mb-6 block">Connect</span>
<ul className="space-y-4">
<li><a className="text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700 ease-in-out text-sm" href="/join">Contact</a></li>
<li><a className="text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700 ease-in-out text-sm" href="/#">Instagram</a></li>
<li><a className="text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700 ease-in-out text-sm" href="/#">LinkedIn</a></li>
<li><a className="text-stone-500 dark:text-stone-400 hover:text-rose-700 dark:hover:text-rose-300 transition-all duration-700 ease-in-out text-sm" href="/#">Facebook</a></li>
</ul>
</div>
<div className="bg-primary/5 p-8 rounded-xl">
<span className="uppercase tracking-widest text-[10px] text-primary mb-4 block">Begin Your Story</span>
<p className="text-xs text-on-surface-variant mb-6 leading-relaxed">Subscribe to our quarterly journal on artisanal heritage.</p>
<div className="relative">
<input className="w-full bg-transparent border-b border-outline-variant/40 py-2 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Email Address" type="email"/>
<button className="absolute right-0 bottom-2">
<span className="material-symbols-outlined text-primary text-lg" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</footer>


    </div>
  );
}
