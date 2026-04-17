import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, CheckCircle2, Send, Loader2 } from "lucide-react";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { API_URL } from "@/lib/api";

const ADMIN_EMAIL = "perfy.admin@gmail.com";

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone required").max(20),
  organization: z.string().trim().max(150).optional(),
  message: z.string().trim().max(1000).optional(),
});

interface LeadFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  intent: string; // e.g. "Request Demo", "Book Demo", "Contact Sales", "Free Demo Access — Psychometric"
  productContext?: string;
  description?: string;
}

export default function LeadFormDialog({
  open, onOpenChange, intent, productContext, description,
}: LeadFormDialogProps) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", organization: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reset = () => {
    setForm({ name: "", email: "", phone: "", organization: "", message: "" });
    setErrors({});
    setSent(false);
  };

  const handleClose = (next: boolean) => {
    if (!next) setTimeout(reset, 300);
    onOpenChange(next);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      await axios.post(`${API_URL}/api/leads`, {
        ...form,
        intent,
        productContext,
      });

      setSent(true);
      toast.success("Request sent successfully!");
    } catch (err: any) {
      console.error("Lead submission error:", err);
      toast.error(err.response?.data?.message || "Failed to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="glass-card rounded-2xl max-w-md">
        {sent ? (
          <div className="py-6 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4 shadow-lg">
              <CheckCircle2 className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Request Sent</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Your request has been forwarded to <span className="font-semibold text-primary">{ADMIN_EMAIL}</span>.
            </p>
            <p className="text-sm text-muted-foreground">
              Our team will review and respond within 24 hours. {productContext && "Once approved, you'll receive a private demo link."}
            </p>
            <Button variant="hero" className="mt-6" onClick={() => handleClose(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-xl font-bold">{intent}</DialogTitle>
                  {productContext && <p className="text-xs text-primary font-semibold mt-0.5">{productContext}</p>}
                </div>
              </div>
              <DialogDescription className="text-sm">
                {description || `Fill in your details. Our team at ${ADMIN_EMAIL} will review and get back to you within 24 hours.`}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-3 mt-2">
              <div>
                <Label htmlFor="name" className="text-xs font-medium">Full Name *</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe" className="mt-1" />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="email" className="text-xs font-medium">Email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@org.com" className="mt-1" />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs font-medium">Phone *</Label>
                  <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210" className="mt-1" />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="org" className="text-xs font-medium">Organization</Label>
                <Input id="org" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  placeholder="School / College / Company" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="msg" className="text-xs font-medium">Message</Label>
                <Textarea id="msg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your requirement..." rows={3} className="mt-1 resize-none" />
              </div>
              <Button type="submit" variant="hero" className="w-full mt-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Request
                  </>
                )}
              </Button>
              <p className="text-[11px] text-center text-muted-foreground">
                {productContext
                  ? "Demo access requires admin approval. You'll receive a secure link after approval."
                  : "Your details are sent directly to our sales team."}
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
