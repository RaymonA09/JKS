// src/components/ui/badge.jsx
import * as React from "react"

// simple cn function (no external utils.js needed)
function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        "bg-green-50 text-green-700 border border-green-200",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
