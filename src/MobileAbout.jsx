import React from 'react';
import { useInteractiveElements } from './useInteractiveElements';

export default function MobileAbout() {
  useInteractiveElements();
  return (
    <>
      
{/*  Top Navigation  */}
<nav className="fixed top-0 w-full z-50 bg-[#f5ffc2]/70 backdrop-blur-xl flex justify-between items-center px-6 py-4 shadow-[0_12px_40px_rgba(24,30,0,0.06)]">
<span className="text-xl font-headline font-bold text-[#181e00]">Desire Foundation</span>
<button className="text-primary material-symbols-outlined p-2">menu</button>
</nav>
<main className="pb-12 pt-28">
{/*  Hero Section  */}
<section className="px-6 mb-16">
<span className="font-label text-primary font-semibold tracking-widest text-xs uppercase mb-4 block">The Ethereal Archive</span>
<h1 className="font-headline text-4xl font-bold text-on-surface leading-tight mb-6">Preserving Heritage, Empowering Futures.</h1>
<p className="text-on-surface-variant leading-relaxed mb-8">We believe that the soul of a community resides in its craft. Since 2008, the Desire Foundation has been a bridge between ancient wisdom and modern sustainability.</p>
<div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
<img alt="Close up of artisan hands weaving" className="w-full h-full object-cover" data-alt="Close-up of weathered artisan hands weaving intricate silk patterns on a traditional wooden loom in soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkL1ur3BnjVfWiVZOfKEeA7hXqF3cVRKKSEYt_1sACOtdU9dCIXtduWinHc_LbFYOmOP8xJvPB6cciuLmYfrtjC9UVN0nKM8D91XSILzdAL_xrk1Yks4dELXoHMl8WA97VO-VfFI-GkhSMSNxtCe12ROuX3pNL48bg5uo6pMCxS3pMN_wdfJOSbjgk2EgxnL9TDyI4u02NnCDL7ZyNsauHZStbRF6S9bimvIaCQDk8A2_ft5ZZ4X3J4kvi5Scqvm6si2_tzZVVnVC6"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-background/40 to-transparent"></div>
</div>
</section>
{/*  Founder's Vision  */}
<section className="bg-surface-container-low px-6 py-20 relative overflow-hidden">
<div className="relative z-10">
<h2 className="font-headline text-3xl font-bold mb-8">The Founder's Vision</h2>
<div className="mb-8">
<p className="font-headline italic text-xl text-secondary leading-relaxed mb-6">"Our goal isn't just to provide aid, but to restore the dignity of the creators who define our cultural identity."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden">
<img alt="Founder Portrait" className="w-full h-full object-cover" data-alt="Professional portrait of a middle-aged South Asian woman with a warm expression, wearing traditional textile jewelry in a sunlit office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCldSZxhrJVe-4-AATY50X0d3S5o-r3PggLvjf1fbKq7wM3qwtWrv9VOmbakH76STe3wpQAOvZ_m-SFzO8jLKEygWygBbhB1dhcTNvZQtltBg5nz3HftQKQW8FoMqBR0mgIJ0RlEXGQ4l9dkwr3ooddWaobsAV3SNcdCAA7UN88DvbGLFmE0ZHeT5rPBwu0p2HvJkHKzqqo7PVcodjG3NKBnxUOq7qsDVKK95KDOS3jpL_MK8JAduVFsCFLs5mNfe7IA7iqSsyNDnFk"/>
</div>
<div>
<p className="font-bold text-on-surface">Dr. Ananya Sharma</p>
<p className="text-xs font-label text-on-surface-variant uppercase tracking-tighter">Founder &amp; Executive Director</p>
</div>
</div>
</div>
</div>
{/*  Decorative Background Element  */}
<div className="absolute -right-20 top-0 w-64 h-64 bg-surface-container-high rounded-full opacity-50 blur-3xl"></div>
</section>
{/*  Story Timeline  */}
<section className="px-6 py-20">
<h2 className="font-headline text-3xl font-bold mb-12">Our Journey</h2>
<div className="space-y-12 relative before:absolute before:left-3 before:top-0 before:h-full before:w-[2px] before:bg-outline-variant/30">
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-sm">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<span className="font-label text-primary font-bold text-sm mb-2 block">2008</span>
<h3 className="font-headline text-xl font-semibold mb-2">The First Loom</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Starting with just three weaving families in rural Rajasthan, we focused on reviving the nearly lost 'Dhurrie' patterns.</p>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary flex items-center justify-center shadow-sm">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<span className="font-label text-secondary font-bold text-sm mb-2 block">2014</span>
<h3 className="font-headline text-xl font-semibold mb-2">Educational Pivot</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Launched the Artisan School of Business, training 500+ makers in financial literacy and digital marketing.</p>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-tertiary flex items-center justify-center shadow-sm">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<span className="font-label text-tertiary font-bold text-sm mb-2 block">2023</span>
<h3 className="font-headline text-xl font-semibold mb-2">Global Impact</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Today, we support 5,000+ artisans across 12 states, preserving 40+ traditional craft techniques.</p>
</div>
</div>
</section>
{/*  Impact Bento Mobile  */}
<section className="px-6 py-20 bg-surface-container">
<h2 className="font-headline text-3xl font-bold mb-8">Our Reach</h2>
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
<p className="font-label text-primary font-bold text-4xl mb-2">5,000+</p>
<p className="text-on-surface-variant font-body">Artisans Empowered</p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
<p className="font-label text-secondary font-bold text-2xl mb-1">12</p>
<p className="text-xs text-on-surface-variant">Active States</p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
<p className="font-label text-tertiary font-bold text-2xl mb-1">40+</p>
<p className="text-xs text-on-surface-variant">Crafts Revived</p>
</div>
</div>
</section>
{/*  Team Section  */}
<section className="px-6 py-20">
<h2 className="font-headline text-3xl font-bold mb-4">The Custodians</h2>
<p className="text-on-surface-variant mb-12">The passionate minds leading our mission.</p>
<div className="space-y-12">
{/*  Team Member  */}
<div className="flex flex-col gap-6">
<div className="w-full aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Marcus V." className="w-full h-full object-cover" data-alt="Editorial black and white portrait of a man in his late 30s with short hair, wearing a high-neck sweater, looking thoughtfully off-camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUBJgpLfEOxpkyteGItWUu0O9lshyJb4k8Lf4QZ000PL4kqmFIrmGoNHXUN-Av7njcVzVq_rF3MU2XVQfC0DLuX-5AyKUFzexM3Vc9tknO2OtnO4e0MGWhVmfAsnrg1g4knhfBPXkkCt_EL--TQvEd1666kvgcOOlnpsG7uRY4R5Frainp6I4CM-6K-BuWMRBNeNpjkhERW0bn1amUpU6bgi7BjH9UlNhuJE10Gmky-4dH7IZ9CIUxm1NEF-9zeGOzXQln-Lo99eKD"/>
</div>
<div>
<h3 className="font-headline text-2xl font-bold">Marcus Varma</h3>
<p className="text-primary font-label uppercase text-xs tracking-widest mb-4">Operations Lead</p>
<p className="text-on-surface-variant leading-relaxed text-sm">Marcus bridges the gap between field operations and logistics, ensuring every artisan has the resources they need to thrive.</p>
</div>
</div>
{/*  Team Member  */}
<div className="flex flex-col gap-6">
<div className="w-full aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Elena S." className="w-full h-full object-cover" data-alt="Close-up artistic portrait of a woman with braided hair, wearing vibrant ethical fashion, looking directly into the lens with soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0pZkHQYMKz8DJJNRrBRP1x_NU-P_Fb2n_ChKlHsdJMcVrpKctsB3ETDAHFIhT-dlXWL3Qa5SF22ZyBH4MlpG1r-dplUDpUWl13aRQ_ljEh735Y2ziEFbLSgrZiTk4_CEvyC4htvhKNE4AAVLuOADd1xIjYYCspy1cMMIbSC0q0VbGM89Ggr4dEtF1QhAzpWt0WSrJpXOAUvx5F9HTfQDqd50RhyCaEUOnYVkP749o7EzRjBpHtWUrYSKteYMQjRh26kGXNbgHspKD"/>
</div>
<div>
<h3 className="font-headline text-2xl font-bold">Elena Silas</h3>
<p className="text-primary font-label uppercase text-xs tracking-widest mb-4">Design Curator</p>
<p className="text-on-surface-variant leading-relaxed text-sm">A textile historian by trade, Elena ensures our contemporary designs stay rooted in traditional aesthetic principles.</p>
</div>
</div>
</div>
</section>
{/*  Call to Action  */}
<section className="mx-6 p-10 bg-primary-container rounded-3xl text-on-primary-container text-center relative overflow-hidden shadow-2xl">
<div className="relative z-10">
<h2 className="font-headline text-3xl font-bold mb-6">Write the Next Chapter with Us.</h2>
<button className="bg-on-primary-container text-primary-container font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:scale-105 transition-transform active:scale-95">
                    Become a Partner
                </button>
</div>
{/*  Glow effect  */}
<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-40"></div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-high py-16 px-6">
<div className="max-w-7xl mx-auto space-y-12">
<div className="space-y-6">
<span className="font-headline text-2xl font-bold text-on-surface block">Desire Foundation</span>
<p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
                    The Ethereal Archive. Preserving the intangible through the tangible.
                </p>
</div>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
<div className="space-y-4">
<h4 className="font-label text-xs uppercase font-bold text-on-surface opacity-60 tracking-widest">Foundation</h4>
<nav className="flex flex-col gap-3">
<a className="text-sm font-medium hover:text-primary transition-colors" href="/about">Our Story</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="/media">Media</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="/work">Projects</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="/join">Join Us</a>
</nav>
</div>
<div className="space-y-4">
<h4 className="font-label text-xs uppercase font-bold text-on-surface opacity-60 tracking-widest">Legal</h4>
<nav className="flex flex-col gap-3">
<a className="text-sm font-medium hover:text-primary transition-colors" href="/">Privacy Policy</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="/">Annual Report</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="/">Contact Us</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="/">Careers</a>
</nav>
</div>
</div>
<div className="pt-12 flex flex-col gap-6 items-center">
<div className="flex gap-6 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary">language</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary">public</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary">mail</span>
</div>
<p className="font-label text-[10px] text-on-surface-variant/60 uppercase tracking-widest text-center">
                    © 2024 Desire Foundation. The Ethereal Archive.
                </p>
</div>
</div>
</footer>
{/*  Bottom Navigation (Mobile Shell)  */}
<nav className="md:hidden fixed bottom-0 w-full z-50 bg-[#f5ffc2]/90 backdrop-blur-2xl px-8 py-4 flex justify-between items-center shadow-[0_-8px_30px_rgba(24,30,0,0.04)] top-0">
<div className="flex flex-col items-center gap-1 text-[#181e00]/60">
<span className="material-symbols-outlined">home</span>
<span className="text-[10px] font-label font-bold uppercase tracking-tighter">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#ab1c6e]">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>auto_awesome</span>
<span className="text-[10px] font-label font-bold uppercase tracking-tighter">Our Story</span>
<div className="w-1 h-1 bg-primary rounded-full"></div>
</div>
<div className="flex flex-col items-center gap-1 text-[#181e00]/60">
<span className="material-symbols-outlined">volunteer_activism</span>
<span className="text-[10px] font-label font-bold uppercase tracking-tighter">Projects</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#181e00]/60">
<span className="material-symbols-outlined">favorite</span>
<span className="text-[10px] font-label font-bold uppercase tracking-tighter">Donate</span>
</div>
</nav>
{/*  Margin to account for bottom nav  */}
<div className="h-20 md:hidden"></div>

    </>
  );
}