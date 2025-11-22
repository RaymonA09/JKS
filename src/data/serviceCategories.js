import {
  FileText,
  Languages,
  Award,
  Calculator,
  GraduationCap
} from "lucide-react";

export const serviceCategories = [
  {
    id: "visa",
    title: "Visa Services",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    description: "Complete visa application and processing services for various German visa types",
    services: [
      {
        id: "ausbildung_visa",
        title: "Ausbildung Visa",
        description: "Vocational training programs combining work and study in Germany",
        duration: "4-8 weeks",
        price: "€499",
        features: ["Training place matching", "Visa application support", "Document preparation", "Interview preparation"],
        popular: true
      },
      {
        id: "irv_visa",
        title: "IRV (Job Seeker Visa)",
        description: "Visa for qualified professionals to search for employment in Germany",
        duration: "6-10 weeks",
        price: "€449",
        features: ["Job search strategy", "Networking support", "Application guidance", "6-month validity"],
        popular: false
      },
      {
        id: "opportunity_card",
        title: "Opportunity Card (Chancenkarte)",
        description: "Points-based visa for skilled workers seeking opportunities in Germany",
        duration: "6-12 weeks",
        price: "€549",
        features: ["Points assessment", "Application support", "Job search assistance", "Fast-track processing"],
        popular: true
      },
      {
        id: "student_visa",
        title: "Student Visa",
        description: "For international students applying to German universities and colleges",
        duration: "6-12 weeks",
        price: "€399",
        features: ["University enrollment support", "Financial documentation", "Health insurance", "Blocked account setup"],
        popular: false
      },
      {
        id: "au_pair_visa",
        title: "Au Pair Visa",
        description: "Cultural exchange visa for young people to live with German families",
        duration: "2-4 weeks",
        price: "€299",
        features: ["Host family matching", "Cultural exchange program", "Language support", "Complete documentation"],
        popular: true
      }
    ]
  },
  {
    id: "language",
    title: "Language Learning (A1-C2)",
    icon: Languages,
    color: "from-purple-500 to-purple-600",
    description: "German language courses from beginner to mastery level with blended learning approach",
    isLanguage: true
  },
  {
    id: "anerkennung",
    title: "Anerkennung (Recognition Services)",
    icon: Award,
    color: "from-green-500 to-green-600",
    description: "Professional qualification recognition for foreign credentials in Germany",
    services: [
      {
        id: "academic_recognition",
        title: "Academic Qualification Recognition",
        description: "Recognition of foreign university degrees and academic qualifications",
        duration: "8-16 weeks",
        price: "€549",
        features: ["Degree evaluation", "Document translation", "Authority coordination", "Appeal support if needed"]
      },
      {
        id: "vocational_recognition",
        title: "Vocational Training Recognition",
        description: "Recognition of foreign vocational qualifications and apprenticeships",
        duration: "6-12 weeks",
        price: "€449",
        features: ["Skills assessment", "Equivalency determination", "Gap training", "Certificate processing"]
      },
      {
        id: "professional_recognition",
        title: "Professional License Recognition",
        description: "Recognition for regulated professions (doctors, nurses, engineers, teachers)",
        duration: "12-24 weeks",
        price: "€799",
        features: ["Professional assessment", "Skills gap analysis", "Training guidance", "License application"]
      },
    ]
  },
  {
    id: "ausbildung",
    title: "Ausbildung (Vocational Training)",
    icon: GraduationCap,
    color: "from-orange-500 to-orange-600",
    description: "Complete support for dual vocational training programs in Germany",
    services: [
      {
        id: "ausbildung_placement",
        title: "Ausbildung Placement Services",
        description: "Find and secure positions in German dual education training programs",
        duration: "3-6 months",
        price: "€799",
        features: ["Program matching", "Company connections", "Application support", "Contract negotiation"],
        popular: true
      },
      {
        id: "ausbildung_preparation",
        title: "Ausbildung Preparation Course",
        description: "Prepare for your Ausbildung with language and professional training",
        duration: "2-3 months",
        price: "€599",
        features: ["Language preparation", "Professional orientation", "Cultural training", "Document support"]
      },
      {
        id: "ausbildung_support",
        title: "Ongoing Ausbildung Support",
        description: "Support during your training period in Germany",
        duration: "Throughout training",
        price: "€99/month",
        features: ["Academic support", "Workplace guidance", "Legal assistance", "Integration help"]
      }
    ]
  },
  {
    id: "tax",
    title: "Tax Help",
    icon: Calculator,
    color: "from-indigo-500 to-indigo-600",
    description: "Professional tax assistance and consultation for individuals in Germany",
    services: [
      {
        id: "tax_registration",
        title: "Tax Registration & Setup",
        description: "Help with initial tax registration and understanding German tax system",
        duration: "1-2 weeks",
        price: "€199",
        features: ["Tax ID registration", "Tax class determination", "System explanation", "Document preparation"]
      },
      {
        id: "tax_return",
        title: "Annual Tax Return (Steuererklärung)",
        description: "Complete preparation and filing of your annual tax return",
        duration: "2-4 weeks",
        price: "€299",
        features: ["Document collection", "Return preparation", "Online filing", "Refund optimization"]
      },
      {
        id: "tax_consultation",
        title: "Tax Consultation & Planning",
        description: "Professional tax advice and planning for optimal tax benefits",
        duration: "Ongoing",
        price: "€149/session",
        features: ["Tax optimization", "Deduction advice", "Financial planning", "Legal compliance"]
      },
      {
        id: "freelance_tax",
        title: "Freelancer Tax Services",
        description: "Specialized tax support for freelancers and self-employed individuals",
        duration: "Ongoing",
        price: "€399/year",
        features: ["Quarterly filings", "VAT handling", "Business expenses", "Record keeping"]
      }
    ]
  }
];