
import React from 'react';
import { useInteractiveElements } from './useInteractiveElements';

export default function About() {
  useInteractiveElements();
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed cursor-none">
      <div className="custom-cursor hidden md:block" id="cursor"></div>
      <div className="custom-cursor-follower hidden md:block" id="cursor-follower"></div>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 bg-[#fbf9f4]/70 dark:bg-stone-950/70 backdrop-blur-xl">
<nav className="flex justify-between items-center px-12 py-6 max-w-[1920px] mx-auto">
<div className="text-2xl font-serif italic text-[#1b1c19] dark:text-[#fbf9f4] font-headline tracking-tight">
                Desire Foundation
            </div>
<div className="hidden md:flex items-center gap-10">
<a className="text-[#4e6450] dark:text-[#8ca38d] font-semibold border-b-2 border-[#4e6450] font-['Noto_Serif'] tracking-tight transition-colors duration-500" href="/#">Our Story</a>
<a className="text-[#5b5f63] dark:text-stone-400 font-['Noto_Serif'] tracking-tight hover:text-[#4e6450] transition-colors duration-500" href="/#">Impact</a>
<a className="text-[#5b5f63] dark:text-stone-400 font-['Noto_Serif'] tracking-tight hover:text-[#4e6450] transition-colors duration-500" href="/#">Projects</a>
<a className="text-[#5b5f63] dark:text-stone-400 font-['Noto_Serif'] tracking-tight hover:text-[#4e6450] transition-colors duration-500" href="/#">Join Us</a>
</div>
<button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label font-medium hover:opacity-90 transition-all duration-300">
                Partner With Us
            </button>
</nav>
</header>
<main className="pt-32">
{/*  Hero: Philosophical Foundation  */}
<section className="px-12 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center overflow-hidden">
<div className="md:col-span-7 relative z-10">
<span className="text-tertiary font-label tracking-[0.2em] uppercase text-sm mb-6 block">Philosophical Foundation</span>
<h1 className="font-headline text-5xl md:text-7xl leading-tight mb-8 text-on-surface">
                    To weave history is to <br/>
<span className="italic text-primary">preserve dignity.</span>
</h1>
<div className="max-w-xl space-y-6 text-lg text-secondary leading-relaxed">
<p>Our mission is not merely documentation; it is the active revitalization of heritage. We believe every thread tells a story of ancestral wisdom, and every artisan is a living repository of human culture.</p>
<p>Through "Desire Foundation," we facilitate deep collaborations that empower traditional makers while ensuring their craft evolves for a modern world.</p>
</div>
</div>
<div className="md:col-span-5 relative">
<div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-xl shadow-2xl transform translate-x-12 translate-y-6">
<img className="w-full h-full object-cover" data-alt="Close-up of weathered hands weaving intricate green and cream silk threads on a traditional wooden loom in soft natural light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1juc59gaX-DQMJ-lRNkDEiuD-iuHM0ArvUv26YdAf9QZoTjUektFKP25f7EsEawz5G2zLcEwhe9HqnX1gy1YyXVbEYLeqYJxIyvPXVa2PHwr0bgPgq2JVICexujy6NbdTW_Op9R_RNFBxgynlbxfTvLREYQv-EqHjOCtI-43Z74chN4qzkoiuwOi4Fm7dZdznQTq0fm3AHZcGF0na0ExBz_nfeuJSWrCkKw5GCjh8t7sLbhp_abbhJtiH0mSAPcgDQ28Yx4d02nV6"/>
</div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
</div>
</section>
{/*  A Legacy of Craft: Timeline  */}
<section className="bg-surface-container-low py-32 px-12 overflow-hidden">
<div className="max-w-[1920px] mx-auto">
<div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-4xl md:text-5xl mb-6">A Legacy of Craft</h2>
<p className="text-secondary text-lg">A journey of preservation, from forgotten looms to global resonance. Our timeline reflects decades of commitment to the threads that bind us.</p>
</div>
<div className="hidden md:block">
<span className="material-symbols-outlined text-primary text-6xl opacity-20">history_edu</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
{/*  Event 1  */}
<div className="bg-surface-container-lowest p-10 h-full flex flex-col justify-between group hover:bg-primary transition-colors duration-700">
<div>
<span className="font-headline text-4xl mb-8 block text-primary group-hover:text-on-primary">1998</span>
<h3 className="font-headline text-xl mb-4 group-hover:text-on-primary">The First Thread</h3>
<p className="text-secondary group-hover:text-primary-fixed leading-relaxed">Foundation established in a small village studio, documenting seven near-extinct weaving techniques.</p>
</div>
</div>
{/*  Event 2  */}
<div className="bg-surface-container-lowest p-10 h-full flex flex-col justify-between group hover:bg-primary transition-colors duration-700 md:mt-12">
<div>
<span className="font-headline text-4xl mb-8 block text-primary group-hover:text-on-primary">2005</span>
<h3 className="font-headline text-xl mb-4 group-hover:text-on-primary">The Digital Shift</h3>
<p className="text-secondary group-hover:text-primary-fixed leading-relaxed">Transitioning physical archives to high-fidelity digital scans, accessible to designers worldwide.</p>
</div>
</div>
{/*  Event 3  */}
<div className="bg-surface-container-lowest p-10 h-full flex flex-col justify-between group hover:bg-primary transition-colors duration-700">
<div>
<span className="font-headline text-4xl mb-8 block text-primary group-hover:text-on-primary">2014</span>
<h3 className="font-headline text-xl mb-4 group-hover:text-on-primary">Global Reach</h3>
<p className="text-secondary group-hover:text-primary-fixed leading-relaxed">First partnership with international design houses, ensuring fair wage standards for over 500 artisans.</p>
</div>
</div>
{/*  Event 4  */}
<div className="bg-surface-container-lowest p-10 h-full flex flex-col justify-between group hover:bg-primary transition-colors duration-700 md:mt-12">
<div>
<span className="font-headline text-4xl mb-8 block text-primary group-hover:text-on-primary">Present</span>
<h3 className="font-headline text-xl mb-4 group-hover:text-on-primary">Desire Foundation</h3>
<p className="text-secondary group-hover:text-primary-fixed leading-relaxed">A thriving ecosystem supporting 2,000+ artisans through innovative collaboration and direct market access.</p>
</div>
</div>
</div>
</div>
</section>
{/*  The Custodians: Team  */}
<section className="py-32 px-12">
<div className="max-w-[1920px] mx-auto text-center mb-24">
<span className="text-tertiary font-label tracking-[0.2em] uppercase text-sm mb-4 block">The Stewards</span>
<h2 className="font-headline text-4xl md:text-6xl">The Custodians</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
{/*  Custodian 1  */}
<div className="card-tilt group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-xl mb-8 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
<img className="w-full h-full object-cover" data-alt="Professional black and white portrait of a middle-aged man with kind eyes and a grey beard, wearing a linen shirt, studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm0sXN98zaLkbswgAQGCobqlaH1UAgOjaijSrDmAyOCGqwy6gABngdWZ4c6YPLmhVZJnQOro-q5u31rvI-UftbGdIKv6ODWeNHLo55mUD5j92npoSMsMaa8ZGMFNR9v_OIiUWL6DfekPHbgpw9XUH0jPqZeS-EL5TPp7iHcgj85-YzeqmFetzBSfnYh5rKU_UV8_DK-7vSsuAANd4bqWngArdPxF5SpVv4_Tk1FiLoE57bUaqihPpcRy54OOiEV-zdKFFBK1qzoItd"/>
</div>
<h3 className="font-headline text-2xl mb-2">Elias Thorne</h3>
<p className="text-primary font-label uppercase text-sm tracking-widest mb-4">Founder &amp; Visionary</p>
<p className="text-secondary text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">Dedicated to bridges between ancient wisdom and future design.</p>
</div>
{/*  Custodian 2  */}
<div className="card-tilt group cursor-pointer md:mt-24">
<div className="aspect-[3/4] overflow-hidden rounded-xl mb-8 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
<img className="w-full h-full object-cover" data-alt="Black and white portrait of a confident woman with braided hair, wearing a structured blazer, looking directly at camera, soft shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxKnMUVmqS2Ctgvw2TO-DEx7fIkb9q98s6dczre764uE7gee3q4GRpCQ3Lhl-8pYGqYSQfjQiHc23clC1LMKIgrmoqUEptVH3Ekp1fzhyQCbZvlwbGihJTzeE6bxuBHBvDDWhdmT2yz1AF8O6aJ75Jc0uf5WTf9uWY5BgAQhguJ8PCo5SosLaRSLtkAUTquzZ9EhY26JYJCvtlqfeHtCjcx6kd_ZPbwaexNXGhqDQCe2xwU39nO9xdXro3Fv7XgErwiTSgk0S92fOG"/>
</div>
<h3 className="font-headline text-2xl mb-2">Sloane Aris</h3>
<p className="text-primary font-label uppercase text-sm tracking-widest mb-4">Head of Preservation</p>
<p className="text-secondary text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">Expert in traditional dye chemistry and archival conservation.</p>
</div>
{/*  Custodian 3  */}
<div className="card-tilt group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-xl mb-8 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
<img className="w-full h-full object-cover" data-alt="Black and white minimalist portrait of a man in his 30s with short hair and glasses, pensive expression, dramatic low-key lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWTFT4jiU-D-9jOUQ4nUUwCLqy8hui94DGGL4_aNUbdRfUloAcxkfI7Vfc0lYcSzTrFpcFrwUzehL5kIJBYWHR2ZKkv7z_obh3GywMIr6V9Eyzlux_REg-Xy7IJgrAJvSJVIgPa3FY2hnQrmDMe6JdP15qNNcdpjR3E_njv9HRh1p-1NHTooyVKiIQDIMoqGa4FZV7wZJQjFS6BvU9dixvuJzqK5DWE5As3KySSih3rWj4nUBjtH7e1ClQTapYZ_kOCryNCk1ho4xN"/>
</div>
<h3 className="font-headline text-2xl mb-2">Marcus Vane</h3>
<p className="text-primary font-label uppercase text-sm tracking-widest mb-4">Artisan Relations</p>
<p className="text-secondary text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">Managing our network of over 100 artisan clusters globally.</p>
</div>
</div>
</section>
{/*  Impact Matrix: Stats  */}
<section className="py-32 px-12 bg-[#1b1c19] text-white overflow-hidden relative">
<div className="absolute inset-0 opacity-10">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
</div>
<div className="max-w-[1920px] mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div>
<h2 className="font-headline text-4xl md:text-5xl mb-12">The Impact Matrix</h2>
<div className="space-y-12">
<div className="flex items-start gap-6">
<div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-3xl">diversity_3</span>
</div>
<div>
<h4 className="text-4xl font-headline mb-2">2,400+</h4>
<p className="text-outline-variant uppercase tracking-widest text-xs">Artisans Empowered</p>
<p className="mt-4 text-secondary-fixed-dim leading-relaxed">Direct market access and fair trade practices ensuring multi-generational sustainability.</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-3xl">auto_stories</span>
</div>
<div>
<h4 className="text-4xl font-headline mb-2">412</h4>
<p className="text-outline-variant uppercase tracking-widest text-xs">Heritage Techniques Documented</p>
<p className="mt-4 text-secondary-fixed-dim leading-relaxed">Preserving technical knowledge that was on the verge of being lost to time.</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-3xl">public</span>
</div>
<div>
<h4 className="text-4xl font-headline mb-2">12</h4>
<p className="text-outline-variant uppercase tracking-widest text-xs">Partner Countries</p>
<p className="mt-4 text-secondary-fixed-dim leading-relaxed">A global network fostering cross-cultural exchange through textile design.</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="aspect-square bg-surface-container-high/10 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Artisanal blue indigo vats with deep blue liquid bubbling slightly, traditional dyeing process atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeRyk6s_dQX-iwUjhqBuTqw9LRI1iemP8F2XJi0Nj5Z46Eq5-WyfEktCs7vBYFDTxkHRn5KjxVEr1ZocpnFZfCxGY0i1hs9A_bk3Ex6koKHt1vwq-cM2j0627vrI-u7d1qFC_QEQ4jtnmDWccPZAwkuoico9XhBqn4Uu9h3rK-Ax8AqAd5Z7ddKO7xsOPZFhJ1IK0SSzxANJ37H8QUe_fNGT2iphpUhp4JQQMDriOp1zZFL0qO8UQ8CSPoK8G4nDJoOgUtmFrHDeQ5"/>
</div>
<div className="aspect-[3/4] bg-surface-container-high/10 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Minimalist hanging textiles in shades of beige and cream with natural texture under bright overhead light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBVShOeYFvL93oznX_tQi48fGiDIqzxMLp_3rZkPm46R2QFO7JwKHh1UqqxhNUJnhQulZXu3CwibW8nVltiyqfNPwJ1yzXqcLJTMpEe2y6s4dE9_kORNYaPVuswb-RDa9x4QfA6UWq-x_eBYO7c9p_ktsEZApmwgRSsYkyBtxhlYEn183TSKgLYo2QYIISWXqMFKdQS48E9Zg7pAMrMb5I6dW3z4QzLf82LNzUX1bFDgYoO5XLU8Q3BhPW_zI7opVJo7NaHUFoO2ET"/>
</div>
</div>
<div className="space-y-4 pt-12">
<div className="aspect-[3/4] bg-surface-container-high/10 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Abstract macro shot of golden silk threads overlapping in a complex geometric pattern with narrow depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmu7MN5N1k4A578NeRswtWIZC6aDDGfjFDcGiuu5y2eqIwDPnKlkBVz4HaK8YtN7EaIOaI24HnQyGXU3y64GnsUF1zqaA_0-mDZx4y8lXSBo7TmbLhzceEIpw_KZ2xJ8GYSk73XwsDzjbIyMzm3-NywNN9B6HMol0MzlihvYcb3bxLLdaD8NQuIhdqhSN1qkh9I2d2j8GlfgUHE2GVlq-7VKXnrOchBIdusxyZi_1HAzBH-p36C3gyPY6Gsgna6QC3KfnIDNrgtsUx"/>
</div>
<div className="aspect-square bg-surface-container-high/10 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="An elderly artisan carefully inspecting a finished rug with intricate geometric patterns in a sunlit courtyard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNuasJqvF9Y-O_18lSN8KZPKM6AdSdCeVTOeCsvl2UDRunsv1QxmfnMa5V0BStnnPvL4kUf2V9z1rhRoMDDGpDE8Jyb9nQyR1spc_rqlbg6RUwHl4lOlB98TI4xeDw20QPIRRYMFVNqZFCm_wGPLWRBZwh6wFkh9Adkb5dZxY_DAQq98crsCe2Dtt-PpLxmRv2NRcQBQfPYu8UU5cVAmjMEtY0FUSqN7zn0sSbt3UjSKaiEXYufJNDszDiLFP8setYotE08RkeAcu6"/>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  CTA: Partner With Us  */}
<section className="py-48 px-12 text-center bg-surface relative overflow-hidden">
<div className="max-w-3xl mx-auto relative z-10">
<h2 className="font-headline text-5xl md:text-7xl mb-12">Join the Weave</h2>
<p className="text-xl text-secondary mb-16 leading-relaxed">
                    We invite visionaries, designers, and cultural stewards to explore partnership opportunities that celebrate and sustain human craft.
                </p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<button className="px-12 py-5 bg-primary text-on-primary rounded-full font-label font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-primary/20">
                        Inquire for Partnership
                    </button>
<button className="px-12 py-5 border border-outline-variant text-on-surface rounded-full font-label font-bold text-lg hover:bg-surface-container-high transition-all duration-300">
                        View Current Projects
                    </button>
</div>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full opacity-[0.03] pointer-events-none">
<svg className="w-full h-full" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
<path d="M0 500 Q250 450 500 500 T1000 500" fill="transparent" stroke="currentColor" stroke-width="2"></path>
<path d="M0 400 Q250 350 500 400 T1000 400" fill="transparent" stroke="currentColor" stroke-width="2"></path>
<path d="M0 600 Q250 550 500 600 T1000 600" fill="transparent" stroke="currentColor" stroke-width="2"></path>
</svg>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full py-20 px-12 bg-[#f5f3ee] dark:bg-stone-900">
<div className="flex flex-col md:flex-row justify-between items-start gap-8 max-w-[1920px] mx-auto">
<div className="space-y-6">
<div className="text-lg font-serif text-[#1b1c19] dark:text-[#fbf9f4] font-headline">Desire Foundation</div>
<p className="max-w-xs text-[#5b5f63] dark:text-stone-400 font-['Plus_Jakarta_Sans'] text-sm tracking-wide">© Desire Foundation. Preserving the threads of history.</p>
</div>
<div className="grid grid-cols-2 gap-16">
<div className="space-y-4">
<h5 className="text-[#4e6450] font-bold text-xs uppercase tracking-widest">Connect</h5>
<ul className="space-y-3">
<li><a className="text-[#5b5f63] dark:text-stone-400 font-['Plus_Jakarta_Sans'] text-sm tracking-wide hover:text-[#8b4b5a] transition-colors" href="/#">Artisan Dignity</a></li>
<li><a className="text-[#5b5f63] dark:text-stone-400 font-['Plus_Jakarta_Sans'] text-sm tracking-wide hover:text-[#8b4b5a] transition-colors" href="/#">Cultural Preservation</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="text-[#4e6450] font-bold text-xs uppercase tracking-widest">Legal</h5>
<ul className="space-y-3">
<li><a className="text-[#5b5f63] dark:text-stone-400 font-['Plus_Jakarta_Sans'] text-sm tracking-wide hover:text-[#8b4b5a] transition-colors" href="/#">Legal</a></li>
<li><a className="text-[#5b5f63] dark:text-stone-400 font-['Plus_Jakarta_Sans'] text-sm tracking-wide hover:text-[#8b4b5a] transition-colors" href="/#">Privacy</a></li>
</ul>
</div>
</div>
</div>
</footer>

    </div>
  );
}
