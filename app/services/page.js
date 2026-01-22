import ServicesIndexClient from "./ServicesIndexClient";

export const metadata = {
  title: "Urban Home Heroes | Services",
  description:
    "Explore Urban Home Heroes contractor services across the GTA, from flooring installation and painting to snow removal, fencing, appliance installation, plumbing, and junk removal.",
  keywords: [
    "contractor services",
    "snow removal",
    "flooring installation",
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
