import React, { useState } from "react"

// Root Collapsible wrapper
export function Collapsible({ children, open: controlledOpen, onOpenChange }) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)

  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const toggle = () => {
    if (isControlled) {
      onOpenChange?.(!controlledOpen)
    } else {
      setUncontrolledOpen(!uncontrolledOpen)
      onOpenChange?.(!uncontrolledOpen)
    }
  }

  return (
    <div
      className="rounded-xl border border-gray-200 bg-transparent shadow-sm transition-all"
      data-state={open ? "open" : "closed"}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { open, toggle }) : child
      )}
    </div>
  )
}

// Trigger button
export function CollapsibleTrigger({ children, toggle, className = "" }) {
  return (
    <button
      type="button"
      onClick={toggle}
      className={`w-full flex items-center justify-between p-5 rounded-xl transition-colors hover:bg-gray-50 ${className}`}
    >
      {children}
    </button>
  )
}

// Content wrapper
export function CollapsibleContent({ children, open, className = "" }) {
  return (
    <div
      className={`px-5 transition-all duration-300 ease-in-out ${
        open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}
