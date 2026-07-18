import { motion } from "framer-motion";
import { FaDumbbell, FaAward, FaHeartbeat } from "react-icons/fa";
import aboutImg from "../assets/about.jpg";

const features = [
  {
    icon: <FaDumbbell size={24} />,
    title: "Personal Training",
    text: "Customized workout plans designed around your body, goals and lifestyle.",
  },
  {
    icon: <FaAward size={24} />,
    title: "Certified Coach",
    text: "Internationally certified trainer with years of coaching experience.",
  },
  {
    icon: <FaHeartbeat size={24} />,
    title: "Nutrition Guidance",
    text: "Simple nutrition strategies that deliver long-term sustainable results.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#050816] py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 w-72 h-72 bg-blue-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-[90px] rounded-full"></div>

          <img
            src={aboutImg}
            alt="Coach"
            className="relative rounded-3xl border border-white/10 shadow-2xl"
          />

          {/* Floating Experience Card */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute -bottom-8 -right-6 bg-[#111827]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-4xl font-bold text-blue-400">
              12+
            </h2>

            <p className="text-gray-300 mt-1">
              Years of Experience
            </p>
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-400 uppercase tracking-[4px] font-semibold">
            About Coach
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-5 leading-tight">
            Build Strength.
            <br />
            Create Confidence.
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-8">
            My mission is simple—help ambitious people transform
            their bodies without wasting time on confusing workouts
            or unrealistic diets.
          </p>

          <p className="mt-6 text-gray-400 leading-8">
            Every program is tailored to your fitness level,
            schedule and personal goals. Whether you're trying
            to lose fat, gain muscle or improve athletic
            performance, you'll receive coaching built around
            real results.
          </p>

          {/* FEATURES */}
          <div className="mt-12 space-y-6">

            {features.map((item, index) => (

              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                key={index}
                className="flex gap-5 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 transition"
              >

                <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center text-white">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-2 leading-7">
                    {item.text}
                  </p>
                </div>

              </motion.div>

            ))}

          </div>

          <button className="mt-10 bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-full text-white font-semibold shadow-lg shadow-blue-500/30">
            Learn More
          </button>

        </motion.div>

      </div>
    </section>
  );
}