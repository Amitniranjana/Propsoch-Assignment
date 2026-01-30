import Image from 'next/image';

export default function TrustedPartners() {
    const partners = [
        "Prestige Group", "Brigade", "Sobha", "Godrej Properties", "Puravankara", "Embassy"
    ];

    return (
        <section className="py-10 border-b border-slate-100 bg-white">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
                    Official Partners With Top Developers
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <Image src="https://placehold.co/150x50/ffffff/0f172a?text=PRESTIGE" alt="Prestige Group" width={150} height={50} className="h-8 md:h-10 w-auto object-contain" unoptimized />
                        <Image src="https://placehold.co/150x50/ffffff/0f172a?text=BRIGADE" alt="Brigade" width={150} height={50} className="h-8 md:h-10 w-auto object-contain" unoptimized />
                        <Image src="https://placehold.co/150x50/ffffff/0f172a?text=SOBHA" alt="Sobha" width={150} height={50} className="h-8 md:h-10 w-auto object-contain" unoptimized />
                        <Image src="https://placehold.co/150x50/ffffff/0f172a?text=GODREJ" alt="Godrej Properties" width={150} height={50} className="h-8 md:h-10 w-auto object-contain" unoptimized />
                        <Image src="https://placehold.co/150x50/ffffff/0f172a?text=PURAVANKARA" alt="Puravankara" width={150} height={50} className="h-8 md:h-10 w-auto object-contain" unoptimized />
                        <Image src="https://placehold.co/150x50/ffffff/0f172a?text=EMBASSY" alt="Embassy" width={150} height={50} className="h-8 md:h-10 w-auto object-contain" unoptimized />
                    </div>
                </div>
            </div>
        </section>
    );
}
