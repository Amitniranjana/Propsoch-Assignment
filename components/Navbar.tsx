import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
                    <span className="text-xl font-bold text-slate-900">Propsoch</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <Link href="#" className="hover:text-blue-600 transition-colors">Buy</Link>
                    <Link href="#" className="hover:text-blue-600 transition-colors">Rent</Link>
                    <Link href="#" className="hover:text-blue-600 transition-colors">Soch Score</Link>
                    <Link href="#" className="hover:text-blue-600 transition-colors">Insights</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden md:block text-slate-600 font-medium hover:text-slate-900">Log In</button>
                    <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
                        Post Property
                    </button>
                </div>
            </div>
        </nav>
    );
}
