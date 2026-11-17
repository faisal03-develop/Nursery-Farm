import Link from "next/link";
import type { Plant } from "@/data/plants";
import { formatPrice } from "@/data/plants";

export function PlantCard({ plant }: { plant: Plant }) {
  return (
    <Link
      href={`/plant/${plant.slug}`}
      className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
    >
      {/* ── Image container ── */}
      <div className="relative w-full overflow-hidden rounded-sm bg-secondary" style={{ aspectRatio: "4/5" }}>
        <img
          src={plant.image}
          alt={plant.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Type badge */}
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full border border-white/20 bg-white/90 px-2.5 py-[3px] text-[10px] font-semibold uppercase tracking-wide text-foreground backdrop-blur-sm">
          {plant.type === "fruit" ? "Fruit Sapling" : "Decorative"}
        </span>

        {/* Low stock badge */}
        {plant.stock <= 20 && plant.stock > 0 && (
          <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-amber-50/95 px-2 py-[3px] text-[9px] font-semibold text-amber-900 backdrop-blur-sm">
            Low Stock
          </span>
        )}
      </div>

      {/* ── Info ── */}
      <div className="mt-3.5 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="truncate font-display text-[0.95rem] font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {plant.name}
          </h3>
          <p className="mt-0.5 truncate text-xs italic text-muted-foreground">
            {plant.scientificName}
          </p>
        </div>
        <p className="shrink-0 font-display text-[0.95rem] font-medium text-foreground tabular-nums">
          {formatPrice(plant.price)}
        </p>
      </div>

      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
        {plant.shortDescription}
      </p>
    </Link>
  );
}
