import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-green-500 to-gray-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MUN IITI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-white">Our Valued Sponsors</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of global leaders through diplomatic excellence. Join us in shaping
              tomorrow's world leaders at IIT Indore's premier Model United Nations conference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-8 pt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">500+</div>
              <div className="text-gray-400">Delegates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">15+</div>
              <div className="text-gray-400">Committees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-400">3</div>
              <div className="text-gray-400">Days</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
