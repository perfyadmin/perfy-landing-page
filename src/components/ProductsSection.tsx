import { useState } from "react";
import { Button } from "@/components/ui/button";
import LeadFormDialog from "@/components/LeadFormDialog";
import SampleReportDialog, { type ReportKey } from "@/components/SampleReportDialog";
import {
  Brain, TrendingUp, Heart, Lightbulb, Mountain, Globe, Users,
  Compass, BookOpen, GraduationCap, Shield, Briefcase, UserCheck, Lock, Star,
  ArrowUpRight, FileText,
} from "lucide-react";

interface Product {
  name: string;
  desc: string;
  audience: string;
  icon: React.ElementType;
  active: boolean;
  reportKey?: ReportKey;
  badge?: string;
  price?: string;
  gradient: string;
}

const allProducts: Product[] = [
  { name: "Psychometric Assessment Suite", desc: "Understand personality, behavior, and decision patterns through structured psychometric instruments.", audience: "Schools, Colleges, Companies", icon: Brain, active: true, reportKey: "psychometric", badge: "Most Used", price: "₹499/assessment", gradient: "from-purple-500 to-violet-600" },
  { name: "Brain Mapping Test", desc: "Analyze cognitive ability, learning style, and intelligence through comprehensive brain mapping.", audience: "Students, Educators", icon: Lightbulb, active: true, reportKey: "brain-mapping", badge: "Recommended", price: "₹699/assessment", gradient: "from-blue-500 to-cyan-500" },
  { name: "Performance Intelligence", desc: "Evaluate strengths, weaknesses, and growth potential with deep performance analytics.", audience: "Companies, HR Teams", icon: TrendingUp, active: true, reportKey: "performance-intelligence", badge: "Core Module", price: "₹599/assessment", gradient: "from-indigo-500 to-blue-600" },
  { name: "Emotional Intelligence (EQ) Report", desc: "Measure emotional awareness, empathy, and social skills.", audience: "All Individuals", icon: Heart, active: false, gradient: "from-pink-400 to-rose-400" },
  { name: "Cognitive Ability (IQ) Analysis", desc: "Advanced cognitive profiling and reasoning assessment.", audience: "Students, Professionals", icon: Brain, active: false, gradient: "from-purple-400 to-indigo-400" },
  { name: "Adversity Quotient (AQ) Assessment", desc: "Evaluate resilience, adaptability, and stress management.", audience: "Corporates, Students", icon: Mountain, active: false, gradient: "from-amber-400 to-orange-400" },
  { name: "Cultural Intelligence (CQ) Mapping", desc: "Assess cross-cultural adaptability and global mindset.", audience: "International Institutions", icon: Globe, active: false, gradient: "from-teal-400 to-cyan-400" },
  { name: "DISC Personality Profiling", desc: "Dominance, Influence, Steadiness, Conscientiousness analysis.", audience: "HR, Recruitment Teams", icon: Users, active: false, gradient: "from-blue-400 to-indigo-400" },
  { name: "MBTI-Based Personality Mapping", desc: "Comprehensive personality type identification and analysis.", audience: "Counselors, Coaches", icon: Compass, active: false, gradient: "from-violet-400 to-purple-400" },
  { name: "Learning Style Analysis", desc: "Identify optimal learning modalities for each individual.", audience: "Schools, Educators", icon: BookOpen, active: false, gradient: "from-green-400 to-emerald-400" },
  { name: "Strength & Weakness Mapping", desc: "Detailed strength profiling for personal development.", audience: "All Individuals", icon: Shield, active: false, gradient: "from-sky-400 to-blue-400" },
  { name: "Leadership Potential Analysis", desc: "Evaluate leadership traits, vision, and team management.", audience: "Companies, Institutions", icon: Star, active: false, gradient: "from-yellow-400 to-amber-400" },
  { name: "Career Pathway Recommendation", desc: "Research-driven career guidance based on multi-factor analysis.", audience: "Students, Career Counselors", icon: Compass, active: false, gradient: "from-emerald-400 to-teal-400" },
  { name: "Student Development Program", desc: "Holistic student growth tracking and intervention framework.", audience: "Schools, Colleges", icon: GraduationCap, active: false, gradient: "from-indigo-400 to-violet-400" },
  { name: "Employee Assessment System", desc: "Comprehensive employee evaluation for performance reviews.", audience: "HR, Management", icon: Briefcase, active: false, gradient: "from-slate-400 to-gray-400" },
  { name: "Recruitment Evaluation Toolkit", desc: "Pre-hiring behavioral and cognitive screening toolkit.", audience: "Recruitment Agencies", icon: UserCheck, active: false, gradient: "from-rose-400 to-pink-400" },
];

