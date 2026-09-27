export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Website Development",
    category: "Web",
    description:
      "Modern, responsive and high-performance websites designed to represent your business professionally and convert visitors into customers.",
    features: [
      "Responsive Design",
      "SEO Friendly",
      "Fast Performance",
      "Modern Frameworks",
    ],
    benefits: [
      "Professional online presence",
      "Mobile-friendly experience",
      "Improved search visibility",
      "Fast and secure performance",
    ],
    approach: [
      "Requirement Analysis",
      "Planning & Structure",
      "UI/UX Design",
      "Development",
      "Testing",
      "Launch",
    ],
  },

  {
    slug: "web-application-development",
    title: "Web Application Development",
    shortTitle: "Web Applications",
    category: "Development",
    description:
      "Powerful browser-based applications built around your workflows, users and business requirements with modern scalable technologies.",
    features: [
      "Custom Dashboards",
      "User Management",
      "API Integration",
      "Cloud Ready",
    ],
    benefits: [
      "Automate business workflows",
      "Access from any device",
      "Scalable architecture",
      "Centralized information",
    ],
    approach: [
      "Business Analysis",
      "System Architecture",
      "UI/UX Design",
      "Development",
      "Testing",
      "Deployment",
    ],
  },

  {
    slug: "software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    category: "Software",
    description:
      "Tailored software solutions designed specifically around your company's operations, challenges and long-term growth requirements.",
    features: [
      "Custom Applications",
      "Workflow Automation",
      "Database Solutions",
      "Scalable Architecture",
    ],
    benefits: [
      "Solutions built around your business",
      "Reduced repetitive work",
      "Better operational efficiency",
      "Flexible future expansion",
    ],
    approach: [
      "Requirement Discovery",
      "Solution Planning",
      "Architecture",
      "Development",
      "Quality Testing",
      "Implementation",
    ],
  },

  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI / UX Design",
    category: "Design",
    description:
      "Clean, intuitive and user-focused interfaces that create better digital experiences while maintaining a strong visual identity.",
    features: [
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
    benefits: [
      "Better user experience",
      "Clearer customer journeys",
      "Consistent visual identity",
      "Higher engagement",
    ],
    approach: [
      "Research",
      "User Flow",
      "Wireframes",
      "Visual Design",
      "Prototype",
      "Design Handoff",
    ],
  },

  {
    slug: "saas-development",
    title: "SaaS Development",
    shortTitle: "SaaS Development",
    category: "SaaS",
    description:
      "Scalable SaaS platforms designed for subscriptions, multi-user environments, dashboards and long-term product growth.",
    features: [
      "Multi-user Systems",
      "Subscription Ready",
      "Admin Dashboards",
      "Cloud Architecture",
    ],
    benefits: [
      "Scalable product foundation",
      "Recurring-service capabilities",
      "Centralized management",
      "Ready for future features",
    ],
    approach: [
      "Product Strategy",
      "Architecture",
      "Product Design",
      "Development",
      "Testing",
      "Continuous Improvement",
    ],
  },

  {
    slug: "business-systems",
    title: "CRM, ERP & POS Systems",
    shortTitle: "Business Systems",
    category: "Business",
    description:
      "Business management systems that centralize customer data, operations, sales, inventory and internal processes.",
    features: [
      "CRM Solutions",
      "ERP Systems",
      "POS Systems",
      "Business Dashboards",
    ],
    benefits: [
      "Centralized business data",
      "Improved operational control",
      "Better reporting",
      "Reduced manual processes",
    ],
    approach: [
      "Process Review",
      "Requirement Mapping",
      "System Planning",
      "Development",
      "Data Setup",
      "Deployment",
    ],
  },

  {
    slug: "api-integration",
    title: "API & System Integration",
    shortTitle: "API Integration",
    category: "Integration",
    description:
      "Connect websites, applications and business systems so information can move securely and automatically between platforms.",
    features: [
      "REST API Integration",
      "Third-party Services",
      "Payment Integration",
      "System Automation",
    ],
    benefits: [
      "Connected business systems",
      "Less duplicate data entry",
      "Automated information flow",
      "Improved efficiency",
    ],
    approach: [
      "Integration Review",
      "API Planning",
      "Security Setup",
      "Development",
      "Testing",
      "Monitoring",
    ],
  },

  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    shortTitle: "Maintenance & Support",
    category: "Support",
    description:
      "Reliable technical support, maintenance and continuous improvements to keep your digital products secure, stable and up to date.",
    features: [
      "Bug Fixes",
      "Security Updates",
      "Performance Monitoring",
      "Feature Improvements",
    ],
    benefits: [
      "Reliable system performance",
      "Improved security",
      "Reduced downtime",
      "Long-term technical support",
    ],
    approach: [
      "System Review",
      "Issue Monitoring",
      "Maintenance",
      "Optimization",
      "Updates",
      "Ongoing Support",
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find(
    (service) => service.slug === slug
  );
}