import { AlertTriangle, GraduationCap, Building2, UserX } from "lucide-react";

const problems = [
  {
    icon: GraduationCap,
    title: "Students Choosing Wrong Careers",
    desc: "Without deep personality and cognitive analysis, students end up in careers that don't match their strengths — leading to frustration and wasted potential.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Building2,
    title: "Institutions Lacking Real Insights",
    desc: "Schools and colleges rely on grades alone. They have zero visibility into a student's behavioral patterns, learning style, or true capabilities.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: UserX,
    title: "Companies Hiring Blind",
    desc: "Organizations make hiring decisions based on resumes and gut feeling — without understanding the candidate's personality, adaptability, or leadership traits.",
    color: "from-rose-500 to-red-500",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding perfy-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-destructive/5 blur-[100px]" />
      <div className="mx-auto max-w-7xl relative">
        <div className="text-center mb-14" data-reveal>
          <div className="inline-flex items-center gap-2 text-destructive text-sm font-semibold mb-4 bg-destructive/10 px-4 py-1.5 rounded-full">
            <AlertTriangle className="w-4 h-4" />
            The Problem
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Wrong Decisions Cost <span className="gradient-text">Everything</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Without structured analysis, institutions and companies keep making costly mistakes about people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div key={i} data-reveal style={{ transitionDelay: `${i * 100}ms` }}
              className="glass-card rounded-2xl p-8 glass-card-hover transition-all duration-300 group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <p.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
