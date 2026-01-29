
const SochScoreCard = ({ title, score, color, description }: { title: string, score: number, color: string, description: string }) => {
    const percentage = score * 10;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                <div className={`text-2xl font-bold ${color}`}>{score}/10</div>
            </div>

            <div className="w-full bg-slate-100 rounded-full h-3 mb-4 overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${color.replace('text-', 'bg-')}`}
                    style={{ width: `${percentage}%` }}
                />
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default function SochScoreSection() {
    const scores = [
        {
            title: "Connectivity",
            score: 9.2,
            color: "text-blue-600",
            description: "Measured by proximity to Metro, highways, and major business hubs. We calculate travel times during peak hours."
        },
        {
            title: "Livability",
            score: 8.5,
            color: "text-green-600",
            description: "Analyzes social infrastructure like schools, hospitals, and parks within a 2km radius of the project."
        },
        {
            title: "Value for Money",
            score: 7.8,
            color: "text-purple-600",
            description: "Compares price per sq.ft. against similar projects in the vicinity and historical appreciation trends."
        },
        {
            title: "Construction Quality",
            score: 8.9,
            color: "text-orange-600",
            description: "Based on the builder's track record, ISO certifications, and audit reports from civil engineers."
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        The Propsoch <span className="text-blue-600">Smart Score</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        We don't just list properties; we grade them. Our proprietary algorithm analyzes 50+ parameters to give you an unbiased score.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {scores.map((item, index) => (
                        <SochScoreCard key={index} {...item} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 mx-auto">
                        View Full Methodology
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
