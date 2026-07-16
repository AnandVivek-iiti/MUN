import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Trophy, Users, Award, MessageSquare, Brain, 
  Globe, GraduationCap, Building, FileText,
  Crown, Target, Network, Eye
} from "lucide-react";
import { FloatingParticles, MouseGlow, AnimatedBackground } from "../components/FloatingParticles";
import PageHeader from "../components/PageHeader";

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const featuresRef = useRef(null);

  const features = [
    {
      icon: Trophy,
      title: "Prize Pool",
      description: "Biggest rewards in MUN circuit",
      gradient: "from-primary to-primary-dark"
    },
    {
      icon: Award,
      title: "IIT Certificate",
      description: "Premier institution recognition",
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: Users,
      title: "500+ Delegates",
      description: "Pan-India participation and networking",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Master Public Speaking",
      description: "Improve public speaking, negotiation, and critical thinking",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Enhance Knowledge",
      description: "Intensive committee sessions for diplomacy skills",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe, 
      title: "Distinguished Guests",
      description: "Learn from industry leaders",
      gradient: "from-orange-500 to-yellow-500"
    },
  ];

  useEffect(() => {
    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current.children,
        { 
          opacity: 0, 
          y: 100,
          scale: 0.5 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <FloatingParticles />
      <MouseGlow />
      
      <PageHeader
        title="Why Us"
        subtitle="Why choose MUN 9.0 IIT Indore?"
      />

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#00ffff] mb-4">
              Transform yourself into a global leader
            </h2>
            <p className="text-xl text-white/80">
              with these incredible opportunities
            </p>
          </motion.div>

          <motion.div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px rgba(0,255,255,0.2)",
                  backgroundColor: "rgba(0,255,255,0.05)",
                  borderColor: "rgba(0,255,255,0.6)",
                }}
                className="relative p-8 bg-black/30 border border-[#00ffff]/20 rounded-2xl 
                              hover:border-[#00ffff]/40 transition-all duration-300 group text-center"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      "radial-gradient(circle at 50% 0%, rgba(0,255,255,0.2) 0%, transparent 70%)",
                      "radial-gradient(circle at 50% 100%, rgba(0,255,255,0.2) 0%, transparent 70%)",
                      "radial-gradient(circle at 50% 0%, rgba(0,255,255,0.2) 0%, transparent 70%)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} 
                              rounded-full flex items-center justify-center mx-auto mb-4 
                              group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-dark" />
                </div>

                <motion.h3 
                  className="text-2xl font-bold text-[#00ffff] mb-2"
                  whileHover={{
                    textShadow: "0 0 15px rgba(0,255,255,0.8)",
                  }}
                >
                  {feature.title}
                </motion.h3>

                <motion.div
                  className="w-12 h-1 bg-[#00ffff]/50 mx-auto my-4"
                  whileHover={{ width: 80 }}
                  transition={{ duration: 0.3 }}
                />

                <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>

                <motion.div
                  className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] 
                            border-t-transparent border-r-[#00ffff]/30 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

{/* Why collab */}

<section className="py-12 sm:py-20 px-4 relative overflow-x-hidden">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-8 sm:mb-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00ffff] mb-2 sm:mb-4">
        Why Collaborate With Us?
      </h2>
      <p className="text-lg sm:text-xl text-white/80">
        Partner with excellence and reach new heights
      </p>
    </motion.div>

    <motion.div
      ref={featuresRef}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 w-full"
    >
      {[
        {
          icon: Crown,
          title: "PRESTIGE AND CREDIBILITY",
          description: "MUN IIT Indore is a prestigious conference hosted by one of India's premier technical institutions",
          gradient: "from-yellow-400 to-orange-500"
        },
        {
          icon: Target,
          title: "DIVERSE AUDIENCE",
          description: "Access to global participants including top university students and young professionals",
          gradient: "from-blue-400 to-cyan-500"
        },
        {
          icon: Network,
          title: "NETWORKING OPPORTUNITIES",
          description: "Exclusive access to connect with bright minds and future leaders",
          gradient: "from-purple-400 to-pink-500"
        },
        {
          icon: Eye,
          title: "BRAND VISIBILITY",
          description: "Prominent visibility across promotional materials and social media platforms",
          gradient: "from-green-400 to-emerald-500"
        }
      ].map((collab, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="relative group w-full transform-gpu"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/20 to-transparent 
                        rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 
                        group-hover:opacity-100" />
          
          <div className="relative p-4 sm:p-6 lg:p-8 bg-black/30 border border-[#00ffff]/20 rounded-xl sm:rounded-2xl 
                        backdrop-blur-sm group-hover:border-[#00ffff]/40 transition-all duration-300 w-full">
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl transition-all duration-500 opacity-0 
                          group-hover:opacity-100 bg-gradient-to-r from-[#00ffff]/10 to-transparent" />

            <div className={`relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${collab.gradient} 
                          rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 
                          group-hover:scale-110 transition-transform duration-300
                          before:absolute before:inset-0 before:bg-black/40 before:rounded-lg sm:before:rounded-xl`}>
              <collab.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />
              <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-transparent 
                            via-white/20 to-transparent group-hover:translate-x-full duration-1000 
                            transition-transform" />
            </div>

            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-[#00ffff] mb-2 text-center"
              whileHover={{
                textShadow: "0 0 15px rgba(0,255,255,0.8)",
              }}
            >
              {collab.title}
            </motion.h3>

            <motion.div
              className="w-8 sm:w-12 h-0.5 sm:h-1 bg-[#00ffff]/50 mx-auto my-2 sm:my-4"
              whileHover={{ width: "60%" }}
              transition={{ duration: 0.3 }}
            />

            <p className="text-sm sm:text-base lg:text-lg text-white/80 text-center group-hover:text-white 
                       transition-colors duration-300 leading-relaxed">
              {collab.description}
            </p>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r 
                          from-transparent via-[#00ffff]/50 to-transparent group-hover:w-full 
                          transition-all duration-500" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

{/* Awards */}
<section className="py-12 sm:py-20 px-4 relative overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-8 sm:mb-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00ffff] mb-2 sm:mb-4">
        Unmatched Rewards Await
      </h2>
      <p className="text-lg sm:text-xl text-white/80">
        Compete for the most rewarding MUN experience in India
      </p>
    </motion.div>
{/* <motion.div 
  className="max-w-3xl mx-auto mb-16"
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <div className="relative flex flex-col items-center justify-center py-14">
    <div className="relative flex flex-col items-center justify-center mb-8">
      <h3 className="relative z-10 text-3xl md:text-5xl font-extrabold text-[#00ffff] drop-shadow-lg text-center px-4">
        Unmatched Rewards Await
      </h3>
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-center text-[#00ffff] mb-2">
      Biggest Prize Pool in MUN Circuit
    </h3>
    <p className="text-white/80 text-center text-lg">
      Compete for the most rewarding MUN experience in India
    </p>
  </div>
</motion.div>
 */}


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {[
  {
    title: "Best Delegate",
    prize: "",
    description: "Top performer across all committees",
    gradient: "from-[#00ffff]/100 to-[#00ffff]/20"
  },
  {
    title: "High Commendation",
    prize: "",
    description: "Outstanding diplomatic excellence",
    gradient: "from-[#00ffff]/100 to-[#00ffff]/20"
  },
  {
    title: "Special Mention",
    prize: "",
    description: "Exceptional debate and negotiation",
    gradient: "from-[#00ffff]/100 to-[#00ffff]/20"
  },
  {
    title: "Best Position Paper",
    prize: "",
    description: "Superior research and documentation",
    gradient: "from-[#00ffff]/100 to-[#00ffff]/20"
  },
  {
    title: "Verbal Mention",
    prize: "",
    description: "Noteworthy performance and participation",
    gradient: "from-[#00ffff]/100 to-[#00ffff]/20"
  },
  {
    title: "Best Delegation",
    prize: "",
    description: "Top performing institution",
    gradient: "from-[#00ffff]/60 to-[#00ffff]/20"
  }
].map((award, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: index * 0.1
          }}
          whileHover={{ y: -10 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/20 via-[#00ffff]/10 to-transparent 
                     rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative h-full p-6 bg-black/40 border border-[#00ffff]/20 rounded-2xl 
                     backdrop-blur-sm group-hover:border-[#00ffff]/40 transition-all duration-300 overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${award.gradient} 
                         opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
            
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl font-bold text-[#00ffff] tracking-tight"
                whileHover={{ textShadow: "0 0 15px rgba(0,255,255,0.8)" }}
              >
                {award.title}
              </motion.h3>
              
              {award.prize && <div className="relative">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00ffff]">
                  {award.prize}
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#00ffff]/50"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>}

              <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                {award.description}
              </p>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent 
                     via-[#00ffff]/30 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default WhyUs;
