import { motion } from "framer-motion"

export function SecretaryLetterSection() {
  return (
    <section className="py-20 px-4 bg-black/50 backdrop-blur-sm relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 70% 30%, #00ffff 0%, transparent 50%)",
              "radial-gradient(circle at 30% 70%, #00ffff 0%, transparent 50%)",
              "radial-gradient(circle at 70% 30%, #00ffff 0%, transparent 50%)",
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
            Letter from the Secretary-General
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 border-t-4 border-l-4 border-[#00ffff]/40"
            animate={{
              borderColor: ["rgba(0,255,255,0.4)", "rgba(0,255,255,0.8)", "rgba(0,255,255,0.4)"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-20 h-20 border-b-4 border-r-4 border-[#00ffff]/40"
            animate={{
              borderColor: ["rgba(0,255,255,0.4)", "rgba(0,255,255,0.8)", "rgba(0,255,255,0.4)"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />

          <div className="bg-black/40 backdrop-blur-sm border border-[#00ffff]/20 rounded-xl p-8 md:p-10">
            <div className="space-y-6 text-white/80 leading-relaxed">
              <p>
                <span className="text-[#00ffff] text-3xl font-serif">"</span> Dear Delegates and
                Distinguished Guests,
              </p>
              <p>
                It gives me immense pleasure to welcome you to the <strong>9th edition of MUN IIT Indore</strong>. Over the
                years, this conference has become a symbol of intellectual exchange, diplomacy, and leadership — values
                that we, as a community, deeply cherish and strive to uphold.
              </p>
              <p>
                MUN IIT Indore has always aimed to provide a platform where diverse perspectives converge, where
                dialogue triumphs over disagreement, and where young minds engage with the complexities of our world
                through empathy and reason. As we step into our ninth edition, we continue this legacy with renewed
                energy, offering committees and agendas that challenge conventional thought and inspire impactful
                debate.
              </p>
              <p>
                The Secretariat has worked tirelessly to ensure that MUN IIT Indore 10.0 not only mirrors the authenticity
                of real-world diplomacy but also fosters collaboration, critical thinking, and respect for differing
                opinions. We believe that every delegate, regardless of experience, brings a unique voice that adds
                value to the conversation.
              </p>
              <p>
                To all participants — I urge you to approach every discussion with curiosity and humility. Let this
                conference serve as a reminder that diplomacy begins with understanding, and leadership begins with
                listening.
              </p>
              <p>
                I extend my heartfelt gratitude to the organizing team and Executive Board for their relentless
                dedication. Their efforts ensure that this conference remains not only an academic experience but also a
                celebration of ideas and unity.
              </p>
              <p>
                On behalf of the entire Secretariat, I warmly welcome you to <strong>MUN IIT Indore 10.0</strong>. May this
                edition inspire meaningful dialogue, lasting friendships, and a deeper sense of purpose.
              </p>
              <p>
                Sincerely,
                <br />
                <span className="text-[#00ffff] font-bold text-xl">Sharik Mansoori</span>
                <br />
                <span className="text-[#00ffff]/80 italic">Secretary-General, MUN IIT Indore 10.0</span>
                <span className="text-[#00ffff] text-3xl font-serif">"</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
