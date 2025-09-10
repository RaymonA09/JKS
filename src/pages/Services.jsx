import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronDown,
  ChevronRight,
  FileText,
  GraduationCap,
  Languages,
  Building,
  Users,
  Heart,
  MapPin,
  Briefcase,
  Award,
  CheckCircle,
  ArrowRight,
  Clock,
  Euro
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const serviceCategories = [
  {
    id: "visa",
    title: "Visa Services",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    description: "Complete visa application and processing services for various German visa types",
    services: [
      {
        id: "au_pair_visa",
        title: "Au Pair Visa",
        description: "Cultural exchange visa for young people to live with German families",
        duration: "2-4 weeks",
        price: "€299",
        features: ["Host family matching", "Cultural exchange program", "Language learning support", "Complete documentation"],
        popular: true
      },
      {
        id: "blue_card",
        title: "EU Blue Card",
        description: "For highly skilled professionals seeking permanent residency pathway",
        duration: "4-8 weeks",
        price: "€599",
        features: ["High salary positions", "Fast-track processing", "Family reunification", "Permanent residency path"],
        popular: true
      },
      {
        id: "student_visa",
        title: "Student Visa",
        description: "For international students applying to German universities",
        duration: "6-12 weeks",
        price: "€399",
        features: ["University enrollment support", "Financial documentation", "Health insurance guidance", "Post-study work options"]
      },
      {
        id: "work_visa",
        title: "Work Visa",
        description: "General employment visa for job opportunities in Germany",
        duration: "4-10 weeks",
        price: "€499",
        features: ["Job placement assistance", "Labor market test", "Employer coordination", "Legal compliance"]
      },
      {
        id: "family_visa",
        title: "Family Reunion Visa",
        description: "For family members to join relatives already in Germany",
        duration: "8-16 weeks",
        price: "€449",
        features: ["Relationship documentation", "Financial guarantees", "Integration support", "Legal guidance"]
      },
      {
        id: "tourist_visa",
        title: "Tourist/Business Visa",
        description: "Short-term visas for tourism, business meetings, or conferences",
        duration: "2-4 weeks",
        price: "€199",
        features: ["Travel planning", "Business documentation", "Hotel bookings", "Itinerary support"]
      }
    ]
  },
  {
    id: "anerkennung",
    title: "Anerkennung (Recognition) Services",
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
        id: "professional_recognition",
        title: "Professional License Recognition",
        description: "Recognition for regulated professions (doctors, nurses, teachers, etc.)",
        duration: "12-24 weeks",
        price: "€799",
        features: ["Professional assessment", "Skills gap analysis", "Additional training guidance", "License application"]
      },
      {
        id: "vocational_recognition",
        title: "Vocational Training Recognition",
        description: "Recognition of foreign vocational qualifications and apprenticeships",
        duration: "6-12 weeks",
        price: "€449",
        features: ["Skills assessment", "Equivalency determination", "Gap training recommendations", "Certificate processing"]
      },
      {
        id: "partial_recognition",
        title: "Partial Recognition Support",
        description: "Support for cases requiring additional qualifications or training",
        duration: "Varies",
        price: "€349",
        features: ["Gap analysis", "Training program coordination", "Exam preparation", "Reapplication support"]
      }
    ]
  },
  {
    id: "language",
    title: "Language Learning Services",
    icon: Languages,
    color: "from-purple-500 to-purple-600",
    description: "German language courses and certification preparation for all levels",
    services: [
      {
        id: "online_courses",
        title: "Online German Courses",
        description: "Flexible online German language courses from A1 to C2 levels",
        duration: "Flexible",
        price: "€149/month",
        features: ["All CEFR levels", "Live interactive sessions", "Personal tutor", "Certificate preparation"]
      },
      {
        id: "exam_preparation",
        title: "German Exam Preparation",
        description: "Specialized preparation for TestDaF, DSH, Goethe, and other German exams",
        duration: "4-8 weeks",
        price: "€299",
        features: ["Exam-specific training", "Practice tests", "Speaking practice", "Writing improvement"]
      },
      {
        id: "business_german",
        title: "Business German",
        description: "Professional German language skills for workplace communication",
        duration: "8-12 weeks",
        price: "€399",
        features: ["Business vocabulary", "Professional communication", "Industry-specific terms", "Presentation skills"]
      },
      {
        id: "intensive_courses",
        title: "Intensive German Courses",
        description: "Accelerated German learning for quick language acquisition",
        duration: "2-6 weeks",
        price: "€599",
        features: ["Daily classes", "Immersive learning", "Cultural integration", "Fast progress tracking"]
      }
    ]
  },
  {
    id: "career",
    title: "Career Development Services",
    icon: Briefcase,
    color: "from-orange-500 to-orange-600",
    description: "Professional career services and job placement assistance",
    services: [
      {
        id: "job_placement",
        title: "Job Placement Services",
        description: "Complete job search and placement assistance in Germany",
        duration: "2-6 months",
        price: "€599",
        features: ["CV optimization", "Job matching", "Interview preparation", "Salary negotiation"]
      },
      {
        id: "ausbildung_placement",
        title: "Ausbildung Program Placement",
        description: "Placement in German dual education and vocational training programs",
        duration: "3-6 months",
        price: "€799",
        features: ["Program matching", "Application support", "Company coordination", "Contract negotiation"]
      },
      {
        id: "fsj_bfd_placement",
        title: "FSJ/BFD Program Placement",
        description: "Voluntary service year placements in social and ecological projects",
        duration: "2-4 months",
        price: "€399",
        features: ["Organization matching", "Project selection", "Application guidance", "Accommodation support"]
      },
      {
        id: "career_counseling",
        title: "Career Counseling",
        description: "Professional career guidance and development planning",
        duration: "Ongoing",
        price: "€199",
        features: ["Career assessment", "Goal setting", "Industry insights", "Networking opportunities"]
      }
    ]
  },
  {
    id: "integration",
    title: "Integration & Settlement Services",
    icon: Users,
    color: "from-pink-500 to-pink-600",
    description: "Complete support for settling and integrating into German society",
    services: [
      {
        id: "housing_assistance",
        title: "Housing & Accommodation",
        description: "Help finding suitable housing and accommodation in Germany",
        duration: "2-4 weeks",
        price: "€299",
        features: ["Property search", "Rental negotiations", "Legal documentation", "Area recommendations"]
      },
      {
        id: "bureaucracy_support",
        title: "Bureaucracy & Registration",
        description: "Assistance with German administrative procedures and registrations",
        duration: "1-2 weeks",
        price: "€199",
        features: ["City registration", "Bank account opening", "Health insurance", "Tax registration"]
      },
      {
        id: "cultural_integration",
        title: "Cultural Integration Program",
        description: "Cultural orientation and integration support for life in Germany",
        duration: "4-8 weeks",
        price: "€349",
        features: ["Cultural workshops", "Social activities", "Networking events", "Mentorship program"]
      },
      {
        id: "family_support",
        title: "Family Integration Services",
        description: "Specialized support for families moving to Germany",
        duration: "Ongoing",
        price: "€449",
        features: ["School enrollment", "Childcare options", "Family activities", "Community connections"]
      }
    ]
  },
  {
    id: "documentation",
    title: "Documentation & Translation",
    icon: FileText,
    color: "from-indigo-500 to-indigo-600",
    description: "Professional document preparation, translation, and certification services",
    services: [
      {
        id: "document_translation",
        title: "Certified Document Translation",
        description: "Official translations of all documents for German authorities",
        duration: "3-7 days",
        price: "€25-50/page",
        features: ["Certified translations", "All languages", "Official stamps", "Fast delivery"]
      },
      {
        id: "document_preparation",
        title: "Document Preparation & Review",
        description: "Complete preparation and review of application documents",
        duration: "1-2 weeks",
        price: "€199",
        features: ["Document compilation", "Format standardization", "Completeness check", "Quality assurance"]
      },
      {
        id: "apostille_services",
        title: "Apostille & Legalization",
        description: "Document apostille and legalization services for international use",
        duration: "2-4 weeks",
        price: "€149/document",
        features: ["Apostille processing", "Embassy legalization", "Chain authentication", "Express options"]
      },
      {
        id: "portfolio_creation",
        title: "Professional Portfolio Creation",
        description: "Creation of comprehensive professional portfolios for applications",
        duration: "1-2 weeks",
        price: "€299",
        features: ["CV optimization", "Cover letters", "Portfolio design", "Digital formatting"]
      }
    ]
  }
];

