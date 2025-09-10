import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Globe, 
  HeartHandshake 
} from "lucide-react";

const reasons = [
  {
    title: "Expert Knowledge",
    description: "Years of experience with German programs and immigration procedures",
    icon: Award,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "High Success Rate",
    description: "98% success rate with thousands of successful placements",
    icon: Shield,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Fast Processing",
    description: "Streamlined process to minimize waiting times and maximize opportunities",
    icon: Clock,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Personal Support",
    description: "Dedicated case manager for personalized assistance throughout your journey",
    icon: HeartHandshake,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Global Reach",
    description: "Serving clients from over 40 countries worldwide",
    icon: Globe,
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "Trusted Partner",
    description: "Recognized by German institutions and thousands of satisfied clients",
    icon: Users,
    color: "from-indigo-500 to-blue-500"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose JKS?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, efficiency, and personal care to deliver exceptional career guidance and placement services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group border-0">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${reason.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Your Success is Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We understand that starting a career journey in a new country is a life-changing decision. That's why we're committed to providing you with the highest level of service, transparency, and support throughout your journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-3 h-3 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Transparent Process</div>
                    <div className="text-gray-600 text-sm">Clear timeline and regular updates on your application status</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-3 h-3 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Fast Response</div>
                    <div className="text-gray-600 text-sm">Quick answers to your questions and concerns</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HeartHandshake className="w-3 h-3 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ongoing Support</div>
                    <div className="text-gray-600 text-sm">Help throughout your entire journey in Germany</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=400&fit=crop&crop=center"
                alt="Professional team"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}