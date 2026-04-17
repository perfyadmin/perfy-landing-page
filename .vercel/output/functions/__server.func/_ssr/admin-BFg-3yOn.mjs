import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as defaultPricing, l as loadPricing, I as Input, B as Button, L as Label, s as savePricing } from "./pricing-store-D7hCoaNa.mjs";
import { L as Lock, E as EyeOff, a as Eye, b as LogIn, P as Package, D as DollarSign, F as FileText, S as Save } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/tailwind-merge.mjs";
const defaultProducts = [{
  id: 1,
  name: "Psychometric Assessment Suite",
  status: "active",
  price: "₹499/assessment",
  demoLink: "https://hr-company-orcin.vercel.app/",
  description: "Understand personality, behavior, and decision patterns.",
  cta: "Request Free Demo",
  reportFile: "/reports/psychometric-sample.pdf"
}, {
  id: 2,
  name: "Brain Mapping Test",
  status: "active",
  price: "₹699/assessment",
  demoLink: "https://perfy-brain-mapping.netlify.app/",
  description: "Analyze cognitive ability, learning style, and intelligence.",
  cta: "Request Free Demo",
  reportFile: "/reports/brain-mapping-sample.pdf"
}, {
  id: 3,
  name: "Performance Intelligence",
  status: "active",
  price: "₹599/assessment",
  demoLink: "https://perfy-org-insights.netlify.app/login",
  description: "Evaluate strengths, weaknesses, and growth potential.",
  cta: "Request Free Demo",
  reportFile: "/reports/performance-intelligence-sample.pdf"
}, {
  id: 4,
  name: "Emotional Intelligence (EQ) Report",
  status: "upcoming",
  price: "TBD",
  demoLink: "",
  description: "Measure emotional awareness, empathy, and social skills.",
  cta: "Coming Soon"
}, {
  id: 5,
  name: "Cognitive Ability (IQ) Analysis",
  status: "upcoming",
  price: "TBD",
  demoLink: "",
  description: "Advanced cognitive profiling.",
  cta: "Coming Soon"
}, {
  id: 6,
  name: "Adversity Quotient (AQ) Assessment",
  status: "upcoming",
  price: "TBD",
  demoLink: "",
  description: "Evaluate resilience and adaptability.",
  cta: "Coming Soon"
}, {
  id: 7,
  name: "Cultural Intelligence (CQ) Mapping",
  status: "upcoming",
  price: "TBD",
  demoLink: "",
  description: "Cross-cultural adaptability.",
  cta: "Coming Soon"
}, {
  id: 8,
  name: "DISC Personality Profiling",
  status: "upcoming",
  price: "TBD",
  demoLink: "",
  description: "DISC model analysis.",
  cta: "Coming Soon"
}, {
  id: 9,
  name: "MBTI-Based Personality Mapping",
  status: "upcoming",
  price: "TBD",
  demoLink: "",
  description: "Personality type identification.",
  cta: "Coming Soon"
}, {
  id: 10,
  name: "Learning Style Analysis",
  status: "upcoming",
  price: "TBD",
  demoLink: "",
  description: "Identify optimal learning modalities.",
  cta: "Coming Soon"
}, {
  id: 11,
  name: "Strength & Weakness Mapping",
  status: "upcoming",
  price: "TBD",
  demoLink: "",
  description: "Detailed strength profiling.",
  cta: "Coming Soon"
}, {
  id: 12,
  name: "Leadership Potential Analysis",
  status: "upcoming",
  price: "TBD",
  demoLink: "",
  description: "Leadership trait evaluation.",
  cta: "Coming Soon"
}, {
  id: 13,
  name: "Career Pathway Recommendation",
  status: "upcoming",
  price: "TBD",
  demoLink: "",
  description: "Research-driven career guidance.",
  cta: "Coming Soon"
}, {
  id: 14,
  name: "Student Development Program",
  status: "upcoming",
  price: "TBD",
  demoLink: "",
  description: "Holistic student growth.",
  cta: "Coming Soon"
}, {
  id: 15,
  name: "Employee Assessment System",
  status: "upcoming",
  price: "TBD",
  demoLink: "",
  description: "Employee evaluation.",
  cta: "Coming Soon"
}, {
  id: 16,
  name: "Recruitment Evaluation Toolkit",
  status: "upcoming",
  price: "TBD",
  demoLink: "",
  description: "Pre-hiring screening.",
  cta: "Coming Soon"
}];
function AdminPage() {
  const [loggedIn, setLoggedIn] = reactExports.useState(false);
  const [password, setPassword] = reactExports.useState("");
  const [showPw, setShowPw] = reactExports.useState(false);
  const [tab, setTab] = reactExports.useState("products");
  const [products, setProducts] = reactExports.useState(defaultProducts);
  const [editing, setEditing] = reactExports.useState(null);
  const [pricing, setPricing] = reactExports.useState(defaultPricing);
  const [pricingSaved, setPricingSaved] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (loggedIn) setPricing(loadPricing());
  }, [loggedIn]);
  if (!loggedIn) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background px-4 hero-gradient", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-8 max-w-sm w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-6 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-7 h-7 text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-center text-foreground mb-1", children: "Perfy Admin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground mb-6", children: "Manage products, pricing & leads" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        if (password === "perfy2024") setLoggedIn(true);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: showPw ? "text" : "password", placeholder: "Enter admin password", value: password, onChange: (e) => setPassword(e.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground", onClick: () => setShowPw(!showPw), children: showPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", className: "w-full mt-4", type: "submit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-4 h-4" }),
          " Login"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-center text-muted-foreground mt-3", children: "Default: perfy2024" })
      ] })
    ] }) });
  }
  const updateProduct = (id, field, value) => {
    setProducts((prev) => prev.map((p) => p.id === id ? {
      ...p,
      [field]: value
    } : p));
  };
  const updatePrice = (key, field, value) => {
    setPricing((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value
      }
    }));
    setPricingSaved(false);
  };
  const handleSavePricing = () => {
    savePricing(pricing);
    setPricingSaved(true);
    setTimeout(() => setPricingSaved(false), 2500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border bg-background/80 backdrop-blur sticky top-0 z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 h-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold text-foreground", children: "Perfy Admin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => setLoggedIn(false), children: "Logout" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl flex items-center gap-1 px-4 md:px-8 -mb-px", children: [{
        id: "products",
        label: "Products",
        icon: Package
      }, {
        id: "pricing",
        label: "Pricing",
        icon: DollarSign
      }, {
        id: "leads",
        label: "Leads & Reports",
        icon: FileText
      }].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(t.id), className: `flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${tab === t.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "w-4 h-4" }),
        " ",
        t.label
      ] }, t.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8 py-8", children: [
      tab === "products" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground mb-2", children: "Product Management" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Toggle active/upcoming status, update prices, and edit demo links." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2 flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2.5 h-2.5 rounded-full ${p.status === "active" ? "bg-green-500" : "bg-muted-foreground"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: p.price })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: p.status, onChange: (e) => updateProduct(p.id, "status", e.target.value), className: "text-sm border rounded-lg px-3 py-1.5 bg-background text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "active", children: "Active" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "upcoming", children: "Upcoming" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => setEditing(editing === p.id ? null : p.id), children: editing === p.id ? "Close" : "Edit" })
            ] })
          ] }),
          editing === p.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Product Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: p.name, onChange: (e) => updateProduct(p.id, "name", e.target.value), className: "mt-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: p.price, onChange: (e) => updateProduct(p.id, "price", e.target.value), className: "mt-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Demo Redirect Link (after admin approval)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: p.demoLink, onChange: (e) => updateProduct(p.id, "demoLink", e.target.value), className: "mt-1", placeholder: "https://..." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "CTA Text" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: p.cta, onChange: (e) => updateProduct(p.id, "cta", e.target.value), className: "mt-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: p.description, onChange: (e) => updateProduct(p.id, "description", e.target.value), className: "mt-1" })
            ] }),
            p.reportFile && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Sample Report File" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: p.reportFile, readOnly: true, className: "bg-muted" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero-outline", size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: p.reportFile, target: "_blank", rel: "noopener noreferrer", children: "Preview" }) })
              ] })
            ] })
          ] })
        ] }, p.id)) })
      ] }),
      tab === "pricing" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground mb-2", children: "Pricing Plans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Update Individual, Institutional, and Custom (Enterprise) plan prices. Changes appear instantly on the website." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: ["individual", "institutional", "enterprise"].map((key) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground capitalize mb-1", children: key === "enterprise" ? "Custom (Enterprise)" : key }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-4", children: [
            "Plan pricing for ",
            key,
            " customers"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: pricing[key].price, onChange: (e) => updatePrice(key, "price", e.target.value), className: "mt-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Period / Unit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: pricing[key].period, onChange: (e) => updatePrice(key, "period", e.target.value), className: "mt-1" })
            ] })
          ] })
        ] }, key)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", onClick: handleSavePricing, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
            " Save Pricing"
          ] }),
          pricingSaved && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-green-600", children: "✓ Saved — live on website" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => {
            setPricing(defaultPricing);
            setPricingSaved(false);
          }, children: "Reset to defaults" })
        ] })
      ] }),
      tab === "leads" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground mb-2", children: "Leads & Sample Reports" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-6", children: [
          "All website inquiries are sent to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "perfy.admin@gmail.com" }),
          ". Demo access is granted via email approval."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-primary" }),
            " Sample Reports"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [{
            name: "Psychometric (1.pdf)",
            file: "/reports/psychometric-sample.pdf"
          }, {
            name: "Brain Mapping (2.pdf)",
            file: "/reports/brain-mapping-sample.pdf"
          }, {
            name: "Performance Intelligence (3.pdf)",
            file: "/reports/performance-intelligence-sample.pdf"
          }].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-2", children: r.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3 break-all", children: r.file }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero-outline", size: "sm", className: "w-full", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: r.file, target: "_blank", rel: "noopener noreferrer", children: "Preview" }) })
          ] }, r.file)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-3", children: "Lead Flow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-2 text-sm text-muted-foreground list-decimal list-inside", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Visitor fills the demo / contact form on the website." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Their request is emailed directly to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "perfy.admin@gmail.com" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Admin reviews and replies with the demo access link (configured per product above)." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Visitor can only access the demo after admin approval." })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  AdminPage as component
};
