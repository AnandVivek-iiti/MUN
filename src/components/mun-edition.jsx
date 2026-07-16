import { motion } from "framer-motion"
export function MunEdition() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
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
            MUN IITI 10.0
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
            className="space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-3xl font-bold text-white">Shaping Tomorrow's Leaders</h3>
            <div className="space-y-4 text-white/80">
              <p>
                The 9th edition of MUN IITI brings together the brightest minds from across the nation to tackle
                pressing global challenges through diplomatic discourse and collaborative problem-solving.
              </p>
              <p>
                This year's conference features an expanded roster of committees, including specialized agencies and
                crisis committees, offering delegates a diverse range of diplomatic scenarios to navigate.
              </p>
              <p>
                With distinguished chief guest ,enhanched training session , and networking opportunities, MUN IITI
                10.0 promises an unparalleled platform for developing leadership skills and forging lasting connections.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "8 Committees", icon: "🏛️" },
                { title: "Distinguished Chief Guests", icon: "🎤" },
                { title: "Gala Dinner", icon: "🎉" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(0,255,255,0.1)",
                    boxShadow: "0 0 15px rgba(0,255,255,0.3)",
                  }}
                  className="bg-black/30 border border-[#00ffff]/30 p-4 rounded-xl text-center transition-all duration-300"
                >
                  <motion.div
                    className="text-3xl mb-2"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="text-[#00ffff] font-semibold">{item.title}</h4>
                </motion.div>
              ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#00ffff]/10 transition-all duration-500 group-hover:shadow-[#00ffff]/30">
              <motion.div
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="relative"
              >
                <img
                  src="/mun-edition.jpg"
                  alt="MUN IITI 10.0"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl transition-all duration-500 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                {/* Cool ripple effect on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-[#00ffff]/20"
                    animate={{
                      scale: [1, 3, 5],
                      opacity: [0.7, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeOut",
                    }}
                  />
                </div>

                {/* Edition badge with enhanced animation */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-[#00ffff] rounded-full flex items-center justify-center z-10"
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 10px rgba(0,255,255,0.5)",
                      "0 0 20px rgba(0,255,255,0.7)",
                      "0 0 10px rgba(0,255,255,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.8 },
                  }}
                >
                  <span className="text-black text-3xl font-bold">10.0</span>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="absolute -bottom-5 -left-5 w-24 h-24 border-4 border-[#00ffff] rounded-full"
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
        </div>
      </div>
    </section>
  )
}
