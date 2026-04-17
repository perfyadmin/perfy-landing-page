// Simple localStorage-backed pricing store so the admin panel can update
// prices that the pricing section reads.

export interface PlanPricing {
  individual: { price: string; period: string };
  institutional: { price: string; period: string };
  enterprise: { price: string; period: string };
}

const KEY = "perfy_pricing_v1";

export const defaultPricing: PlanPricing = {
  individual: { price: "₹499", period: "per assessment" },
  institutional: { price: "₹349", period: "per assessment" },
  enterprise: { price: "Custom", period: "tailored plan" },
};

export function loadPricing(): PlanPricing {
  if (typeof window === "undefined") return defaultPricing;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultPricing;
    const parsed = JSON.parse(raw);
    return { ...defaultPricing, ...parsed };
  } catch {
    return defaultPricing;
  }
}

export function savePricing(p: PlanPricing) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(p));
  window.dispatchEvent(new CustomEvent("perfy-pricing-updated"));
}
