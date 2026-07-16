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
  const heads = secretariat.filter(
    (member) =>
      member.position === "Director General" ||
      member.position === "Secretary General"
  );
  const corporate = secretariat.filter(
    (m) => m.team === "Corporate Relations" && m.position === "USG"
  );

  const creatives = secretariat.filter(
    (m) => m.team === "Creatives and Social Media" && m.position === "USG"
  );

  const delegate = secretariat.filter(
    (m) => m.team === "Delegate Affairs" && m.position === "USG"
  );

  const executive = secretariat.filter(
    (m) => m.team === "Executive Board" && m.position === "USG"
  );

  const operations = secretariat.filter(
    (m) => m.team === "Operations" && m.position === "USG"
  );

  const publicRelations = secretariat.filter(
    (m) => m.team === "Public Relations" && m.position === "USG"
  );

  const video = secretariat.filter(
    (m) => m.team === "Video Production" && m.position === "USG"
  );
  const web = secretariat.filter(
    (m)=> m.team === "Operations" && m.position === "Web Dev Coordinator"
  )

  return (
    <div className="relative">
      <AnimatedBackground />
      <FloatingParticles />
      <MouseGlow />

      <PageHeader
        title="The Squad"
        subtitle="Meet the incredible humans making MUN 10.0 absolutely legendary!"
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
              The visionaries leading MUN IIT Indore 10.0 with excellence and
              passion.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-4 py-6">
            {heads.map((member, index) => (
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

      {/* Department Sections */}
      <SecretariatSection title="Corporate Relations" members={corporate} />
      <SecretariatSection title="Creatives and Social Media" members={creatives} />
      <SecretariatSection title="Delegate Affairs" members={delegate} />
      <SecretariatSection title="Executive Board" members={executive} />
      <SecretariatSection title="Operations" members={operations} />
      <SecretariatSection title="Public Relations" members={publicRelations} />
      <SecretariatSection title="Video Production" members={video} />
      <SecretariatSection title="Web Development" members={web}/>
    </div>
  );
};

export default Secretariat;
