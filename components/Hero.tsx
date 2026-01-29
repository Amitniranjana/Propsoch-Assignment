import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://placehold.co/1920x1080/0f172a/ffffff?text=Modern+Real+Estate+Background"
                    alt="Modern Real Estate"
                    fill
                    className="object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P//fwAJ/AP+0Pss6AAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-slate-900/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Find Your Perfect Home <br className="hidden md:block" />
                    <span className="text-blue-400">With Confidence</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
                    Experience the most transparent, data-driven real estate platform.
                    Discover properties rated by our proprietary Soch Score.
                </p>

                {/* Smart Search Bar */}
                <div className="w-full max-w-2xl mx-auto bg-white rounded-full p-2 flex shadow-2xl items-center focus-within:ring-4 focus-within:ring-blue-500/30 transition-all">
                    <div className="pl-6 text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search by Location, Project, or Budget..."
                        className="flex-1 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none text-lg bg-transparent"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                        Search
                    </button>
                </div>

                <div className="mt-8 flex justify-center gap-4 text-sm text-slate-300">
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        Verified Listings
                    </span>
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        Unbiased Scores
                    </span>
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        Zero Spam
                    </span>
                </div>
            </div>
        </section>
    );
}
