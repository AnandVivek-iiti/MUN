"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/PageHeader";

const PastEditions = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [selectedGuest, setSelectedGuest] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const galleryData = [
    { image: "/1.png", description: "MUN IIT Indore 2023 Opening Ceremony" },
    { image: "/2.JPG", description: "Delegates during Committee Sessions" },
    { image: "/3.JPG", description: "Keynote Address by Chief Guest" },
    { image: "/4.JPG", description: "Award Ceremony Moments" },
    { image: "/5.JPG", description: "Cultural Evening Highlights" },
    { image: "/6.JPG", description: "Closing Ceremony Snapshot" },
  ];

  const chiefGuests = [
    {
      name: "Ashok Kantha",
      year: "2024",
      designation: "A former Ambassador of India to China",
      image: "/guest1.jpg",
      description: `Ashok Kantha - closing ceremony chief guest


A former Ambassador of India to China (2013–2016), Mr. Kantha has a distinguished career spanning 38+ years during which he has held pivotal positions:
- 🔹 Secretary (East), managing relations with 65 nations 🌍.
- 🔹 High Commissioner to Sri Lanka & Malaysia.
- 🔹 Consul General in Hong Kong and Deputy Chief of Mission in Nepal.
- 🔹 Key architect of India's foreign policy on China and East Asia.


Renowned for his deep expertise in Asian affairs and fluency in Chinese, his journey is an inspiration for aspiring diplomats and changemakers.


Ambassador Rajiv Bansal has represented India at several global platforms and UN conferences. Known for his expertise in multilateral diplomacy, his leadership inspires young delegates to approach negotiation and policy-making with empathy and logic.`,
    },
    {
      name: "Rajan Sudhesh Ratna",
      year: "2024",
      designation: "UN ESCAP",
      image: "/guest2.jpg",
      description: `Rajan Sudhesh Ratna - opening ceremony chief guest 

Here’s a glimpse of his incredible journey:

📌 Deputy Head of the South and South-West Asia Office of UN ESCAP, New Delhi.
📌 Leads initiatives in research, policy advisory, and capacity building, focusing on empowering women-led MSMEs through digital marketing and e-commerce 🌐.
📌 Formerly served in the Trade, Investment, and Innovation Division at UN ESCAP, Bangkok 🌍.
📌 Professor and Head of the Centre for WTO Studies, Indian Institute of Foreign Trade, New Delhi (2008–2010) 📖.
📌 A former Indian civil servant with 25+ years of experience in the Ministry of Commerce, specializing in trade policy and WTO negotiations.
Dr. Ananya Gupta is a foreign policy researcher and educator whose work focuses on global governance and youth-led diplomacy. She has mentored students and MUN participants worldwide on conflict resolution and peacebuilding.`,
    },
  ];

  const testimonials = [
    {
      name: "Dhairya Bhandari",
      text: "IITI MUN 8.0 was an absolute delight to be a part of. The committee sessions were intense, engaging, and brilliantly moderated—every debate pushed us to think deeper and speak better. A huge shoutout to the USGs for their flawless management; everything was organized with such clarity and care. From logistics to hospitality, the arrangements were top-notch and made the experience all the more memorable. Hats off to the entire team for pulling off such a fantastic conference!",
    },
    {
      name: "Sagar Kuntal",
      text: "Attending this MUN for the second consecutive year has been nothing short of rewarding. As a veterinary student, I always look forward to opportunities that challenge my perspective, and this event did exactly that yet again. The discussions were intellectually stimulating, the coordination seamless, and the atmosphere dynamic and welcoming. It was great to see how thoughtfully everything was planned, from the committee proceedings to hospitality. Returning to this platform felt like coming back to a space that encourages growth, confidence, and fun. Looking forward to the next one already!",
    },
    {
      name: "Divyae Arya",
      text: "MUN’24 at IIT Indore was truly an enriching experience. The topics were thought-provoking, sparking deep discussions and critical thinking. I got to meet a lot of new people and engage in meaningful conversations beyond the committee. The event was seamlessly executed, thanks to the amazing organisers. Thank you for a memorable experience for all the delegates.",
    },
    {
      name: "Samvaadi Dadhi",
      text: "The event was organised and executed well. Debating over international issues, forming alliances for drafting resolutions, and representing a nation as a delegate gave me valuable exposure to real-world diplomacy. MUN 8.0 was truly a fun learning experience.",
    },
    {
      name: "Snehith Budde",
      text: "Being part of IITI MUN 8.0 has been an incredible opportunity to connect, communicate, and collaborate with highly motivated and extraordinary young minds. The conference featured well-experienced and thoughtful delegates, all showcasing their diplomatic and debating skills. The Executive Board guided and mentored us throughout, and the event was extremely well-organized across three days, enhanced by IIT Indore’s vibrant atmosphere, beautiful campus, and warm hospitality. IITI MUN is a great platform to showcase diplomatic skills and network effectively.",
    },
    {
      name: "Arjav Yadav",
      text: "Really fantastic experience participating in IITI MUN 8.0. It was my first MUN and was made memorable by the Chair and the commendable work of the organisers. The materials and environment for discussion were top-notch. I met some very interesting people from various parts of the country and enjoyed the event thoroughly.",
    },
    {
      name: "Vaishnavi Ventrapragada",
      text: "Participating in the MUN was a fun and enriching experience that greatly improved my public speaking and critical thinking skills. The debates were engaging and thought-provoking. Kudos to the Secretariat and Chairs for conducting the event seamlessly and professionally!",
    },
    {
      name: "Sangam",
      text: "The 8th edition of MUN in IIT Indore was a conference full of mutual learning and connection. Sharp debates with a diverse pool of talents, great campus support, and friendly people made this event memorable. Surely one of the best chairs and hospitality I’ve experienced. Best wishes for future MUNs to all management.",
    },
  ];

  return (
    <section className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* === Animated Glowing Background === */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,255,255,0.4) 0%, transparent 60%)`,
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.08)_0%,transparent_60%)] opacity-40"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00ffff] rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <PageHeader title="Past Editions" subtitle="Moments that shaped our legacy" />

      {/* === Previous Year Highlights === */}
      <section className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
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
            Previous Year Highlights
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 bg-black/40 p-8 rounded-2xl border border-[#00ffff]/20 hover:border-[#00ffff]/40 transition-all duration-500">
          <motion.img
            src="/PE.JPG"
            alt="MUN IIT Indore 8.0"
            className="rounded-xl shadow-lg w-full md:w-1/2"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
          />

          <div className="flex flex-col gap-5 text-gray-300 text-lg leading-relaxed md:w-1/2">
            <p>
              <strong>MUN IIT Indore 8.0</strong> embodied the spirit of{" "}
              <span className="text-[#00ffff]">Diplomacy, Debate, and Deliver</span> with unmatched passion and precision.
              Held on the scenic IIT Indore campus, the 8th edition brought together brilliant minds from across the
              country to engage in intellectually charged discussions that mirrored real-world diplomacy.
            </p>

            <p>
              From intense committee sessions and thought-provoking agendas to seamless management and vibrant socials,
              every moment of MUN 8.0 reflected the dedication and excellence of its organizing team. Delegates tackled
              pressing global issues, challenged perspectives, and forged meaningful connections that transcended
              committee walls.
            </p>

            <p>
              With its flawless execution, engaging debates, and inspiring energy, <strong>MUN IIT Indore 8.0</strong>{" "}
              wasn’t just a conference — it was a celebration of ideas, leadership, and collaboration. The edition truly
              lived up to its essence:{" "}
              <span className="italic text-[#00ffff]">Diplomacy. Debate. Deliver.</span>
            </p>
          </div>
        </div>
      </section>

      {/* === Gallery === */}
      <section className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
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
            Gallery
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 text-lg">Capturing timeless MUN IIT Indore moments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryData.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-black/40 border border-[#00ffff]/10 hover:border-[#00ffff]/40 transition-all duration-500 group"
              whileHover={{ y: -4 }}
            >
              <motion.img
                src={item.image}
                alt={item.description}
                className="w-full h-72 object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-4 text-left">
                <p className="text-[#00ffff] font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Chief Guests === */}
      <section className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
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
            Chief Guests
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 text-lg">Inspiring voices that graced our journey</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-center">
          {chiefGuests.map((guest, index) => (
            <motion.div
              key={index}
              className="relative bg-black/50 p-8 rounded-2xl border border-[#00ffff]/20 hover:border-[#00ffff]/40 transition-all duration-500 w-80 mx-auto text-center cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedGuest(guest)}
            >
              <motion.img
                src={guest.image}
                alt={guest.name}
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-2 border-[#00ffff]/40"
                whileHover={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 1 }}
              />
              <h3 className="text-2xl font-bold text-white">{guest.name}</h3>
              <p className="text-[#00ffff]">{guest.designation}</p>
              <div className="text-gray-400 mt-1">{guest.year}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Modal for Chief Guest Details === */}
      <AnimatePresence>
        {selectedGuest && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedGuest(null);
            }}
          >
            <motion.div
              className="relative bg-black/90 border border-[#00ffff]/40 rounded-2xl p-8 max-w-lg w-full text-center my-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedGuest(null)}
                className="absolute top-3 right-4 text-[#00ffff] text-2xl hover:text-white"
              >
                &times;
              </button>

              <img
                src={selectedGuest.image}
                alt={selectedGuest.name}
                className="w-40 h-40 mx-auto rounded-full mb-6 object-cover border-2 border-[#00ffff]/50"
              />
              <h3 className="text-3xl font-bold text-white mb-2">{selectedGuest.name}</h3>
              <p className="text-[#00ffff] mb-2">{selectedGuest.designation}</p>
              <p className="text-gray-400 text-sm mb-4">{selectedGuest.year}</p>

              {/* Scrollable Description */}
              <div className="max-h-[60vh] overflow-y-auto pr-2 text-gray-300 text-base leading-relaxed scrollbar-thin scrollbar-thumb-[#00ffff]/40 scrollbar-track-transparent">
                {selectedGuest.description.split("\n").map((line, idx) => (
                  <p key={idx} className="mb-3 whitespace-pre-line">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Testimonials === */}
      <section className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
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
            Testimonials
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 text-lg">Hear from our passionate delegates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-black/50 border border-[#00ffff]/20 rounded-2xl p-8 text-left shadow-md hover:border-[#00ffff]/40 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-300 mb-6 italic">"{t.text}"</p>
              <h4 className="text-[#00ffff] text-lg font-semibold">— {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default PastEditions;