export default function ProductsSection() {
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadIntent, setLeadIntent] = useState("");
  const [leadProduct, setLeadProduct] = useState<string | undefined>();
  const [leadDesc, setLeadDesc] = useState<string | undefined>();

  const [reportOpen, setReportOpen] = useState(false);
  const [reportKey, setReportKey] = useState<ReportKey | null>(null);

  const active = allProducts.filter((p) => p.active);
  const upcoming = allProducts.filter((p) => !p.active);

  const requestFreeDemo = (p: Product) => {
    setLeadIntent("Free Demo Access Request");
    setLeadProduct(p.name);
    setLeadDesc(`This will email perfy.admin@gmail.com requesting free demo access to ${p.name}. Once the admin approves, you'll receive a private demo link by email within 24 hours.`);
    setLeadOpen(true);
  };

  const requestUpcoming = (p: Product) => {
    setLeadIntent("Early Access Request");
    setLeadProduct(p.name);
    setLeadDesc(`${p.name} is launching soon. Send your details to perfy.admin@gmail.com — we'll notify you and offer institutional early access.`);
    setLeadOpen(true);
  };

  const openSample = (key: ReportKey) => {
    setReportKey(key);
    setReportOpen(true);
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden" id="products">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-perfy-blue/5 blur-[120px]" />
      <div className="mx-auto max-w-7xl relative">
        <div className="text-center mb-4" data-reveal>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto text-lg">
            Built as a complete human intelligence analysis ecosystem. Start with core assessments. Expand into advanced modules.
          </p>
        </div>

        {/* Active Products */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2" data-reveal>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" /> Active Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {active.map((p, i) => (
              <div
                key={i}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="glass-card rounded-2xl p-7 transition-all duration-300 relative group border border-transparent hover:border-primary/20 flex flex-col"
              >
                {p.badge && (
                  <div className={`absolute top-4 right-4 text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r ${p.gradient} shadow-lg`}>
                    {p.badge}
                  </div>
                )}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <p.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{p.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                <p className="text-xs text-primary font-semibold mb-2">For: {p.audience}</p>
                {p.price && <p className="text-sm font-bold text-foreground mb-4">{p.price}</p>}

                <div className="mt-auto flex flex-col gap-2">
                  <Button variant="hero" size="sm" className="w-full" onClick={() => requestFreeDemo(p)}>
                    Request Free Demo <ArrowUpRight className="w-4 h-4" />
                  </Button>
                  {p.reportKey && (
                    <Button variant="hero-outline" size="sm" className="w-full" onClick={() => openSample(p.reportKey!)}>
                      <FileText className="w-4 h-4" /> View Sample Report
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Products */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2" data-reveal>
            <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground" /> Upcoming Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcoming.map((p, i) => (
              <div
                key={i}
                data-reveal
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
                onClick={() => requestUpcoming(p)}
                className="upcoming-card glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 relative group hover:scale-[1.02]"
              >
                <div className="absolute top-3 right-3 flex items-center gap-1 text-xs font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                  <Lock className="w-3 h-3" /> Coming Soon
                </div>
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.gradient} opacity-50 flex items-center justify-center mb-4`}>
                  <p.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">{p.name}</h4>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-primary font-medium">
            Early access available for institutions
          </p>
        </div>
      </div>

      <LeadFormDialog
        open={leadOpen}
        onOpenChange={setLeadOpen}
        intent={leadIntent}
        productContext={leadProduct}
        description={leadDesc}
      />
      <SampleReportDialog open={reportOpen} onOpenChange={setReportOpen} reportKey={reportKey} />
    </section>
  );
}
