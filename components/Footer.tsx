export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
                        <span className="text-xl font-bold text-white">Propsoch</span>
                    </div>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-white transition-colors">About Us</a>
                        <a href="#" className="hover:text-white transition-colors">Careers</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-center md:text-left text-sm">
                    <p>&copy; {new Date().getFullYear()} Propsoch. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
