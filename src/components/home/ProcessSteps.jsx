import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  FileText, 
  Languages, 
  UserCheck,
  Building,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Assessment & Consultation",
    description: "We evaluate your profile, goals, and preferences to recommend the perfect program for you.",
    icon: MessageCircle,
    color: "from-green-500 to-green-600"
  },
  {
    id: 2,
    title: "Language Preparation",
    description: "German language assessment and preparation courses to meet program requirements.",
    icon: Languages,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 3,
    title: "Document Completion",
    description: "Complete preparation of all required documents, applications, and certifications.",
    icon: FileText,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    title: "Matching & Placement",
    description: "Connection with host families, training companies, or employers based on your profile.",
    icon: UserCheck,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 5,
    title: "Application Processing",
    description: "Submission and monitoring of visa applications and program registrations.",
    icon: Building,
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 6,
    title: "Arrival & Support",
    description: "Ongoing support during your journey in Germany with local assistance.",
    icon: CheckCircle,
    color: "from-emerald-500 to-emerald-600"
  }
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Journey Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive 6-step process ensures successful placement and ongoing support throughout your German journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-sm font-semibold text-gray-500 mb-2">
                    STEP {step.id}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-4 mb-4">
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your German Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule your free assessment today and take the first step towards your career goals in Germany
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Free consultation</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Personalized plan</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Expert guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}