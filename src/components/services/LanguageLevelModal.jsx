import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  GraduationCap,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


export function LanguageLevelModal({ level }) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-400 hover:bg-purple-50">
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                <div>
                    <h3 className="text-2xl font-bold text-purple-600 mb-1">{level.level}</h3>
                    <h4 className="font-semibold text-gray-900">{level.title}</h4>
                </div>
                <div className="text-right">
                    <div className="text-lg font-bold text-purple-600">{level.price}</div>
                    <div className="text-xs text-gray-500">{level.duration}</div>
                </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{level.description}</p>
                <Button variant="outline" size="sm" className="w-full border-purple-300 text-purple-600 hover:bg-purple-50">
                View Details & Schedule
                <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </CardContent>
            </Card>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md lg:max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            <span className="text-purple-600">{level.level}</span>
            <span>{level.title}</span>
          </DialogTitle>
          <DialogDescription className="text-base">
            {level.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* Pricing and Duration */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Course Fee</div>
              <div className="text-2xl font-bold text-green-600">{level.price}</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Duration</div>
              <div className="text-2xl font-bold text-blue-600">{level.duration}</div>
            </div>
          </div>

          {/* Guidelines */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-600" />
              Course Guidelines
            </h3>
            <div className="bg-purple-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Format:</span>
                <span className="font-semibold text-gray-900">{level.guidelines.format}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Schedule:</span>
                <span className="font-semibold text-gray-900">{level.guidelines.schedule}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Hours:</span>
                <span className="font-semibold text-gray-900">{level.guidelines.hours}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Class Size:</span>
                <span className="font-semibold text-gray-900">{level.guidelines.classSize}</span>
              </div>
            </div>
          </div>

          {/* Weekly Schedule */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-600" />
              Weekly Schedule
            </h3>
            <div className="space-y-2">
              {level.schedule?.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900">{item.day}</div>
                    <div className="text-sm text-gray-600">{item.format}</div>
                  </div>
                  <div className="text-sm font-medium text-purple-600">{item.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Topics Covered */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-600" />
              Topics Covered
            </h3>
            <div className="flex flex-wrap gap-2">
              {level.topics?.map((topic, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Link to={createPageUrl("Contact")} className="flex-1">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Enroll Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" className="flex-1">
              Download Syllabus
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
