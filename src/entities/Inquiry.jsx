import React from "react";

// Sample inquiries based on your schema
const inquiries = [
  {
    full_name: "Anna Müller",
    email: "anna@example.com",
    phone: "+49 123 456 789",
    nationality: "German",
    service_type: "au_pair",
    current_location: "Berlin",
    message: "Looking for an au pair placement starting next month.",
    urgency: "high",
    status: "new",
  },
  {
    full_name: "John Doe",
    email: "john@example.com",
    phone: "+49 987 654 321",
    nationality: "USA",
    service_type: "blue_card",
    current_location: "Munich",
    message: "Need guidance for applying for a Blue Card visa.",
    urgency: "medium",
    status: "in_progress",
  },
];

export default function Inquiry() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Client Inquiries</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {inquiries.map((inq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{inq.full_name}</h2>
            <p className="text-gray-600 mb-1"><strong>Email:</strong> {inq.email}</p>
            <p className="text-gray-600 mb-1"><strong>Phone:</strong> {inq.phone}</p>
            <p className="text-gray-600 mb-1"><strong>Nationality:</strong> {inq.nationality}</p>
            <p className="text-gray-600 mb-1"><strong>Service:</strong> {inq.service_type}</p>
            <p className="text-gray-600 mb-1"><strong>Location:</strong> {inq.current_location}</p>
            <p className="text-gray-600 mb-1"><strong>Message:</strong> {inq.message}</p>
            <p className="text-gray-600 mb-1"><strong>Urgency:</strong> {inq.urgency}</p>
            <p className="text-gray-600"><strong>Status:</strong> {inq.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
