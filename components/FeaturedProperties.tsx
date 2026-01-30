"use client";

import Image from 'next/image';

const PropertyCard = ({ title, location, price, image, tag, bhk, sqft }: { title: string, location: string, price: string, image: string, tag: string, bhk: string, sqft: string }) => (
    <div className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-slate-100/50 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
            />
            {tag && (
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-sm text-[10px] font-bold text-white uppercase tracking-widest shadow-lg z-10">
                    {tag}
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <button className="bg-white text-slate-900 px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors w-full shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300">
                    View Details
                </button>
            </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors duration-300">{title}</h3>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mt-1.5 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                        {location}
                    </p>
                </div>
                <p className="text-lg font-bold text-slate-900">{price}</p>
            </div>

            <div className="border-t border-slate-100 my-5"></div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider mt-auto">
                <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M17 21v-8H7v8" /></svg>
                    {bhk}
                </span>
                <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0L21.3 15.3z" /><path d="m14.5 12.5 2-2" /><path d="m11.5 9.5 2-2" /><path d="m8.5 6.5 2-2" /><path d="m17.5 15.5 2-2" /></svg>
                    {sqft}
                </span>
            </div>
        </div>
    </div>
);

export default function FeaturedProperties() {
    const properties = [
        {
            title: "Prestige Tech Cloud",
            location: "Whitefield, Bangalore",
            price: "₹1.5 Cr",
            tag: "Best Connectivity",
            bhk: "2, 3 BHK",
            sqft: "1200 - 1800 sq.ft",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Godrej Woodscapes",
            location: "Budigere Cross, Bangalore",
            price: "₹1.2 Cr",
            tag: "Top Rated Lifestyle",
            bhk: "3 BHK Luxury",
            sqft: "1500 - 2200 sq.ft",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Sobha Neopolis",
            location: "Panathur, Bangalore",
            price: "₹2.1 Cr",
            tag: "Luxury Pick",
            bhk: "3, 4 BHK",
            sqft: "1900 - 2600 sq.ft",
            image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop"
        },
        {
            title: "Brigade Sanctuary",
            location: "Varthur, Bangalore",
            price: "₹98 L",
            tag: "Value for Money",
            bhk: "2 BHK",
            sqft: "1100 - 1400 sq.ft",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-24 bg-slate-50/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">Handpicked For You</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 tracking-tight">Curated Collections</h2>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-light">
                            Explore properties that score <strong className="text-slate-900 font-medium">8/10 or higher</strong> on our Soch Scale.
                        </p>
                    </div>
                    <a href="#" className="hidden md:inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 hover:shadow-2xl active:scale-95">
                        View All Properties
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {properties.map((p, i) => (
                        <PropertyCard key={i} {...p} />
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-slate-800 transition-all shadow-xl w-full">
                        View All Properties
                    </a>
                </div>
            </div>
        </section>
    );
}
