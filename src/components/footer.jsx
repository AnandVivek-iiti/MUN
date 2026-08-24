import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    // { icon: Facebook, href: "#", label: "Facebook" },
    // { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/muniiti?igsh=MW9yczcxeHpwd3hpcg==", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/muniiti/", label: "LinkedIn" },
    // { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black to-[#0a0a0a] border-t border-[#00ffff]/20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.img
                src="/logo.png"
                alt="MUN IIT Indore"
                className="w-12 h-12 rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div>
                <h3 className="text-2xl font-bold text-[#00ffff]">MUN IITI</h3>
                <p className="text-white/70 text-sm">Model United Nations</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Empowering the next generation of global leaders through
              diplomacy, debate, and collaboration at IIT Indore.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.15 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-black/50 border border-[#00ffff]/30 rounded-full flex items-center justify-center text-[#00ffff] hover:bg-[#00ffff]/20 hover:border-[#00ffff] transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-[#00ffff] mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              {/* Phone Numbers */}
              <div className="flex items-center space-x-3 text-white/80 hover:text-[#00ffff] transition-colors duration-300">
                <Phone size={18} className="text-[#00ffff]" />
                <div>
                  <p className="font-small">Kavyansh - 89498 98072</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white/80 hover:text-[#00ffff] transition-colors duration-300">
                <Phone size={18} className="text-[#00ffff]" />
                <div>
                  <p className="font-small">Kavyansh - 89498 98072</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white/80 hover:text-[#00ffff] transition-colors duration-300">
                <Phone size={18} className="text-[#00ffff]" />
                <div>
                  <p className="font-small">Kavyansh - 89498 98072</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 text-white/80 hover:text-[#00ffff] transition-colors duration-300">
                <Mail size={18} className="text-[#00ffff]" />
                <div>
                  <p className="font-medium">mun@iiti.ac.in</p>
                  <p className="text-sm text-white/60">Official Email</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-[#00ffff] mb-6">
              Address
            </h4>
            <div className="flex items-start space-x-3 text-white/80 hover:text-[#00ffff] transition-colors duration-300">
              <MapPin size={18} className="text-[#00ffff] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium leading-relaxed">
                  Indian Institute of Technology Indore
                  <br />
                  Khandwa Road, Simrol
                  <br />
                  Indore, Madhya Pradesh
                  <br />
                  453552, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[#00ffff]/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2026 MUN IITI. All rights reserved. | Designed with ❤️ by{" "}
            <a
              href="https://mun.iiti.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#00ffff] hover:text-white transition-colors duration-300"
            >
             MUN Web Dev Team
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
