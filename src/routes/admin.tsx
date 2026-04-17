import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, LogIn, Eye, EyeOff, Package, DollarSign, FileText, Save } from "lucide-react";
import { loadPricing, savePricing, defaultPricing, type PlanPricing } from "@/lib/pricing-store";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({ meta: [{ title: "Perfy Admin" }] }),
});

interface Product {
  id: number;
  name: string;
  status: "active" | "upcoming";
  price: string;
  demoLink: string;
  description: string;
  cta: string;
  reportFile?: string;
}

const defaultProducts: Product[] = [
  { id: 1, name: "Psychometric Assessment Suite", status: "active", price: "₹499/assessment", demoLink: "https://hr-company-orcin.vercel.app/", description: "Understand personality, behavior, and decision patterns.", cta: "Request Free Demo", reportFile: "/reports/psychometric-sample.pdf" },
  { id: 2, name: "Brain Mapping Test", status: "active", price: "₹699/assessment", demoLink: "https://perfy-brain-mapping.netlify.app/", description: "Analyze cognitive ability, learning style, and intelligence.", cta: "Request Free Demo", reportFile: "/reports/brain-mapping-sample.pdf" },
  { id: 3, name: "Performance Intelligence", status: "active", price: "₹599/assessment", demoLink: "https://perfy-org-insights.netlify.app/login", description: "Evaluate strengths, weaknesses, and growth potential.", cta: "Request Free Demo", reportFile: "/reports/performance-intelligence-sample.pdf" },
  { id: 4, name: "Emotional Intelligence (EQ) Report", status: "upcoming", price: "TBD", demoLink: "", description: "Measure emotional awareness, empathy, and social skills.", cta: "Coming Soon" },
  { id: 5, name: "Cognitive Ability (IQ) Analysis", status: "upcoming", price: "TBD", demoLink: "", description: "Advanced cognitive profiling.", cta: "Coming Soon" },
  { id: 6, name: "Adversity Quotient (AQ) Assessment", status: "upcoming", price: "TBD", demoLink: "", description: "Evaluate resilience and adaptability.", cta: "Coming Soon" },
  { id: 7, name: "Cultural Intelligence (CQ) Mapping", status: "upcoming", price: "TBD", demoLink: "", description: "Cross-cultural adaptability.", cta: "Coming Soon" },
  { id: 8, name: "DISC Personality Profiling", status: "upcoming", price: "TBD", demoLink: "", description: "DISC model analysis.", cta: "Coming Soon" },
  { id: 9, name: "MBTI-Based Personality Mapping", status: "upcoming", price: "TBD", demoLink: "", description: "Personality type identification.", cta: "Coming Soon" },
  { id: 10, name: "Learning Style Analysis", status: "upcoming", price: "TBD", demoLink: "", description: "Identify optimal learning modalities.", cta: "Coming Soon" },
  { id: 11, name: "Strength & Weakness Mapping", status: "upcoming", price: "TBD", demoLink: "", description: "Detailed strength profiling.", cta: "Coming Soon" },
  { id: 12, name: "Leadership Potential Analysis", status: "upcoming", price: "TBD", demoLink: "", description: "Leadership trait evaluation.", cta: "Coming Soon" },
  { id: 13, name: "Career Pathway Recommendation", status: "upcoming", price: "TBD", demoLink: "", description: "Research-driven career guidance.", cta: "Coming Soon" },
  { id: 14, name: "Student Development Program", status: "upcoming", price: "TBD", demoLink: "", description: "Holistic student growth.", cta: "Coming Soon" },
  { id: 15, name: "Employee Assessment System", status: "upcoming", price: "TBD", demoLink: "", description: "Employee evaluation.", cta: "Coming Soon" },
  { id: 16, name: "Recruitment Evaluation Toolkit", status: "upcoming", price: "TBD", demoLink: "", description: "Pre-hiring screening.", cta: "Coming Soon" },
];

type Tab = "products" | "pricing" | "leads";

