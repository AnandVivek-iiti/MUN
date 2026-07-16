"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { BackgroundBeams } from "./ui/background-beams"
import { SpotlightCard } from "./ui/spotlight-card"

const AnimatedHeading = ({ title }) => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
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
      {title}
    </motion.h2>

    <motion.div
      className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    />
  </motion.div>
)

const Description = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  const features = [
    {
      title: "Our Mission",
      description:
        "To foster global awareness, diplomacy, and leadership by providing a platform for youth to engage in meaningful dialogue on pressing international issues.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
    {
      title: "Our Vision",
      description:
        "To emerge as one of India’s most respected MUN conferences, nurturing a generation of informed global citizens committed to cooperation, peace, and action.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
    },
    {
      title: "Our Values",
      description:
        "Inclusivity, diplomacy, critical thinking, and excellence. These values guide every committee, conversation, and delegate at IIT Indore MUN.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
    },
  ]

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      id="about"
      style={{ opacity, y, scale }}
    >
      {/* Background Effects */}
      <BackgroundBeams className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-cyan-950/20 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* === Section 1: Who Are We === */}
        <AnimatedHeading title="Who Are We" />
        <p className="text-center text-gray-400 max-w-3xl mx-auto text-lg mb-20">
          IIT Indore Model United Nations is a premier platform that unites young minds
          to deliberate, negotiate, and collaborate on global issues. Our conference
          fosters diplomacy, leadership, and problem-solving, encouraging participants
          to challenge perspectives and become global citizens.
        </p>

        {/* === Section 2: Experience That Speaks === */}
        <AnimatedHeading title="Experience That Speaks" />
        <p className="text-center text-gray-400 max-w-5xl mx-auto text-lg mb-20">
          IITI MUN began in 2017 at IIT Indore with a clear brief: bring rigorous, real-world diplomacy onto campus and build a culture of global citizenship. The inaugural conference ran that year and closed on a high note, setting the tone for what would become one of central India’s most recognized student MUNs. Momentum built quickly. The second edition in 2018 (Oct 27–28) expanded into three flagship committees: UNSC, AIPPM and UNGA, broadening both agendas and delegate profiles. A year later, the 2019 conference (Oct 12–13) diversified further with DISEC, UNEP, UNCSW, AIPPM and ICJ on the docket, drawing strong school and college participation. When the pandemic hit, IITI MUN pivoted online without losing its academic edge: the 4th edition ran virtually on Dec 12–13, 2020, and the 2021 edition followed online on Dec 18–19. The conference returned to campus in 2022 (Nov 5–6), restoring the full in-person experience. Recent editions have marked a step-change in scale and stature. MUN IITI 7.0 was conducted in AY 2023–24, with save-the-dates set around Sept 30–Oct 2 and distinguished participation, followed by MUN IITI 8.0 on Jan 3–5, 2025, announced via the official handles and the conference website. Across these editions, IITI MUN has grown from a campus initiative into a nationally visible platform that regularly partners across the student MUN ecosystem and draws delegates from a wide range of institutions in India and beyond. 

        </p>

        {/* === Section 3: Mission / Vision / Values === */}
        <AnimatedHeading title="What Drives Us" />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SpotlightCard className="p-8 h-full" spotlightColor="#22d3ee">
                <div className="relative z-20">
                  <motion.div
                    className="mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Description
