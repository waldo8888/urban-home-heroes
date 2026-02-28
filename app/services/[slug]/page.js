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
    title: service.name,
    description: service.shortDescription,
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} | Urban Home Heroes`,
      description: service.shortDescription,
      url: `https://urbanhomeheroes.ca/services/${service.slug}`,
      images: [
        {
          url: service.image,
          width: 800,
          height: 600,
          alt: service.name,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | Urban Home Heroes`,
      description: service.shortDescription,
      images: [service.image],
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
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
