import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button, L as Label, I as Input, l as loadPricing, c as cn } from "./pricing-store-D7hCoaNa.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { X, M as Menu, C as CircleCheck, c as Mail, d as Send, e as Sparkles, A as ArrowRight, F as FileText, U as Users, f as Layers, g as ChartColumn, T as TriangleAlert, G as GraduationCap, B as Building2, h as UserX, i as ClipboardList, j as Target, k as Brain, l as Compass, m as Shield, n as TrendingUp, o as Lightbulb, H as Heart, p as Mountain, q as Globe, r as BookOpen, s as Star, t as Briefcase, u as UserCheck, v as ArrowUpRight, L as Lock, w as Building, x as Check, y as Download, z as ExternalLink } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
const perfyLogo = "/assets/perfy-logo-Bl9trzXr.png";
function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = reactExports.useState("neural");
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const nodes = [];
    for (let i = 0; i < 80; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        r: Math.random() * 3 + 1,
        alpha: Math.random() * 0.5 + 0.3
      });
    }
    let frame = 0;
    const maxFrames = 90;
    let animId;
    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bg.addColorStop(0, "#0a0a1a");
      bg.addColorStop(0.5, "#0d0d2b");
      bg.addColorStop(1, "#0a0a1a");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const progress = Math.min(frame / maxFrames, 1);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const alpha = (1 - dist / 200) * progress * 0.5;
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(139, 92, 246, ${alpha})`);
            grad.addColorStop(1, `rgba(59, 130, 246, ${alpha})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n, idx) => {
        const hue = idx % 2 === 0 ? "139, 92, 246" : "59, 130, 246";
        const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
        gradient.addColorStop(0, `rgba(${hue}, ${n.alpha * progress})`);
        gradient.addColorStop(1, `rgba(${hue}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(255, 255, 255, ${n.alpha * progress})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });
      if (frame < maxFrames + 20) {
        animId = requestAnimationFrame(draw);
      }
    };
    draw();
    const t1 = setTimeout(() => setPhase("logo"), 1200);
    const t2 = setTimeout(() => setPhase("exit"), 3e3);
    const t3 = setTimeout(onComplete, 3800);
    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"}`,
      style: { background: "#0a0a1a" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "absolute inset-0" }),
        (phase === "logo" || phase === "exit") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center animate-logo-reveal px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: perfyLogo,
              alt: "Perfy",
              className: "h-56 sm:h-64 md:h-80 lg:h-96 w-auto invert brightness-200 drop-shadow-[0_0_60px_rgba(139,92,246,0.8)]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-xl md:text-3xl tracking-[0.35em] font-light uppercase bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent", children: "From effort to impact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-purple-400 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-blue-400 animate-pulse", style: { animationDelay: "0.2s" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-purple-400 animate-pulse", style: { animationDelay: "0.4s" } })
          ] })
        ] })
      ]
    }
  );
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const ADMIN_EMAIL = "perfy.admin@gmail.com";
const schema = objectType({
  name: stringType().trim().min(2, "Name required").max(100),
  email: stringType().trim().email("Invalid email").max(255),
  phone: stringType().trim().min(7, "Phone required").max(20),
  organization: stringType().trim().max(150).optional(),
  message: stringType().trim().max(1e3).optional()
});
function LeadFormDialog({
  open,
  onOpenChange,
  intent,
  productContext,
  description
}) {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [sent, setSent] = reactExports.useState(false);
  const reset = () => {
    setForm({ name: "", email: "", phone: "", organization: "", message: "" });
    setErrors({});
    setSent(false);
  };
  const handleClose = (next) => {
    if (!next) setTimeout(reset, 300);
    onOpenChange(next);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0]] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const subject = `[Perfy Lead] ${intent}${productContext ? " — " + productContext : ""}`;
    const body = [
      `New lead request from Perfy website`,
      ``,
      `Intent: ${intent}`,
      productContext ? `Product: ${productContext}` : "",
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Organization: ${form.organization || "—"}`,
      ``,
      `Message:`,
      form.message || "—",
      ``,
      `--`,
      `Sent from perfy.app`
    ].filter(Boolean).join("\n");
    const mailto = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: handleClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "glass-card rounded-2xl max-w-md", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-9 h-9 text-white" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "Request Sent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
      "Your request has been forwarded to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: ADMIN_EMAIL }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
      "Our team will review and respond within 24 hours. ",
      productContext && "Once approved, you'll receive a private demo link."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", className: "mt-6", onClick: () => handleClose(false), children: "Close" })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-xl font-bold", children: intent }),
          productContext && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-semibold mt-0.5", children: productContext })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-sm", children: description || `Fill in your details. Our team at ${ADMIN_EMAIL} will review and get back to you within 24 hours.` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-3 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", className: "text-xs font-medium", children: "Full Name *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "name",
            value: form.name,
            onChange: (e) => setForm({ ...form, name: e.target.value }),
            placeholder: "Jane Doe",
            className: "mt-1"
          }
        ),
        errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-1", children: errors.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", className: "text-xs font-medium", children: "Email *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "email",
              type: "email",
              value: form.email,
              onChange: (e) => setForm({ ...form, email: e.target.value }),
              placeholder: "you@org.com",
              className: "mt-1"
            }
          ),
          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-1", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", className: "text-xs font-medium", children: "Phone *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "phone",
              value: form.phone,
              onChange: (e) => setForm({ ...form, phone: e.target.value }),
              placeholder: "+91 98765 43210",
              className: "mt-1"
            }
          ),
          errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-1", children: errors.phone })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "org", className: "text-xs font-medium", children: "Organization" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "org",
            value: form.organization,
            onChange: (e) => setForm({ ...form, organization: e.target.value }),
            placeholder: "School / College / Company",
            className: "mt-1"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "msg", className: "text-xs font-medium", children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "msg",
            value: form.message,
            onChange: (e) => setForm({ ...form, message: e.target.value }),
            placeholder: "Tell us about your requirement...",
            rows: 3,
            className: "mt-1 resize-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", variant: "hero", className: "w-full mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
        " Send Request"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-center text-muted-foreground", children: productContext ? "Demo access requires admin approval. You'll receive a secure link after approval." : "Your details are sent directly to our sales team." })
    ] })
  ] }) }) });
}
const navLinks = [
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const [leadOpen, setLeadOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 h-20 md:h-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: perfyLogo, alt: "Perfy", className: "h-16 md:h-20 w-auto drop-shadow-[0_2px_8px_rgba(139,92,246,0.25)]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
          navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "text-sm font-semibold text-muted-foreground hover:text-primary transition-colors", children: l.label }, l.href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "sm", onClick: () => setLeadOpen(true), children: "Request Demo" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden", onClick: () => setOpen(!open), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" }) })
      ] }),
      open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden glass-card border-t border-border/50 px-4 py-4 flex flex-col gap-3", children: [
        navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            className: "text-sm font-medium text-muted-foreground hover:text-primary",
            onClick: () => setOpen(false),
            children: l.label
          },
          l.href
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "sm", className: "w-full", onClick: () => {
          setOpen(false);
          setLeadOpen(true);
        }, children: "Request Demo" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LeadFormDialog,
      {
        open: leadOpen,
        onOpenChange: setLeadOpen,
        intent: "Request Demo",
        description: "Tell us about your institution. Our team will respond within 24 hours."
      }
    )
  ] });
}
const REPORTS = {
  psychometric: {
    title: "Psychometric Assessment — Sample Report",
    subtitle: "Personality, behavior & decision pattern analysis",
    file: "/reports/psychometric-sample.pdf",
    gradient: "from-purple-500 to-violet-600"
  },
  "brain-mapping": {
    title: "Brain Mapping — Sample Report",
    subtitle: "Cognitive ability, learning style & intelligence mapping",
    file: "/reports/brain-mapping-sample.pdf",
    gradient: "from-blue-500 to-cyan-500"
  },
  "performance-intelligence": {
    title: "Performance Intelligence — Sample Report",
    subtitle: "Strengths, weaknesses & growth potential evaluation",
    file: "/reports/performance-intelligence-sample.pdf",
    gradient: "from-indigo-500 to-blue-600"
  }
};
function SampleReportDialog({ open, onOpenChange, reportKey }) {
  const report = reportKey ? REPORTS[reportKey] : null;
  if (!report) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "glass-card rounded-2xl max-w-5xl w-[95vw] h-[90vh] flex flex-col p-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { className: "p-5 pb-4 border-b border-border/50 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${report.gradient} flex items-center justify-center shadow-lg`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-lg font-bold truncate", children: report.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-xs mt-0.5 truncate", children: report.subtitle })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero-outline", size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: report.file, download: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
          " Download"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: report.file, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
          " Open"
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-muted/30 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        src: `${report.file}#toolbar=1&view=FitH`,
        title: report.title,
        className: "w-full h-full border-0"
      }
    ) })
  ] }) });
}
function HeroSection() {
  const [leadOpen, setLeadOpen] = reactExports.useState(false);
  const [reportOpen, setReportOpen] = reactExports.useState(false);
  const [reportKey, setReportKey] = reactExports.useState("psychometric");
  const [pickerOpen, setPickerOpen] = reactExports.useState(false);
  const openSample = (key) => {
    setReportKey(key);
    setPickerOpen(false);
    setReportOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center overflow-hidden pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-gradient" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-aurora", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb-pink" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-grid" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "conic-ring -top-32 -right-32" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "conic-ring -bottom-40 -left-40", style: { animationDirection: "reverse" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sparkle", style: { top: "18%", left: "12%", animationDelay: "0s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sparkle", style: { top: "28%", right: "18%", animationDelay: "1.2s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sparkle", style: { bottom: "22%", left: "22%", animationDelay: "2.4s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sparkle", style: { top: "55%", right: "8%", animationDelay: "0.8s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sparkle", style: { bottom: "30%", right: "30%", animationDelay: "3.1s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sparkle", style: { top: "70%", left: "8%", animationDelay: "1.8s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 md:px-8 py-20 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary mb-8 animate-fade-up backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
        "Research-Driven Brain Intelligence Platform"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] animate-fade-up", style: { animationDelay: "0.1s" }, children: [
        "Stop Making Wrong Decisions",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "About People." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-up leading-relaxed", style: { animationDelay: "0.2s" }, children: "Perfy helps schools, colleges, and companies understand individuals deeply through structured assessments and 25+ page interpretation reports." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base font-semibold text-primary animate-fade-up", style: { animationDelay: "0.25s" }, children: `"We don't give scores. We give clarity."` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4 animate-fade-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "xl", className: "group", onClick: () => setLeadOpen(true), children: [
          "Request Demo",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero-outline", size: "xl", onClick: () => setPickerOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5" }),
          " View Sample Report"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 flex flex-wrap gap-8 text-sm text-muted-foreground animate-fade-up", style: { animationDelay: "0.4s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-gradient-to-r from-primary to-perfy-blue" }),
          "25+ Page Reports"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-gradient-to-r from-primary to-perfy-blue" }),
          "Multi-Dimensional Analysis"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-gradient-to-r from-primary to-perfy-blue" }),
          "Research-Driven Frameworks"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LeadFormDialog,
      {
        open: leadOpen,
        onOpenChange: setLeadOpen,
        intent: "Request Demo",
        description: "Tell us about your institution. Our team at perfy.admin@gmail.com will reach out within 24 hours with a tailored demo."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SampleReportDialog, { open: reportOpen, onOpenChange: setReportOpen, reportKey }),
    pickerOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up",
        onClick: () => setPickerOpen(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 max-w-md w-full", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "Choose a Sample Report" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "Select which interpretation report you'd like to preview." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openSample("psychometric"), className: "w-full glass-card-hover glass-card rounded-xl p-4 text-left flex items-center gap-3 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm", children: "Psychometric Assessment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Personality & behavior report" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openSample("brain-mapping"), className: "w-full glass-card-hover glass-card rounded-xl p-4 text-left flex items-center gap-3 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm", children: "Brain Mapping Test" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Cognitive & learning style report" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openSample("performance-intelligence"), className: "w-full glass-card-hover glass-card rounded-xl p-4 text-left flex items-center gap-3 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm", children: "Performance Intelligence" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Strengths & growth report" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", className: "w-full mt-4", onClick: () => setPickerOpen(false), children: "Close" })
        ] })
      }
    )
  ] });
}
const stats = [
  { icon: Users, label: "Used for students, hiring & performance evaluation", value: "Multi-Sector", gradient: "from-purple-500 to-blue-500" },
  { icon: FileText, label: "Structured interpretation reports", value: "25+ Pages", gradient: "from-blue-500 to-cyan-500" },
  { icon: Layers, label: "Personality, Intelligence, Behavior, Career", value: "Multi-Dimensional", gradient: "from-violet-500 to-purple-500" },
  { icon: ChartColumn, label: "Deep Interpretation System", value: "Research-Driven", gradient: "from-indigo-500 to-blue-500" }
];
function TrustSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-reveal": true,
      style: { transitionDelay: `${i * 80}ms` },
      className: "glass-card rounded-2xl p-6 text-center transition-all duration-300 glass-card-hover group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-7 h-7 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-foreground", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: s.label })
      ]
    },
    i
  )) }) }) });
}
const problems = [
  {
    icon: GraduationCap,
    title: "Students Choosing Wrong Careers",
    desc: "Without deep personality and cognitive analysis, students end up in careers that don't match their strengths — leading to frustration and wasted potential.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Building2,
    title: "Institutions Lacking Real Insights",
    desc: "Schools and colleges rely on grades alone. They have zero visibility into a student's behavioral patterns, learning style, or true capabilities.",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: UserX,
    title: "Companies Hiring Blind",
    desc: "Organizations make hiring decisions based on resumes and gut feeling — without understanding the candidate's personality, adaptability, or leadership traits.",
    color: "from-rose-500 to-red-500"
  }
];
function ProblemSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding perfy-gradient relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-destructive/5 blur-[100px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", "data-reveal": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-destructive text-sm font-semibold mb-4 bg-destructive/10 px-4 py-1.5 rounded-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" }),
          "The Problem"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-foreground", children: [
          "Wrong Decisions Cost ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Everything" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl mx-auto text-lg", children: "Without structured analysis, institutions and companies keep making costly mistakes about people." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: problems.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-reveal": true,
          style: { transitionDelay: `${i * 100}ms` },
          className: "glass-card rounded-2xl p-8 glass-card-hover transition-all duration-300 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-7 h-7 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-3", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: p.desc })
          ]
        },
        i
      )) })
    ] })
  ] });
}
const steps = [
  { icon: ClipboardList, step: "01", title: "Structured Assessment", desc: "Carefully designed psychometric instruments capture multi-dimensional data points.", gradient: "from-purple-500 to-violet-500" },
  { icon: Layers, step: "02", title: "Multi-Dimensional Analysis", desc: "Our deep interpretation system processes personality, cognition, behavior, and aptitude.", gradient: "from-blue-500 to-cyan-500" },
  { icon: FileText, step: "03", title: "Deep Interpretation Report", desc: "A 25+ page report with radar charts, DISC profiles, SWOT analysis, and career mapping.", gradient: "from-indigo-500 to-purple-500" },
  { icon: Target, step: "04", title: "Actionable Decision Insights", desc: "Clear, research-driven recommendations that drive real decisions for institutions.", gradient: "from-violet-500 to-blue-500" }
];
function SolutionSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding bg-background relative overflow-hidden", id: "how-it-works", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", "data-reveal": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4 bg-primary/10 px-4 py-1.5 rounded-full", children: "Our System" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-foreground", children: [
          "Data → Meaning → Insight → ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Action" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl mx-auto text-lg", children: "A structured, research-driven framework that transforms raw assessment data into actionable intelligence." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, style: { transitionDelay: `${i * 100}ms` }, className: "relative group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-8 glass-card-hover transition-all duration-300 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-5xl font-black bg-gradient-to-br ${s.gradient} bg-clip-text text-transparent mb-4`, children: s.step }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
        ] }),
        i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-perfy-blue" })
      ] }, i)) })
    ] })
  ] });
}
const reportFeatures = [
  { icon: ChartColumn, label: "IQ, EQ, AQ, CQ Radar Charts", gradient: "from-purple-500 to-blue-500" },
  { icon: Brain, label: "DISC Personality Graph", gradient: "from-blue-500 to-cyan-500" },
  { icon: Compass, label: "Career Pathway Mapping", gradient: "from-indigo-500 to-violet-500" },
  { icon: Shield, label: "SWOT Analysis", gradient: "from-violet-500 to-purple-500" },
  { icon: TrendingUp, label: "Growth & Action Plan", gradient: "from-cyan-500 to-blue-500" },
  { icon: Target, label: "Decision Insights", gradient: "from-purple-500 to-indigo-500" }
];
function ReportShowcase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding perfy-gradient relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-primary/8 blur-[100px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", "data-reveal": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-foreground", children: [
          "This Is Not a Score.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "This Is a Complete Interpretation System." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl mx-auto text-lg", children: "Our 25+ page reports provide deep, multi-layered analysis that goes far beyond simple scoring." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto", children: reportFeatures.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-reveal": true,
          style: { transitionDelay: `${i * 70}ms` },
          className: "glass-card rounded-2xl p-6 text-center glass-card-hover transition-all duration-300 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: f.label })
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", "data-reveal": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground italic", children: '"Demo reports are sample outputs. Actual reports are customized per institution."' }) })
    ] })
  ] });
}
const allProducts = [
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
  { name: "Recruitment Evaluation Toolkit", desc: "Pre-hiring behavioral and cognitive screening toolkit.", audience: "Recruitment Agencies", icon: UserCheck, active: false, gradient: "from-rose-400 to-pink-400" }
];
function ProductsSection() {
  const [leadOpen, setLeadOpen] = reactExports.useState(false);
  const [leadIntent, setLeadIntent] = reactExports.useState("");
  const [leadProduct, setLeadProduct] = reactExports.useState();
  const [leadDesc, setLeadDesc] = reactExports.useState();
  const [reportOpen, setReportOpen] = reactExports.useState(false);
  const [reportKey, setReportKey] = reactExports.useState(null);
  const active = allProducts.filter((p) => p.active);
  const upcoming = allProducts.filter((p) => !p.active);
  const requestFreeDemo = (p) => {
    setLeadIntent("Free Demo Access Request");
    setLeadProduct(p.name);
    setLeadDesc(`This will email perfy.admin@gmail.com requesting free demo access to ${p.name}. Once the admin approves, you'll receive a private demo link by email within 24 hours.`);
    setLeadOpen(true);
  };
  const requestUpcoming = (p) => {
    setLeadIntent("Early Access Request");
    setLeadProduct(p.name);
    setLeadDesc(`${p.name} is launching soon. Send your details to perfy.admin@gmail.com — we'll notify you and offer institutional early access.`);
    setLeadOpen(true);
  };
  const openSample = (key) => {
    setReportKey(key);
    setReportOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding bg-background relative overflow-hidden", id: "products", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-perfy-blue/5 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4", "data-reveal": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-foreground", children: [
          "Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Products" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-3xl mx-auto text-lg", children: "Built as a complete human intelligence analysis ecosystem. Start with core assessments. Expand into advanced modules." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold text-foreground mb-6 flex items-center gap-2", "data-reveal": true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" }),
          " Active Products"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: active.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-reveal": true,
            style: { transitionDelay: `${i * 80}ms` },
            className: "glass-card rounded-2xl p-7 transition-all duration-300 relative group border border-transparent hover:border-primary/20 flex flex-col",
            children: [
              p.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-4 right-4 text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r ${p.gradient} shadow-lg`, children: p.badge }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-8 h-8 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-foreground mb-2", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: p.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary font-semibold mb-2", children: [
                "For: ",
                p.audience
              ] }),
              p.price && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground mb-4", children: p.price }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "sm", className: "w-full", onClick: () => requestFreeDemo(p), children: [
                  "Request Free Demo ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" })
                ] }),
                p.reportKey && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero-outline", size: "sm", className: "w-full", onClick: () => openSample(p.reportKey), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
                  " View Sample Report"
                ] })
              ] })
            ]
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold text-foreground mb-6 flex items-center gap-2", "data-reveal": true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-muted-foreground" }),
          " Upcoming Services"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: upcoming.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-reveal": true,
            style: { transitionDelay: `${i % 4 * 60}ms` },
            onClick: () => requestUpcoming(p),
            className: "upcoming-card glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 relative group hover:scale-[1.02]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 flex items-center gap-1 text-xs font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3" }),
                " Coming Soon"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-11 h-11 rounded-xl bg-gradient-to-br ${p.gradient} opacity-50 flex items-center justify-center mb-4`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-1", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: p.desc })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center text-sm text-primary font-medium", children: "Early access available for institutions" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LeadFormDialog,
      {
        open: leadOpen,
        onOpenChange: setLeadOpen,
        intent: leadIntent,
        productContext: leadProduct,
        description: leadDesc
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SampleReportDialog, { open: reportOpen, onOpenChange: setReportOpen, reportKey })
  ] });
}
const cases = [
  {
    icon: GraduationCap,
    title: "For Schools",
    items: ["Deep student understanding beyond grades", "Research-driven career guidance", "Behavioral pattern identification", "Parent-teacher insight reports"],
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: Building,
    title: "For Colleges",
    items: ["Placement readiness assessment", "Skill & competency mapping", "Leadership identification", "Department-wide analytics"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Briefcase,
    title: "For Companies",
    items: ["Structured hiring decisions", "Performance tracking frameworks", "Team composition analysis", "Employee growth planning"],
    gradient: "from-indigo-500 to-blue-500"
  }
];
function UseCasesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding perfy-gradient relative overflow-hidden", id: "use-cases", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", "data-reveal": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-foreground", children: [
          "Built for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Institutions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg max-w-2xl mx-auto", children: "Whether you're a school, college, or corporation — Perfy gives you the structured insight framework you need." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: cases.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-reveal": true,
          style: { transitionDelay: `${i * 120}ms` },
          className: "glass-card rounded-2xl p-8 glass-card-hover transition-all duration-300 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-14 h-14 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-7 h-7 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground mb-4", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: c.items.map((item, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${c.gradient} shrink-0` }),
              item
            ] }, j)) })
          ]
        },
        i
      )) })
    ] })
  ] });
}
const baseInfo = [
  {
    key: "individual",
    name: "Individual",
    desc: "For individual students or professionals seeking personal insight.",
    features: ["Single assessment", "25+ page report", "Career mapping", "SWOT analysis", "Email support"],
    popular: false,
    gradient: "from-purple-500 to-violet-500"
  },
  {
    key: "institutional",
    name: "Institutional",
    desc: "Volume pricing for schools, colleges, and organizations.",
    features: ["Bulk assessments", "25+ page reports per individual", "Institution dashboard", "Comparative analytics", "Dedicated account manager", "Custom report branding"],
    popular: true,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    key: "enterprise",
    name: "Enterprise",
    desc: "Full platform access with custom integrations for large organizations.",
    features: ["Unlimited assessments", "All report modules", "API integration", "Custom frameworks", "On-site training", "Priority support", "White-label options"],
    popular: false,
    gradient: "from-indigo-500 to-blue-500"
  }
];
function PricingSection() {
  const [pricing, setPricing] = reactExports.useState(loadPricing());
  const [leadOpen, setLeadOpen] = reactExports.useState(false);
  const [intent, setIntent] = reactExports.useState("Request Custom Plan");
  reactExports.useEffect(() => {
    const sync = () => setPricing(loadPricing());
    window.addEventListener("perfy-pricing-updated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("perfy-pricing-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  const open = (planName) => {
    setIntent(`${planName} Plan Inquiry`);
    setLeadOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding bg-background relative overflow-hidden", id: "pricing", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", "data-reveal": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-foreground", children: [
          "Simple, Transparent ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Pricing" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg max-w-2xl mx-auto", children: "Choose the plan that fits your institution. All plans include our deep interpretation reports." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: baseInfo.map((p, i) => {
        const price = pricing[p.key];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-reveal": true,
            style: { transitionDelay: `${i * 100}ms` },
            className: `rounded-2xl p-8 transition-all duration-300 relative ${p.popular ? `bg-gradient-to-br ${p.gradient} text-white shadow-2xl scale-[1.03]` : "glass-card glass-card-hover"}`,
            children: [
              p.popular && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
                " Most Popular"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-lg font-bold ${p.popular ? "" : "text-foreground"}`, children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-baseline gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-black", children: price.price }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-sm ${p.popular ? "opacity-80" : "text-muted-foreground"}`, children: [
                  "/",
                  price.period
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-3 text-sm ${p.popular ? "opacity-80" : "text-muted-foreground"}`, children: p.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: p.features.map((f, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 shrink-0" }),
                f
              ] }, j)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: p.popular ? "hero-outline" : "hero",
                  className: `w-full mt-8 ${p.popular ? "bg-white text-primary hover:bg-white/90 border-white" : ""}`,
                  onClick: () => open(p.name),
                  children: price.price === "Custom" ? "Contact Sales" : "Request Custom Plan"
                }
              )
            ]
          },
          i
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeadFormDialog, { open: leadOpen, onOpenChange: setLeadOpen, intent })
  ] });
}
function FinalCTA() {
  const [leadOpen, setLeadOpen] = reactExports.useState(false);
  const [intent, setIntent] = reactExports.useState("Book Demo");
  const open = (i) => {
    setIntent(i);
    setLeadOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-padding relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-perfy-blue/5 to-primary/10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-perfy-blue/10 blur-[100px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl text-center", "data-reveal": true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-foreground", children: [
        "Make Better Decisions With",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Real Insight" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", children: "Join institutions that trust Perfy's research-driven framework to understand their people deeply and make decisions that matter." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "xl", className: "group", onClick: () => open("Book Demo"), children: [
          "Book Demo",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero-outline", size: "xl", onClick: () => open("Contact Sales"), children: "Contact Sales" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeadFormDialog, { open: leadOpen, onOpenChange: setLeadOpen, intent })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-foreground text-background/80 py-14 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: perfyLogo, alt: "Perfy", className: "h-12 invert brightness-200 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-70", children: "Research-driven brain intelligence & psychometric analysis platform. From effort to impact." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Products" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm opacity-70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Psychometric Assessment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Brain Mapping Test" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Performance Intelligence" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm opacity-70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "About Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Careers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Contact" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm opacity-70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Help Center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Privacy Policy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Terms of Service" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-8 border-t border-background/10 text-center text-sm opacity-50", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Perfy. All rights reserved."
    ] })
  ] }) });
}
function useScrollReveal() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("revealed"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
function Index() {
  const [showIntro, setShowIntro] = reactExports.useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem("perfy_intro_seen") !== "1";
  });
  const handleComplete = reactExports.useCallback(() => {
    sessionStorage.setItem("perfy_intro_seen", "1");
    setShowIntro(false);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    showIntro && /* @__PURE__ */ jsxRuntimeExports.jsx(IntroAnimation, { onComplete: handleComplete }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: showIntro ? "opacity-0" : "opacity-100 transition-opacity duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageContent, {})
    ] })
  ] });
}
function PageContent() {
  useScrollReveal();
  reactExports.useEffect(() => {
    const t = setTimeout(() => {
      document.querySelectorAll("[data-reveal]:not(.revealed)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) el.classList.add("revealed");
      });
    }, 100);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProblemSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SolutionSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReportShowcase, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UseCasesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PricingSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
