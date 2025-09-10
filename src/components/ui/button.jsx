// src/components/ui/button.jsx
import * as React from "react"

// simple cn function
function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function Button({ className, variant = "primary", children, ...props }) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-medium transition-colors"

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 shadow-md",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
