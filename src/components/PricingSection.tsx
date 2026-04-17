import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import LeadFormDialog from "@/components/LeadFormDialog";
import { loadPricing, type PlanPricing } from "@/lib/pricing-store";

const baseInfo = [
  {
    key: "individual" as const,
    name: "Individual",
    desc: "For individual students or professionals seeking personal insight.",
    features: ["Single assessment", "25+ page report", "Career mapping", "SWOT analysis", "Email support"],
    popular: false,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    key: "institutional" as const,
    name: "Institutional",
    desc: "Volume pricing for schools, colleges, and organizations.",
    features: ["Bulk assessments", "25+ page reports per individual", "Institution dashboard", "Comparative analytics", "Dedicated account manager", "Custom report branding"],
    popular: true,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    key: "enterprise" as const,
    name: "Enterprise",
    desc: "Full platform access with custom integrations for large organizations.",
    features: ["Unlimited assessments", "All report modules", "API integration", "Custom frameworks", "On-site training", "Priority support", "White-label options"],
    popular: false,
    gradient: "from-indigo-500 to-blue-500",
  },
];

export default function PricingSection() {
  const [pricing, setPricing] = useState<PlanPricing>(loadPricing());
  const [leadOpen, setLeadOpen] = useState(false);
  const [intent, setIntent] = useState("Request Custom Plan");

  useEffect(() => {
    const sync = () => setPricing(loadPricing());
    window.addEventListener("perfy-pricing-updated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("perfy-pricing-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const open = (planName: string) => {
    setIntent(`${planName} Plan Inquiry`);
    setLeadOpen(true);
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden" id="pricing">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="mx-auto max-w-7xl relative">
        <div className="text-center mb-14" data-reveal>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your institution. All plans include our deep interpretation reports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {baseInfo.map((p, i) => {
            const price = pricing[p.key];
            return (
              <div
                key={i}
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`rounded-2xl p-8 transition-all duration-300 relative ${
                  p.popular
                    ? `bg-gradient-to-br ${p.gradient} text-white shadow-2xl scale-[1.03]`
                    : "glass-card glass-card-hover"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}
                <h3 className={`text-lg font-bold ${p.popular ? "" : "text-foreground"}`}>{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black">{price.price}</span>
                  <span className={`text-sm ${p.popular ? "opacity-80" : "text-muted-foreground"}`}>/{price.period}</span>
                </div>
                <p className={`mt-3 text-sm ${p.popular ? "opacity-80" : "text-muted-foreground"}`}>{p.desc}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={p.popular ? "hero-outline" : "hero"}
                  className={`w-full mt-8 ${p.popular ? "bg-white text-primary hover:bg-white/90 border-white" : ""}`}
                  onClick={() => open(p.name)}
                >
                  {price.price === "Custom" ? "Contact Sales" : "Request Custom Plan"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <LeadFormDialog open={leadOpen} onOpenChange={setLeadOpen} intent={intent} />
    </section>
  );
}
