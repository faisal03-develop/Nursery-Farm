"use client";

import { useState } from "react";
import Link from "next/link";
import type { Plant } from "@/data/plants";
import { formatPrice } from "@/data/plants";
import { useCart } from "@/store/cart";
import { PlantCard } from "@/components/PlantCard";
import {
  Minus,
  Plus,
  Check,
  ShieldCheck,
  Calendar,
  TreeDeciduous,
  Sun,
  Droplets,
  Leaf,
  ChevronDown,
  MessageCircle,
  Wind,
  Heart,
} from "lucide-react";

export function PlantDetailClient({
  plant,
  relatedPlants,
}: {
  plant: Plant;
  relatedPlants: Plant[];
}) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleAddToCart = () => {
    addItem(plant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      {/* Top Product Hero Split */}
      <div className="mt-8 grid gap-12 md:grid-cols-12 md:gap-16 items-start">
        {/* Left Column: Image */}
        <div className="md:col-span-6 lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#ecf0ea] shadow-sm">
            <img
              src={plant.image}
              alt={plant.name}
              className="h-full w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm shadow-xs">
              {plant.type === "fruit" ? "Fruit Sapling" : "Decorative Houseplant"}
            </span>
          </div>
        </div>

        {/* Right Column: Plant Info & Action */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col">
          <p className="eyebrow">
            {plant.type === "fruit" ? "Grafted Nursery Stock" : "Indoor Living"} · {plant.category}
          </p>
          <h1 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
            {plant.name}
          </h1>
          <p className="mt-1 text-sm italic text-muted-foreground">
            {plant.scientificName}
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {plant.description}
          </p>

          {/* Type-Specific Highlights */}
          {plant.type === "fruit" ? (
            <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-border border border-border">
              <StatItem
                icon={<Calendar className="h-4 w-4" />}
                label="Fruiting Season"
                value={plant.season === "all-season" ? "Year-round" : `${plant.season} harvest`}
              />
              <StatItem
                icon={<TreeDeciduous className="h-4 w-4" />}
                label="Time to Harvest"
                value={`${plant.timeToFruitMonths} months`}
              />
              <StatItem
                icon={<Sun className="h-4 w-4" />}
                label="Sunlight"
                value={plant.sunlight.replace("-", " ")}
              />
              <StatItem
                icon={<Droplets className="h-4 w-4" />}
                label="Water Need"
                value={`${plant.water} watering`}
              />
              <div className="col-span-2 bg-card p-4">
                <p className="eyebrow">Expected Yield</p>
                <p className="mt-1 font-display text-base font-semibold text-foreground">
                  {plant.expectedYield}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Optimal Climate: {plant.climate.join(", ")}
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-border border border-border">
              <StatItem
                icon={<Sun className="h-4 w-4" />}
                label="Light Requirement"
                value={`${plant.light} indirect light`}
              />
              <StatItem
                icon={<Leaf className="h-4 w-4" />}
                label="Maintenance"
                value={`${plant.maintenance} friendly`}
              />
              <StatItem
                icon={<Droplets className="h-4 w-4" />}
                label="Pot Size"
                value={`${plant.potSize} container`}
              />
              <StatItem
                icon={<Heart className="h-4 w-4" />}
                label="Pet Friendly"
                value={plant.petFriendly ? "Yes (Safe)" : "Keep Away"}
              />
              <div className="col-span-2 bg-card p-4">
                <p className="eyebrow">Best Placement</p>
                <p className="mt-1 font-display text-base font-semibold text-foreground capitalize">
                  {plant.placement.map((p) => p.replace("-", " ")).join(" · ")}
                </p>
                {plant.airPurifying && (
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-[#3b5847] font-medium">
                    <Wind className="h-3.5 w-3.5" /> Certified Air-Purifying Variety
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Pricing & Stock */}
          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <div>
              <p className="font-display text-3xl font-medium text-foreground">
                {formatPrice(plant.price)}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">Taxes included · Hand-potted in nursery mix</p>
            </div>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                plant.stock > 10
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber-100 text-amber-900"
              }`}
            >
              {plant.stock > 10 ? "In Stock (Ready to Ship)" : `Only ${plant.stock} remaining`}
            </span>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mt-6 flex items-stretch gap-3">
            <div className="flex items-center rounded-full border border-border bg-card px-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-10 w-8 items-center justify-center text-muted-foreground hover:text-foreground"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-sm font-semibold text-foreground">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-10 w-8 items-center justify-center text-muted-foreground hover:text-foreground"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className={`flex-1 rounded-full px-6 py-3.5 text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                added
                  ? "bg-emerald-700 text-white"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
              }`}
            >
              {added ? (
                <>
                  <Check className="h-4 w-4" /> Added to your cart!
                </>
              ) : (
                <>Add to Cart — {formatPrice(plant.price * quantity)}</>
              )}
            </button>
          </div>

          {/* Guarantees & Help */}
          <div className="mt-5 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#3b5847]" />
              <span>7-Day Healthy Plant Guarantee — replacement if damaged in transit.</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-green-700" />
              <a
                href={`https://wa.me/?text=Hello%20Islam%20Nursery,%20I%20have%20questions%20about%20the%20${encodeURIComponent(plant.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-medium text-foreground"
              >
                Have questions? Ask our grower on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Care Guide Section */}
      <section className="mt-20 border-t border-border pt-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Grower Care Guide</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground">
              How to keep it thriving
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Practical, seasonal guidance from our farm growers — written for genuine container gardening, terraces, and indoor spots.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {plant.careGuide.map((care, i) => (
                <div key={i} className="rounded-sm border border-border bg-card p-6 shadow-xs">
                  <h3 className="font-display text-lg font-medium text-foreground">{care.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{care.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="mt-20 border-t border-border pt-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Frequently Asked</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground">
              Common Questions
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Answers straight from our 60 years of nursery experience.
            </p>
          </div>
          <div className="md:col-span-8 divide-y divide-border border-y border-border">
            {plant.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-display text-base font-medium text-foreground">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Plants */}
      {relatedPlants.length > 0 && (
        <section className="mt-24 border-t border-border pt-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="eyebrow">You may also like</p>
              <h2 className="mt-2 font-display text-3xl font-medium text-foreground">
                More from the Nursery
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
            >
              Browse all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPlants.map((p) => (
              <PlantCard key={p.id} plant={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function StatItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-card p-4">
      <div className="flex items-center gap-1.5 text-muted-foreground">
        {icon}
        <p className="text-[10px] uppercase tracking-wider">{label}</p>
      </div>
      <p className="mt-1 font-display text-base capitalize font-medium text-foreground">{value}</p>
    </div>
  );
}

