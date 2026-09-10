"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MotionLink = motion(Link);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "FAQs", href: "/faqs" },
    { name: "Committees", href: "/committees" },
    { name: "Secretariat", href: "/secretariat" },
    { name: "Gallery", href: "/gallery" },
    { name: "Past Editions", href: "/past-editions" },
    { name: "Sponsors", href: "/sponsors" },
  ];

  const openRegister = () => {
    setIsOpen(false);
    window.open("https://registration.iiti.ac.in/mun10/", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-[#00ffff]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="MUN IIT Indore Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-[#00ffff] font-bold text-xl tracking-wide">
                MUN IITI
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <MotionLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-white hover:text-[#00ffff] transition-colors duration-300 relative group"
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ffff] group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </MotionLink>
              ))}
            </div>

            {/* Desktop Register Button — opens the registration link */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openRegister}
              className="hidden lg:block bg-gradient-to-r from-[#00ffff] to-[#00ffff]/80 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-[#00ffff]/30 transition-all duration-300"
            >
              Register Now
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#00ffff] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

{/* Mobile Navigation */}
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item, index) => (
                  <MotionLink
                    key={item.name}
                    to={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      x: isOpen ? 0 : -20,
                    }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="block text-white hover:text-[#00ffff] transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </MotionLink>
                ))}

              {/* Mobile Register Button — opens the registration link */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: 0.6 }}
                onClick={openRegister}
                className="block w-full bg-gradient-to-r from-[#00ffff] to-[#00ffff]/80 text-black px-6 py-2 rounded-full font-semibold mt-4 text-center"
              >
                Register Now
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Animated Bottom Border */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent"
          animate={{
            width: ["0%", "100%", "0%"],
            x: ["0%", "0%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.nav>
    </>
  );
}
