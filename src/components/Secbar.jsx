"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FloatingNav } from "./ui/floating-secbar"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "About",
      link: "#about",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Services",
      link: "#services",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* Static Navbar */}
      <motion.nav
        className="fixed w-full z-40 px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
            AQUATECH
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.link}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.button
            className="bg-gradient-to-r from-cyan-400 to-teal-500 text-black font-medium py-2 px-6 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm p-5 rounded-b-2xl border-t border-cyan-500/30 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  className="text-gray-300 hover:text-cyan-400 transition-colors py-2 px-4"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                className="bg-gradient-to-r from-cyan-400 to-teal-500 text-black font-medium py-2 px-6 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />
    </>
  )
}

export default Navbar
