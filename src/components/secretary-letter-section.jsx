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
                नमस्कार! It is with great pride and gratitude that I welcome you to <strong>MUN IIT Indore 10.0</strong>.
              </p>
              <p>
                A decade of MUN IIT Indore is more than just a milestone, it is a testament to a community that has
                consistently believed in the power of dialogue, diplomacy, and informed discourse. As we celebrate our
                tenth edition, we honor the legacy built by those before us while embracing the responsibility of
                taking it forward.
              </p>
              <p>
                In a world where differences often dominate headlines, Model United Nations reminds us that meaningful
                progress begins with conversation. This conference is not merely a competition of arguments but an
                opportunity to understand perspectives beyond our own, challenge assumptions, and develop solutions
                through collaboration.
              </p>
              <p>
                Whether you are attending your first conference or your fiftieth, I encourage you to make the most of
                every committee session, every moderated caucus, and every conversation beyond the committee room.
                Speak with conviction, listen with empathy, negotiate with integrity, and remember that diplomacy is
                measured not only by the strength of one's words but also by the willingness to understand others.
              </p>
              <p>
                This edition has been envisioned with the aim of delivering an intellectually stimulating and
                professionally enriching experience. From carefully curated committees and agendas to an exceptional
                Executive Board and a dedicated organizing team, every effort has been made to ensure that MUN IIT
                Indore 10.0 is worthy of this landmark edition.
              </p>
              <p>
                I extend my sincere appreciation to the administration of IIT Indore, every member of the Secretariat,
                the Executive Board, the Organizing Committee, our partners, and everyone who has worked behind the
                scenes to make this conference possible. Their commitment and countless hours of effort have
                transformed an idea into the event you are about to experience.
              </p>
              <p>
                Finally, to each delegate joining us, thank you for choosing to be a part of MUN IIT Indore 10.0. I
                hope this conference challenges you to think deeper, inspires you to lead with purpose, and leaves you
                with friendships and memories that extend far beyond these few days.
              </p>
              <p>I wish you all an engaging, rewarding, and unforgettable conference.</p>
              <p>Bravo Zulu!</p>
              <p>
                Best,
                <br />
                <span className="text-[#00ffff] font-bold text-xl">Kavyansh Raj Singh</span>
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