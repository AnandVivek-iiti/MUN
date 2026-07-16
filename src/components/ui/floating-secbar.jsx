"use client"
import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "../../lib/utils"

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()

      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-cyan-500/30 rounded-full bg-black/80 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(34,211,238,0.02),0px_0px_0px_1px_rgba(34,211,238,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className,
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 hover:text-cyan-400 transition-colors duration-200",
            )}
          >
            <span className="block sm:hidden text-cyan-400">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
          </a>
        ))}
        <button className="border text-sm font-medium relative border-cyan-500/30 bg-gradient-to-r from-cyan-400 to-teal-500 text-black px-4 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
          <span>Register</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
