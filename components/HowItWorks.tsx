
export default function HowItWorks() {
    const steps = [
        {
            id: "01",
            title: "Search Smart",
            desc: "Filter not just by bhk or price, but by travel time to your office, school quality, and future appreciation potential."
        },
        {
            id: "02",
            title: "Check the Score",
            desc: "Decode every property with our transparent Soch Score. No hidden flaws, no marketing fluff—just data."
        },
        {
            id: "03",
            title: "Buy with Confidence",
            desc: "Connect directly with verified sellers. Our experts guide you through negotiation, paperwork, and closing."
        }
    ];

    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Real Estate, Decoded.</h2>
                    <p className="text-slate-400 text-lg">
                        We've simplified the complex journey of buying a home into a science.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 z-0"></div>

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl font-bold mb-8 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-xl">
                                {step.id}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed max-w-xs">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
