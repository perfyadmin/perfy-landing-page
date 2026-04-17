import perfyLogo from "@/assets/perfy-logo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-14 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={perfyLogo} alt="Perfy" className="h-12 invert brightness-200 mb-4" />
            <p className="text-sm opacity-70">
              Research-driven brain intelligence & psychometric analysis platform. From effort to impact.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Psychometric Assessment</li>
              <li>Brain Mapping Test</li>
              <li>Performance Intelligence</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Perfy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
