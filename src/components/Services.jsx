import { motion } from "framer-motion";
import {
  FaDumbbell,
  FaAppleAlt,
  FaFireAlt,
  FaRunning,
  FaLaptop,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    icon: <FaDumbbell />,
    title: "Personal Training",
    description:
      "Customized workout plans designed specifically for your goals and fitness level.",
  },
  {
    icon: <FaAppleAlt />,
    title: "Nutrition Coaching",
    description:
      "Flexible meal strategies that help you build muscle and burn fat sustainably.",
  },
  {
    icon: <FaFireAlt />,
    title: "Fat Loss Program",
    description:
      "Scientifically designed transformation plans with weekly progress tracking.",
  },
  {
    icon: <FaRunning />,
    title: "Muscle Building",
    description:
      "Progressive strength programs focused on gaining lean muscle efficiently.",
  },
  {
    icon: <FaLaptop />,
    title: "Online Coaching",
    description:
      "Train from anywhere with complete support through video calls and mobile guidance.",
  },
  {
    icon: <FaChartLine />,
    title: "Progress Tracking",
    description:
      "Weekly check-ins, body measurements and performance reviews to keep improving.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#050816] py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 w-72 h-72 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute right-0 bottom-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 uppercase tracking-[4px] font-semibold">
            My Services
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            Everything You Need To
            <span className="text-blue-400"> Transform</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Every coaching program is personalized to help you achieve
            faster, healthier and long-lasting fitness results.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6, delay: index * .08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center text-3xl text-white shadow-lg shadow-blue-500/30">
                {service.icon}
              </div>

              <h3 className="relative z-10 text-2xl font-bold text-white mt-8">
                {service.title}
              </h3>

              <p className="relative z-10 text-gray-400 mt-5 leading-8">
                {service.description}
              </p>

              <button
                className="relative z-10 mt-8 text-blue-400 font-semibold hover:text-white transition"
              >
                Learn More →
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}