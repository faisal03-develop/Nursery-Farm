import Link from "next/link";
import { Leaf, ShieldCheck, Sprout, SunMedium, MessageCircle } from "lucide-react";

const SHOP_LINKS = [
  { href: "/shop?type=fruit", label: "Fruit Saplings (Mango, Lemon, Guava)" },
  { href: "/shop?type=decorative", label: "Indoor & Balcony Plants" },
  { href: "/shop", label: "Complete Catalogue" },
  { href: "/cart", label: "Your Cart" },
];

const GUIDE_LINKS = [
  { href: "/journal", label: "Gardening Journal" },
  { href: "/about", label: "Our Story (Since 1962)" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">

      {/* ── Main grid ── */}
      <div className="container-editorial grid gap-10 py-16 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand column */}
        <div className="sm:col-span-2 md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-[18px] w-[18px]" />
            </span>
            <span className="font-display text-lg font-semibold text-foreground">
              Islam Nursery Farm
            </span>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Three generations of nursery craft, rooted in patience. Hand-raised fruit saplings and decorative houseplants, safely shipped to your doorstep.
          </p>

          {/* Trust badges */}
          <ul className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-sage-deep" />
              7-Day Guarantee
            </li>
            <li className="flex items-center gap-1.5">
              <SunMedium className="h-3.5 w-3.5 shrink-0 text-sage-deep" />
              Climate Matched
            </li>
            <li className="flex items-center gap-1.5">
              <Sprout className="h-3.5 w-3.5 shrink-0 text-sage-deep" />
              Breathable Packing
            </li>
          </ul>
        </div>

        {/* Shop column */}
        <div>
          <p className="eyebrow mb-4">The Nursery</p>
          <ul className="space-y-2.5 text-sm">
            {SHOP_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Learn column */}
        <div>
          <p className="eyebrow mb-4">Grower Guides</p>
          <ul className="space-y-2.5 text-sm">
            {GUIDE_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/?text=Hello%20Islam%20Nursery%20Farm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageCircle className="h-3.5 w-3.5 shrink-0 text-green-700" />
                WhatsApp Grower Help
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-border">
        <div className="container-editorial flex flex-col gap-1.5 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Islam Nursery Farm. Raised with patience, delivered with care.</p>
          <p className="shrink-0">Hand-packed · Breathable transit · Nationwide delivery.</p>
        </div>
      </div>
    </footer>
  );
}
