import { Users, FileText, Layers, BarChart3 } from "lucide-react";

const stats = [
  { icon: Users, label: "Used for students, hiring & performance evaluation", value: "Multi-Sector", gradient: "from-purple-500 to-blue-500" },
  { icon: FileText, label: "Structured interpretation reports", value: "25+ Pages", gradient: "from-blue-500 to-cyan-500" },
  { icon: Layers, label: "Personality, Intelligence, Behavior, Career", value: "Multi-Dimensional", gradient: "from-violet-500 to-purple-500" },
  { icon: BarChart3, label: "Deep Interpretation System", value: "Research-Driven", gradient: "from-indigo-500 to-blue-500" },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="glass-card rounded-2xl p-6 text-center transition-all duration-300 glass-card-hover group"
            >
              <div className={`mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
