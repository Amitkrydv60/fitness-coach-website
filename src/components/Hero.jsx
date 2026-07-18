import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] pt-32"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-red-600/20 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-500/10 blur-[180px]" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            #1 Online Fitness Coach
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">
            BUILD THE BODY
            <br />
            <span className="text-red-500">YOU DESERVE</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Transform your body with personalized workout programs,
            nutrition coaching and one-on-one accountability designed
            to help you become stronger, healthier and more confident.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-3 rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-red-600"
            >
              Start Your Journey
              <FaArrowRight />
            </a>

            <a
              href="#transformations"
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-lg transition hover:border-red-500"
            >
              <FaPlay />
              Watch Results
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <h2 className="text-4xl font-bold text-white">500+</h2>
              <p className="text-gray-400">Clients Transformed</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">12+</h2>
              <p className="text-gray-400">Years Experience</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">98%</h2>
              <p className="text-gray-400">Success Rate</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-[120px]" />

          <img
            src={heroImg}
            alt="Fitness Coach"
            className="relative z-10 w-[420px] lg:w-[520px]"
          />

          {/* Floating Card */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute top-20 -left-10 rounded-2xl border border-white/10 bg-[#111111]/90 p-5 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold text-white">98%</h3>
            <p className="text-gray-400">Client Satisfaction</p>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute bottom-12 -right-10 rounded-2xl border border-white/10 bg-[#111111]/90 p-5 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold text-white">12+</h3>
            <p className="text-gray-400">Years Coaching</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="h-12 w-7 rounded-full border border-white/30 flex justify-center"
        >
          <div className="mt-2 h-3 w-1 rounded-full bg-red-500"></div>
        </motion.div>
      </div>
    </section>
  );
}