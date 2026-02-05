import { motion } from "framer-motion";

const cards = [
  {
    title: "Product Thinking",
    desc: "I approach design from a product strategy perspective, ensuring every decision aligns with business goals.",
  },
  {
    title: "Business-Focused UX",
    desc: "I measure success through impact—conversion, retention, and activation—not just aesthetics.",
  },
  {
    title: "Data-Informed",
    desc: "I combine qualitative research with quantitative analysis to make evidence-based decisions.",
  },
  {
    title: "Strategic Problem Solver",
    desc: "I dig deep to understand root causes rather than applying surface-level fixes.",
  },
  {
    title: "Remote-Ready",
    desc: "Experienced in async collaboration, documentation, and working across time zones.",
  },
  {
    title: "Clear Communicator",
    desc: "I explain design decisions in business terms so stakeholders understand the why.",
  },
];

export default function HomePageWhyWorkWithMe() {
  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-widest text-sm text-white/70"
        >
          Why Work With Me
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-4xl text-[#C961DE] font-serif font-bold tracking-wide mt-3"
        >
          What Sets Me Apart
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mt-6 text-white/80"
        >
          Beyond design skills, I bring a mindset focused on outcomes,
          collaboration, and continuous improvement.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.06 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative rounded-2xl p-[1.5px] overflow-hidden"
            >
              {/* Animated Gradient Border */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-[spin_6s_linear_infinite]" /> */}

              {/* Glass Card */}
              <div className="relative h-full rounded-2xl bg-[#1C1D5E]/60 backdrop-blur-xl border border-[#C961DE]/80 p-8 text-left">
              

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
