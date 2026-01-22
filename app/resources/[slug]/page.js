import { notFound } from "next/navigation";
import { resourceGuides } from "../../data/resources";
import ResourceDetailClient from "./ResourceDetailClient";

export function generateStaticParams() {
  return resourceGuides.map((guide) => ({ slug: guide.slug }));
}

export default function ResourceDetailPage({ params }) {
  const guide = resourceGuides.find((item) => item.slug === params.slug);

  if (!guide) {
    notFound();
  }

  return <ResourceDetailClient guide={guide} />;
}
