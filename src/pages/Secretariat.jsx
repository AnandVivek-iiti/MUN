import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHeader from "../components/PageHeader";
import SecretariatCard from "../components/SecretariatCard";
import { secretariat } from "../data/secretariat";
import {
  FloatingParticles,
  MouseGlow,
  AnimatedBackground,
} from "../components/FloatingParticles";
import SecretariatSection from "../components/SecretariatSection";

gsap.registerPlugin(ScrollTrigger);

const Secretariat = () => {
  const cheifs = secretariat.filter((member) => member.position === "Chief");

  const corporate = secretariat.filter(
    (member) =>
      member.team === "Corporate Relations" &&
      member.position === "SECRETARIAT"
  );

  const creatives = secretariat.filter(
    (member) =>
      member.team === "Creatives and Social Media" &&
      member.position === "SECRETARIAT"
  );

  const delegate = secretariat.filter(
    (member) =>
      member.team === "Delegate Affairs" && member.position === "SECRETARIAT"
  );

  const executive = secretariat.filter(
    (member) =>
      member.team === "Executive Board" && member.position === "SECRETARIAT"
  );

  const marketing = secretariat.filter(
    (member) =>
      member.team === "Marketing and Outreach" &&
      member.position === "SECRETARIAT"
  );

  const public_affairs = secretariat.filter(
    (member) =>
      member.team === "Public Affairs" && member.position === "SECRETARIAT"
  );

  const technical = secretariat.filter(
    (member) =>
      member.team === "Technical Affairs" && member.position === "SECRETARIAT"
  );

  const video = secretariat.filter(
    (member) =>
      member.team === "Video Production" && member.position === "SECRETARIAT"
  );

  const web = secretariat.filter(
    (member) =>
      member.team === "Web and IT Operations" &&
      member.position === "SECRETARIAT"
  );

  const heads = secretariat.filter(
    (member) =>
      member.position === "Director General" ||
      member.position === "Secretary General"
  );

  return (
    <div className="relative">
      <AnimatedBackground />
      <FloatingParticles />
      <MouseGlow />

      <PageHeader
        title="The Squad"
        subtitle="Meet the incredible humans making MUN 9.0 absolutely legendary!"
      />

      {/* Director General & Secretary General Section */}
      <section className="py-20 relative z-10 max-w-6xl mx-auto">
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
              Secretariat Heads 👑
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <p className="text-gray-300 text-lg">
              The visionaries leading MUN IIT Indore 9.0 with excellence and
              passion.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-4 py-6">
            {heads.map((member, index) => (
              <SecretariatCard
                key={index}
                name={member.name.trim()}
                position={member.position}
                imageSrc={`/members/${member.team}/${member.name.trim()}.jpg`}
                email={member.email}
                linkedin={member.linkedin}
                instagram={member.instagram}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads Section */}
      <section className="py-16 relative z-10 max-w-7xl mx-auto">
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
              Department Heads 🌟
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <p className="text-gray-300 text-lg">
              The specialists who make the impossible happen! Each one is a
              wizard in their own domain, working their magic behind the scenes!
              🎭✨
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="flex flex-wrap justify-center gap-6 px-4 py-6">
              {cheifs.map((member, index) => (
                <SecretariatCard
                  key={index}
                  name={member.name.trim()}
                  position={member.team}
                  imageSrc={`/members/${member.team}/${member.name.trim()}.jpg`}
                  email={member.email}
                  linkedin={member.linkedin}
                  instagram={member.instagram}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Department Sections */}
      <SecretariatSection title={"Corporate Relations"} members={corporate} />
      <SecretariatSection
        title={"Creative and Social Media"}
        members={creatives}
      />
      <SecretariatSection title={"Delegate Affairs"} members={delegate} />
      <SecretariatSection title={"Executive Board"} members={executive} />
      
      <SecretariatSection title={"Public Affairs"} members={public_affairs} />
      <SecretariatSection title={"Technical Affairs"} members={technical} />
      <SecretariatSection title={"Video Production"} members={video} />
      <SecretariatSection title={"Web and IT Operations"} members={web} />
    </div>
  );
};

export default Secretariat;
