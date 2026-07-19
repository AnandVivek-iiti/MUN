"use client";

import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

const AnimatedHeading = ({ title }) => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <motion.h2
      className="text-4xl md:text-5xl font-bold mb-6"
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
);

const InfoCards = () => {
  const infoCards = [
    {
      id: 1,
      title: "Venue",
      subtitle: "IIT Indore Campus",
      description:
        "Join us at the heart of innovation for MUN 10.0 — IIT Indore.",
      details: [
        {
          location: "Book a Cab",
          type: "Approx. ₹500 from Bhawarkuan.",
          link: "https://www.google.com/search?q=cab+to+iit+indore+from+my+current+location",
        },
        {
          location: "M19 City Bus",
          type: "₹25 ticket, available from Bhawarkuan.",
        },
        {
          location: "By Air",
          type: "Cabs available from Indore Airport.",
          link: "https://www.google.com/travel/flights",
        },
        {
          location: "By Train",
          type: "Cabs available from Indore Railway Station.",
          link: "https://www.google.com/search?q=train+to+indore",
        },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.25c4.556 0 8.25 3.694 8.25 8.25 0 5.25-8.25 11.25-8.25 11.25S3.75 15.75 3.75 10.5C3.75 5.944 7.444 2.25 12 2.25z"
          />
        </svg>
      ),
      buttonText: "View Location Route",
      buttonAction: () =>
        window.open("http://iccms2021.iiti.ac.in/docs/Route.pdf", "_blank"),
    },
    {
      id: 2,
      title: "Eligibility",
      subtitle: "Who Can Participate?",
      description:
        "Open to all college students passionate about global affairs and diplomacy.",
      details: [
        {
          requirement: "Interest in Global Issues",
          description: "Raise your voice for change.",
          link: "https://www.un.org/en/global-issues",
        },
        {
          requirement: "Communication Skills",
          description: "Articulate your thoughts effectively.",
          link: "https://www.youtube.com/results?search_query=improve+communication+skills",
        },
        {
          requirement: "Team Spirit",
          description: "Collaborate and delegate with confidence.",
          link: "https://www.youtube.com/results?search_query=what+is+team+spirit+and+how+to+improve+it",
        },
        {
          requirement: "Willingness to Learn",
          description: "Be curious and adaptive.",
          link: "https://www.jillgottenstrater.com/wp-content/uploads/2015/09/Are-You-Curious-.jpg",
        },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      buttonText: "Apply Now",
      buttonAction: () => window.open("https://registration.iiti.ac.in/mun26/", "_blank"),
    },
    {
      id: 3,
      title: "Important Dates",
      subtitle: "Mark Your Calendars",
      description: "Keep track of the milestones of MUN 10.0 at IIT Indore.",
      details: [
        { date: "To be announced", event: "Day 1: MUN 10.0 Opening Ceremony" },
        { date: "To be announced", event: "Day 2:Traditional Day" },
        { date: "To be announced", event: "Day 3: Closing Ceremony" },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      buttonText: "Add to Calendar",
      buttonAction: () =>
        window.open("https://calendar.google.com/calendar/u/0/r/week/2026/1/2", "_blank"),
    },
  ];

  const committeeEligibility = [
    { committee: "WHO", eligibility: "10th and below" },
    { committee: "UNHRC", eligibility: "12th and below" },
    // { committee: "WAR CABINET", eligibility: "9th and above" },
    { committee: "WTO", eligibility: "Open to all" },
    // { committee: "MPLA", eligibility: "Open to all" },
    { committee: "AIPPM", eligibility: "Open to all" },
    { committee: "UNGA", eligibility: "Open to all" },
    { committee: "UNSC", eligibility: "Open to all" },
    { committee: "UNCSW", eligibility: "Open to all" },
    { committee: "UNDOC", eligibility: "Open to all" },
    // { committee: "DISEC (Online)", eligibility: "Open to all" },
    { committee: "International Press (IP)", eligibility: "Open to all" },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="info-cards">
      <div className="container mx-auto px-6 relative z-10">
        {/* === Animated Heading === */}
        <AnimatedHeading title="What You Need to Know" />

        {/* === 3×1 Main Cards Grid === */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <CardContainer className="inter-var w-full">
                <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-cyan-500/[0.1] border-cyan-500/20 border-black/[0.1] w-[350px] h-[540px] rounded-xl p-4 border hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex flex-col items-center text-center mb-4">
                    <CardItem translateZ="100" className="mb-3">
                      {card.icon}
                    </CardItem>
                    <CardItem translateZ="50" className="text-xl font-bold text-white">
                      {card.title}
                    </CardItem>
                    <CardItem as="p" translateZ="60" className="text-cyan-400 text-xs font-medium mt-1">
                      {card.subtitle}
                    </CardItem>
                  </div>

                  <CardItem as="p" translateZ="60" className="text-neutral-300 text-xs leading-relaxed mb-4 text-center">
                    {card.description}
                  </CardItem>

                  <div className="w-full mb-4 flex-1 space-y-2 text-center">
                    {card.details.map((detail, idx) => (
                      <motion.a
                        key={idx}
                        href={detail.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                        className="block w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-950/20 to-teal-950/20 border border-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                      >
                        <span className="text-sm font-semibold text-white block">
                          {detail.location || detail.requirement || detail.committee || detail.date}
                        </span>
                        <span className="text-cyan-400 text-xs block">
                          {detail.type || detail.description || detail.focus || detail.event}
                        </span>
                      </motion.a>
                    ))}
                  </div>

                  <div className="flex justify-center mt-auto">
                    <CardItem
                      translateZ={20}
                      as="button"
                      onClick={card.buttonAction}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 text-black text-xs font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      {card.buttonText}
                    </CardItem>
                  </div>

                  <CardItem translateZ="100" className="absolute top-2 right-2 opacity-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full blur-xl"></div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>

        {/* === COMMITTEE ELIGIBILITY CARD (UPDATED RESPONSIVE GRID) === */}
        {/* === COMMITTEE ELIGIBILITY CARD === */}
<motion.div
  className="flex justify-center mt-10"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <CardContainer className="inter-var w-full max-w-[77rem]">
    <CardBody
      className="bg-black relative group/card hover:shadow-2xl h-fit hover:shadow-cyan-500/[0.1]
        border-cyan-500/20 border-black/[0.1] w-full rounded-xl px-8 py-10
        border hover:border-cyan-400/50 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <CardItem translateZ="100" className="mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </CardItem>
        <CardItem translateZ="50" className="text-2xl font-bold text-white">
          Committee Eligibility
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-cyan-400 text-xs font-medium mt-1"
        >
          Eligibility Criteria by Committee
        </CardItem>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-6">
        {committeeEligibility.map((c, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="w-36 sm:w-44 h-24 flex flex-col justify-center items-center
              rounded-xl text-center px-3 py-2 bg-gradient-to-r from-cyan-950/20
              to-teal-950/20 border border-cyan-500/10 hover:border-cyan-400
              hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all duration-300"
          >
            <p className="text-white text-sm font-semibold">{c.committee}</p>
            <p className="text-cyan-400 text-xs">{c.eligibility}</p>
          </motion.div>
        ))}
      </div>
    </CardBody>
  </CardContainer>
</motion.div>

      </div>
    </section>
  );
};

export default InfoCards;
