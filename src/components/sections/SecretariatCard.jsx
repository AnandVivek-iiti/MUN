import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Star, Crown } from "lucide-react";
import { gsap } from "gsap";

// Shown until a photo is uploaded for this member from the admin panel.
const PLACEHOLDER_AVATAR =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#111318"/><circle cx="100" cy="80" r="38" fill="#2a2e38"/><path d="M40 190c0-40 27-70 60-70s60 30 60 70" fill="#2a2e38"/></svg>`
  );

const SecretariatCard = ({
  name,
  position,
  imageSrc,
  email,
  linkedin,
  instagram,
}) => {
  const [resolvedSrc, setResolvedSrc] = useState(imageSrc || PLACEHOLDER_AVATAR);
  useEffect(() => {
    setResolvedSrc(imageSrc || PLACEHOLDER_AVATAR);
  }, [imageSrc]);

  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const social = socialRef.current;

    if (card && image && social) {
      const handleMouseEnter = () => {
        gsap.to(card, {
          duration: 0.4,
          y: -10,
          scale: 1.05,
          ease: "power2.out",
        });

        gsap.to(image, {
          duration: 0.4,
          scale: 1.1,
          filter: "brightness(1.2) saturate(1.2)",
        });

        gsap.to(social, {
          duration: 0.3,
          opacity: 1,
          y: 0,
          ease: "back.out(1.7)",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          duration: 0.4,
          y: 0,
          scale: 1,
          ease: "power2.out",
        });

        gsap.to(image, {
          duration: 0.4,
          scale: 1,
          filter: "brightness(1) saturate(1)",
        });

        gsap.to(social, {
          duration: 0.3,
          opacity: 0,
          y: 10,
          ease: "power2.in",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  const getPositionIcon = (position) => {
    if (
      position.includes("Secretary-General") ||
      position.includes("Director-General")
    ) {
      return <Crown className="w-4 h-4 text-yellow-400" />;
    }
    return <Star className="w-4 h-4 text-primary" />;
  };

  const getPositionEmoji = (position) => {
    if (position.includes("Secretary-General")) return "👑";
    if (position.includes("Deputy")) return "⭐";
    if (position.includes("Director-General")) return "🎯";
    if (position.includes("Head")) return "🚀";
    return "✨";
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl shadow-2xl border border-gray-700 group w-64 mx-auto"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500"></div>
        <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-all duration-700"></div>
      </div>

      <div className="relative overflow-hidden">
        <img
          ref={imageRef}
          src={resolvedSrc}
          onError={() => setResolvedSrc(PLACEHOLDER_AVATAR)}
          alt={name}
          loading="lazy"
          className="object-cover object-top w-full h-48 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

        {/* Position badge */}
        <div className="absolute top-3 left-3 flex items-center space-x-1 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
          {getPositionIcon(position)}
          <span className="text-xs font-medium text-primary">
            {getPositionEmoji(position)}
          </span>
        </div>

        {/* Social links overlay - hidden by default */}
        <div
          ref={socialRef}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center space-x-4 opacity-0 translate-y-2"
        >
          {email && (
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={`mailto:${email}`}
              className="p-3 bg-gradient-to-r from-primary/30 to-primary/20 text-primary rounded-full hover:from-primary/40 hover:to-primary/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          )}
          {linkedin && (
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-blue-500/30 to-blue-400/20 text-blue-400 rounded-full hover:from-blue-500/40 hover:to-blue-400/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
          )}
          {instagram && (
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-pink-500/30 to-purple-400/20 text-pink-400 rounded-full hover:from-pink-500/40 hover:to-purple-400/30 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-4 relative z-10">
        <div className="text-center">
          <h3 className="text-lg font-bold text-white mb-1 glow-text group-hover:pulse-glow">
            {name}
          </h3>
          <p className="text-primary font-medium gradient-text text-sm">
            {position}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SecretariatCard;
