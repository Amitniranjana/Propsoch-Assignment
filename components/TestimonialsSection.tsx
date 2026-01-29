import Image from 'next/image';

const TestimonialCard = ({ name, role, quote, image }: { name: string, role: string, quote: string, image: string }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
            <div>
                <h4 className="font-bold text-slate-900">{name}</h4>
                <p className="text-sm text-slate-500">{role}</p>
            </div>
        </div>
        <div className="flex-1">
            <p className="text-slate-700 italic leading-relaxed">"{quote}"</p>
        </div>
        <div className="mt-4 flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
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
            image: "https://placehold.co/100x100/orange/white?text=PS"
        },
        {
            name: "Rahul Verma",
            role: "IT Professional",
            quote: "Finally, a platform that doesn't spam me. The data is clear, and the verified listings gave me confidence.",
            image: "https://placehold.co/100x100/blue/white?text=RV"
        },
        {
            name: "Anjali Gupta",
            role: "Property Investor",
            quote: "I use Propsoch to screen new projects. The 'Value for Money' metric is incredibly accurate compared to market rates.",
            image: "https://placehold.co/100x100/purple/white?text=AG"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Trusted by thousands of <br /> Happy Homeowners
                        </h2>
                        <p className="text-lg text-slate-600">
                            See why savvy buyers rely on Propsoch for their real estate journey.
                        </p>
                    </div>
                    <button className="hidden md:inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                        Read Success Stories
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <button className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                        Read Success Stories
                    </button>
                </div>
            </div>
        </section>
    );
}
