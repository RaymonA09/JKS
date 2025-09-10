import React from "react";

// Sample articles based on your JSON schema
const articles = [
  {
    title: "How to Get a Job in Germany",
    content: "## Step 1: Prepare your CV\nFull content goes here...",
    excerpt: "A quick guide to finding a job in Germany.",
    category: "guides",
    featured_image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop&crop=center",
    published: true,
    tags: ["job", "Germany", "career"],
  },
  {
    title: "Latest Immigration Updates",
    content: "Details about new visa policies...",
    excerpt: "Keep up with the latest immigration news in Germany.",
    category: "news",
    featured_image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
    published: true,
    tags: ["immigration", "visa", "Germany"],
  },
  {
    title: "Success Story: Anna’s Journey",
    content: "Anna shares her experience as an Au Pair in Germany...",
    excerpt: "Read Anna’s inspiring journey to Germany.",
    category: "success_stories",
    featured_image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&crop=center",
    published: true,
    tags: ["success", "AuPair", "Germany"],
  },
];

export default function Article() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-2">
      {articles.map((article) => (
        <div key={article.title} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
          {article.featured_image && (
            <img
              src={article.featured_image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          )}
          <h2 className="text-xl font-bold mb-2">{article.title}</h2>
          <p className="text-gray-600 mb-2">{article.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500 font-semibold">{article.category}</span>
        </div>
      ))}
    </div>
  );
}
