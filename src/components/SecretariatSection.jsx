import React from "react";
import { motion } from "framer-motion";
import SecretariatCard from "./SecretariatCard";

const SecretariatSection = ({ title, members }) => {
  return (
    <section className="py-4 relative z-10 max-w-7xl mx-auto">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-12"
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
            {title}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Department Heads Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap justify-center gap-6 px-4 py-6">
            {members.map((member, index) => (
              <SecretariatCard
                key={index}
                name={member.name.trim()}
                position={member.position}
                imageSrc={`/members/Secratrist/${member.image}`}
                email={member.email}
                linkedin={member.linkedin}
                instagram={member.instagram}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretariatSection;
