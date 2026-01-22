import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { pricingData } from "../data/pricing";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transparent pricing for all our services. No hidden fees, just honest rates for quality service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-100 text-green-700 border-green-200">
              ✓ No Hidden Fees
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">
              ✓ Flexible Payment Plans
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 border-purple-200">
              ✓ Money-Back Guarantee
            </Badge>
          </div>
        </motion.div>

        {/* Pricing Categories */}
        <div className="space-y-16">
          {pricingData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {category.category}
                </h2>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services?.map((service, sIndex) => {
                  const colorMap = {
                    "Visa Services": { hover: "hover:border-blue-400 hover:bg-blue-50", price: "text-blue-600", button: "bg-blue-600 hover:bg-blue-700" },
                    "Language Learning (A1-C2)": { hover: "hover:border-purple-400 hover:bg-purple-50", price: "text-purple-600", button: "bg-purple-600 hover:bg-purple-700" },
                    "Anerkennung (Recognition Services)": { hover: "hover:border-green-400 hover:bg-green-50", price: "text-green-600", button: "bg-green-600 hover:bg-green-700" },
                    "Ausbildung (Vocational Training)": { hover: "hover:border-orange-400 hover:bg-orange-50", price: "text-orange-600", button: "bg-orange-600 hover:bg-orange-700" },
                    "Tax Help": { hover: "hover:border-indigo-400 hover:bg-indigo-50", price: "text-indigo-600", button: "bg-indigo-600 hover:bg-indigo-700" }
                  };
                    const colors = colorMap[category.category] || colorMap["Visa Services"];

                    return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIndex * 0.1, duration: 0.4 }}
                  >
                    <Card className={`relative border-2 hover:shadow-xl transition-all duration-300 ${service.popular ? 'border-yellow-300 bg-yellow-50' : colors.hover}`}>
                      {service.popular && (
                        <Badge className="absolute top-4 right-4 bg-yellow-500 text-white z-10 shadow-lg">
                          Popular
                        </Badge>
                      )}
                      
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-gray-900">
                          {service.name}
                        </CardTitle>
                        
                        <div>
                          <div className="flex items-baseline gap-2 mb-1">
                            <Euro className={`w-5 h-5 ${colors.price}`} />
                            <span className={`text-3xl font-extrabold ${colors.price}`}>{service.price?.replace('€', '')}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-2 mb-6">
                          <h4 className="font-semibold text-gray-900 text-sm mb-3">What's included:</h4>
                          {service.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-2">
                              <CheckCircle className={`w-4 h-4 ${colors.icon} flex-shrink-0 mt-0.5`} />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Link to={createPageUrl("Contact")} className="block">
                          <Button className={`w-full ${colors.button} shadow-md hover:shadow-lg transition-all duration-300`}>
                            Get Started
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
            })}
            </div>
          </motion.div>
        ))}
      </div>
        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=1200')] opacity-10 bg-cover bg-center"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight relative z-10">
            Need a Custom Package?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-10 font-light relative z-10">
            We can create a tailored solution for your specific needs and budget
          </p>
          <Link to={createPageUrl("Contact")} className="relative z-10 inline-block">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg px-8">
              Contact Us for Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pricing FAQs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Are there payment plans available?</h4>
              <p className="text-gray-600 text-sm">Yes! We offer flexible payment plans for most services. Contact us to discuss options.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What's included in the price?</h4>
              <p className="text-gray-600 text-sm">All listed features are included. No hidden fees or surprise charges.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h4>
              <p className="text-gray-600 text-sm">We offer a money-back guarantee if we cannot deliver the promised service.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I combine services?</h4>
              <p className="text-gray-600 text-sm">Absolutely! We offer package discounts when you combine multiple services.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}