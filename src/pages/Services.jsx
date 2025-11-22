import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
  Euro,
  Calculator
} from "lucide-react";
import { LanguageLevelModal } from "../components/services/LanguageLevelModal";
import ServiceCard from "../components/services/ServiceCard";
import { serviceCategories } from "../data/serviceCategories";
import { languageLevels } from "../data/languageLevels";
import { Badge } from "@/components/ui/badge";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


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

  const colorMap = {
    visa: {
      hover: "hover:border-blue-400 hover:bg-blue-50",
      price: "text-blue-600",
      icon: "text-blue-500",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    anerkennung: {
      hover: "hover:border-green-400 hover:bg-green-50",
      price: "text-green-600",
      icon: "text-green-500",
      button: "bg-green-600 hover:bg-green-700",
    },
    ausbildung: {
      hover: "hover:border-orange-400 hover:bg-orange-50",
      price: "text-orange-600",
      icon: "text-orange-500",
      button: "bg-orange-600 hover:bg-orange-700",
    },
    tax: {
      hover: "hover:border-indigo-400 hover:bg-indigo-50",
      price: "text-indigo-600",
      icon: "text-indigo-500",
      button: "bg-indigo-600 hover:bg-indigo-700",
    },
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
            Comprehensive services to support your German journey. From visa applications to language learning and professional development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-100 text-green-700 border-green-200">
              ✓ End-to-end Support
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">
              ✓ Expert Guidance
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 border-purple-200">
              ✓ Transparent Pricing
            </Badge>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-6">
          {serviceCategories.map((category) => (
            <Card key={category.id} className={`overflow-hidden shadow-lg cursor-pointer py-0`}>
              
              <Collapsible
                open={openSections.has(category.id)}
                onOpenChange={() => toggleSection(category.id)}
              >
                  <CollapsibleTrigger asChild>
                    <button className="w-full text-left cursor-pointer py-5">
                      <CardHeader className="transition-colors duration-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}
                            >
                              <category.icon className="w-6 h-6 text-white" />
                            </div>

                            <div>
                              <CardTitle className="text-2xl font-bold text-gray-900 text-left">
                                {category.title}
                              </CardTitle>
                              <p className="text-gray-600 text-left mt-1">
                                {category.description}
                              </p>
                            </div>
                          </div>

                          {openSections.has(category.id) ? (
                            <ChevronDown className="w-6 h-6 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-6 h-6 text-gray-500" />
                          )}
                        </div>
                      </CardHeader>
                    </button>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0 pb-5">
                    {category.isLanguage ? (
                      <div className="grid md:grid-cols-3 gap-6">
                        {languageLevels.map((level) => (
                          <LanguageLevelModal key={level.level} level={level} />
                        ))}
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-6">
                        {category.services.map((service) => (
                          <ServiceCard key={service.id} service={service} colors={colorMap[category.id] || colorMap.visa}/>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
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
