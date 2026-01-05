<html lang="en" class="scroll-smooth"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Developer Portfolio | Full Stack Engineer</title>
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet">
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
<!-- GSAP & Lenis -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/@studio-freight/lenis@1.0.29/dist/lenis.min.js"></script>
<!-- Iconify (Lucide) -->
<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>

<script>
tailwind.config = {
theme: {
extend: {
colors: {
accent: '#D4B483', // Light Brown / Sand
surface: '#080808',
secondary: '#8C7A63',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'spin-slow': 'spin 15s linear infinite',
'reverse-spin': 'spin 20s linear infinite reverse',
'marquee': 'marquee 30s linear infinite',
'scan': 'scan 4s linear infinite',
'blink': 'blink 2s ease-in-out infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-33.333%)' },
},
scan: {
'0%': { top: '-20%' },
'100%': { top: '120%' },
},
blink: {
'0%, 100%': { opacity: 1 },
'50%': { opacity: 0.3 },
}
}
}
}
}
</script>
<style>
/* --- CORE SETTINGS --- */
html {
background-color: #050403; /* Warm Dark */
}
body {
margin: 0; padding: 0;
background-color: transparent;
color: #e6e0d4;
overflow-x: hidden;
cursor: auto;
}
/* --- UTILS --- */
.glass-panel {
background: rgba(15, 12, 10, 0.7);
backdrop-filter: blur(16px);
border: 1px solid rgba(212, 180, 131, 0.1);
position: relative;
overflow: hidden;
}
/* Spotlight Effect - Modified for Brown Theme */
.spotlight-card::before {
content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
border-radius: inherit;
background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(212, 180, 131, 0.06), transparent 40%);
z-index: 2; opacity: 0; transition: opacity 0.5s; pointer-events: none;
}
.spotlight-card:hover::before { opacity: 1; }
.spotlight-card::after {
content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
border-radius: inherit; padding: 1px;
background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(212, 180, 131, 0.4), transparent 40%);
-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
-webkit-mask-composite: xor; mask-composite: exclude;
z-index: 3; opacity: 0; transition: opacity 0.5s; pointer-events: none;
}
.spotlight-card:hover::after { opacity: 1; }

