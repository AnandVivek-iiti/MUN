import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

function CountUp({ end, duration, delay = 0, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      let start = 0
      const step = end / (duration * 60)

      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          start += step
          setCount(Math.floor(start))

          if (start >= end) {
            setCount(end)
            clearInterval(interval)
          }
        }, 1000 / 60)

        return () => clearInterval(interval)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isInView, end, duration, delay, hasAnimated])

  return (
    <motion.div
      ref={ref}
      className="font-bold text-5xl md:text-6xl text-[#00ffff]"
      whileHover={{
        scale: 1.1,
        textShadow: "0 0 15px rgba(0,255,255,0.8)",
        transition: { duration: 0.3 },
      }}
    >
      {prefix}
      {count}
      {suffix}
    </motion.div>
  )
}

export function CountUpSection() {
  return (
    <section className="py-20 px-4 bg-black/50 backdrop-blur-sm relative">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #00ffff 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #00ffff 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #00ffff 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00ffff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            MUN IITI By The Numbers
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { value: 4000, suffix: "+", label: "Delegates", delay: 0 },
            { value: 15, suffix: "+", label: "Committees", delay: 0 },
            { value: 8, suffix: "", label: "Years of Excellence", delay: 0 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px rgba(0,255,255,0.2)",
                backgroundColor: "rgba(0,255,255,0.05)",
                borderColor: "rgba(0,255,255,0.6)",
                transition: { duration: 0.3 },
              }}
              className="text-center p-6 bg-black/30 border border-[#00ffff]/20 rounded-2xl hover:border-[#00ffff]/40 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-[#00ffff]/0 opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    "radial-gradient(circle at 50% 0%, rgba(0,255,255,0.2) 0%, transparent 70%)",
                    "radial-gradient(circle at 50% 100%, rgba(0,255,255,0.2) 0%, transparent 70%)",
                    "radial-gradient(circle at 50% 0%, rgba(0,255,255,0.2) 0%, transparent 70%)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <CountUp end={stat.value} duration={2} delay={stat.delay} suffix={stat.suffix} />

              <motion.div
                className="w-12 h-1 bg-[#00ffff]/50 mx-auto my-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ width: 80, transition: { duration: 0.3 } }}
              />

              <motion.p
                className="text-xl text-white/80"
                whileHover={{
                  color: "#ffffff",
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                {stat.label}
              </motion.p>

              <motion.div
                className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-[#00ffff]/30 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
