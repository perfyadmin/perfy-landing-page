import { useState, useEffect, useRef } from "react";
import perfyLogo from "@/assets/perfy-logo.png";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"neural" | "logo" | "exit">("neural");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        r: Math.random() * 3 + 1,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    let frame = 0;
    const maxFrames = 90;
    let animId: number;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dark gradient background
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

      // Draw connections with gradient colors
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

      // Draw nodes with colorful gradients
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
    const t2 = setTimeout(() => setPhase("exit"), 3000);
    const t3 = setTimeout(onComplete, 3800);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      style={{ background: "#0a0a1a" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      {(phase === "logo" || phase === "exit") && (
        <div className="relative z-10 flex flex-col items-center animate-logo-reveal px-6">
          <img
            src={perfyLogo}
            alt="Perfy"
            className="h-56 sm:h-64 md:h-80 lg:h-96 w-auto invert brightness-200 drop-shadow-[0_0_60px_rgba(139,92,246,0.8)]"
          />
          <p className="mt-8 text-xl md:text-3xl tracking-[0.35em] font-light uppercase bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            From effort to impact
          </p>
          <div className="mt-8 flex gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: "0.2s" }} />
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      )}
    </div>
  );
}
