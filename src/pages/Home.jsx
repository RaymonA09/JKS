import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  FileText, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Globe,
  Shield,
  Award
} from "lucide-react";

import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import ProcessSteps from "../components/home/ProcessSteps";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesOverview />
      <ProcessSteps />
      <WhyChooseUs />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your German Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get personalized guidance from our immigration experts today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-blue-600 hover:text-blue-900 hover:bg-gray-50 w-full sm:w-auto">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl("Services")}>
              <Button size="lg" variant="outline" className="border-white text-blue-600 hover:text-blue-900 w-full sm:w-auto">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}