import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Users, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Badge className="bg-green-100 text-green-600 border-green-200">
                🇩🇪 Your German Career Journey Starts Here
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Start Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 block">
                Career Journey
              </span>
              in Germany
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Expert guidance for Au Pair programs, Ausbildung, FSJ/BFD, job placement, and visa services. 
              We make your German career dreams a reality with personalized support every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("Services")}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Programs
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">1000+</div>
                <div className="text-sm text-gray-500">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
                <div className="text-sm text-gray-500">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">40+</div>
                <div className="text-sm text-gray-500">Countries Served</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop&crop=center"
                alt="German landmarks and career opportunities"
                className="w-full h-80 object-cover rounded-xl mb-6"
              />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Germany</div>
                      <div className="text-sm text-gray-500">Your career destination</div>
                    </div>
                  </div>
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Placement Success Rate</span>
                    <span className="text-sm font-bold text-green-600">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-600 to-blue-500 h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}