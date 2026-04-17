import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import LeadFormDialog from "@/components/LeadFormDialog";

export default function FinalCTA() {
  const [leadOpen, setLeadOpen] = useState(false);
  const [intent, setIntent] = useState("Book Demo");

  const open = (i: string) => { setIntent(i); setLeadOpen(true); };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-perfy-blue/5 to-primary/10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-perfy-blue/10 blur-[100px]" />
      <div className="relative mx-auto max-w-4xl text-center" data-reveal>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Make Better Decisions With{" "}
          <span className="gradient-text">Real Insight</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Join institutions that trust Perfy's research-driven framework to understand their people deeply and make decisions that matter.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="xl" className="group" onClick={() => open("Book Demo")}>
            Book Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="hero-outline" size="xl" onClick={() => open("Contact Sales")}>
            Contact Sales
          </Button>
        </div>
      </div>

      <LeadFormDialog open={leadOpen} onOpenChange={setLeadOpen} intent={intent} />
    </section>
  );
}
