import { motion } from "framer-motion";

import img1 from "../assets/transformation1.jpg";
import img2 from "../assets/transformation2.jpg";
import img3 from "../assets/transformation3.jpg";
import img4 from "../assets/transformation4.jpg";

const transformations = [
  {
    image: img1,
    name: "James Carter",
    result: "-18 KG",
    duration: "16 Weeks",
    goal: "Fat Loss",
  },
  {
    image: img2,
    name: "Ryan Brooks",
    result: "+9 KG Muscle",
    duration: "20 Weeks",
    goal: "Muscle Gain",
  },
  {
    image: img3,
    name: "Daniel Lewis",
    result: "-12 KG",
    duration: "12 Weeks",
    goal: "Body Recomposition",
  },
  {
    image: img4,
    name: "Alex Morgan",
    result: "+7 KG Muscle",
    duration: "18 Weeks",
    goal: "Strength",
  },
];

export default function Transformations() {
  return (
    <section
      id="transformations"
      className="relative bg-[#050816] py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 w-72 h-72 rounded-full bg-blue-500/20 blur-[150px]" />
      <div className="absolute right-0 bottom-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Real Results
          </span>

          <h2 className="text-5xl font-black text-white mt-5">
            Incredible Client
            <span className="text-blue-400"> Transformations</span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
            Real people. Real dedication. Real transformations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {transformations.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{
                duration:.6,
                delay:index*.08
              }}
              viewport={{ once:true }}
              whileHover={{
                y:-10
              }}
              className="group rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-bold text-white">
                    {item.name}
                  </h3>

                  <span className="text-sm px-3 py-1 rounded-full bg-blue-500 text-white">
                    {item.goal}
                  </span>

                </div>

                <div className="mt-6 flex justify-between">

                  <div>

                    <p className="text-gray-500 text-sm">
                      Result
                    </p>

                    <h4 className="text-blue-400 text-2xl font-bold">
                      {item.result}
                    </h4>

                  </div>

                  <div className="text-right">

                    <p className="text-gray-500 text-sm">
                      Duration
                    </p>

                    <h4 className="text-white text-xl font-semibold">
                      {item.duration}
                    </h4>

                  </div>

                </div>

                <button className="mt-8 w-full rounded-xl bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600">
                  View Story
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}