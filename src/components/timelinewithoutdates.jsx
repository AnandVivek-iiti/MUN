import { motion } from "framer-motion"
import { useMemo } from "react"

export function TimelineSectionWithoutDate() {
  const timelineEvents = [
    { title: "Delegate Applications Open", description: "Registration begins for individual delegates and delegations" },
    // { title: "Early Bird Registration Closes", description: "Last day for discounted registration fees" },
    { title: "Committee Allocations Released", description: "Delegates receive their country and committee assignments" },
    { title: "Conference Day 1", description: "Opening ceremony, committee session 1 & 2, Gala dinner" },
    { title: "Conference Day 2", description: "Committee sessions 3 & 4, diplomatic dinner" },
    { title: "Conference Day 3", description: "Final committee session, closing ceremony & awards" },
  ]
  
  const eventsWithoutDates = useMemo(() => timelineEvents, [])

  const today = new Date()
  // Since we have no dates, timelineStart/End and progressPercent logic can be disabled/commented or set to 0
  const progressPercent = 0

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
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
                "0 0 20px rgba(0,255,255,0.6)",
                "0 0 10px rgba(0,255,255,0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Conference Timeline
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Background line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-[#00ffff]/30 transform -translate-x-1/2" />

          {/* Progress line */}
          <motion.div
            className="absolute left-[50%] top-0 w-1 bg-[#00a4a4] transform -translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: progressPercent / 100 }}
            transition={{ duration: 1.5 }}
          />

          {/* Events */}
          <div className="space-y-20 relative z-10">
            {eventsWithoutDates.map((event, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${isEven ? "md:justify-start" : "md:justify-end"}`}
                >
                  {/* Content Block */}
                  <div
                    className={`md:w-1/2 ${
                      isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    }`}
                  >
                    <h3
                      className="text-xl font-bold mb-1 text-white"
                    >
                      {event.title}
                    </h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>

                  {/* Dot */}
                  <motion.div
                    className={`absolute w-6 h-6 rounded-full border-4 border-black z-10 bg-[#00ffff]`}
                    style={{
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
