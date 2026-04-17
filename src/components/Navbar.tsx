import { Link } from "@tanstack/react-router";
import perfyLogo from "@/assets/perfy-logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadFormDialog from "@/components/LeadFormDialog";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 h-20 md:h-24">
          <Link to="/" className="flex items-center gap-2">
            <img src={perfyLogo} alt="Perfy" className="h-16 md:h-20 w-auto drop-shadow-[0_2px_8px_rgba(139,92,246,0.25)]" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="sm" onClick={() => setLeadOpen(true)}>
              Request Demo
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden glass-card border-t border-border/50 px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="w-full" onClick={() => { setOpen(false); setLeadOpen(true); }}>
              Request Demo
            </Button>
          </div>
        )}
      </nav>

      <LeadFormDialog
        open={leadOpen}
        onOpenChange={setLeadOpen}
        intent="Request Demo"
        description="Tell us about your institution. Our team will respond within 24 hours."
      />
    </>
  );
}
