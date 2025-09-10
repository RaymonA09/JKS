import React from "react";

// Sample jobs based on your JSON schema
const jobs = [
  {
    title: "Au Pair in Berlin",
    company: "Happy Families GmbH",
    location: "Berlin, Germany",
    job_type: "au_pair",
    description: "Looking for a motivated Au Pair to join a friendly family.",
    requirements: ["Age 18-30", "Basic German", "Love for children"],
    benefits: ["Accommodation included", "Pocket money", "Travel support"],
    salary_range: "€300 - €400/month",
    application_deadline: "2024-09-30",
    contact_email: "apply@happyfamilies.de",
    active: true,
    featured: true,
  },
  {
    title: "Software Engineer Internship",
    company: "Tech Solutions AG",
    location: "Munich, Germany",
    job_type: "internship",
    description: "Join our team for a 6-month software development internship.",
    requirements: ["Basic knowledge of React", "Problem-solving skills", "Teamwork"],
    benefits: ["Stipend €800/month", "Mentorship program", "Certificate"],
    salary_range: "€800/month",
    application_deadline: "2024-10-15",
    contact_email: "hr@techsolutions.de",
    active: true,
    featured: false,
  },
];

export default function Job() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Job Opportunities</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {job.featured && (
              <span className="inline-block bg-green-600 text-white px-2 py-1 text-xs rounded mb-2">
                Featured
              </span>
            )}
            <h2 className="text-xl font-bold mb-1">{job.title}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Company:</strong> {job.company}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Type:</strong> {job.job_type.replace("_", " ")}
            </p>
            <p className="text-gray-700 mb-2">{job.description}</p>
            <div className="mb-2">
              <strong>Requirements:</strong>
              <ul className="list-disc list-inside text-gray-600">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="mb-2">
              <strong>Benefits:</strong>
              <ul className="list-disc list-inside text-gray-600">
                {job.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-700 mb-1">
              <strong>Salary:</strong> {job.salary_range}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Deadline:</strong> {job.application_deadline}
            </p>
            <p className="text-gray-700">
              <strong>Contact:</strong> {job.contact_email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
