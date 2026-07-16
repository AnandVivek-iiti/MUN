"use client"
import { useMotionValue, motion, useMotionTemplate } from "framer-motion"

export const SpotlightCard = ({ children, className, spotlightColor = "#22d3ee" }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-black border border-cyan-500/20 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor}20,
              rgba(20, 184, 166, 0.1) 40%,
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor}30,
              transparent 60%
            )
          `,
        }}
      />
      {children}
    </div>
  )
}
