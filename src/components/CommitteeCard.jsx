import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Linkedin, Instagram, User, Users, FileText } from "lucide-react";

const CommitteeCard = ({
  name,
  imageSrc,
  description,
  agenda,
  chairperson,
  viceChairperson,
  chairLinkedin,
  chairInstagram,
  viceLinkedin,
  viceInstagram,
  isOnline,
}) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;

    if (card && glow) {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 8;
        const rotateY = ((x - centerX) / centerX) * -8;

        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(glow, {
          x: x - rect.width / 2,
          y: y - rect.height / 2,
          opacity: 0.5,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseEnter = () => {
        gsap.to(card, { scale: 1.05, z: 50, duration: 0.4, ease: "power2.out" });
        gsap.to(glow, { opacity: 0.5, duration: 0.3 });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          z: 0,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(glow, { opacity: 0, duration: 0.3 });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  const truncatedDescription = description
    ? description.split(" ").slice(0, 10).join(" ") +
      (description.split(" ").length > 10 ? "..." : "")
    : "";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-sm mx-auto cursor-pointer perspective"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow effect */}
      <div
        ref={glowRef}
        className="absolute w-60 h-60 bg-primary/30 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          opacity: 0,
        }}
      />

      {/* Committee Image */}
      <div className="relative h-56 overflow-hidden rounded-t-2xl">
        <img
          src={imageSrc}
          alt={`${name} committee`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Committee Info */}
      <div className="p-5 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-white glow-text mb-2">
          {name}
        </h3>

        {/* Online / Offline indicator */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <div
            className={`w-3 h-3 rounded-full ${
              isOnline ? "bg-green-500 animate-pulse" : "bg-red-500 animate-pulse"
            }`}
          ></div>
          <span
            className={`text-sm font-semibold ${
              isOnline ? "text-green-400" : "text-red-400"
            }`}
          >
            {isOnline ? "Online" : "Offline"}
          </span>
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-300 text-sm md:text-base mb-4">
            {truncatedDescription}
          </p>
        )}

        {/* Agenda */}
        {agenda && (
          <div className="mb-5 p-3 bg-gray-800/40 rounded-lg border border-primary/30 text-left">
            <div className="flex items-center mb-2">
              <FileText size={16} className="text-primary mr-2" />
              <h4 className="text-primary font-semibold">Agenda</h4>
            </div>
            <p className="text-gray-200 text-sm whitespace-pre-line">{agenda}</p>
          </div>
        )}

        {/* Chairperson Box */}
        {chairperson && (
          <div className="relative mb-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-primary/40 transition-all">
            <div className="absolute top-3 right-3 flex gap-2">
              {chairLinkedin && (
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  href={chairLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  <Linkedin size={18} />
                </motion.a>
              )}
              {chairInstagram && (
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  href={chairInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition"
                >
                  <Instagram size={18} />
                </motion.a>
              )}
            </div>
            <div className="flex items-center justify-center gap-2 mb-1">
              <User size={18} className="text-primary" />
              <h4 className="text-primary font-semibold">Chairperson</h4>
            </div>
            <p className="text-white font-medium">{chairperson}</p>
          </div>
        )}

        {/* Vice Chairperson Box */}
        {viceChairperson && (
          <div className="relative p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-primary/40 transition-all">
            <div className="absolute top-3 right-3 flex gap-2">
              {viceLinkedin && (
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  href={viceLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  <Linkedin size={18} />
                </motion.a>
              )}
              {viceInstagram && (
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  href={viceInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition"
                >
                  <Instagram size={18} />
                </motion.a>
              )}
            </div>
            <div className="flex items-center justify-center gap-2 mb-1">
              <Users size={18} className="text-primary" />
              <h4 className="text-primary font-semibold">Vice-Chairperson</h4>
            </div>
            <p className="text-white font-medium">{viceChairperson}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CommitteeCard;
