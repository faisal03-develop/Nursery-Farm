import Link from "next/link";
import { Sprout, SunMedium, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Story — Islam Nursery Farm (Since 1962)",
  description:
    "Three generations of nursery craft. Family-grown fruit trees and decorative plants, raised with patience and shipped with care.",
};

export default function AboutPage() {
  return (
    <div className="container-editorial pt-10 pb-24 md:pt-16">
      <p className="eyebrow">Our Story</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight text-foreground md:text-6xl">
        A family nursery, raising plants the slow way.
      </h1>

      {/* Main Feature Image */}
      <div className="mt-10 overflow-hidden rounded-sm bg-secondary shadow-sm">
        <img
          src="/images/hero-main.jpg"
          alt="Inside the Islam Nursery Farm greenhouses"
          className="w-full max-h-[500px] object-cover"
        />
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow">Since 1962</p>
          <h2 className="mt-2 font-display text-2xl font-medium text-foreground">
            Six Decades of Root & Soil
          </h2>
          <div className="mt-6 border-l-2 border-primary/40 pl-4 py-1 text-sm italic text-muted-foreground">
            &ldquo;A tree planted with patience outlives generations.&rdquo;
          </div>
        </div>

        <div className="md:col-span-8 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Islam Nursery Farm started with a single grafted mango tree planted by our grandfather over sixty years ago in a fertile plot outside the city. Today, that original parent tree still produces hundreds of fragrant Alphonso mangoes each summer — and we continue to propagate saplings directly from its vigorous wood.
          </p>
          <p>
            Unlike industrial nurseries that force-feed chemical stimulants for rapid cosmetic growth, we practice slow vegetative propagation. Our fruit saplings spend multiple seasons in conditioning beds to develop dense, resilient taproot systems before they are ever offered for sale.
          </p>
          <p>
            Whether you are planting a rooftop Kagzi lemon tree to harvest fresh juice each morning, or adopting a Monstera Deliciosa to bring tranquil air into your living room, each plant is packed with organic coco-peat wraps and inspected by a master grower before leaving our farm.
          </p>
        </div>
      </div>

      {/* Farm Standards */}
      <div className="mt-20 border-t border-border pt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow">Our Principles</p>
          <h2 className="mt-2 font-display text-3xl font-medium text-foreground">
            The Grower&apos;s Code
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-sm border border-border bg-card p-6 shadow-xs">
            <Sprout className="h-6 w-6 text-[#3b5847]" />
            <h3 className="mt-4 font-display text-lg font-medium text-foreground">
              Conditioned Rootstocks
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Grafted onto indigenous rootstocks that withstand heatwaves, dry intervals, and heavy seasonal rains.
            </p>
          </div>

          <div className="rounded-sm border border-border bg-card p-6 shadow-xs">
            <ShieldCheck className="h-6 w-6 text-[#3b5847]" />
            <h3 className="mt-4 font-display text-lg font-medium text-foreground">
              Transit-Proof Packaging
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Custom moisture-locking breathable sleeves that keep roots hydrated for up to 8 days in transit.
            </p>
          </div>

          <div className="rounded-sm border border-border bg-card p-6 shadow-xs">
            <HeartHandshake className="h-6 w-6 text-[#3b5847]" />
            <h3 className="mt-4 font-display text-lg font-medium text-foreground">
              Lifetime Care Assistance
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Gardening should not be solitary. Message our nursery staff anytime for fertilizer dosing, pest ID, and pruning tips.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
        >
          Explore Our Nursery Stock <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

