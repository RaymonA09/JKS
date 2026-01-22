import { 
  CheckCircle,
  ArrowRight,
  FileText,
  Languages,
  Award,
  GraduationCap,
  Calculator,
  Euro,
  Clock
} from "lucide-react";

export const pricingData = [
  {
    category: "Visa Services",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    services: [
      {
        name: "Ausbildung Visa",
        price: "€499",
        duration: "4-8 weeks",
        features: ["Training place matching", "Visa application support", "Document preparation", "Interview preparation"],
        popular: true
      },
      {
        name: "IRV (Job Seeker Visa)",
        price: "€449",
        duration: "6-10 weeks",
        features: ["Job search strategy", "Networking support", "Application guidance", "6-month validity"]
      },
      {
        name: "Opportunity Card (Chancenkarte)",
        price: "€549",
        duration: "6-12 weeks",
        features: ["Points assessment", "Application support", "Job search assistance", "Fast-track processing"],
        popular: true
      },
      {
        name: "Student Visa",
        price: "€399",
        duration: "6-12 weeks",
        features: ["University enrollment support", "Financial documentation", "Health insurance", "Blocked account setup"]
      },
      {
        name: "Au Pair Visa",
        price: "€299",
        duration: "2-4 weeks",
        features: ["Host family matching", "Cultural exchange program", "Language support", "Complete documentation"],
        popular: true
      }
    ]
  },
  {
    category: "Language Learning (A1-C2)",
    icon: Languages,
    color: "from-purple-500 to-purple-600",
    services: [
      {
        name: "Level A1 - Beginner",
        price: "€149/month",
        duration: "8 weeks",
        features: ["80 hours total", "Blended learning", "Small class size", "Certificate included"]
      },
      {
        name: "Level A2 - Elementary",
        price: "€159/month",
        duration: "8 weeks",
        features: ["80 hours total", "Blended learning", "Small class size", "Certificate included"]
      },
      {
        name: "Level B1 - Intermediate",
        price: "€169/month",
        duration: "10 weeks",
        features: ["100 hours total", "Blended learning", "Small class size", "Certificate included"],
        popular: true
      },
      {
        name: "Level B2 - Upper Intermediate",
        price: "€179/month",
        duration: "10 weeks",
        features: ["100 hours total", "Blended learning", "Small class size", "Certificate included"]
      },
      {
        name: "Level C1 - Advanced",
        price: "€189/month",
        duration: "12 weeks",
        features: ["120 hours total", "Blended learning", "Small class size", "Certificate included"]
      },
      {
        name: "Level C2 - Mastery",
        price: "€199/month",
        duration: "12 weeks",
        features: ["120 hours total", "Blended learning", "Small class size", "Certificate included"]
      }
    ]
  },
  {
    category: "Anerkennung (Recognition Services)",
    icon: Award,
    color: "from-green-500 to-green-600",
    services: [
      {
        name: "Academic Qualification Recognition",
        price: "€549",
        duration: "8-16 weeks",
        features: ["Degree evaluation", "Document translation", "Authority coordination", "Appeal support if needed"]
      },
      {
        name: "Professional License Recognition",
        price: "€799",
        duration: "12-24 weeks",
        features: ["Professional assessment", "Skills gap analysis", "Training guidance", "License application"],
        popular: true
      },
      {
        name: "Vocational Training Recognition",
        price: "€449",
        duration: "6-12 weeks",
        features: ["Skills assessment", "Equivalency determination", "Gap training", "Certificate processing"]
      }
    ]
  },
  {
    category: "Ausbildung (Vocational Training)",
    icon: GraduationCap,
    color: "from-orange-500 to-orange-600",
    services: [
      {
        name: "Ausbildung Placement Services",
        price: "€799",
        duration: "3-6 months",
        features: ["Program matching", "Company connections", "Application support", "Contract negotiation"],
        popular: true
      },
      {
        name: "Ausbildung Preparation Course",
        price: "€599",
        duration: "2-3 months",
        features: ["Language preparation", "Professional orientation", "Cultural training", "Document support"]
      },
      {
        name: "Ongoing Ausbildung Support",
        price: "€99/month",
        duration: "Throughout training",
        features: ["Academic support", "Workplace guidance", "Legal assistance", "Integration help"]
      }
    ]
  },
  {
    category: "Tax Help",
    icon: Calculator,
    color: "from-indigo-500 to-indigo-600",
    services: [
      {
        name: "Tax Registration & Setup",
        price: "€199",
        duration: "1-2 weeks",
        features: ["Tax ID registration", "Tax class determination", "System explanation", "Document preparation"]
      },
      {
        name: "Annual Tax Return (Steuererklärung)",
        price: "€299",
        duration: "2-4 weeks",
        features: ["Document collection", "Return preparation", "Online filing", "Refund optimization"],
        popular: true
      },
      {
        name: "Tax Consultation & Planning",
        price: "€149/session",
        duration: "Ongoing",
        features: ["Tax optimization", "Deduction advice", "Financial planning", "Legal compliance"]
      },
      {
        name: "Freelancer Tax Services",
        price: "€399/year",
        duration: "Ongoing",
        features: ["Quarterly filings", "VAT handling", "Business expenses", "Record keeping"]
      }
    ]
  }
];