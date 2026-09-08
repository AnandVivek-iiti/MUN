import { motion } from "framer-motion";

export function TimelineSectionWithoutDate() {
  const timelineEvents = [
    { title: "Delegate Applications Open", description: "Registration begins for individual delegates and delegations" },
    { title: "Committee Allocations Released", description: "Delegates receive their country and committee assignments" },
    { title: "Conference Day 1", description: "Opening ceremony, committee session 1 & 2, Gala dinner" },
    { title: "Conference Day 2", description: "Committee sessions 3 & 4, diplomatic dinner" },
    { title: "Conference Day 3", description: "Final committee session, closing ceremony & awards" },
  ];

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
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical spine (left on mobile, centered on md+) — runs the full height */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#00ffff]/30 md:-translate-x-1/2" />

          <div className="flex flex-col">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              const isLast = index === timelineEvents.length - 1;

              return (
                <div key={index}>
                  {/* Event row */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="relative md:grid md:grid-cols-2 md:gap-16"
                  >
                    {/* Dot on the spine */}
                    <div
                      className="absolute w-4 h-4 rounded-full border-4 border-black bg-[#00ffff] z-10 top-1 left-6 md:left-1/2 -translate-x-1/2"
                    />

                    {/* Horizontal connector: spine -> card (mobile, always left-aligned card) */}
                    <div
                      className="absolute h-px bg-[#00ffff]/40 top-[0.6rem] left-6 w-8 md:hidden"
                    />

                    {/* Horizontal connector: spine -> card (desktop, direction depends on side) */}
                    <div
                      className={`absolute h-px bg-[#00ffff]/40 top-[0.6rem] hidden md:block w-10 ${
                        isLeft ? "right-1/2 mr-[1px]" : "left-1/2 ml-[1px]"
                      }`}
                    />

                    {/* Content card */}
                    <div
                      className={`pl-14 md:pl-0 ${
                        isLeft
                          ? "md:col-start-1 md:pr-16 md:text-right"
                          : "md:col-start-2 md:pl-16 md:text-left"
                      }`}
                    >
                      <h3 className="text-xl font-bold mb-1 text-white">{event.title}</h3>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                  </motion.div>

                  {/* Arrow connector to next event */}
                  {!isLast && (
                    <div className="relative h-10 md:h-14">
                      <motion.svg
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 + 0.2 }}
                        viewport={{ once: true }}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00ffff]/70"
                      >
                        <path
                          d="M4 5l4 5 4-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}