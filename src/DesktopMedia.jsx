
import React from 'react';
import { useInteractiveElements } from './useInteractiveElements';

export default function DesktopMedia() {
  useInteractiveElements();
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      
<!-- TopAppBar -->
<header className="bg-stone-50/70 dark:bg-stone-950/70 backdrop-blur-xl docked full-width top-0 z-50 fixed w-full no-border-tonal-shift-only">
<div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
<div className="text-2xl font-serif italic text-emerald-900 dark:text-stone-100">Desire Foundation</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-stone-500 dark:text-stone-400 font-sans uppercase tracking-widest text-[10px] hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-500" href="#">The Archive</a>
<a className="text-stone-500 dark:text-stone-400 font-sans uppercase tracking-widest text-[10px] hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-500" href="#">Collaborations</a>
<a className="text-emerald-900 dark:text-emerald-100 border-b border-emerald-900/20 pb-1 font-sans uppercase tracking-widest text-[10px] transition-colors duration-500" href="#">Media</a>
<a className="text-stone-500 dark:text-stone-400 font-sans uppercase tracking-widest text-[10px] hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-500" href="#">Heritage</a>
</nav>
<button className="bg-primary text-on-primary rounded-full px-8 py-3 text-sm font-medium transition-all duration-700 hover:bg-on-primary-fixed-variant hover:shadow-lg active:scale-95">
                Begin Your Story
            </button>
</div>
</header>
<main className="pt-24">
<!-- Hero Section -->
<section className="relative h-[870px] flex items-center overflow-hidden bg-surface-container-low">
<div className="absolute inset-0 z-0 parallax-bg" data-alt="Close up of antique archival paper textures and vintage library books with soft natural light and dust motes" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBe_QfpVMziaGTfsyoSiS9FL-pFDe52CfzRGVJDCLaVCZIMsuyTQRXLhW0HQJoaUDi6t_nFyfg2p89d1owVUWAjefhh1o7n8eJu5nPYCRyAtwXO5_8OndOEpdAAKUphWfQN1JeYvzYKB_Hp4Y4143NO932WWWXboP_pHBidZb9fVSJ8fDybYix8aiC736vPD9zwUXOdDTehnxOcnUv2CC5TQ4dC2znD6W9lOVOJOJfdQu5BP7vKxAeumQ3_nuXfgXHC7NerBPtGPNak');">
<div className="absolute inset-0 bg-surface/80"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
<div className="max-w-4xl reveal-on-scroll">
<span className="font-label text-tertiary uppercase tracking-[0.3em] text-xs mb-6 block">Documenting the Journey</span>
<h1 className="font-headline text-7xl md:text-8xl text-on-surface leading-tight tracking-tight mb-8">
                        The Media <br/>
<span className="italic font-light">Repository</span>
</h1>
<p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
                        A curated archive of our global footprint, tracing the threads of artisanal heritage and social impact through the lens of international press.
                    </p>
</div>
</div>
<!-- Asymmetric element -->
<div className="absolute bottom-12 right-0 w-1/3 h-64 bg-primary/10 backdrop-blur-3xl -mr-12 rounded-l-full hidden lg:block"></div>
</section>
<!-- Featured Coverage -->
<section className="py-32 px-8 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="relative group reveal-on-scroll">
<div className="aspect-[4/5] overflow-hidden bg-surface-container-high rounded-xl text-3d-tilt">
<img alt="Editorial photo of textile artisans working on intricate patterns" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="High-end editorial photo of skilled artisans weaving intricate emerald and gold threads on a traditional loom in a sun-drenched studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHAmZhMmM9kbwIOl4Qkx0TwKX7PC6fcayqMcWE95ehOuqkq4-TNH3CF7t74J4rBvS7kpAkJ46LrPLNTz4pS-RjJqnJ9DanHqgC2wNChWDFQwFhVjHEyARgbNh6YVSKMZxXkvPhTC4LIKIVbf4_jfPVnTuJ07nBOrm4Cm2tcfjYZlequvFYwWDrqWYo0k7To1sRmosE4ImTSBIouna94zJzXF1Rsh7_IQU8q2k3eutHRg4vstPGKgzZxU0KsR06zI2DfiRObZZYDM4Y"/>
</div>
<!-- Overlapping Badge -->
<div className="absolute -bottom-10 -right-10 bg-surface-container-lowest p-12 shadow-2xl max-w-sm hidden md:block">
<p className="font-headline text-2xl italic mb-4">"A revolutionary approach to heritage preservation."</p>
<span className="font-label text-sm uppercase tracking-widest text-outline">The Global Chronicle</span>
</div>
</div>
<div className="flex flex-col justify-center reveal-on-scroll" style="animation-delay: 0.2s;">
<span className="text-primary font-medium tracking-widest uppercase text-xs mb-6 block">Featured Story</span>
<h2 className="font-headline text-5xl text-on-surface mb-8 leading-tight">Empowering Artisans: The Cloth Bag Initiative</h2>
<p className="font-body text-lg text-on-surface-variant mb-10 leading-relaxed">
                            How our partnership-driven model for automatic cloth bag distribution captured the attention of leading environmental and social media outlets across the continent.
                        </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary text-on-primary rounded-full px-10 py-4 text-sm font-semibold transition-all duration-500 hover:shadow-[0_10px_20px_-5px_rgba(78,100,80,0.3)]">
                                Read the Full Feature
                            </button>
<button className="border-b-2 border-primary/20 hover:border-primary text-primary px-4 py-4 text-sm font-semibold transition-all">
                                View Press Release
                            </button>
</div>
</div>
</div>
</div>
</section>
<!-- Press Gallery Grid -->
<section className="py-32 px-8 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-20 reveal-on-scroll">
<div>
<h2 className="font-headline text-5xl text-on-surface mb-4">The Press Gallery</h2>
<p className="text-on-surface-variant font-body">A narrative of impact through global headlines.</p>
</div>
<div className="hidden md:flex gap-4">
<button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
<!-- Media Card 1 -->
<div className="group reveal-on-scroll">
<div className="bg-surface-container-lowest overflow-hidden transition-all duration-700 text-3d-tilt hover:shadow-xl">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Newspaper archive collection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close-up of vintage newspaper clippings about heritage and craft arranged artfully on a light wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoXqSNH_ZkLMDaRynyBcjpP1ZUJIjg8sUf0_jlXYFI0MuIvTdHUeb8PTWL5zA5d8VYbjKPNJEFgaXkCNGzRO6_IF8ZxM_9bqwJ4C7BDHUNBpL-L4EZkpKR5IHQJ68oDz5EfXKX8LcaJzUKRq6HqExlonSrMbgWkWRhw03Q49etLgDUctmd-1WukVvy4hArZq2ZCTqD2FH6mIMBAFufMNGBkIg_YhGR4X6Cm2iNv7lqjQpqdqVwgwoN3zTLM8HF_Y0IrcDv9mOCo2eb"/>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4">
<span className="font-label text-[10px] uppercase tracking-widest text-primary">Vogue Heritage</span>
<span className="font-label text-[10px] text-outline">Oct 2024</span>
</div>
<h3 className="font-headline text-xl mb-6 group-hover:text-primary transition-colors">Weaving the Future: Sustainable Archives</h3>
<a className="text-tertiary font-label text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                                    Read Article <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</div>
<!-- Media Card 2 -->
<div className="group reveal-on-scroll" style="animation-delay: 0.2s;">
<div className="bg-surface-container-lowest overflow-hidden transition-all duration-700 text-3d-tilt hover:shadow-xl">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Person reading broadsheet newspaper" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A person in an elegant beige coat reading a large broadsheet newspaper in a clean, minimalist architectural space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnSOQJ9Ef_DsRyQLNFjmbErOCiqiUo5Cz19dupdnZxx0ZbzAI8_zJ04Mh7sboOOf5umevXFfLDm0EsbBNZjRN_xRX_vWD30FtFJHfi5OhSQh-5dR9SNpmS5FM1tyMYS7XAP5p778MopXh1Ki90dWH-ACIcd9u68AlOy8FtQo7Wr_yMfzXarbSeH6ZOPfS1Qen87fCvGuPOuCZ57aZxJlXDLfJO_4MUEKC1VkZVYqXF7JO8JybDJjETskWKq0ANoMvOO8whTlMM6YUA"/>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4">
<span className="font-label text-[10px] uppercase tracking-widest text-primary">Times of Craft</span>
<span className="font-label text-[10px] text-outline">Sept 2024</span>
</div>
<h3 className="font-headline text-xl mb-6 group-hover:text-primary transition-colors">The Digital Curators of the East</h3>
<a className="text-tertiary font-label text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                                    Read Article <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</div>
<!-- Media Card 3 -->
<div className="group reveal-on-scroll" style="animation-delay: 0.4s;">
<div className="bg-surface-container-lowest overflow-hidden transition-all duration-700 text-3d-tilt hover:shadow-xl">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Abstract media studio lighting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Modern minimalist television studio set with soft sage green lighting and clean geometric shapes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdmr3Y_JkvRbhhQUh_A_rHH8b9XmrUnO3-9bA0d_asTe2frb2G7_nNMqSXQPJPFypK4gmHHSmu2-zltjC_F7y7mbCeGNdyQTpU1QssHXgHrBw5UrgNyYcP0EiCf6FCNn0pYx8RU8ZFHOshTx7zuGERwFVcUrRyo2EBHWydInN2SH2thlEDxL1MLPdBz9RVpxQLHMZPMZ5ppIefBiOLUOc72Xdm6yOPxxOlcMsNEkrRKrEGmA5J1QZeF4dL30q32UjrYTsR3SmLxleG"/>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4">
<span className="font-label text-[10px] uppercase tracking-widest text-primary">BBC Media</span>
<span className="font-label text-[10px] text-outline">Aug 2024</span>
</div>
<h3 className="font-headline text-xl mb-6 group-hover:text-primary transition-colors">Bridging Generations Through Textile</h3>
<a className="text-tertiary font-label text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                                    Watch Feature <span className="material-symbols-outlined text-sm" data-icon="play_circle">play_circle</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Press Resources -->
<section className="py-32 px-8 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="bg-surface-container rounded-3xl p-12 lg:p-20 relative overflow-hidden reveal-on-scroll">
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-headline text-5xl text-on-surface mb-8">Press Resources</h2>
<p className="font-body text-on-surface-variant text-lg mb-12 leading-relaxed">
                                Access our official media kit, high-resolution visual assets, and institutional brand guidelines for editorial use.
                            </p>
<div className="space-y-6">
<div className="flex items-center justify-between p-6 bg-surface-container-low rounded-2xl group cursor-pointer hover:bg-surface-container-highest transition-colors">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="folder_zip">folder_zip</span>
<div>
<p className="font-medium text-on-surface">Institutional Media Kit 2024</p>
<p className="text-xs text-outline font-label uppercase tracking-widest">PDF, 45MB • Updated Oct 2024</p>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="download">download</span>
</div>
<div className="flex items-center justify-between p-6 bg-surface-container-low rounded-2xl group cursor-pointer hover:bg-surface-container-highest transition-colors">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="image">image</span>
<div>
<p className="font-medium text-on-surface">Brand Asset Gallery</p>
<p className="text-xs text-outline font-label uppercase tracking-widest">JPG/PNG/SVG • High Resolution</p>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="download">download</span>
</div>
</div>
</div>
<div className="hidden lg:block">
<div className="relative">
<div className="aspect-square bg-surface-container-low rounded-full absolute -top-20 -right-20 w-80 h-80 opacity-50"></div>
<img alt="Institutional branding mockup" className="relative z-10 rounded-2xl shadow-2xl w-full h-[500px] object-cover" data-alt="Elegant branding mockup featuring a minimalist business card and letterhead with the Desire Foundation logo in deep emerald on cream paper" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBreUVRMx_kwYyt3aQxczqMntISX_eb_8Ef1WkFZBjUquRSFu03_9_voRalq5-71-5OSd-oH_3ZdOH6tlZ4Inz4MLEtWLHrOdYKQxrf35hk2vVVQfyp3oYZuAJZEEx97EMNK1F3OgAGizQ76PmJhCMbRMze0QJxtOCo8Q7C9aWJgAEGGiXPxKne5MEWgnndKT9L2As3fYdVRkIciKaGQBvoXKXADpCIa8UYLwJsYxHDT545f1Vlr0gokdMhAHXhV8ePwbCd7-CTV47I"/>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Inquire for Partnership (CTA) -->
<section className="py-32 px-8 bg-surface-container-highest">
<div className="max-w-4xl mx-auto text-center reveal-on-scroll">
<span className="font-label text-tertiary uppercase tracking-[0.3em] text-xs mb-8 block">Collaborate with Us</span>
<h2 className="font-headline text-6xl text-on-surface mb-8 italic font-light">Join the Weave</h2>
<p className="font-body text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
                    Interested in featuring our story or exploring an artisanal partnership? Our team is ready to curate a unique collaboration with your publication.
                </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
<button className="bg-primary text-on-primary rounded-full px-12 py-5 text-sm font-semibold transition-all duration-700 hover:bg-on-primary-fixed-variant hover:scale-105">
                        Partner with the Archive
                    </button>
<button className="text-on-surface px-12 py-5 text-sm font-semibold transition-all hover:text-primary underline decoration-primary/20 underline-offset-8">
                        Press Inquiry
                    </button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer className="bg-stone-100 dark:bg-stone-900 full-width py-20 px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
<div>
<div className="font-serif italic text-xl text-emerald-900 dark:text-stone-100 mb-6">Desire Foundation</div>
<p className="font-body text-stone-600 dark:text-stone-400 max-w-md leading-relaxed mb-8">
                    An initiative by the Desire Foundation, dedicated to preserving the ephemeral beauty of artisanal heritage through modern curatorial practice.
                </p>
<p className="font-['Plus_Jakarta_Sans'] text-sm tracking-wide text-stone-600 dark:text-stone-400">
                    © 2024 Desire Foundation. Curating History through Partnership.
                </p>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="flex flex-col gap-4">
<span className="font-label text-[10px] uppercase tracking-widest text-primary mb-2">Explore</span>
<a className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-all duration-500" href="#">The Archive</a>
<a className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-all duration-500" href="#">Collaborations</a>
<a className="text-emerald-800 underline decoration-emerald-800/30" href="#">Media</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-label text-[10px] uppercase tracking-widest text-primary mb-2">Heritage</span>
<a className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-all duration-500" href="#">Artisanal Partnership</a>
<a className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-all duration-500" href="#">Press Inquiry</a>
<a className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-all duration-500" href="#">Ethics of Memory</a>
</div>
</div>
</div>
</footer>
<!-- BottomNavBar (Mobile Only) -->
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-2xl rounded-t-3xl shadow-[0_-8px_40px_-15px_rgba(0,0,0,0.05)]">
<a className="flex flex-col items-center justify-center text-stone-500 dark:text-stone-400 px-5 py-2 hover:bg-stone-200/40 transition-all duration-300 active:scale-95" href="#">
<span className="material-symbols-outlined mb-1" data-icon="auto_stories">auto_stories</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[11px]">Archive</span>
</a>
<a className="flex flex-col items-center justify-center text-stone-500 dark:text-stone-400 px-5 py-2 hover:bg-stone-200/40 transition-all duration-300 active:scale-95" href="#">
<span className="material-symbols-outlined mb-1" data-icon="group_work">group_work</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[11px]">Partners</span>
</a>
<a className="flex flex-col items-center justify-center bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-50 rounded-2xl px-5 py-2" href="#">
<span className="material-symbols-outlined mb-1" data-icon="theaters" style="font-variation-settings: 'FILL' 1;">theaters</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[11px]">Media</span>
</a>
<a className="flex flex-col items-center justify-center text-stone-500 dark:text-stone-400 px-5 py-2 hover:bg-stone-200/40 transition-all duration-300 active:scale-95" href="#">
<span className="material-symbols-outlined mb-1" data-icon="history_edu">history_edu</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-[11px]">Connect</span>
</a>
</nav>

    </div>
  );
}
