import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Do I need gym experience?",
    answer:
      "Not at all. Whether you're a beginner or advanced, every program is customized according to your current fitness level.",
  },
  {
    question: "Do you provide nutrition guidance?",
    answer:
      "Yes. Every coaching plan includes nutrition recommendations that match your goals and lifestyle.",
  },
  {
    question: "Can I train online?",
    answer:
      "Absolutely. I offer complete online coaching with workout plans, video support, progress tracking and regular check-ins.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Most clients notice visible improvements within 6–8 weeks when they consistently follow the training and nutrition plan.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply click the 'Book Consultation' button, fill out the contact form, and I'll get back to you within 24 hours.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="faq"
      className="relative bg-[#050816] py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 w-72 h-72 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[4px] text-blue-400 font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-black text-white mt-5">
            Frequently Asked
            <span className="text-blue-400"> Questions</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Everything you need to know before starting your fitness journey.
          </p>
        </motion.div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0,
                  }}
                >
                  <FaChevronDown className="text-blue-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: .3 }}
                  >
                    <p className="px-6 pb-6 text-gray-400 leading-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}