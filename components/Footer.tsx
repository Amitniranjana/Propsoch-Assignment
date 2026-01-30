import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-0 overflow-hidden relative font-sans">
            <div className="container mx-auto px-6 relative z-10">

                {/* Breadcrumb-like Home Link */}
                <div className="mb-12">
                    <Link href="/" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                        Home
                    </Link>
                </div>

                <hr className="border-slate-800 mb-16" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Column 1: Brand & Info */}
                    <div className="md:col-span-4 pr-8">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
                            <span className="text-2xl font-bold tracking-tight">Propsoch</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-sm">
                            Propsoch is the most advanced real estate research platform for homebuyers in India.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3 mb-12">
                            {['instagram', 'linkedin', 'youtube', 'mail'].map((icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded flex items-center justify-center hover:bg-slate-800 transition-colors">
                                    {icon === 'instagram' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>}
                                    {icon === 'linkedin' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>}
                                    {icon === 'youtube' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>}
                                    {icon === 'mail' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>}
                                </a>
                            ))}
                        </div>

                        <div className="text-[10px] text-slate-500 leading-relaxed font-mono">
                            <p className="font-bold text-slate-400 mb-1">Thinkr Proptech Private Limited</p>
                            <p>RERA: PRM/KA/RERA/1251/446/AG/230527/003108</p>
                            <p>GSTIN: 123U445DAD213 &nbsp; CIN: 2131221EU5651</p>
                        </div>
                    </div>

                    {/* Column 2: Developers */}
                    <div className="md:col-span-3">
                        <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Top Developers in Bengaluru</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            {['Prestige Developers', 'Godrej Properties', 'Brigade Developers', 'Sobha Developers', 'Assetz Developers'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-orange-500 transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Areas */}
                    <div className="md:col-span-3">
                        <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Top Areas in Bengaluru</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            {['Whitefield', 'Sarjapur Road', 'Bellandur', 'Yelahanka', 'HSR Layout'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-orange-500 transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Filters */}
                    <div className="md:col-span-2">
                        <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Top Filters</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            {['Luxury Homes', 'Properties < 3Cr', 'Properties > 2Cr', 'Ready To Move In', 'Townships'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-orange-500 transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-900 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <div className="flex gap-6 mb-4 md:mb-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms & Conditions</Link>
                    </div>
                    <div>
                        © Copyright Thinkr Proptech Pvt. Ltd. 2026
                    </div>
                </div>
            </div>

            {/* Massive Brand Overlay */}
            <div className="absolute -bottom-4 md:-bottom-12 left-0 right-0 z-0 flex justify-center pointer-events-none select-none overflow-hidden">
                <h1 className="text-[18vw] font-bold text-transparent bg-clip-text bg-gradient-to-t from-orange-900/20 to-transparent leading-none tracking-tighter opacity-50">
                    Propsoch
                </h1>
            </div>
        </footer>
    );
}
