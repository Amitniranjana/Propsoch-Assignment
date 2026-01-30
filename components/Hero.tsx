"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
    const [activeTab, setActiveTab] = useState('buy');

    return (
        <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-16">
            {/* Background Image with Deep Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1600596542815-6ad4c727dd2d?q=80&w=2075&auto=format&fit=crop"
                    alt="Luxury Real Estate"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center">

                <div className="text-center mb-10 animate-fade-in-up w-full max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-white text-xs font-bold mb-6 tracking-widest uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        India's First Data-Driven Real Estate Platform
                    </div>

                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight tracking-tight">
                        Find Your Perfect Home <br className="hidden md:block" />
                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200">With Confidence</span>
                    </h1>

                    <p className="text-base md:text-lg text-slate-200/90 max-w-xl mx-auto leading-relaxed font-light">
                        Experience transparency like never before.
                        Discover properties rated by our proprietary <span className="text-amber-200 font-medium">50-point Soch Score</span>.
                    </p>
                </div>

                {/* Floating Search Container */}
                <div className="w-full max-w-5xl bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-4 md:p-6 border border-white/20">
                    {/* Tabs */}
                    <div className="flex gap-8 mb-6 border-b border-slate-200/60 pb-2 px-2">
                        {['buy', 'rent', 'commercial'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-xs font-bold uppercase tracking-widest pb-3 transition-all relative ${activeTab === tab ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Smart Search Bar */}
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex-[1.5] bg-slate-50 hover:bg-white rounded-xl px-6 py-4 flex items-center border border-slate-200 focus-within:ring-2 focus-within:ring-slate-900/10 focus-within:border-slate-400 transition-all cursor-text group" onClick={() => document.getElementById('search-input')?.focus()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 mr-4 group-focus-within:text-slate-800 transition-colors"><path d="m21 21-4.3-4.3" /><circle cx="11" cy="11" r="8" /></svg>
                            <div className="flex-1">
                                <label htmlFor="search-input" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Location or Project</label>
                                <input
                                    id="search-input"
                                    type="text"
                                    placeholder="e.g. Whitefield, Brigade Utopia..."
                                    className="bg-transparent w-full text-slate-900 placeholder:text-slate-400 focus:outline-none text-base font-medium"
                                />
                            </div>
                        </div>

                        <div className="flex-1 bg-slate-50 hover:bg-white rounded-xl px-6 py-4 flex items-center border border-slate-200 cursor-pointer group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 mr-4 group-hover:text-slate-800 transition-colors"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            <div className="flex-1">
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Budget</span>
                                <span className="block text-slate-900 text-base font-medium">Any Budget</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="m6 9 6 6 6-6" /></svg>
                        </div>

                        <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2">
                            Search Properties
                        </button>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs font-medium tracking-widest uppercase text-slate-400">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 box-shadow-glow"></div>
                        Verified Listings
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        Unbiased Soch Scores
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                        Direct Connect
                    </div>
                </div>

            </div>
        </section>
    );
}
