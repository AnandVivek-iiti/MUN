import { motion } from "framer-motion"

export function VisionSection() {
  return (
    <section className="py-20 px-4 bg-black/50 backdrop-blur-sm relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 30% 30%, #00ffff 0%, transparent 50%)",
              "radial-gradient(circle at 70% 70%, #00ffff 0%, transparent 50%)",
              "radial-gradient(circle at 30% 30%, #00ffff 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
            Our Vision
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="text-2xl md:text-3xl font-light text-white italic mb-8 leading-relaxed"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <span className="text-[#00ffff] text-5xl font-serif">"</span>
            <br />
            To foster a generation of informed global citizens equipped with the diplomatic skills, critical thinking,
            and cross-cultural understanding necessary to address the complex challenges of our interconnected world.
            <br />
            <span className="text-[#00ffff] text-5xl font-serif">"</span>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6 text-white/80">
            <p>
              At MUN IITI, we believe in the power of youth to shape the future of international relations. Our
              conference serves as a platform for delegates to develop essential skills in negotiation, public speaking,
              and consensus-building while gaining deeper insights into global governance and diplomacy.
            </p>
            <p>
              Through rigorous debate, collaborative problem-solving, and exposure to diverse perspectives, we aim to
              nurture the next generation of leaders who will tackle global challenges with empathy, innovation, and a
              commitment to sustainable development.
            </p>
          </div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              "Diplomatic Excellence",
              "Global Citizenship",
              "Inclusive Dialogue",
              "Innovative Solutions",
              "Cross-Cultural Understanding",
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-black/30 border border-[#00ffff]/30 rounded-full text-[#00ffff]"
              >
                {value}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
