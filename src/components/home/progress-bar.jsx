
import React from "react"

export function ProgressBar({ progress }) {
  return (
    <div className="fixed top-16 left-0 w-full h-1 z-50 bg-transparent">
      <div
        className="h-full bg-[#00ffff] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
