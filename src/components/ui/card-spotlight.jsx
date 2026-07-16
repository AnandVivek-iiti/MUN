"use client"
import { useMotionValue, motion, useMotionTemplate } from "framer-motion"

export const BackgroundSpotlight = ({ className }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ clientX, clientY }) {
    mouseX.set(clientX)
    mouseY.set(clientY)
  }

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      onMouseMove={handleMouseMove}
      style={{ pointerEvents: "none" }}
    >
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.15),
              rgba(20, 184, 166, 0.1) 40%,
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.2),
              rgba(20, 184, 166, 0.15) 30%,
              transparent 70%
            )
          `,
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.1),
              rgba(20, 184, 166, 0.05) 50%,
              transparent 90%
            )
          `,
        }}
      />
    </div>
  )
}
