import { notFound } from "next/navigation";
import Link from "next/link";
import { getPlantBySlug, plants, formatPrice, type Plant } from "@/data/plants";
import { PlantDetailClient } from "./PlantDetailClient";
import { ChevronLeft } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);

  if (!plant) {
    return {
      title: "Plant Not Found | Islam Nursery Farm",
    };
  }

  return {
    title: `${plant.name} (${plant.scientificName}) — Islam Nursery Farm`,
    description: plant.shortDescription,
  };
}

export async function generateStaticParams() {
  return plants.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PlantDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);

  if (!plant) {
    notFound();
  }

  // Find 3 other related plants
  const relatedPlants = plants
    .filter((p) => p.id !== plant.id && (p.type === plant.type || p.featured))
    .slice(0, 3);

  return (
    <div className="container-editorial pt-8 pb-24">
      {/* Breadcrumb */}
      <Link
        href={plant.type === "fruit" ? "/shop?type=fruit" : "/shop?type=decorative"}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
        Back to {plant.type === "fruit" ? "Fruit Saplings" : "Decorative Plants"}
      </Link>

      <PlantDetailClient plant={plant} relatedPlants={relatedPlants} />
    </div>
  );
}

