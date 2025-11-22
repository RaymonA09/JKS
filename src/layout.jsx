import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MapPin, Phone, Mail, FileText, Users, Briefcase, Newspaper, Building, Menu, X } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", url: createPageUrl("Home"), icon: MapPin },
    { name: "Services", url: createPageUrl("Services"), icon: Briefcase },
    { name: "Jobs", url: createPageUrl("Jobs"), icon: Building },
    { name: "News", url: createPageUrl("News"), icon: Newspaper },
    { name: "Contact", url: createPageUrl("Contact"), icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <div className="w-25 h-15 rounded-lg flex items-center justify-center">
                <img src="./images/GermanyLogo.png" className="w-30 h-20"/>
                {/* <MapPin className="w-6 h-6 text-white" /> */}
              </div>
              {/* <div>
                <h1 className="text-xl font-bold text-gray-900">JKS</h1>
                <p className="text-xs text-gray-500">JourneyKarrierStart</p>
              </div> */}
            </Link>

            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.url
                      ? "bg-green-50 text-green-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.url
                      ? "bg-green-50 text-green-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">JKS</h2>
                  <p className="text-gray-400 text-sm">JourneyKarrierStart</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Your trusted partner for German career opportunities. We help you start your journey with expert guidance for Au Pair, Ausbildung, FSJ/BFD, and professional career paths in Germany.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400">+49 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400">info@journeykarrierstart.de</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Au Pair Program</li>
                <li>FSJ/BFD</li>
                <li>Ausbildung</li>
                <li>Jobseeker Services</li>
                <li>Blue Card Visa</li>
                <li>Tourist Assistance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Success Stories</li>
                <li>Job Opportunities</li>
                <li>News & Updates</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JKS - JourneyKarrierStart. All rights reserved. Professional career services in Germany.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}