import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Building, 
  MapPin,
  ArrowRight,
  Clock
} from "lucide-react";

const services = [
  {
    id: "au_pair",
    title: "Au Pair Program",
    description: "Live with German families, learn the language, and gain cultural experience while caring for children.",
    icon: Users,
    color: "from-pink-500 to-rose-500",
    duration: "6-12 months",
    popular: true,
    features: ["Cultural exchange", "Language immersion", "Host family placement", "Support throughout"]
  },
  {
    id: "fsj_bfd",
    title: "FSJ/BFD",
    description: "Voluntary social or ecological service year in Germany. Perfect for personal growth and social impact.",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    duration: "6-18 months",
    features: ["Social service", "Personal development", "German experience", "Pocket money"]
  },
  {
    id: "ausbildung",
    title: "Ausbildung",
    description: "Dual vocational training programs combining theoretical education with practical work experience.",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-500",
    duration: "2-3.5 years",
    popular: true,
    features: ["Paid training", "Work experience", "Qualification certificate", "Job placement"]
  },
  {
    id: "jobseeker",
    title: "Jobseeker Services",
    description: "Professional job placement services for skilled workers looking for career opportunities in Germany.",
    icon: Briefcase,
    color: "from-green-500 to-emerald-500",
    duration: "2-6 months",
    features: ["CV optimization", "Job matching", "Interview prep", "Visa support"]
  },
  {
    id: "blue_card",
    title: "Blue Card Visa",
    description: "EU Blue Card for highly skilled professionals. Fast-track to German residency and career success.",
    icon: Building,
    color: "from-purple-500 to-violet-500",
    duration: "4-8 weeks",
    features: ["Fast processing", "High salary jobs", "Permanent residency path", "Family reunification"]
  },
  {
    id: "tourist",
    title: "Tourist Assistance",
    description: "Complete support for tourist visas and travel arrangements to Germany for business or leisure.",
    icon: MapPin,
    color: "from-orange-500 to-yellow-500",
    duration: "2-4 weeks",
    features: ["Visa application", "Travel planning", "Document preparation", "Support services"]
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Career Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs and services to launch your career journey in Germany. 
            From cultural exchange to professional development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-yellow-500 text-white z-10">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">Duration: {service.duration}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={createPageUrl("Contact")} className="block">
                  <Button className="w-full hover:bg-green-700 bg-green-600 transition-colors duration-300">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to={createPageUrl("Services")}>
            <Button size="lg" variant="outline">
              View All Services & Details
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}