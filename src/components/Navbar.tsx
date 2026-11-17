"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/store/cart";
import { Leaf, ShoppingBag, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/shop", label: "All Plants" },
  { href: "/shop?type=fruit", label: "Fruit Trees" },
  { href: "/shop?type=decorative", label: "Decorative" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "Our Story" },
];

const MOBILE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Browse All Plants" },
  { href: "/shop?type=fruit", label: "Fruit Trees" },
  { href: "/shop?type=decorative", label: "Decorative Plants" },
  { href: "/journal", label: "Journal & Care Guides" },
  { href: "/about", label: "Our Story (Since 1962)" },
];

export function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* Close mobile menu on route change via click */
  const closeMobile = () => setMobileMenuOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("?")[0]);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-[#f8f7f4]/95 backdrop-blur-md">
        <div className="container-editorial flex h-16 items-center justify-between md:h-[72px]">

          {/* ── Brand ── */}
          <Link
            href="/"
            onClick={closeMobile}
            className="flex shrink-0 items-center gap-2.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-[18px] w-[18px]" />
            </span>
            <span className="font-display text-[1.05rem] font-semibold tracking-tight text-foreground md:text-lg">
              Islam Nursery Farm
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav
            className="hidden items-center gap-6 text-sm font-medium md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`transition-colors ${
                    active
                      ? "text-primary font-semibold border-b-2 border-primary pb-0.5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-2.5">
            {/* Cart */}
            <Link
              href="/cart"
              aria-label="View Cart"
              className="relative inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <ShoppingBag className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">Cart</span>
              {mounted && totalItems > 0 && (
                <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-accent px-1.5 text-[11px] font-bold leading-none text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile slide-down menu (outside header so it stacks below) ── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background shadow-lg md:hidden"
          aria-label="Mobile navigation"
        >
          <nav className="container-editorial flex flex-col divide-y divide-border">
            {MOBILE_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMobile}
                className="py-4 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
