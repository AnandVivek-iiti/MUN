"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Faq = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const faqs = [
  {
    id: 1,
    question: "Who can participate in IIT Indore MUN 9.0?",
    answer:
      "IIT Indore MUN 9.0 is open to school and university students from across India and abroad. We welcome both first-time delegates and experienced MUNners who wish to engage in intellectually driven and well-structured debate.",
    category: "Eligibility",
    icon: "🧑‍🎓",
  },
  {
    id: 2,
    question: "Is the conference being held online or offline?",
    answer:
      "IIT Indore MUN 9.0 will feature 8 offline committees hosted on the IIT Indore campus.",
    category: "Format",
    icon: "💻",
  },
  {
    id: 3,
    question: "What materials should delegates review before attending the conference?",
    answer:
      "Delegates are expected to carefully review the conference brochure, rulebook, and background guides for their assigned committees. These materials explain procedures, rules of debate, and agenda-specific information essential for effective participation.",
    category: "Preparation",
    icon: "📘",
  },
  {
    id: 4,
    question: "How should delegates prepare research for their assigned country?",
    answer:
      "Delegates should study their country’s foreign policy, alliances, and official stance on the agenda topics. Reviewing UN documents, recent international developments, and reliable news sources helps build strong, evidence-based arguments.",
    category: "Preparation",
    icon: "🌍",
  },
  {
    id: 5,
    question: "How are committee and country assignments determined?",
    answer:
      "Assignments are based on the details you provide during registration — including your preferences, past MUN experience, and quality of responses. The Secretariat ensures balanced representation across countries and ideologies. Final allotments are released a few weeks before the conference and cannot be changed once announced.",
    category: "Allotments",
    icon: "🗂️",
  },
  {
    id: 6,
    question: "What happens if a delegate is unfamiliar with a specific rule during debate?",
    answer:
      "No need to worry, the Executive Board (EB) will guide you through the rules and clarify procedures when required. IIT Indore MUN encourages curiosity and learning; asking questions is always better than staying silent.",
    category: "Guidelines",
    icon: "🗣️",
  },
  {
    id: 7,
    question: "Who can delegates approach if they need clarification during the conference?",
    answer:
      "Delegates can reach out to their Committee Chair, Co-Chair, or the Secretariat for any procedural or logistical queries. These members are responsible for maintaining smooth and fair proceedings throughout the sessions.",
    category: "Support",
    icon: "🤝",
  },
  {
    id: 8,
    question: "How do I register for IIT Indore MUN 9.0?",
    answer:
      "Registrations are being conducted through our official website of MUN IITI. Delegates can visit the official MUN IITI website, complete the registration and payment process there.",
    category: "Registration",
    icon: "📝",
  },
  {
    id: 9,
    question: "What are the registration fees and what do they include?",
    answer:
      "The delegate fee covers entry to all committee sessions, training materials, delegate kits, and meals during the conference. Accommodation charges for outstation participants are separate and optional.",
    category: "Registration",
    icon: "💰",
  },
  {
    id: 10,
    question: "Is accommodation provided for outstation participants?",
    answer:
      "Yes, on-campus accommodation is available at IIT Indore for outstation delegates on a first-come, first-served basis. Details regarding check-in, facilities, and fees will be shared upon confirmation.",
    category: "Logistics",
    icon: "🏠",
  },
  {
    id: 11,
    question: "Can I get a refund if I withdraw after registration?",
    answer:
      "Refunds are available only before allotments are released. Once allotments are finalized, registration becomes non-refundable due to fixed logistics and committee planning.",
    category: "Registration",
    icon: "❌",
  },
  {
    id: 12,
    question: "What is the dress code for the conference?",
    answer:
      "Delegates are expected to maintain professional attire throughout the event:\n\nDay 1 & Day 3: Western Formal / Indian Formal\n\nDay 2: Traditional Wear\n\nMaintaining decorum and professionalism in appearance is mandatory for all sessions.",
    category: "Guidelines",
    icon: "👔",
  },
  {
    id: 13,
    question: "Will certificates be provided?",
    answer:
      "Yes, all delegates will receive official certificates signed by the Secretariat — categorized as Participation, Special Mention, High Commendation, or Best Delegate, based on committee performance.",
    category: "Recognition",
    icon: "🏆",
  },
  {
    id: 14,
    question: "Can a delegate switch committees after allotment?",
    answer:
      "No. Committee and country allocations are final once released. However, in rare cases such as a genuine scheduling conflict or misallotment, delegates may contact the Secretariat for review.",
    category: "Allotments",
    icon: "🔄",
  },
  {
    id: 15,
    question: "How can I contact the organizing team?",
    answer:
      "For any queries, write to us at mun@iiti.ac.in or use the Contact Us section on the official website.",
    category: "Contact",
    icon: "📩",
  },
];


  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % faqs.length)
    }, 15000)

    return () => clearInterval(timer)
  }, [faqs.length])

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 relative overflow-hidden" id="faq">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Question Mark Shapes */}
        <motion.div
          className="absolute top-20 left-16 w-16 h-16 text-cyan-400/20 text-6xl font-bold"
          animate={{
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          ?
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-20 w-20 h-20 text-teal-400/25 text-7xl font-bold"
          animate={{
            rotate: [0, -20, 20, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          ?
        </motion.div>

        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute top-32 right-1/3 w-60 h-60 bg-gradient-to-br from-cyan-400/10 to-teal-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 60, 0],
            y: [0, 30, -40, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-40 left-1/4 w-48 h-48 bg-gradient-to-tl from-teal-400/15 to-cyan-300/10 rounded-full blur-2xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 35, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/10 via-transparent to-teal-950/15" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-900/8 to-transparent" />
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-cyan-950/20 z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Frequently{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
              Asked Questions
            </span>
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about Model United Nation 9.0
          </motion.p>
        </motion.div>

        {/* Animated FAQ Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[350px] mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -90 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  rotateY: { duration: 0.8 },
                }}
                className="absolute inset-0"
                style={{ perspective: "1000px" }}
              >
                <div className="bg-gradient-to-br from-black/80 to-cyan-950/40 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 text-6xl opacity-10">{faqs[currentIndex].icon}</div>

                  {/* Category Badge */}
                  <motion.div
                    className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400/20 to-teal-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-6 w-fit"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <span className="mr-2">{faqs[currentIndex].icon}</span>
                    {faqs[currentIndex].category}
                  </motion.div>

                  {/* Question */}
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {faqs[currentIndex].question}
                  </motion.h3>

                  {/* Answer */}
                  <motion.p
                    className="text-gray-300 text-lg leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {faqs[currentIndex].answer}
                  </motion.p>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 rounded-2xl pointer-events-none"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mb-8">
            {faqs.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-cyan-400 to-teal-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: index === currentIndex ? 1.25 : 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-800 rounded-full h-1 mb-8 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 15, ease: "linear" }}
              key={currentIndex}
            />
          </div>

          {/* FAQ Grid for Quick Access */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {faqs.map((faq, index) => (
              <motion.button
                key={faq.id}
                onClick={() => setCurrentIndex(index)}
                className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                  index === currentIndex
                    ? "border-cyan-400/50 bg-gradient-to-br from-cyan-950/30 to-teal-950/30"
                    : "border-gray-700 bg-black/30 hover:border-cyan-500/30 hover:bg-cyan-950/20"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-xl">{faq.icon}</span>
                  <span className="text-xs text-cyan-400 font-medium">{faq.category}</span>
                </div>
                <p className="text-sm text-gray-300 line-clamp-2">{faq.question}</p>
              </motion.button>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Faq
