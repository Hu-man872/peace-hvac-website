export const company = {
  name: "PEACE HVAC Engineers",
  shortName: "PEACE HVAC",
  description:
    "HVAC design, installation and maintenance for residential, commercial and industrial projects across South India.",
  officePhone: {
    display: "080 4090 5758",
    href: "tel:+918040905758"
  },
  mobilePhones: [
    { display: "+91 99648 38300", href: "tel:+919964838300" },
    { display: "+91 99648 44900", href: "tel:+919964844900" }
  ],
  whatsappNumber: "919964838300",
  emails: ["info.peacehvac@gmail.com", "peacehvac.systems@yahoo.com"],
  address:
    "7/1, Near Al Burooj International School, Kanka Nagar Main Road, R.T. Nagar Post, Bengaluru 560032, Karnataka"
} as const;

export const navigation = [
  { href: "/", label: "Home", key: "home" },
  { href: "/services/", label: "Services", key: "services" },
  { href: "/projects/", label: "Projects", key: "projects" },
  { href: "/about/", label: "About", key: "about" },
  { href: "/contact/", label: "Contact", key: "contact" }
] as const;

export const systems = ["DX", "VRF", "Chilled water", "Ductwork", "Copper piping"] as const;

export const systemVisuals = [
  {
    title: "DX",
    image: "/assets/cooling-project.png",
    alt: "Outdoor air-conditioning equipment shown in the supplied PEACE company profile"
  },
  {
    title: "VRF",
    image: "/assets/field/vrf-rooftop.jpg",
    alt: "VRF outdoor units and refrigerant lines installed on a rooftop"
  },
  {
    title: "Chilled water",
    image: "/assets/system-installation.png",
    alt: "Central HVAC distribution installation shown in the supplied company profile"
  },
  {
    title: "Ductwork",
    image: "/assets/hero-ductwork.png",
    alt: "Circular supply ductwork and ceiling diffusers"
  },
  {
    title: "Copper piping",
    image: "/assets/copper-piping.png",
    alt: "Technician joining insulated copper refrigerant piping"
  }
] as const;

export const services = [
  {
    title: "Air-conditioning projects",
    short:
      "Design and execution of efficient cooling systems for residential, commercial and industrial buildings.",
    details:
      "Engineering proposals, system selection, installation and testing across VRF, chiller, concealed-duct, split and central air-conditioning systems.",
    image: "/assets/cooling-project.png",
    alt: "Outdoor air-conditioning equipment shown in the supplied PEACE company profile"
  },
  {
    title: "Ductwork and air distribution",
    short:
      "Study, design and installation of ventilation and air-distribution systems to approved plans.",
    details:
      "Ductwork execution under on-site engineering supervision with attention to airflow, comfort, safety and SMACNA specifications.",
    image: "/assets/ductwork-installation.png",
    alt: "Air-distribution ductwork and diffuser shown in the supplied company profile"
  },
  {
    title: "Copper piping installation",
    short:
      "Refrigerant piping between indoor and outdoor units, installed and tested for reliable operation.",
    details:
      "Approved materials, careful connection work and post-installation tightness and performance testing support efficient cooling and long service life.",
    image: "/assets/copper-piping.png",
    alt: "Technician joining insulated copper refrigerant piping"
  },
  {
    title: "HVAC maintenance",
    short:
      "Preventive, routine and emergency maintenance for dependable system performance.",
    details:
      "Qualified technicians work under engineering supervision, with spare-parts support for a wide range of air-conditioning equipment.",
    image: "/assets/maintenance-service.png",
    alt: "HVAC technician servicing outdoor air-conditioning units"
  }
] as const;

export const projectGallery = [
  {
    image: "/assets/field/linear-duct-installation.jpg",
    alt: "Long linear duct installed above a commercial interior",
    caption: "Duct distribution"
  },
  {
    image: "/assets/field/vrf-rooftop.jpg",
    alt: "VRF outdoor units and refrigerant lines on a rooftop",
    caption: "VRF system execution"
  },
  {
    image: "/assets/field/labelled-pipework.jpg",
    alt: "Labelled flow and return pipework mounted to a ceiling",
    caption: "Coordinated pipework"
  },
  {
    image: "/assets/field/exposed-ductwork-interior.jpg",
    alt: "Exposed air-conditioning ductwork in a completed interior",
    caption: "Exposed air distribution"
  },
  {
    image: "/assets/field/plenum-installation.jpg",
    alt: "Ceiling plenum and ductwork installation in progress",
    caption: "On-site installation"
  },
  {
    image: "/assets/field/conditioned-showroom.jpg",
    alt: "Completed commercial showroom interior with conditioned air",
    caption: "Completed commercial environment"
  }
] as const;

export const sectors = [
  "Commercial offices",
  "Industrial facilities and data centres",
  "Hotels and malls",
  "Hospitals and institutions",
  "Residential projects"
] as const;

export const locations = [
  "Bengaluru",
  "Hyderabad",
  "Vijayawada",
  "Chennai",
  "Thiruvananthapuram"
] as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
