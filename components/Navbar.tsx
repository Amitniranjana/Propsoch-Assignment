"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-800 py-4 transition-all duration-300">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:bg-blue-700 transition-colors">P</div>
                    <span className="text-xl font-bold tracking-tight text-white transition-colors">Propsoch</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-slate-200">
                    <Link href="#" className="hover:text-amber-400 transition-colors">Buy</Link>
                    <Link href="#" className="hover:text-amber-400 transition-colors">Rent</Link>
                    <Link href="#" className="hover:text-amber-400 transition-colors">Soch Score</Link>
                    <Link href="#" className="hover:text-amber-400 transition-colors">Insights</Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="font-medium text-white hover:text-blue-200 transition-colors">Log In</button>
                    <button className="bg-white text-slate-900 hover:bg-blue-50 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95">
                        Post Property
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 absolute w-full left-0 top-full flex flex-col p-6 shadow-2xl h-[calc(100vh-80px)] animate-fade-in-down">
                    <div className="flex flex-col gap-6 text-lg font-medium text-slate-800">
                        <Link href="#" className="flex justify-between items-center py-2 border-b border-slate-100" onClick={() => setIsOpen(false)}>
                            Buy <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="m9 18 6-6-6-6" /></svg>
                        </Link>
                        <Link href="#" className="flex justify-between items-center py-2 border-b border-slate-100" onClick={() => setIsOpen(false)}>
                            Rent <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="m9 18 6-6-6-6" /></svg>
                        </Link>
                        <Link href="#" className="flex justify-between items-center py-2 border-b border-slate-100" onClick={() => setIsOpen(false)}>
                            Soch Score <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="m9 18 6-6-6-6" /></svg>
                        </Link>
                        <Link href="#" className="flex justify-between items-center py-2 border-b border-slate-100" onClick={() => setIsOpen(false)}>
                            Insights <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="m9 18 6-6-6-6" /></svg>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4 mt-auto">
                        <button className="text-slate-600 font-bold py-4 border-2 border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">Log In</button>
                        <button className="bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20 active:scale-95 transition-all">Post Property</button>
                    </div>
                </div>
            )}
        </nav>
    );
}
