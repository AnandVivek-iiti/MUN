"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHeader from "../components/PageHeader";
import CommitteeCard from "../components/CommitteeCard";
import { committees } from "../data/committees";
import {
  FloatingParticles,
  MouseGlow,
  AnimatedBackground,
} from "../components/FloatingParticles";
import { Linkedin, Instagram, FileText, User, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Committees = () => {
  const sectionRef = useRef(null);
  const [selectedCommittee, setSelectedCommittee] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      gsap.fromTo(
        section.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const openModal = (committee) => setSelectedCommittee(committee);
  const closeModal = () => setSelectedCommittee(null);

  return (
    <div className="relative">
      <AnimatedBackground />
      <FloatingParticles />
      <MouseGlow />

      <PageHeader
        title="Committees"
        subtitle="Where global issues meet passionate debates and epic solutions!"
      />

      {/* ======== Committees Grid ======== */}
      <section ref={sectionRef} className="relative py-16 z-10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#00ffff] mb-4 neon-text"
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
              Our Amazing Committees 🎭
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

            <p className="text-gray-300 text-lg">
              Ready to dive into some serious world-changing action? Click on a
              committee to learn more! 🌟
            </p>
          </motion.div>

          {/* ==== Card Grid ==== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10 z-10">
            {committees.map((committee, index) => (
              <motion.div
                key={index}
                onClick={() => openModal(committee)}
                className="cursor-pointer"
              >
                <CommitteeCard
                  name={committee.name}
                  description={committee.description}
                  imageSrc={committee.imageSrc}
                  isOnline={committee.mode}
                  // agenda={committee.agenda}
                  chairperson={committee.chairperson}
                  viceChairperson={committee.viceChairperson}
                  chairLinkedin={committee.chairLinkedin}
                  chairInstagram={committee.chairInstagram}
                  viceLinkedin={committee.viceLinkedin}
                  viceInstagram={committee.viceInstagram}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Modal ======== */}
      <AnimatePresence>
        {selectedCommittee && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl shadow-2xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left side — Content */}
              <div className="flex-1 p-8">
                <h3 className="text-3xl font-bold text-[#00ffff] mb-4 neon-text">
                  {selectedCommittee.name}
                </h3>

                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {selectedCommittee.description}
                </p>

                {/* Agenda */}
                {selectedCommittee.agenda && (
                  <div className="mb-6 p-4 bg-gray-800/50 border border-[#00ffff]/30 rounded-lg">
                    <div className="flex items-center mb-2">
                      <FileText size={18} className="text-[#00ffff] mr-2" />
                      <h4 className="text-[#00ffff] font-semibold text-lg">
                        Agenda
                      </h4>
                    </div>
                    <p className="text-gray-200 whitespace-pre-line text-sm">
                      {selectedCommittee.agenda}
                    </p>
                  </div>
                )}

                {/* Chairperson */}
                {selectedCommittee.chairperson && (
                  <div className="mb-5 p-4 bg-gray-800/40 border border-gray-700 rounded-xl relative">
                    <div className="absolute top-3 right-3 flex gap-2">
                      {selectedCommittee.chairLinkedin && (
                        <a
                          href={selectedCommittee.chairLinkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition"
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {selectedCommittee.chairInstagram && (
                        <a
                          href={selectedCommittee.chairInstagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-400 hover:text-pink-300 transition"
                        >
                          <Instagram size={18} />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <User size={18} className="text-[#00ffff]" />
                      <h4 className="text-[#00ffff] font-semibold">
                        Chairperson
                      </h4>
                    </div>
                    <p className="text-white font-medium">
                      {selectedCommittee.chairperson}
                    </p>
                  </div>
                )}

                {/* Vice Chairperson */}
                {selectedCommittee.viceChairperson && (
                  <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl relative">
                    <div className="absolute top-3 right-3 flex gap-2">
                      {selectedCommittee.viceLinkedin && (
                        <a
                          href={selectedCommittee.viceLinkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition"
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {selectedCommittee.viceInstagram && (
                        <a
                          href={selectedCommittee.viceInstagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-400 hover:text-pink-300 transition"
                        >
                          <Instagram size={18} />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <Users size={18} className="text-[#00ffff]" />
                      <h4 className="text-[#00ffff] font-semibold">
                        Vice-Chairperson
                      </h4>
                    </div>
                    <p className="text-white font-medium">
                      {selectedCommittee.viceChairperson}
                    </p>
                  </div>
                )}
              </div>

              {/* Right side — Image */}
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  src={selectedCommittee.imageSrc}
                  alt={selectedCommittee.name}
                  className="w-full h-full object-cover rounded-b-3xl md:rounded-r-3xl md:rounded-b-none"
                />
              </div>

              {/* Close button */}
              <motion.button
                onClick={closeModal}
                className="absolute top-4 right-4 text-[#00ffff] hover:text-white text-2xl font-bold"
                whileHover={{ scale: 1.2 }}
              >
                &times;
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Committees;
