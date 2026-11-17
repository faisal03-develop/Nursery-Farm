"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { plants, type Plant, type ProductType } from "@/data/plants";
import { PlantCard } from "@/components/PlantCard";
import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") as ProductType | "all" | null;

  const [selectedType, setSelectedType] = useState<"all" | "fruit" | "decorative">(
    initialType === "fruit" || initialType === "decorative" ? initialType : "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [maintenanceFilter, setMaintenanceFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");

  const filteredPlants = useMemo(() => {
    let result = plants;

    // Type filter
    if (selectedType !== "all") {
      result = result.filter((p) => p.type === selectedType);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.scientificName.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    // Maintenance filter (decorative)
    if (maintenanceFilter !== "all") {
      result = result.filter((p) => {
        if (p.type === "decorative") {
          return p.maintenance === maintenanceFilter;
        }
        return true;
      });
    }

    // Sorting
    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedType, searchQuery, maintenanceFilter, sortBy]);

  const resetFilters = () => {
    setSelectedType("all");
    setSearchQuery("");
    setMaintenanceFilter("all");
    setSortBy("default");
  };

  return (
    <div className="container-editorial pt-10 pb-20 md:pt-14">
      {/* Header */}
      <div className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">The Nursery Catalogue</p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {selectedType === "fruit"
              ? "Fruit Plants & Trees"
              : selectedType === "decorative"
              ? "Decorative & Houseplants"
              : "All Nursery Stock"}
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {selectedType === "fruit"
              ? "Saplings selected for reliable harvest, climate suitability, and vigorous grafted rootstocks."
              : selectedType === "decorative"
              ? "Living sculpture for rooms, balconies, and quiet office corners. Air-purifying and easy care."
              : "Discover both our fruiting orchards and architectural indoor plant collections."}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {(["all", "fruit", "decorative"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                selectedType === t
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {t === "all" ? "All Plants" : t === "fruit" ? "Fruit Saplings" : "Decorative"}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile quick-filter strip (visible only on small screens) */}
      <div className="mt-6 flex flex-wrap gap-2 md:hidden">
        <div className="relative flex-1 min-w-0">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search plants..."
            className="w-full rounded-full border border-input bg-card pl-9 pr-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="rounded-full border border-input bg-card px-3 py-2 text-sm text-foreground outline-none"
        >
          <option value="default">Featured</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
        </select>
      </div>

      {/* Main Catalog Layout */}
      <div className="mt-10 grid gap-10 md:grid-cols-12">
        {/* Filter Sidebar — hidden on mobile (use strip above) */}
        <aside className="hidden md:block md:col-span-3 space-y-6 md:sticky md:top-24 md:self-start">
          {/* Search box */}
          <div>
            <label className="eyebrow block mb-2">Search Collection</label>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Name, variety, or type..."
                className="w-full rounded-sm border border-input bg-card pl-9 pr-3 py-2.5 text-sm text-foreground outline-none focus:border-foreground"
              />
            </div>
          </div>

          {/* Sort By */}
          <div>
            <label className="eyebrow block mb-2">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm text-foreground outline-none focus:border-foreground"
            >
              <option value="default">Featured & Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          {/* Maintenance Filter */}
          {selectedType !== "fruit" && (
            <div>
              <label className="eyebrow block mb-2">Care Level</label>
              <select
                value={maintenanceFilter}
                onChange={(e) => setMaintenanceFilter(e.target.value)}
                className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm text-foreground outline-none focus:border-foreground"
              >
                <option value="all">All Care Levels</option>
                <option value="beginner">Beginner Friendly (Hardy)</option>
                <option value="moderate">Moderate Care</option>
              </select>
            </div>
          )}

          {/* Reset Filters button */}
          {(searchQuery || maintenanceFilter !== "all" || sortBy !== "default" || selectedType !== "all") && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground font-medium"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset all filters
            </button>
          )}

          {/* Helpful callout */}
          <div className="rounded-sm border border-border bg-[#eceee9]/40 p-5 text-xs leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Need custom farm orders?</p>
            <p className="mt-1">
              Looking for bulk sapling quantities or farm landscaping? Contact our team for customized nursery orders.
            </p>
          </div>
        </aside>

        {/* Plant Grid */}
        <div className="md:col-span-9">
          <div className="mb-6 flex items-center justify-between text-xs text-muted-foreground">
            <p>
              Showing <span className="font-semibold text-foreground">{filteredPlants.length}</span> of {plants.length} plants
            </p>
          </div>

          {filteredPlants.length === 0 ? (
            <div className="rounded-sm border border-dashed border-border p-16 text-center">
              <SlidersHorizontal className="mx-auto h-8 w-8 text-muted-foreground" />
              <h3 className="mt-4 font-display text-2xl font-medium text-foreground">No plants match your search</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try clearing your search query or switching categories.
              </p>
              <button
                onClick={resetFilters}
                className="mt-6 inline-flex rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
              >
                Show All Plants
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container-editorial py-20 text-center">Loading catalogue...</div>}>
      <ShopContent />
    </Suspense>
  );
}