function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [tab, setTab] = useState<Tab>("products");
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [editing, setEditing] = useState<number | null>(null);
  const [pricing, setPricing] = useState<PlanPricing>(defaultPricing);
  const [pricingSaved, setPricingSaved] = useState(false);

  useEffect(() => {
    if (loggedIn) setPricing(loadPricing());
  }, [loggedIn]);

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4 hero-gradient">
        <div className="glass-card rounded-2xl p-8 max-w-sm w-full">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-6 shadow-lg">
            <Lock className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-xl font-bold text-center text-foreground mb-1">Perfy Admin Dashboard</h1>
          <p className="text-center text-xs text-muted-foreground mb-6">Manage products, pricing & leads</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (password === "perfy2024") setLoggedIn(true);
            }}
          >
            <div className="relative">
              <Input
                type={showPw ? "text" : "password"}
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" onClick={() => setShowPw(!showPw)}>
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <Button variant="hero" className="w-full mt-4" type="submit">
              <LogIn className="w-4 h-4" /> Login
            </Button>
            <p className="text-[11px] text-center text-muted-foreground mt-3">Default: perfy2024</p>
          </form>
        </div>
      </div>
    );
  }

  const updateProduct = (id: number, field: keyof Product, value: string) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const updatePrice = (key: keyof PlanPricing, field: "price" | "period", value: string) => {
    setPricing((prev) => ({ ...prev, [key]: { ...prev[key], [field]: value } }));
    setPricingSaved(false);
  };

  const handleSavePricing = () => {
    savePricing(pricing);
    setPricingSaved(true);
    setTimeout(() => setPricingSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Lock className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-lg font-bold text-foreground">Perfy Admin</h1>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setLoggedIn(false)}>Logout</Button>
        </div>
        <div className="mx-auto max-w-7xl flex items-center gap-1 px-4 md:px-8 -mb-px">
          {([
            { id: "products", label: "Products", icon: Package },
            { id: "pricing", label: "Pricing", icon: DollarSign },
            { id: "leads", label: "Leads & Reports", icon: FileText },
          ] as { id: Tab; label: string; icon: typeof Package }[]).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${tab === t.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
            >
              <t.icon className="w-4 h-4" /> {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8 py-8">
        {tab === "products" && (
          <>
            <h2 className="text-2xl font-bold text-foreground mb-2">Product Management</h2>
            <p className="text-sm text-muted-foreground mb-6">Toggle active/upcoming status, update prices, and edit demo links.</p>
            <div className="space-y-4">
              {products.map((p) => (
                <div key={p.id} className="glass-card rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <span className={`w-2.5 h-2.5 rounded-full ${p.status === "active" ? "bg-green-500" : "bg-muted-foreground"}`} />
                      <h3 className="font-semibold text-foreground">{p.name}</h3>
                      <span className="text-xs text-muted-foreground">{p.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={p.status}
                        onChange={(e) => updateProduct(p.id, "status", e.target.value)}
                        className="text-sm border rounded-lg px-3 py-1.5 bg-background text-foreground"
                      >
                        <option value="active">Active</option>
                        <option value="upcoming">Upcoming</option>
                      </select>
                      <Button variant="ghost" size="sm" onClick={() => setEditing(editing === p.id ? null : p.id)}>
                        {editing === p.id ? "Close" : "Edit"}
                      </Button>
                    </div>
                  </div>

                  {editing === p.id && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
                      <div>
                        <Label className="text-xs">Product Name</Label>
                        <Input value={p.name} onChange={(e) => updateProduct(p.id, "name", e.target.value)} className="mt-1" />
                      </div>
                      <div>
                        <Label className="text-xs">Price</Label>
                        <Input value={p.price} onChange={(e) => updateProduct(p.id, "price", e.target.value)} className="mt-1" />
                      </div>
                      <div>
                        <Label className="text-xs">Demo Redirect Link (after admin approval)</Label>
                        <Input value={p.demoLink} onChange={(e) => updateProduct(p.id, "demoLink", e.target.value)} className="mt-1" placeholder="https://..." />
                      </div>
                      <div>
                        <Label className="text-xs">CTA Text</Label>
                        <Input value={p.cta} onChange={(e) => updateProduct(p.id, "cta", e.target.value)} className="mt-1" />
                      </div>
                      <div className="md:col-span-2">
                        <Label className="text-xs">Description</Label>
                        <Input value={p.description} onChange={(e) => updateProduct(p.id, "description", e.target.value)} className="mt-1" />
                      </div>
                      {p.reportFile && (
                        <div className="md:col-span-2">
                          <Label className="text-xs">Sample Report File</Label>
                          <div className="flex items-center gap-2 mt-1">
                            <Input value={p.reportFile} readOnly className="bg-muted" />
                            <Button variant="hero-outline" size="sm" asChild>
                              <a href={p.reportFile} target="_blank" rel="noopener noreferrer">Preview</a>
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "pricing" && (
          <>
            <h2 className="text-2xl font-bold text-foreground mb-2">Pricing Plans</h2>
            <p className="text-sm text-muted-foreground mb-6">Update Individual, Institutional, and Custom (Enterprise) plan prices. Changes appear instantly on the website.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(["individual", "institutional", "enterprise"] as const).map((key) => (
                <div key={key} className="glass-card rounded-2xl p-6">
                  <h3 className="font-bold text-foreground capitalize mb-1">{key === "enterprise" ? "Custom (Enterprise)" : key}</h3>
                  <p className="text-xs text-muted-foreground mb-4">Plan pricing for {key} customers</p>
                  <div className="space-y-3">
                    <div>
                      <Label className="text-xs">Price</Label>
                      <Input value={pricing[key].price} onChange={(e) => updatePrice(key, "price", e.target.value)} className="mt-1" />
                    </div>
                    <div>
                      <Label className="text-xs">Period / Unit</Label>
                      <Input value={pricing[key].period} onChange={(e) => updatePrice(key, "period", e.target.value)} className="mt-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Button variant="hero" onClick={handleSavePricing}>
                <Save className="w-4 h-4" /> Save Pricing
              </Button>
              {pricingSaved && <span className="text-sm font-medium text-green-600">✓ Saved — live on website</span>}
              <Button variant="ghost" size="sm" onClick={() => { setPricing(defaultPricing); setPricingSaved(false); }}>
                Reset to defaults
              </Button>
            </div>
          </>
        )}

        {tab === "leads" && (
          <>
            <h2 className="text-2xl font-bold text-foreground mb-2">Leads & Sample Reports</h2>
            <p className="text-sm text-muted-foreground mb-6">All website inquiries are sent to <span className="font-semibold text-primary">perfy.admin@gmail.com</span>. Demo access is granted via email approval.</p>

            <div className="glass-card rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" /> Sample Reports
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { name: "Psychometric (1.pdf)", file: "/reports/psychometric-sample.pdf" },
                  { name: "Brain Mapping (2.pdf)", file: "/reports/brain-mapping-sample.pdf" },
                  { name: "Performance Intelligence (3.pdf)", file: "/reports/performance-intelligence-sample.pdf" },
                ].map((r) => (
                  <div key={r.file} className="border border-border rounded-xl p-4">
                    <p className="text-sm font-semibold text-foreground mb-2">{r.name}</p>
                    <p className="text-xs text-muted-foreground mb-3 break-all">{r.file}</p>
                    <Button variant="hero-outline" size="sm" className="w-full" asChild>
                      <a href={r.file} target="_blank" rel="noopener noreferrer">Preview</a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-3">Lead Flow</h3>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>Visitor fills the demo / contact form on the website.</li>
                <li>Their request is emailed directly to <span className="font-semibold text-primary">perfy.admin@gmail.com</span>.</li>
                <li>Admin reviews and replies with the demo access link (configured per product above).</li>
                <li>Visitor can only access the demo after admin approval.</li>
              </ol>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
