import { ClipboardList, Layers, FileText, Target } from "lucide-react";

const steps = [
  { icon: ClipboardList, step: "01", title: "Structured Assessment", desc: "Carefully designed psychometric instruments capture multi-dimensional data points.", gradient: "from-purple-500 to-violet-500" },
  { icon: Layers, step: "02", title: "Multi-Dimensional Analysis", desc: "Our deep interpretation system processes personality, cognition, behavior, and aptitude.", gradient: "from-blue-500 to-cyan-500" },
  { icon: FileText, step: "03", title: "Deep Interpretation Report", desc: "A 25+ page report with radar charts, DISC profiles, SWOT analysis, and career mapping.", gradient: "from-indigo-500 to-purple-500" },
  { icon: Target, step: "04", title: "Actionable Decision Insights", desc: "Clear, research-driven recommendations that drive real decisions for institutions.", gradient: "from-violet-500 to-blue-500" },
];

export default function SolutionSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden" id="how-it-works">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="mx-auto max-w-7xl relative">
        <div className="text-center mb-16" data-reveal>
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4 bg-primary/10 px-4 py-1.5 rounded-full">
            Our System
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Data → Meaning → Insight → <span className="gradient-text">Action</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            A structured, research-driven framework that transforms raw assessment data into actionable intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} data-reveal style={{ transitionDelay: `${i * 100}ms` }} className="relative group">
              <div className="glass-card rounded-2xl p-8 glass-card-hover transition-all duration-300 h-full">
                <div className={`text-5xl font-black bg-gradient-to-br ${s.gradient} bg-clip-text text-transparent mb-4`}>{s.step}</div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-perfy-blue" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
