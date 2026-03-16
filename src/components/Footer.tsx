import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-mono text-xl font-bold tracking-tight mb-4">TEES & HOODIES</h3>
            <p className="text-background/60 text-sm max-w-sm leading-relaxed">
              Streetwear born in Accra. Heavyweight cotton, oversized fits, and urban edge. Designed for the culture.
            </p>
          </div>
          <div>
            <p className="technical-label text-background/40 mb-4">Navigate</p>
            <div className="flex flex-col gap-2">
              {[
                { to: "/shop", label: "Shop All" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-background/70 hover:text-background transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="technical-label text-background/40 mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a href="https://wa.me/233000000000" target="_blank" rel="noreferrer" className="text-sm text-background/70 hover:text-background transition-colors">
                WhatsApp
              </a>
              <a href="mailto:hello@teesandhoodies.com" className="text-sm text-background/70 hover:text-background transition-colors">
                hello@teesandhoodies.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8" style={{ boxShadow: "0 -1px 0 0 rgba(255,255,255,0.1)" }}>
          <p className="technical-label text-background/30">© 2026 Tees & Hoodies. Designed in Accra, Ghana.</p>
        </div>
      </div>
    </footer>
  );
}
