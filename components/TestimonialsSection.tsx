"use client";

import Image from 'next/image';

const TestimonialCard = ({ name, role, quote, image }: { name: string, role: string, quote: string, image: string }) => (
    <div className="bg-white p-10 rounded-xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center gap-5 mb-8">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="64px"
                    unoptimized
                />
            </div>
            <div>
                <h4 className="font-serif font-bold text-slate-900 text-xl">{name}</h4>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">{role}</p>
            </div>
        </div>
        <div className="flex-1">
            <p className="text-slate-600 italic leading-relaxed text-lg font-serif">"{quote}"</p>
        </div>
        <div className="mt-8 flex text-amber-400 gap-1">
            {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            ))}
        </div>
    </div>
);

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Priya Sharma",
            role: "First-time Homebuyer",
            quote: "The Soch Score helped me realize my dream location had poor connectivity. Propsoch saved me from a bad investment!",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
        },
        {
            name: "Rahul Verma",
            role: "IT Professional",
            quote: "Finally, a platform that doesn't spam me. The data is clear, and the verified listings gave me confidence.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
        },
        {
            name: "Anjali Gupta",
            role: "Property Investor",
            quote: "I use Propsoch to screen new projects. The 'Value for Money' metric is incredibly accurate compared to market rates.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
        },
        {
            name: "Vikram Malhotra",
            role: "Business Owner",
            quote: "The transparency is unmatched. I knew exactly what I was paying for, down to the carpet area details.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
        },
        {
            name: "Sneha Reddy",
            role: "Architect",
            quote: "As an architect, I appreciate the construction quality audits. It's rare to see such detailed technical reports.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
        },
        {
            name: "Amit Desai",
            role: "NRI Buyer",
            quote: "Buying from abroad was stressful until I found Propsoch. Their video tours and verified documents made it easy.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-slate-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-[0%] right-[0%] w-[500px] h-[500px] bg-amber-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">Testimonials</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                            Trusted by 10,000+ <br /> Happy Homeowners
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-light">
                            See why savvy buyers rely on Propsoch for their real estate journey.
                        </p>
                    </div>
                    <button className="hidden md:inline-flex items-center justify-center px-8 py-4 border border-slate-900 rounded-sm text-slate-900 font-bold uppercase tracking-wider text-xs hover:bg-slate-900 hover:text-white transition-all bg-transparent">
                        Read All 500+ Reviews
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <button className="inline-flex items-center justify-center px-8 py-4 border border-slate-900 rounded-sm text-slate-900 font-bold uppercase tracking-wider text-xs hover:bg-slate-900 hover:text-white transition-all bg-transparent w-full">
                        Read All 500+ Reviews
                    </button>
                </div>
            </div>
        </section>
    );
}
