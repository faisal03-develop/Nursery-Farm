import Link from "next/link";
import { Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-editorial flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-muted-foreground">
        <Leaf className="h-7 w-7" />
      </span>
      <p className="eyebrow mt-6">404 — Page Not Found</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
        This path leads nowhere.
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
        The page you're looking for doesn't exist. Perhaps it was pruned — or
        never planted. Let's get you back to the nursery.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}

