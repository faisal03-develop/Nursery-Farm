import Link from "next/link";
import { featuredPlants, fruitPlants, decorativePlants } from "@/data/plants";
import { PlantCard } from "@/components/PlantCard";
import {
  ArrowUpRight,
  Sparkles,
  Sprout,
  SunMedium,
  ShieldCheck,
  HeartHandshake,
  PhoneCall,
} from "lucide-react";

export default function HomePage() {
  const fruits = fruitPlants().slice(0, 3);
  const decoratives = decorativePlants().slice(0, 3);

  return (
    <div>
      {/* ═══════════════════════════════════════════════
          HERO — editorial split
      ═══════════════════════════════════════════════ */}
      <section className="container-editorial pt-12 md:pt-20">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">

          {/* Text side */}
          <div className="md:col-span-7">
            <p className="eyebrow">Issue 01 — Spring Catalogue</p>
            <h1 className="mt-5 font-display text-[2.6rem] font-medium leading-[1.07] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Plants raised with patience,
              <br />
              <em className="not-italic text-[#3b5847]">delivered with care.</em>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
              Three generations of nursery craft, now at your doorstep. Choose
              between hardy fruit saplings that will nourish your family for
              decades, or decorative greenery that quietly transforms your home.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                Browse the catalogue
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Read the Journal
              </Link>
            </div>
          </div>

          {/* Image side */}
          <div className="md:col-span-5">
            <div
              className="relative w-full overflow-hidden rounded-sm bg-secondary"
              style={{ aspectRatio: "4/5" }}
            >
              <img
                src="/images/hero-decorative.jpg"
                alt="Lush monstera leaf in warm window light"
                className="absolute inset-0 h-full w-full object-cover"
                priority-hint="high"
              />
            </div>
            <p className="mt-2.5 text-xs italic text-muted-foreground">
              Plate I — Monstera deliciosa, hand-conditioned for indoor living.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DUAL CATEGORY CARDS
      ═══════════════════════════════════════════════ */}
      <section className="container-editorial mt-24 md:mt-32">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Two worlds, one nursery</p>
            <h2 className="mt-2.5 font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Choose your path
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Whether growing fruit for harvest or styling indoor corners, every
            root is inspected by our growers before it leaves the farm.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Fruit card */}
          <Link
            href="/shop?type=fruit"
            className="group relative block overflow-hidden rounded-sm"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src="/images/hero-fruit.jpg"
              alt="Fruit saplings and citrus harvest"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-emerald-200">
                <Sprout className="h-4 w-4 shrink-0" />
                Yield · Harvest · Seasons
              </div>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-white md:text-3xl">
                Fruit Saplings
              </h3>
              <p className="mt-1.5 max-w-xs text-sm text-neutral-200">
                Mango, lemon, guava, pomegranate — grafted for high yield and
                climatic resilience.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                Explore
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>

          {/* Decorative card */}
          <Link
            href="/shop?type=decorative"
            className="group relative block overflow-hidden rounded-sm"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src="/images/hero-main.jpg"
              alt="Indoor tropical houseplants"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-emerald-200">
                <Sparkles className="h-4 w-4 shrink-0" />
                Air · Greenery · Interior
              </div>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-white md:text-3xl">
                Decorative Plants
              </h3>
              <p className="mt-1.5 max-w-xs text-sm text-neutral-200">
                Monstera, ZZ, snake plant, hibiscus — living sculptures for
                every room and balcony.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                Explore
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FRUIT STORY SECTION
      ═══════════════════════════════════════════════ */}
      <section className="container-editorial mt-24 md:mt-32">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-14">
          {/* Copy column */}
          <div className="md:col-span-5">
            <p className="eyebrow">Patience rewarded with fruit</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Plant once,{" "}
              <em className="not-italic italic text-primary">
                harvest for decades.
              </em>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every sapling is grafted onto a hardy rootstock and matched to
              your climate zone. We share precise fruiting cycles, watering
              schedules, and harvest windows so your tree thrives from year one.
            </p>
            <Link
              href="/shop?type=fruit"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              Shop all fruit saplings <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Plant cards column */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fruits.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DECORATIVE STORY SECTION (reversed)
      ═══════════════════════════════════════════════ */}
      <section className="container-editorial mt-24 md:mt-32">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-14">
          {/* Plant cards column — left on desktop */}
          <div className="order-2 md:order-1 md:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {decoratives.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>

          {/* Copy column — right on desktop */}
          <div className="order-1 md:order-2 md:col-span-5">
            <p className="eyebrow">Living rooms, quietly improved</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              The right plant for the{" "}
              <em className="not-italic italic">right corner.</em>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Filter by light, maintenance, room, and pet-friendliness. We help
              you match every plant to where it will genuinely flourish — not
              just where it looks good in a photo.
            </p>
            <Link
              href="/shop?type=decorative"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              Shop decorative plants <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          NURSERY PROMISE CARDS
      ═══════════════════════════════════════════════ */}
      <section className="container-editorial mt-24 md:mt-32">
        <div className="rounded-sm border border-border bg-card p-8 md:p-12">
          <div className="mb-10 text-center">
            <p className="eyebrow">Our commitment to you</p>
            <h2 className="mt-2.5 font-display text-2xl font-medium text-foreground md:text-3xl">
              Every plant, every delivery, every time.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Healthy on Arrival",
                body: "Packed in breathable coco-peat wraps. 7-day plant health replacement guarantee, no questions asked.",
              },
              {
                icon: SunMedium,
                title: "Climate Matched",
                body: "We guide you toward saplings suited for your regional humidity, sunlight, and seasonal temperature.",
              },
              {
                icon: HeartHandshake,
                title: "Lifetime Grower Help",
                body: "Direct WhatsApp access to our nurserymen for pruning, feeding schedules, and pest identification.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          JOURNAL PREVIEW
      ═══════════════════════════════════════════════ */}
      <section className="container-editorial mt-24 md:mt-32">
        <div className="mb-8 flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">From the Growers</p>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              The Field Notes &amp; Journal
            </h2>
          </div>
          <Link
            href="/journal"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4"
          >
            Read all articles <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {[
            {
              image: "/images/hero-fruit.jpg",
              alt: "Growing mango in containers",
              eyebrow: "Fruit Care · 8 min read",
              title: "How to grow a grafted mango tree in a terrace pot",
              excerpt:
                "Container selection, soil drainage, and root trimming techniques that yield sweet mangoes within four seasons.",
            },
            {
              image: "/images/hero-decorative.jpg",
              alt: "Best indoor plants for beginners",
              eyebrow: "Indoor Living · 6 min read",
              title: "The 5 best indoor plants for forgetful waterers",
              excerpt:
                "Sculptural varieties that thrive on dry spells, filter indoor toxins, and look stunning with minimal upkeep.",
            },
          ].map(({ image, alt, eyebrow, title, excerpt }) => (
            <Link href="/journal" key={title} className="group block">
              <div
                className="w-full overflow-hidden rounded-sm bg-secondary"
                style={{ aspectRatio: "16/10" }}
              >
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <p className="eyebrow">{eyebrow}</p>
                <h3 className="mt-2 font-display text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-primary md:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHATSAPP CTA BANNER
      ═══════════════════════════════════════════════ */}
      <section className="container-editorial mt-24 pb-24">
        <div className="flex flex-col items-start gap-6 rounded-sm bg-[#2d4536] p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-xl">
            <span className="eyebrow text-emerald-300">Free Plant Advisory</span>
            <h3 className="mt-2 font-display text-2xl font-medium text-white md:text-3xl">
              Not sure which plant matches your space?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-200">
              Send our farm growers photos of your balcony or room. We'll
              recommend exact varieties, pot sizes, and optimal sunlight
              placements.
            </p>
          </div>
          <a
            href="https://wa.me/?text=Hello%20Islam%20Nursery%20Farm,%20I%20would%20like%20guidance%20on%20choosing%20the%20best%20plants"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2d4536] shadow-sm hover:bg-neutral-100"
          >
            <PhoneCall className="h-4 w-4" />
            Ask a Grower on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
