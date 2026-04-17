import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, FileText } from "lucide-react";
import { useState } from "react";
import LeadFormDialog from "@/components/LeadFormDialog";
import SampleReportDialog, { type ReportKey } from "@/components/SampleReportDialog";

export default function HeroSection() {
  const [leadOpen, setLeadOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [reportKey, setReportKey] = useState<ReportKey>("psychometric");
  const [pickerOpen, setPickerOpen] = useState(false);

  const openSample = (key: ReportKey) => {
    setReportKey(key);
    setPickerOpen(false);
    setReportOpen(true);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 hero-gradient" />
      <div className="hero-aurora">
        <div className="orb-pink" />
      </div>
      <div className="hero-grid" />
      <div className="conic-ring -top-32 -right-32" />
      <div className="conic-ring -bottom-40 -left-40" style={{ animationDirection: "reverse" }} />

      {/* Floating sparkles */}
      <span className="sparkle" style={{ top: "18%", left: "12%", animationDelay: "0s" }} />
      <span className="sparkle" style={{ top: "28%", right: "18%", animationDelay: "1.2s" }} />
      <span className="sparkle" style={{ bottom: "22%", left: "22%", animationDelay: "2.4s" }} />
      <span className="sparkle" style={{ top: "55%", right: "8%", animationDelay: "0.8s" }} />
      <span className="sparkle" style={{ bottom: "30%", right: "30%", animationDelay: "3.1s" }} />
      <span className="sparkle" style={{ top: "70%", left: "8%", animationDelay: "1.8s" }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary mb-8 animate-fade-up backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Research-Driven Brain Intelligence Platform
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Stop Making Wrong Decisions{" "}
            <span className="gradient-text">About People.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Perfy helps schools, colleges, and companies understand individuals deeply through structured assessments and 25+ page interpretation reports.
          </p>

          <p className="mt-4 text-base font-semibold text-primary animate-fade-up" style={{ animationDelay: "0.25s" }}>
            "We don't give scores. We give clarity."
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="group" onClick={() => setLeadOpen(true)}>
              Request Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => setPickerOpen(true)}>
              <FileText className="w-5 h-5" /> View Sample Report
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap gap-8 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-perfy-blue" />
              25+ Page Reports
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-perfy-blue" />
              Multi-Dimensional Analysis
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-perfy-blue" />
              Research-Driven Frameworks
            </div>
          </div>
        </div>
      </div>

      <LeadFormDialog
        open={leadOpen}
        onOpenChange={setLeadOpen}
        intent="Request Demo"
        description="Tell us about your institution. Our team at perfy.admin@gmail.com will reach out within 24 hours with a tailored demo."
      />
      <SampleReportDialog open={reportOpen} onOpenChange={setReportOpen} reportKey={reportKey} />

      {/* Sample Report Picker */}
      {pickerOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setPickerOpen(false)}
        >
          <div className="glass-card rounded-2xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-foreground mb-2">Choose a Sample Report</h3>
            <p className="text-sm text-muted-foreground mb-5">Select which interpretation report you'd like to preview.</p>
            <div className="space-y-3">
              <button onClick={() => openSample("psychometric")} className="w-full glass-card-hover glass-card rounded-xl p-4 text-left flex items-center gap-3 transition-all">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Psychometric Assessment</div>
                  <div className="text-xs text-muted-foreground">Personality & behavior report</div>
                </div>
              </button>
              <button onClick={() => openSample("brain-mapping")} className="w-full glass-card-hover glass-card rounded-xl p-4 text-left flex items-center gap-3 transition-all">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Brain Mapping Test</div>
                  <div className="text-xs text-muted-foreground">Cognitive & learning style report</div>
                </div>
              </button>
              <button onClick={() => openSample("performance-intelligence")} className="w-full glass-card-hover glass-card rounded-xl p-4 text-left flex items-center gap-3 transition-all">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Performance Intelligence</div>
                  <div className="text-xs text-muted-foreground">Strengths & growth report</div>
                </div>
              </button>
            </div>
            <Button variant="ghost" className="w-full mt-4" onClick={() => setPickerOpen(false)}>Close</Button>
          </div>
        </div>
      )}
    </section>
  );
}
