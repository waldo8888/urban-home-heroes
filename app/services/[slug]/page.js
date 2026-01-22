import { notFound } from "next/navigation";
import { services } from "../../data/services";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    return {};
  }

  return {
    title: `Urban Home Heroes | ${service.name}`,
    description: service.heroSubtitle,
    keywords: service.keywords
  };
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return <ServiceDetailClient service={service} related={related} />;
}
