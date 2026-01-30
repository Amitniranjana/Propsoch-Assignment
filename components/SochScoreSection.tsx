type SochScore = {
  id: string;
  title: string;
  score: number; // 0–10
  textColor: string;
  bgColor: string;
  description: string;
};

type SochScoreCardProps = {
  title: string;
  score: number;
  textColor: string;
  bgColor: string;
  description: string;
};

const SochScoreCard = ({
  title,
  score,
  textColor,
  bgColor,
  description,
}: SochScoreCardProps) => {
  // Clamp score safely between 0 and 10
  const normalizedScore = Math.min(Math.max(score, 0), 10);
  const percentage = normalizedScore * 10;

  return (
    <article className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800 tracking-tight">
          {title}
        </h3>
        <span className={`text-2xl font-bold ${textColor}`}>
          {normalizedScore.toFixed(1)}/10
        </span>
      </header>

      {/* Progress Bar */}
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={10}
        aria-valuenow={normalizedScore}
        className="w-full bg-slate-100 rounded-full h-2 mb-6 overflow-hidden"
      >
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${bgColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
        {description}
      </p>
    </article>
  );
};

export default function SochScoreSection() {
  const scores: SochScore[] = [
    {
      id: "connectivity",
      title: "Connectivity",
      score: 9.2,
      textColor: "text-blue-600",
      bgColor: "bg-blue-600",
      description:
        "Measured by proximity to Metro, highways, and major business hubs. We calculate travel times during peak hours.",
    },
    {
      id: "livability",
      title: "Livability",
      score: 8.5,
      textColor: "text-green-600",
      bgColor: "bg-green-600",
      description:
        "Analyzes social infrastructure like schools, hospitals, and parks within a 2km radius of the project.",
    },
    {
      id: "value-for-money",
      title: "Value for Money",
      score: 7.8,
      textColor: "text-purple-600",
      bgColor: "bg-purple-600",
      description:
        "Compares price per sq.ft. against similar projects in the vicinity and historical appreciation trends.",
    },
    {
      id: "construction-quality",
      title: "Construction",
      score: 8.9,
      textColor: "text-orange-600",
      bgColor: "bg-orange-600",
      description:
        "Based on the builder's track record, ISO certifications, and audit reports from civil engineers.",
    },
  ];

  return (
    <section
      className="py-24 bg-white"
      aria-labelledby="soch-score-heading"
    >
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="soch-score-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            The Propsoch <span className="text-blue-600">Smart Score</span>
          </h2>
          <p className="text-lg text-slate-600">
            Unbiased ratings based on data, not opinions.
          </p>
        </header>

        {/* Score Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scores.map((item) => (
            <SochScoreCard key={item.id} {...item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/methodology"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700 hover:underline underline-offset-4 transition"
          >
            View Full Methodology
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
