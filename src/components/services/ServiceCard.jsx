import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ServiceCard({ service, colors }) {

  return (
    <Card className={`relative border-2 ${colors.hover} transition-all duration-300`}>
      {service.popular && (
        <Badge className="absolute top-1 right-4 bg-yellow-500 text-white z-10">
          Popular
        </Badge>
      )}

      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold text-gray-900">
            {service.title}
          </CardTitle>
          <div className="text-right">
              <div className={`text-xs font-semibold ${colors.price} ${colors.gradient} px-3 py-1 rounded-full`}>
                {service.keyBenefit}
              </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Duration: {service.duration}</span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          {service.description}
        </p>
      </CardHeader>

      <CardContent>
        <div className="space-y-2 mb-4">
          <h4 className="font-semibold text-gray-900 text-sm">What's included:</h4>
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className={`w-3 h-3 ${colors.icon} flex-shrink-0`} />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>

       <div className="mb-4 pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">Custom pricing available</p>
        </div>

      <div className="flex gap-2">
        <Link to={createPageUrl("Pricing")} className="flex-1">
          <Button variant="outline" className="w-full">
            View Pricing
          </Button>
        </Link>
        <Link to={createPageUrl("Contact")} className="flex-1">
          <Button className={`w-full ${colors.button}`}>
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
      </CardContent>
    </Card>
  );
}
