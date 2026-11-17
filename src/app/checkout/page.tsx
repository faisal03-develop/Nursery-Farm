"use client";

import { useState, useEffect, type FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/store/cart";
import { formatPrice } from "@/data/plants";
import { ShieldCheck, Lock, CheckCircle2, Truck, ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  const { items, subtotal, shipping, total, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState<string | null>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    paymentMethod: "cod",
    notes: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="container-editorial py-24 text-center">Loading checkout...</div>;
  }

  if (orderComplete) {
    return (
      <div className="container-editorial py-20 max-w-xl mx-auto text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <p className="eyebrow mt-6 text-emerald-800">Order Placed Successfully</p>
        <h1 className="mt-2 font-display text-3xl md:text-4xl font-medium text-foreground">
          Thank you for choosing slow-grown nursery craft!
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Your order number is <strong className="text-foreground">{orderComplete}</strong>. We have sent a confirmation email to <strong className="text-foreground">{form.email || "your email"}</strong>.
        </p>

        <div className="mt-8 rounded-sm border border-border bg-card p-6 text-left space-y-3 text-sm">
          <div className="flex items-center gap-2 font-medium text-foreground">
            <Truck className="h-4 w-4 text-primary" />
            <span>Estimated Dispatch: Within 24-48 hours</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Our nursery growers will hand-inspect your saplings, moisten root wraps, and pack with climate cushions before shipping to {form.city || "your address"}.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
          >
            Back to Home
          </Link>
          <Link
            href="/shop"
            className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            Browse More Plants
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-editorial py-24 text-center">
        <h1 className="font-display text-3xl font-medium">Your basket is currently empty</h1>
        <p className="mt-3 text-sm text-muted-foreground">Please choose a plant before checkout.</p>
        <Link
          href="/shop"
          className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
        >
          Browse Catalogue
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedOrderNum = `INF-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderComplete(generatedOrderNum);
      clearCart();
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="container-editorial pt-10 pb-24 md:pt-14">
      <Link
        href="/cart"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Return to Cart
      </Link>

      <p className="eyebrow">Checkout</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
        Finalize your Nursery Order
      </h1>

      <form onSubmit={handleSubmit} className="mt-10 grid gap-12 md:grid-cols-12 items-start">
        {/* Left Form: Details */}
        <div className="md:col-span-7 space-y-8">
          {/* Contact Details */}
          <section className="rounded-sm border border-border bg-card p-6 shadow-xs">
            <h2 className="font-display text-xl font-medium text-foreground">1. Contact Information</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="grower@example.com"
                  className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Mobile Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
                />
              </div>
            </div>
          </section>

          {/* Shipping Address */}
          <section className="rounded-sm border border-border bg-card p-6 shadow-xs">
            <h2 className="font-display text-xl font-medium text-foreground">2. Delivery Address</h2>
            <div className="mt-4 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-muted-foreground">First Name *</label>
                  <input
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground">Street Address / House No. *</label>
                <input
                  type="text"
                  required
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Apartment, suite, unit, building, floor, etc."
                  className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground">City *</label>
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">State / Province *</label>
                  <input
                    type="text"
                    required
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">PIN Code *</label>
                  <input
                    type="text"
                    required
                    value={form.postalCode}
                    onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
                    className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="rounded-sm border border-border bg-card p-6 shadow-xs">
            <h2 className="font-display text-xl font-medium text-foreground">3. Payment Selection</h2>
            <div className="mt-4 space-y-3">
              <label className="flex items-center gap-3 p-3.5 border border-border rounded-sm cursor-pointer hover:bg-secondary/40 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={form.paymentMethod === "cod"}
                  onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
                  className="h-4 w-4 text-primary"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">Pay on Delivery (Cash / UPI at Doorstep)</p>
                  <p className="text-xs text-muted-foreground">Inspect sapling health on arrival before paying the courier.</p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 border border-border rounded-sm cursor-pointer hover:bg-secondary/40 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={form.paymentMethod === "upi"}
                  onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
                  className="h-4 w-4 text-primary"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">Instant UPI / QR Code</p>
                  <p className="text-xs text-muted-foreground">Google Pay, PhonePe, Paytm, BHIM.</p>
                </div>
              </label>
            </div>
          </section>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm disabled:opacity-50"
          >
            {isSubmitting ? "Securing Your Order..." : `Place Order — ${formatPrice(total)}`}
          </button>
        </div>

        {/* Right Sidebar: Summary */}
        <aside className="md:col-span-5">
          <div className="sticky top-24 rounded-sm border border-border bg-card p-6 shadow-xs">
            <h2 className="font-display text-lg font-medium text-foreground">Order Items ({items.length})</h2>
            <ul className="mt-4 divide-y divide-border">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 py-3.5">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-sm bg-secondary">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 justify-between text-sm">
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-foreground">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </li>
              ))}
            </ul>

            <dl className="mt-4 space-y-2.5 border-t border-border pt-4 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="font-medium text-foreground">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Shipping</dt>
                <dd className="font-medium text-foreground">{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 font-display text-lg font-semibold text-foreground">
                <dt>Total Amount</dt>
                <dd>{formatPrice(total)}</dd>
              </div>
            </dl>

            <div className="mt-6 border-t border-border pt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-4 w-4 text-sage-deep" />
              <span>Safe 256-bit SSL encrypted checkout</span>
            </div>
          </div>
        </aside>
      </form>
    </div>
  );
}

