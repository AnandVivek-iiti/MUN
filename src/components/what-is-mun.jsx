import { motion } from "framer-motion"

export function WhatIsMun() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#00ffff] mb-4"
            animate={{
              textShadow: [
                "0 0 10px rgba(0,255,255,0.3)",
                "0 0 20px rgba(0,255,255,0.5)",
                "0 0 10px rgba(0,255,255,0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            What is MUN?
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#00ffff]/10 transition-all duration-500 group-hover:shadow-[#00ffff]/30">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="relative"
              >
                <img
                  src="/what-is-mun.jpg"
                  alt="Model United Nations Conference"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl transition-all duration-500 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                {/* Overlay effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-[#00ffff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-0 h-1 bg-[#00ffff]"
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  />
                  <motion.div
                    className="absolute top-0 right-0 w-1 h-0 bg-[#00ffff]"
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-0 h-1 bg-[#00ffff]"
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-1 h-0 bg-[#00ffff]"
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="absolute -bottom-5 -right-5 w-24 h-24 border-4 border-[#00ffff] rounded-full"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Simulating Global Diplomacy</h3>
            <div className="space-y-4 text-white/80">
              <p>
                Model United Nations is an educational simulation where students assume the roles of diplomats representing different countries in various United Nations committees. At IITI MUN, participants engage in structured debates, draft resolutions, and negotiate solutions to real-world global challenges.
              </p>
              <p>
                At MUN IITI, delegates engage in substantive debates on international issues, develop critical thinking,
                public speaking, and diplomatic skills, all while networking with like-minded peers from across the
                country.
              </p>
              <p>
                This immersive experience develops critical skills including research proficiency, public speaking confidence, diplomatic negotiation, and cross-cultural understanding. Students learn to think beyond national boundaries while addressing complex international issues ranging from climate change and cybersecurity to humanitarian crises and economic development.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.03, backgroundColor: "rgba(0,255,255,0.1)" }}
                className="bg-black/30 border border-[#00ffff]/30 p-4 rounded-xl transition-all duration-300"
              >
                <h4 className="text-[#00ffff] font-semibold text-lg mb-2">Develop Leadership</h4>
                <p className="text-white/70">
                  Enhance your leadership and problem-solving abilities in a global context
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03, backgroundColor: "rgba(0,255,255,0.1)" }}
                className="bg-black/30 border border-[#00ffff]/30 p-4 rounded-xl transition-all duration-300"
              >
                <h4 className="text-[#00ffff] font-semibold text-lg mb-2">Build Connections</h4>
                <p className="text-white/70">Network with diverse participants from prestigious institutions</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
