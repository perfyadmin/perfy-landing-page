import { GraduationCap, Building, Briefcase } from "lucide-react";

const cases = [
  {
    icon: GraduationCap,
    title: "For Schools",
    items: ["Deep student understanding beyond grades", "Research-driven career guidance", "Behavioral pattern identification", "Parent-teacher insight reports"],
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Building,
    title: "For Colleges",
    items: ["Placement readiness assessment", "Skill & competency mapping", "Leadership identification", "Department-wide analytics"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Briefcase,
    title: "For Companies",
    items: ["Structured hiring decisions", "Performance tracking frameworks", "Team composition analysis", "Employee growth planning"],
    gradient: "from-indigo-500 to-blue-500",
  },
];

export default function UseCasesSection() {
  return (
    <section className="section-padding perfy-gradient relative overflow-hidden" id="use-cases">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="mx-auto max-w-7xl relative">
        <div className="text-center mb-14" data-reveal>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Built for <span className="gradient-text">Institutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're a school, college, or corporation — Perfy gives you the structured insight framework you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} data-reveal style={{ transitionDelay: `${i * 120}ms` }}
              className="glass-card rounded-2xl p-8 glass-card-hover transition-all duration-300 group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <c.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{c.title}</h3>
              <ul className="space-y-3">
                {c.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${c.gradient} shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
