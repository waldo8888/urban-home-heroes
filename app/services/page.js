import ServicesIndexClient from "./ServicesIndexClient";

export const metadata = {
  title: "Urban Home Heroes | Services",
  description:
    "Explore Urban Home Heroes contractor services across the GTA, from snow removal and fencing to painting, appliance installation, plumbing, basement renovation, waterproofing, and junk removal.",
  keywords: [
    "contractor services",
    "snow removal",
    "fencing installation",
    "painting and drywall",
    "plumbing and electrical",
    "fence repair service",
    "appliance installation",
    "junk removal"
  ]
};

export default function ServicesPage() {
  return <ServicesIndexClient />;
}
