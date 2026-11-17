"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/store/cart";
import { formatPrice } from "@/data/plants";
import { Minus, Plus, Trash2, ArrowRight, ShieldCheck, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, setQuantity, removeItem, subtotal, shipping, total } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="container-editorial py-24 text-center">Loading cart...</div>;
  }

  if (items.length === 0) {
    return (
      <div className="container-editorial py-24 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-muted-foreground">
          <ShoppingBag className="h-8 w-8" />
        </div>
        <p className="eyebrow mt-6">Your Nursery Basket</p>
        <h1 className="mt-2 font-display text-4xl font-medium text-foreground">
          Nothing growing here yet.
        </h1>
        <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
          Explore our collection of hand-raised fruit trees and air-purifying indoor plants.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
        >
          Browse the catalogue <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const freeShippingThreshold = 2000;
  const awayFromFreeShipping = freeShippingThreshold - subtotal;

  return (
    <div className="container-editorial pt-10 pb-20 md:pt-14">
      <p className="eyebrow">Your Cart</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
        {items.length} plant{items.length > 1 ? "s" : ""} ready to ship
      </h1>

      {/* Free shipping alert */}
      {shipping > 0 ? (
        <div className="mt-6 rounded-sm border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
          Add <span className="font-semibold">{formatPrice(awayFromFreeShipping)}</span> more of nursery plants to qualify for <strong>FREE Nationwide Delivery</strong>!
        </div>
      ) : (
        <div className="mt-6 rounded-sm border border-emerald-200 bg-emerald-50 p-4 text-xs font-medium text-emerald-900">
          ✓ Your order qualifies for <strong>Free Nationwide Insured Delivery</strong>!
        </div>
      )}

      <div className="mt-10 grid gap-12 md:grid-cols-12 items-start">
        {/* Items List */}
        <div className="md:col-span-8">
          <ul className="divide-y divide-border border-y border-border">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col sm:flex-row gap-4 sm:gap-5 py-6">
                <Link
                  href={`/plant/${item.slug}`}
                  className="block h-32 w-full sm:h-28 sm:w-24 shrink-0 overflow-hidden rounded-sm bg-secondary"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground">
                        {item.type === "fruit" ? "Fruit Sapling" : "Decorative Houseplant"}
                      </p>
                      <Link
                        href={`/plant/${item.slug}`}
                        className="font-display text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs italic text-muted-foreground">
                        {item.scientificName}
                      </p>
                    </div>
                    <p className="font-display text-base font-semibold text-foreground">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-border bg-card">
                      <button
                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-foreground"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-semibold text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-foreground"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-[#3b5847]" />
            All plants are thoroughly watered and secured in transit-safe coco packaging prior to dispatch.
          </div>
        </div>

        {/* Order Summary */}
        <aside className="md:col-span-4">
          <div className="sticky top-24 rounded-sm border border-border bg-card p-6 shadow-xs">
            <h2 className="font-display text-xl font-medium text-foreground">Order Summary</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="font-medium text-foreground">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Insured Shipping</dt>
                <dd className="font-medium text-foreground">
                  {shipping === 0 ? (
                    <span className="text-emerald-700 font-semibold">Free</span>
                  ) : (
                    formatPrice(shipping)
                  )}
                </dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 font-display text-lg font-semibold text-foreground">
                <dt>Total</dt>
                <dd>{formatPrice(total)}</dd>
              </div>
            </dl>

            <Link
              href="/checkout"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
            >
              Continue to Checkout <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/shop"
              className="mt-4 block text-center text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Continue shopping
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

