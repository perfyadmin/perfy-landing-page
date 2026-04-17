import { BarChart3, Brain, Target, TrendingUp, Shield, Compass } from "lucide-react";

const reportFeatures = [
  { icon: BarChart3, label: "IQ, EQ, AQ, CQ Radar Charts", gradient: "from-purple-500 to-blue-500" },
  { icon: Brain, label: "DISC Personality Graph", gradient: "from-blue-500 to-cyan-500" },
  { icon: Compass, label: "Career Pathway Mapping", gradient: "from-indigo-500 to-violet-500" },
  { icon: Shield, label: "SWOT Analysis", gradient: "from-violet-500 to-purple-500" },
  { icon: TrendingUp, label: "Growth & Action Plan", gradient: "from-cyan-500 to-blue-500" },
  { icon: Target, label: "Decision Insights", gradient: "from-purple-500 to-indigo-500" },
];

export default function ReportShowcase() {
  return (
    <section className="section-padding perfy-gradient relative overflow-hidden">
      <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-primary/8 blur-[100px]" />
      <div className="mx-auto max-w-7xl relative">
        <div className="text-center mb-14" data-reveal>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            This Is Not a Score.{" "}
            <span className="gradient-text">This Is a Complete Interpretation System.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Our 25+ page reports provide deep, multi-layered analysis that goes far beyond simple scoring.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reportFeatures.map((f, i) => (
            <div
              key={i}
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
              className="glass-card rounded-2xl p-6 text-center glass-card-hover transition-all duration-300 group"
            >
              <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <f.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-semibold text-foreground">{f.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-reveal>
          <p className="text-muted-foreground italic">
            "Demo reports are sample outputs. Actual reports are customized per institution."
          </p>
        </div>
      </div>
    </section>
  );
}