export default function Services() {
  const [openSections, setOpenSections] = useState(new Set(["visa"]));

  const toggleSection = (sectionId) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(sectionId)) {
      newOpenSections.delete(sectionId);
    } else {
      newOpenSections.add(sectionId);
    }
    setOpenSections(newOpenSections);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive services to support your German journey. From visa applications to career development and integration support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-100 text-green-700 border-green-200">
              ✓ End-to-end Support
            </Badge>
            <Badge className="bg-red-100 text-red-700 border-red-200">
              ✓ Expert Guidance
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 border-purple-200">
              ✓ Transparent Pricing
            </Badge>
          </div>
        </div>

        {/* Service Categories */}
        <div className="space-y-4">
          {serviceCategories.map((category) => (
              <Collapsible
  key={category.id}
  open={openSections.has(category.id)}
  onOpenChange={() => toggleSection(category.id)}
>
  <CollapsibleTrigger className="w-full">
    <div className="flex items-center justify-between w-full p-1 hover:bg-gray-50 rounded-xl transition-colors">
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}
        >
          <category.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 text-left">
            {category.title}
          </h3>
          <p className="text-gray-600 text-left text-sm mt-1">
            {category.description}
          </p>
        </div>
      </div>
      {openSections.has(category.id) ? (
        <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
      ) : (
        <ChevronRight className="w-6 h-6 text-gray-500 flex-shrink-0" />
      )}
    </div>
  </CollapsibleTrigger>

  <CollapsibleContent>
    <div className="pt-4 pb-2">
      <div className="grid md:grid-cols-2 gap-6">
        {category.services.map((service) => (
          <Card
            key={service.id}
            className="relative border-2 hover:shadow-lg transition-all duration-300"
          >
            {service.popular && (
              <Badge className="absolute top-4 right-4 bg-yellow-500 text-white z-10">
                Popular
              </Badge>
            )}

            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <div className="text-right">
                  <div className="text-xl font-bold text-green-600">
                    {service.price}
                  </div>
                  <div className="text-xs text-gray-500">Starting from</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Clock className="w-4 h-4" />
                <span>Duration: {service.duration}</span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </CardHeader>

            <CardContent>
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-gray-900 text-sm">
                  What's included:
                </h4>
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <Link to={createPageUrl("Contact")} className="block">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </CollapsibleContent>
</Collapsible>

          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">98% Success Rate</h3>
              <p className="text-gray-600 text-sm">Proven track record of successful applications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Licensed immigration consultants and career experts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Processing</h3>
              <p className="text-gray-600 text-sm">Streamlined processes for quicker results</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Personal Support</h3>
              <p className="text-gray-600 text-sm">Dedicated support throughout your journey</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your German Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free consultation to discuss your specific needs and goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl("Jobs")}>
              <Button size="lg" variant="outline">
                View Job Opportunities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}