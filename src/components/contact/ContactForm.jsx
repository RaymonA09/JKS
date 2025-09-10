import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, User, Mail, Phone, Globe, MessageCircle } from "lucide-react";

const serviceOptions = [
  { value: "au_pair", label: "Au Pair Visa" },
  { value: "blue_card", label: "EU Blue Card" },
  { value: "student_visa", label: "Student Visa" },
  { value: "work_visa", label: "Work Visa" },
  { value: "family_reunion", label: "Family Reunion" },
  { value: "business_visa", label: "Business Visa" },
  { value: "other", label: "Other / Not Sure" }
];

const urgencyOptions = [
  { value: "low", label: "No rush (3+ months)" },
  { value: "medium", label: "Within 2-3 months" },
  { value: "high", label: "Urgent (within 1 month)" }
];

export default function ContactForm({ onSubmit, isSubmitting }) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    nationality: "",
    service_type: "",
    current_location: "",
    message: "",
    urgency: "medium"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <MessageCircle className="w-6 h-6 text-blue-600" />
          Start Your Application
        </CardTitle>
        <p className="text-gray-600">
          Fill out this form and we'll contact you within 24 hours with a personalized consultation
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="full_name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="full_name"
                required
                value={formData.full_name}
                onChange={(e) => handleChange("full_name", e.target.value)}
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+1 234 567 8900"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nationality" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Nationality
              </Label>
              <Input
                id="nationality"
                value={formData.nationality}
                onChange={(e) => handleChange("nationality", e.target.value)}
                placeholder="Your nationality"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service_type">
              Service Needed *
            </Label>
            <Select value={formData.service_type} onValueChange={(value) => handleChange("service_type", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select the service you need" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="current_location">
                Current Location
              </Label>
              <Input
                id="current_location"
                value={formData.current_location}
                onChange={(e) => handleChange("current_location", e.target.value)}
                placeholder="City, Country"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="urgency">
                Timeline
              </Label>
              <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {urgencyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Additional Information
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell us about your situation, goals, and any specific questions you have..."
              className="h-32"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !formData.full_name || !formData.email || !formData.service_type}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            {isSubmitting ? "Sending..." : "Get Free Consultation"}
            <Send className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to be contacted by our immigration experts. 
            We respect your privacy and never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}