.marquee-mask {
mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
-webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
.scan-line {
position: absolute; left: 0; width: 100%; height: 50px;
background: linear-gradient(to bottom, transparent, rgba(212, 180, 131, 0.2), transparent);
opacity: 0.5; animation: scan 3s linear infinite; z-index: 10; pointer-events: none;
}
.noise-overlay {
position: fixed; inset: 0; z-index: 9000; pointer-events: none; opacity: 0.03;
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
.btn-magnetic { display: inline-block; }
.dot-grid {
background-image: radial-gradient(rgba(212, 180, 131, 0.15) 1px, transparent 1px);
background-size: 20px 20px;
}
.skew-target { will-change: transform; }

/* Filter to warm up the blue aura background */
.aura-filter {
filter: sepia(0.8) hue-rotate(330deg) saturate(0.6) brightness(0.8);
}
</style></head>
<body class="antialiased selection:bg-accent selection:text-black">

    <!-- GLOBAL BACKDROP -->
    <div class="fixed inset-0 bg-[#050403] -z-50"></div>

    <!-- 3D BACKGROUND (Modified Hue) -->
    <div class="aura-background-component fixed top-0 w-full h-screen -z-10 aura-filter" data-alpha-mask="80" style="mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent); -webkit-mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)">
        <div class="aura-background-component top-0 w-full -z-10 absolute h-full">
            <div data-us-project="NMlvqnkICwYYJ6lYb064" class="absolute w-full h-full left-0 top-0 -z-10"></div>
            <script type="text/javascript">
                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            </script>
        </div>
    </div>

    <!-- NOISE LAYER -->
    <div class="noise-overlay"></div>

    <!-- NAVIGATION -->
    <nav class="fixed top-0 w-full z-50 border-b border-accent/10 bg-[#050403]/80 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <a href="#" class="group hover-trigger">
                <span class="font-serif font-bold text-xl tracking-tight text-white group-hover:text-accent transition-colors italic">Alex<span class="text-accent group-hover:text-white transition-colors not-italic">.Dev</span></span>
            </a>
            <div class="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-400">
                <a href="#work" class="hover:text-accent transition-colors hover-trigger">/ WORK</a>
                <a href="#about" class="hover:text-accent transition-colors hover-trigger">/ STACK</a>
                <a href="#process" class="hover:text-accent transition-colors hover-trigger">/ PROCESS</a>
            </div>
            <div class="flex items-center gap-4">
                <span class="hidden lg:block text-[10px] font-mono text-accent flex items-center gap-2 border border-accent/20 px-3 py-1 rounded-full bg-accent/5">
                    <span class="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                    AVAILABLE FOR HIRE
                </span>
                <button class="border border-white/20 px-6 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-accent hover:border-accent hover:text-black transition-all hover-trigger btn-magnetic">
                    Let's Talk
                </button>
            </div>
        </div>
    </nav>

    <main>
        <!-- HERO SECTION -->
        <section class="skew-target relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403] z-10 pointer-events-none"></div>

            <div class="relative z-20 text-center max-w-5xl px-6">
                <div class="inline-flex items-center gap-3 border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
                    <span class="font-mono text-[10px] text-accent tracking-widest uppercase">Full Stack Engineer</span>
                </div>
                <h1 class="font-serif font-medium text-6xl md:text-9xl tracking-tight mb-6 leading-[0.9] text-white mix-blend-overlay scramble-text italic">
                    Digital <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-gray-400 not-italic font-bold">Alchemy</span>
                </h1>
                <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-sans font-light">
                    Transforming complex requirements into elegant, high-performance web applications. Focused on scalability, interactivity, and pixel-perfect design.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button class="bg-accent text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white transition-all hover-trigger w-full sm:w-auto btn-magnetic">
                        View Projects
                    </button>
                    <button class="px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all hover-trigger w-full sm:w-auto btn-magnetic">
                        Download CV
                    </button>
                </div>
            </div>

            <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-50">
                <span class="text-[10px] font-mono tracking-widest text-accent">SCROLL</span>
                <div class="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
            </div>
        </section>

        <!-- MARQUEE (Tech Stack) -->
        <div class="border-y border-accent/10 bg-[#0a0806] py-6 relative z-20 overflow-hidden marquee-mask w-full">
            <div class="flex whitespace-nowrap animate-marquee w-[max-content]">
                <div class="flex gap-20 px-10 items-center">
                    <div class="flex items-center gap-2 text-white/40 hover:text-accent transition-colors"><iconify-icon icon="lucide:code-2" width="24"></iconify-icon> <span class="font-serif text-xl italic">React.js</span></div>
                    <div class="flex items-center gap-2 text-white/40 hover:text-accent transition-colors"><iconify-icon icon="lucide:database" width="24"></iconify-icon> <span class="font-serif text-xl italic">PostgreSQL</span></div>
                    <div class="flex items-center gap-2 text-white/40 hover:text-accent transition-colors"><iconify-icon icon="lucide:box" width="24"></iconify-icon> <span class="font-serif text-xl italic">Next.js</span></div>
                    <div class="flex items-center gap-2 text-white/40 hover:text-accent transition-colors"><iconify-icon icon="lucide:file-json" width="24"></iconify-icon> <span class="font-serif text-xl italic">TypeScript</span></div>
                    <div class="flex items-center gap-2 text-white/40 hover:text-accent transition-colors"><iconify-icon icon="lucide:cloud" width="24"></iconify-icon> <span class="font-serif text-xl italic">AWS</span></div>
                    <div class="flex items-center gap-2 text-white/40 hover:text-accent transition-colors"><iconify-icon icon="lucide:layers" width="24"></iconify-icon> <span class="font-serif text-xl italic">Tailwind</span></div>
                </div>
                <!-- Duplicate for seamless loop -->
                <div class="flex gap-20 px-10 items-center">
                    <div class="flex items-center gap-2 text-white/40 hover:text-accent transition-colors"><iconify-icon icon="lucide:code-2" width="24"></iconify-icon> <span class="font-serif text-xl italic">React.js</span></div>
                    <div class="flex items-center gap-2 text-white/40 hover:text-accent transition-colors"><iconify-icon icon="lucide:database" width="24"></iconify-icon> <span class="font-serif text-xl italic">PostgreSQL</span></div>
                    <div class="flex items-center gap-2 text-white/40 hover:text-accent transition-colors"><iconify-icon icon="lucide:box" width="24"></iconify-icon> <span class="font-serif text-xl italic">Next.js</span></div>
                    <div class="flex items-center gap-2 text-white/40 hover:text-accent transition-colors"><iconify-icon icon="lucide:file-json" width="24"></iconify-icon> <span class="font-serif text-xl italic">TypeScript</span></div>
                    <div class="flex items-center gap-2 text-white/40 hover:text-accent transition-colors"><iconify-icon icon="lucide:cloud" width="24"></iconify-icon> <span class="font-serif text-xl italic">AWS</span></div>
                    <div class="flex items-center gap-2 text-white/40 hover:text-accent transition-colors"><iconify-icon icon="lucide:layers" width="24"></iconify-icon> <span class="font-serif text-xl italic">Tailwind</span></div>
                </div>
            </div>
        </div>

        <!-- BENTO GRID -->
        <section id="work" class="skew-target py-32 px-6 relative z-20">
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                    <div>
                        <span class="text-accent font-mono text-xs tracking-widest block mb-2">/// SELECTED WORKS</span>
                        <h2 class="font-serif italic text-white text-4xl md:text-5xl">Recent Creations</h2>
                    </div>
                    <div class="text-right">
                        <div class="flex items-center justify-end gap-2 mb-1">
                            <span class="w-2 h-2 bg-accent rounded-full animate-blink"></span>
                            <span class="font-mono text-xs text-white">STATUS: OPEN</span>
                        </div>
                        <p class="text-gray-500 font-mono text-xs uppercase tracking-widest">
                            Last Commit: 2 Hours Ago
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-auto md:h-[900px]">
                    <!-- Featured Project (Big Card) -->
                    <div class="md:col-span-2 md:row-span-2 glass-panel spotlight-card rounded-xl overflow-hidden relative group">
                        <div class="scan-line"></div>
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" alt="Dashboard">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-transparent"></div>
                        <div class="absolute top-6 right-6 border border-accent/20 bg-black/50 px-3 py-1 rounded text-[10px] font-mono text-accent">FULL_STACK</div>
                        <div class="absolute bottom-0 left-0 p-8 z-10 w-full">
                            <div class="w-10 h-10 bg-accent flex items-center justify-center mb-4 text-black rounded-lg">
                                <iconify-icon icon="lucide:layout-dashboard" width="20"></iconify-icon>
                            </div>
                            <h3 class="font-serif font-medium italic text-3xl text-white mb-2">FinTech Dashboard</h3>
                            <p class="text-gray-300 text-sm max-w-sm font-sans">Real-time financial data visualization utilizing WebSockets, D3.js, and Supabase backend.</p>
                            <div class="flex gap-2 mt-4">
                                <span class="text-[10px] border border-white/10 px-2 py-1 rounded text-gray-400">React</span>
                                <span class="text-[10px] border border-white/10 px-2 py-1 rounded text-gray-400">D3.js</span>
                                <span class="text-[10px] border border-white/10 px-2 py-1 rounded text-gray-400">Node</span>
                            </div>
                        </div>
                    </div>

                    <!-- GitHub Stats -->
                    <div class="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between">
                        <div class="flex justify-between items-start">
                            <span class="font-mono text-[10px] text-gray-500 uppercase">Contributions</span>
                            <iconify-icon icon="lucide:github" class="text-white" width="16"></iconify-icon>
                        </div>
                        <div class="text-center py-2">
                            <div class="text-4xl font-serif italic text-white counter">1,248</div>
                            <div class="text-[10px] text-gray-500 mt-1">Commits this year</div>
                        </div>
                        <!-- Github Graph Visual -->
                        <div class="flex gap-1 justify-center mt-2 opacity-50">
                            <div class="w-1 h-4 bg-accent/20 rounded-sm"></div>
                            <div class="w-1 h-6 bg-accent/40 rounded-sm"></div>
                            <div class="w-1 h-3 bg-accent/60 rounded-sm"></div>
                            <div class="w-1 h-8 bg-accent rounded-sm"></div>
                            <div class="w-1 h-5 bg-accent/40 rounded-sm"></div>
                        </div>
                    </div>

                    <!-- Tech Stack (Grid) -->
                    <div class="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between overflow-hidden">
                         <div class="flex items-center justify-between mb-4">
                            <span class="font-serif italic text-white text-lg">Arsenal</span>
                            <iconify-icon icon="lucide:cpu" class="text-accent" width="16"></iconify-icon>
                        </div>
                        <div class="grid grid-cols-3 gap-4 place-items-center">
                             <div class="text-gray-400 hover:text-white transition-colors"><iconify-icon icon="lucide:file-code" width="24"></iconify-icon></div>
                             <div class="text-gray-400 hover:text-white transition-colors"><iconify-icon icon="lucide:database" width="24"></iconify-icon></div>
                             <div class="text-gray-400 hover:text-white transition-colors"><iconify-icon icon="lucide:server" width="24"></iconify-icon></div>
                             <div class="text-gray-400 hover:text-white transition-colors"><iconify-icon icon="lucide:globe" width="24"></iconify-icon></div>
                             <div class="text-gray-400 hover:text-white transition-colors"><iconify-icon icon="lucide:smartphone" width="24"></iconify-icon></div>
                             <div class="text-gray-400 hover:text-white transition-colors"><iconify-icon icon="lucide:terminal" width="24"></iconify-icon></div>
                        </div>
                    </div>

                    <!-- Experience -->
                    <div class="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between group">
                        <div class="flex justify-between items-center mb-2">
                            <span class="font-mono text-[10px] text-gray-500 uppercase">Experience</span>
                            <iconify-icon icon="lucide:briefcase" class="text-white" width="14"></iconify-icon>
                        </div>
                        <div>
                            <div class="text-xl font-serif text-white mb-1">Senior Eng.</div>
                            <div class="text-xs text-accent">TechCorp Inc.</div>
                        </div>
                        <div class="w-full bg-white/5 h-1 rounded-full overflow-hidden mt-4">
                             <div class="h-full bg-accent w-[75%]"></div>
                        </div>
                        <div class="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                            <span>2020</span>
                            <span>PRESENT</span>
                        </div>
                    </div>

                    <!-- Project 2 (Medium) -->
                    <div class="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 relative overflow-hidden group">
                        <div class="absolute inset-0 bg-accent/5 z-0 group-hover:bg-accent/10 transition-colors"></div>
                         <div class="relative z-10 flex flex-col h-full justify-between">
                            <div class="flex justify-between items-start">
                                <span class="font-serif text-lg italic text-white">E-Commerce</span>
                                <iconify-icon icon="lucide:shopping-bag" class="text-white" width="16"></iconify-icon>
                            </div>
                            <div class="font-mono text-[10px] text-accent/80 space-y-1">
                                <div class="flex items-center gap-2"><iconify-icon icon="lucide:check" width="10"></iconify-icon> STRIPE INTEGRATION</div>
                                <div class="flex items-center gap-2"><iconify-icon icon="lucide:check" width="10"></iconify-icon> HEADLESS CMS</div>
                                <div class="flex items-center gap-2"><iconify-icon icon="lucide:check" width="10"></iconify-icon> NEXT.JS 14</div>
                            </div>
                        </div>
                    </div>

                    <!-- Project 3 -->
                    <div class="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-8 flex items-center justify-between hover-trigger">
                         <div class="flex gap-6 items-center">
                             <div class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-accent">
                                <iconify-icon icon="lucide:sparkles" width="24"></iconify-icon>
                             </div>
                             <div>
                                <h3 class="font-serif text-xl text-white mb-1">AI SaaS Starter</h3>
                                <p class="text-gray-400 text-xs font-mono">Boilerplate with Auth, DB, and OpenAI API.</p>
                             </div>
                         </div>
                         <div class="hidden sm:block">
                            <button class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-black transition-all">
                                <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
                            </button>
                         </div>
                    </div>

                    <!-- Location / Contact -->
                    <div class="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 relative overflow-hidden flex flex-col justify-center">
                        <div class="absolute inset-0 dot-grid opacity-30"></div>
                        <div class="flex justify-between items-center mb-2 z-10 absolute top-6 left-6 right-6">
                            <span class="font-serif italic text-white text-lg">Based in San Francisco</span>
                            <span class="text-accent text-xs font-mono border border-accent/30 px-2 py-0.5 rounded flex items-center gap-2">
                                <span class="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                                10:42 AM PST
                            </span>
                        </div>
                        <!-- Abstract Map Lines -->
                        <div class="relative w-full h-full z-0 mt-8 opacity-40">
                            <svg class="absolute inset-0 w-full h-full" style="pointer-events: none;">
                                <path d="M50 150 Q 150 50 350 150 T 650 150" fill="none" stroke="#D4B483" stroke-width="1" stroke-dasharray="5,5"></path>
                                <circle cx="350" cy="150" r="4" fill="#D4B483" class="animate-pulse"></circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CODE / DEVELOPER SECTION -->
        <section id="about" class="skew-target py-24 bg-[#050403] border-t border-accent/10 relative z-20">
            <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span class="text-accent font-mono text-xs tracking-widest block mb-4">/// CLEAN CODE</span>
                    <h2 class="font-serif italic text-4xl md:text-5xl mb-6 text-white scramble-text">Built for Performance</h2>
                    <p class="text-gray-400 text-lg mb-8 leading-relaxed font-sans font-light">
                        I write maintainable, type-safe code that scales. From complex backend architectures to fluid frontend animations.
                    </p>
                    <div class="space-y-6">
                        <div class="group flex gap-4 p-4 border border-transparent hover:border-accent/10 rounded-lg transition-all cursor-pointer hover-trigger">
                            <div class="font-mono text-gray-600 text-sm group-hover:text-accent">01</div>
                            <div>
                                <h4 class="font-bold text-white font-serif">Type Safety</h4>
                                <p class="text-sm text-gray-500">End-to-end type safety with TypeScript & tRPC.</p>
                            </div>
                        </div>
                        <div class="group flex gap-4 p-4 border border-transparent hover:border-accent/10 rounded-lg transition-all cursor-pointer hover-trigger">
                            <div class="font-mono text-gray-600 text-sm group-hover:text-accent">02</div>
                            <div>
                                <h4 class="font-bold text-white font-serif">Modern Stack</h4>
                                <p class="text-sm text-gray-500">Leveraging RSC, Suspense, and Server Actions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Code Block -->
                <div class="relative group hover-trigger">
                    <div class="absolute -inset-1 bg-gradient-to-r from-accent to-[#8C7A63] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                    <div class="relative bg-[#0a0a0a] border border-white/10 rounded-lg p-6 font-mono text-sm shadow-2xl overflow-hidden min-h-[300px]">
                        <!-- Window Controls -->
                        <div class="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                            <div class="flex gap-2">
                                <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div class="text-[10px] text-gray-600">ProductCard.tsx</div>
                        </div>

                        <div class="text-gray-400 leading-relaxed text-xs md:text-sm">
                            <span class="text-[#c678dd]">import</span> { motion } <span class="text-[#c678dd]">from</span> <span class="text-[#98c379]">'framer-motion'</span>;<br>
                            <br>
                            <span class="text-[#c678dd]">export const</span> <span class="text-[#e5c07b]">ProductCard</span> = ({ <span class="text-[#e06c75]">data</span> }) => {<br>
                            &nbsp;&nbsp;<span class="text-[#c678dd]">return</span> (<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="text-[#e06c75]">motion.div</span><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#d19a66]">initial</span>={{ <span class="text-[#d19a66]">opacity</span>: <span class="text-[#d19a66]">0</span> }}<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#d19a66]">animate</span>={{ <span class="text-[#d19a66]">opacity</span>: <span class="text-[#d19a66]">1</span> }}<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#d19a66]">className</span>=<span class="text-[#98c379]">"p-4 rounded-xl bg-surface"</span><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="text-[#e06c75]">h3</span>&gt;{<span class="text-[#e06c75]">data.title</span>}&lt;/<span class="text-[#e06c75]">h3</span>&gt;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="text-[#e06c75]">Price</span> <span class="text-[#d19a66]">value</span>={<span class="text-[#e06c75]">data.price</span>} /&gt;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="text-[#e06c75]">AddToCart</span> /&gt;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class="text-[#e06c75]">motion.div</span>&gt;<br>
                            &nbsp;&nbsp;);<br>
                            };
                        </div>
                        <div class="mt-2 text-accent animate-pulse">_</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PROCESS SECTION (STICKY FIXED) -->
        <section id="process" class="py-24 bg-[#050403] relative z-20 border-t border-accent/10">
            <div class="max-w-[1400px] mx-auto px-6">
                <!-- IMPORTANT: items-start allows left col to stick, while right col scrolls -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 relative">

                    <!-- Left Column: Sticky Visual -->
                    <div class="order-2 lg:order-1 relative">
                        <div class="sticky top-24 w-full aspect-square max-h-[60vh] bg-[#0a0806] border border-accent/10 rounded-2xl overflow-hidden flex items-center justify-center p-10 group shadow-2xl">
                            <!-- Background Grid -->
                            <div class="absolute inset-0 bg-[linear-gradient(rgba(212,180,131,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,180,131,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                            <!-- Central Node -->
                            <div class="relative w-40 h-40 border border-accent rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(212,180,131,0.2)] bg-black/50 backdrop-blur-sm">
                                <iconify-icon icon="lucide:workflow" class="text-accent text-4xl animate-pulse" width="48"></iconify-icon>
                            </div>

                            <!-- Orbiting Nodes -->
                            <div class="absolute w-[70%] h-[70%] border border-white/5 rounded-full animate-spin-slow">
                                <div class="w-8 h-8 bg-[#0a0806] border border-accent/50 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
                                    <iconify-icon icon="lucide:code" class="text-white text-[10px]" width="14"></iconify-icon>
                                </div>
                            </div>
                            <div class="absolute w-[90%] h-[90%] border border-white/5 rounded-full animate-reverse-spin">
                                <div class="w-8 h-8 bg-[#0a0806] border border-accent/50 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
                                    <iconify-icon icon="lucide:figma" class="text-white text-[10px]" width="14"></iconify-icon>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Scrollable Text Steps -->
                    <div class="order-1 lg:order-2 py-20 pb-0">
                        <span class="text-accent font-mono text-xs tracking-widest block mb-10">/// WORKFLOW</span>

                        <div class="step-item mb-48 opacity-30 transition-opacity duration-500">
                            <h3 class="text-4xl font-serif italic mb-4 text-white">01. Discovery</h3>
                            <p class="text-xl text-gray-300 leading-relaxed font-light font-sans">
                                Understanding the core problem. I dive deep into requirements, user personas, and technical constraints before writing a single line of code.
                            </p>
                        </div>

                        <div class="step-item mb-48 opacity-30 transition-opacity duration-500">
                            <h3 class="text-4xl font-serif italic mb-4 text-white">02. Architecture</h3>
                            <p class="text-xl text-gray-300 leading-relaxed font-light font-sans">
                                Designing scalable systems. Choosing the right database schema, API structure, and frontend patterns to ensure longevity and performance.
                            </p>
                        </div>

                        <div class="step-item opacity-30 transition-opacity duration-500">
                            <h3 class="text-4xl font-serif italic mb-4 text-white">03. Execution</h3>
                            <p class="text-xl text-gray-300 leading-relaxed font-light font-sans">
                                Agile development cycles with continuous deployment. Rigorous testing and pixel-perfect implementation of the design.
                            </p>
                        </div>

                        <div class="h-40"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SERVICES / PRICING -->
        <section class="skew-target py-32 px-6 bg-[#050403] relative z-20 border-t border-accent/10">
            <div class="max-w-7xl mx-auto">
                <h2 class="font-serif italic font-medium text-4xl text-white text-center mb-16 scramble-text">Collaboration</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors hover-trigger spotlight-card glass-panel">
                        <div class="font-mono text-xs text-gray-500 mb-4 z-10 relative">/ FREELANCE</div>
                        <div class="text-3xl font-serif italic text-white mb-6 z-10 relative">Project</div>
                        <ul class="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative">
                            <li class="flex gap-3"><iconify-icon icon="lucide:check" class="text-accent"></iconify-icon> MVP Development</li>
                            <li class="flex gap-3"><iconify-icon icon="lucide:check" class="text-accent"></iconify-icon> Frontend Architecture</li>
                        </ul>
                        <button class="w-full py-3 border border-white/20 rounded font-bold uppercase text-xs tracking-wider text-white hover:bg-white hover:text-black transition-all z-10 relative">Inquire</button>
                    </div>

                    <div class="border border-accent bg-[#0a0a0a] p-8 rounded-2xl relative hover-trigger transform md:-translate-y-4 shadow-[0_0_30px_rgba(212,180,131,0.1)] spotlight-card">
                        <div class="absolute top-0 right-0 bg-accent text-black text-[10px] font-bold px-3 py-1 uppercase rounded-bl-lg z-10">Limited</div>
                        <div class="font-mono text-xs text-accent mb-4 z-10 relative">/ RETAINER</div>
                        <div class="text-3xl font-serif italic text-white mb-6 z-10 relative">Consulting</div>
                        <ul class="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative">
                            <li class="flex gap-3"><span class="text-accent"><iconify-icon icon="lucide:check"></iconify-icon></span> Code Audits</li>
                            <li class="flex gap-3"><span class="text-accent"><iconify-icon icon="lucide:check"></iconify-icon></span> Technical Leadership</li>
                        </ul>
                        <button class="w-full py-3 bg-accent text-black rounded font-bold uppercase text-xs tracking-wider hover:bg-white transition-all z-10 relative">Book Call</button>
                    </div>

                    <div class="border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors hover-trigger spotlight-card glass-panel">
                        <div class="font-mono text-xs text-gray-500 mb-4 z-10 relative">/ FULL-TIME</div>
                        <div class="text-3xl font-serif italic text-white mb-6 z-10 relative">Role</div>
                        <ul class="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative">
                            <li class="flex gap-3"><iconify-icon icon="lucide:check" class="text-accent"></iconify-icon> Senior Engineer</li>
                            <li class="flex gap-3"><iconify-icon icon="lucide:check" class="text-accent"></iconify-icon> Tech Lead</li>
                        </ul>
                        <button class="w-full py-3 border border-white/20 rounded font-bold uppercase text-xs tracking-wider text-white hover:bg-white hover:text-black transition-all z-10 relative">View Resume</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="bg-[#020202] pt-32 pb-10 px-6 border-t border-accent/10 relative overflow-hidden">
            <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-5">
                <span class="text-[20vw] font-serif italic font-black text-white whitespace-nowrap -ml-10">ALEX.DEV</span>
            </div>

            <div class="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div>
                    <h3 class="text-2xl font-serif italic text-white mb-6">Start a project?</h3>
                    <div class="flex gap-4">
                        <input type="email" placeholder="hello@example.com" class="bg-white/5 border border-white/10 px-4 py-3 rounded text-sm w-64 focus:outline-none focus:border-accent text-white font-mono">
                        <button class="bg-accent text-black px-6 py-3 rounded font-bold text-sm hover:bg-white transition-colors">SEND</button>
                    </div>
                </div>

                <div class="flex gap-12 text-sm text-gray-500 font-mono tracking-wider uppercase">
                    <div class="flex flex-col gap-3">
                        <span class="text-white">Socials</span>
                        <a href="#" class="hover:text-accent transition-colors">GitHub</a>
                        <a href="#" class="hover:text-accent transition-colors">LinkedIn</a>
                        <a href="#" class="hover:text-accent transition-colors">Twitter</a>
                    </div>
                    <div class="flex flex-col gap-3">
                        <span class="text-white">Legal</span>
                        <a href="#" class="hover:text-accent transition-colors">Privacy</a>
                        <a href="#" class="hover:text-accent transition-colors">Imprint</a>
                    </div>
                </div>
            </div>

            <div class="max-w-[1400px] mx-auto mt-20 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-mono uppercase">
                <span>© 2024 ALEX DEV. ALL RIGHTS RESERVED.</span>
                <span class="mt-2 md:mt-0">DESIGNED IN SAN FRANCISCO</span>
            </div>
        </footer>

    </main>

    <script>
        // --- 1. SETUP LENIS & SCROLL SKEW ---
        const lenis = new Lenis({
            lerp: 0.1,
            smooth: true,
            direction: 'vertical',
        });

        let currentSkew = 0;
        function raf(time) {
            lenis.raf(time);

            // Interaction: Liquid Scroll Skew
            const skewTarget = lenis.velocity * 0.1;
            currentSkew += (skewTarget - currentSkew) * 0.1;
            const clampedSkew = Math.max(Math.min(currentSkew, 5), -5);

            document.querySelectorAll('.skew-target').forEach(el => {
                el.style.transform = `skewY(${clampedSkew}deg)`;
            });

            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- 2. SPOTLIGHT INTERACTION ---
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.spotlight-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // --- 3. TEXT SCRAMBLE INTERACTION ---
        class ScrambleText {
            constructor(el) {
                this.el = el;
                this.chars = '!<>-_\\/[]{}—=+*^?#________';
                this.update = this.update.bind(this);
            }
            setText(newText) {
                const oldText = this.el.innerText;
                const length = Math.max(oldText.length, newText.length);
                const promise = new Promise((resolve) => this.resolve = resolve);
                this.queue = [];
                for (let i = 0; i < length; i++) {
                    const from = oldText[i] || '';
                    const to = newText[i] || '';
                    const start = Math.floor(Math.random() * 40);
                    const end = start + Math.floor(Math.random() * 40);
                    this.queue.push({ from, to, start, end });
                }
                cancelAnimationFrame(this.frameRequest);
                this.frame = 0;
                this.update();
                return promise;
            }
            update() {
                let output = '';
                let complete = 0;
                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let { from, to, start, end, char } = this.queue[i];
                    if (this.frame >= end) {
                        complete++;
                        output += to;
                    } else if (this.frame >= start) {
                        if (!char || Math.random() < 0.28) {
                            char = this.randomChar();
                            this.queue[i].char = char;
                        }
                        output += `<span class="opacity-50 font-mono not-italic">${char}</span>`;
                    } else {
                        output += from;
                    }
                }
                this.el.innerHTML = output;
                if (complete === this.queue.length) {
                    this.resolve();
                } else {
                    this.frameRequest = requestAnimationFrame(this.update);
                    this.frame++;
                }
            }
            randomChar() {
                return this.chars[Math.floor(Math.random() * this.chars.length)];
            }
        }

        const scrambleElements = document.querySelectorAll('.scramble-text');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const fx = new ScrambleText(el);
                    fx.setText(el.innerText);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        scrambleElements.forEach(el => observer.observe(el));

        // --- 4. MAGNETIC BUTTONS ---
        const buttons = document.querySelectorAll('.btn-magnetic');
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.2 });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.2 });
            });
        });

        // --- 5. ANIMATIONS ---
        gsap.registerPlugin(ScrollTrigger);

        const counter = document.querySelector('.counter');
        if(counter) {
            gsap.from(counter, {
                textContent: 0,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                    once: true
                }
            });
        }

        const stepItems = document.querySelectorAll('.step-item');
        stepItems.forEach((item) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "bottom center",
                    onEnter: () => gsap.to(item, { opacity: 1, duration: 0.5 }),
                    onLeave: () => gsap.to(item, { opacity: 0.3, duration: 0.5 }),
                    onEnterBack: () => gsap.to(item, { opacity: 1, duration: 0.5 }),
                    onLeaveBack: () => gsap.to(item, { opacity: 0.3, duration: 0.5 }),
                }
            });
        });

        gsap.utils.toArray('.glass-panel').forEach((panel, i) => {
            gsap.from(panel, {
                scrollTrigger: {
                    trigger: panel,
                    start: "top 95%"
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.05,
                ease: "power3.out"
            });
        });

    </script>

</body></html>
