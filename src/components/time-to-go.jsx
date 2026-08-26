import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Clock, Calendar, MapPin, Zap } from "lucide-react"

const TimeToGo = () => {
    const useCountdown = (targetDate) => {
        const [timeLeft, setTimeLeft] = useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        })

        useEffect(() => {
            const timer = setInterval(() => {
                const now = new Date().getTime()
                const target = new Date(targetDate).getTime()
                const difference = target - now

                if (difference > 0) {
                    setTimeLeft({
                        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                        seconds: Math.floor((difference % (1000 * 60)) / 1000),
                    })
                } else {
                    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                }
            }, 1000)

            return () => clearInterval(timer)
        }, [targetDate])

        return timeLeft
    }

    // Event: October 23, 24, 25 — countdown targets the event's start time
    const countdown = useCountdown("2026-10-23T09:00:00")

    // Floating particles
    const particles = Array.from({ length: 15 }, (_, i) => (
        <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            animate={{
                x: [0, Math.random() * 60 - 30],
                y: [0, Math.random() * 60 - 30],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
            }}
            transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
            }}
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
            }}
        />
    ))

    return (
        <div className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0">
                {particles}
            </div>

            <section className="relative py-8 z-10">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-8 relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
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
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            Time To Go
                        </motion.h2>
                        <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left side */}
                        <motion.div
                            className="text-center relative"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-cyan-400/10 rounded-2xl blur-sm" />
                            <div className="relative bg-black/60 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 shadow-2xl">
                                <motion.h3
                                    className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2"
                                    animate={{
                                        textShadow: [
                                            "0 0 5px rgba(6,182,212,0.3)",
                                            "0 0 15px rgba(6,182,212,0.6)",
                                            "0 0 5px rgba(6,182,212,0.3)",
                                        ],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Calendar className="w-5 h-5 text-cyan-400" />
                                    CONFERENCE COUNTDOWN
                                </motion.h3>

                                <div className="grid grid-cols-4 gap-3 mb-6">
                                    {[["DAYS", countdown.days], ["HOURS", countdown.hours], ["MINS", countdown.minutes], ["SECS", countdown.seconds]].map(
                                        ([label, value], i) => (
                                            <motion.div
                                                key={label}
                                                className="relative group cursor-pointer"
                                                animate={{
                                                    scale: [1, 1.05, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.1,
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: [0, -2, 2, 0],
                                                    transition: { duration: 0.3 },
                                                }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-300 rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity" />
                                                <div className="relative bg-gradient-to-br from-cyan-400 via-cyan-300 to-cyan-500 p-3 rounded-lg text-center overflow-hidden">
                                                    <motion.div
                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                                                        animate={{ x: ["-100%", "200%"] }}
                                                        transition={{
                                                            duration: 3,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                            delay: i * 0.5,
                                                        }}
                                                    />
                                                    <div className="text-xl md:text-2xl font-black text-black mb-1">
                                                        {String(value).padStart(2, "0")}
                                                    </div>
                                                    <div className="text-xs font-bold text-black/80 tracking-wider">
                                                        {label}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    )}
                                </div>

                                <motion.div
                                    className="relative border-2 border-cyan-400/40 p-4 rounded-xl bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 backdrop-blur-sm overflow-hidden group"
                                    whileHover={{
                                        scale: 1.02,
                                        borderColor: "rgba(6,182,212,0.8)",
                                        boxShadow: "0 10px 30px rgba(6,182,212,0.2)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-cyan-400/10 to-cyan-400/5 animate-pulse" />
                                    <div className="relative">
                                        <h4 className="text-lg font-black text-cyan-400 mb-1">
                                            October 23 – 25, 2026
                                        </h4>
                                        <p className="text-white text-sm mb-1 font-semibold">
                                            THREE DAYS OF DIPLOMATIC EXCELLENCE
                                        </p>
                                        <p className="text-cyan-400 font-bold text-sm flex items-center justify-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            IIT INDORE CAMPUS
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right side */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className="absolute -top-4 -left-4 bg-gradient-to-br from-cyan-400 to-cyan-500 p-3 rounded-xl shadow-2xl z-10"
                                animate={{
                                    y: [0, -8, 0],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Clock className="w-5 h-5 text-black mx-auto mb-1" />
                                <div className="text-xs font-bold text-black">READY?</div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-3 -right-3 bg-gradient-to-br from-cyan-300 to-cyan-500 p-2 rounded-lg shadow-xl z-10"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, -10, 0],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Zap className="w-4 h-4 text-black" />
                            </motion.div>

                            <motion.div
                                className="relative overflow-hidden rounded-xl border-2 border-cyan-400/40 shadow-2xl group"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px rgba(6,182,212,0.3)",
                                    borderColor: "rgba(6,182,212,0.8)",
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-cyan-400/40 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src="/pod.jpeg"
                                    alt="Conference Venue"
                                    className="w-full h-96 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/70 transition-all duration-500" />
                                <div className="absolute bottom-3 left-3 right-3">
                                    <h3 className="text-lg font-black text-white mb-1">IIT INDORE</h3>
                                    <p className="text-cyan-400 text-sm font-bold">WHERE INNOVATION MEETS DIPLOMACY</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TimeToGo