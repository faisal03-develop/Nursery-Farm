import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "The Journal — Field Notes & Plant Guides | Islam Nursery Farm",
  description:
    "Expert planting guides, seasonal care tips, and container gardening notes from our nursery growers.",
};

const articles = [
  {
    slug: "grow-mango-in-terrace-pots",
    title: "How to grow a grafted mango tree in a terrace pot",
    excerpt:
      "Everything you need to know about container sizing, organic compost ratios, and getting your first aromatic mango harvest within 3–4 seasons.",
    image: "/images/hero-fruit.jpg",
    minutes: 8,
    category: "Fruit Care",
    date: "April 2026",
  },
  {
    slug: "indoor-plants-for-beginners",
    title: "The best indoor houseplants for forgetful waterers",
    excerpt:
      "Five forgiving, architectural plants that convert carbon dioxide into oxygen, tolerate neglect, and remain vibrant without daily attention.",
    image: "/images/hero-decorative.jpg",
    minutes: 6,
    category: "Indoor Living",
    date: "May 2026",
  },
  {
    slug: "citrus-lemon-flower-drop",
    title: "Why citrus blossoms drop: Solving the lemon tree puzzle",
    excerpt:
      "Understanding seasonal watering flushes, micronutrient foliar feeding, and pollinator activity to guarantee heavy lemon yields.",
    image: "/images/plant-lemon.jpg",
    minutes: 5,
    category: "Citrus Care",
    date: "March 2026",
  },
  {
    slug: "monstera-leaf-splitting-guide",
    title: "Monstera Fenestration Secrets: Getting bold leaf splits",
    excerpt:
      "Why juvenile leaves stay solid, how ambient light angles trigger fenestrations, and why moss poles accelerate mature foliage.",
    image: "/images/plant-monstera.jpg",
    minutes: 7,
    category: "Tropical Foliage",
    date: "February 2026",
  },
];

export default function JournalPage() {
  return (
    <div className="container-editorial pt-10 pb-24 md:pt-16">
      <p className="eyebrow">The Nursery Journal</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-foreground md:text-6xl">
        Field notes from the growers
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        In-depth planting manuals, seasonal calendars, and practical lessons gathered from three generations of raising fruit saplings and indoor greenery.
      </p>

      <div className="mt-12 grid gap-x-8 gap-y-12 border-t border-border pt-12 md:grid-cols-2">
        {articles.map((article) => (
          <article key={article.slug} className="group flex flex-col">
            <div className="aspect-[16/10] overflow-hidden rounded-sm bg-secondary">
              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="eyebrow text-muted-foreground">
                  {article.category} · {article.minutes} min read · {article.date}
                </p>
                <h2 className="mt-2.5 font-display text-2xl font-medium leading-tight text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-5">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
                >
                  View Related Plants <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 rounded-sm border border-border bg-[#ecf0ea]/50 p-8 text-center max-w-xl mx-auto">
        <BookOpen className="mx-auto h-6 w-6 text-[#3b5847]" />
        <h3 className="mt-3 font-display text-xl font-medium text-foreground">
          Looking for a specific care topic?
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Our growers publish monthly seasonal guides. If you have a specific plant disease or soil question, chat directly with us on WhatsApp.
        </p>
        <a
          href="https://wa.me/?text=Hello%20Islam%20Nursery%20Farm,%20I%20have%20a%20gardening%20question"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-all"
        >
          Ask a Nursery Question
        </a>
      </div>
    </div>
  );
}

