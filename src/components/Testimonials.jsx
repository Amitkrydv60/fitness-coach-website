import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";

const testimonials = [
  {
    image: client1,
    name: "Michael Johnson",
    role: "Entrepreneur",
    review:
      "The coaching completely changed my lifestyle. I lost 18kg and gained confidence I never had before.",
  },
  {
    image: client2,
    name: "David Wilson",
    role: "Software Engineer",
    review:
      "Professional guidance, customized plans and constant motivation. Worth every penny.",
  },
  {
    image: client3,
    name: "Chris Miller",
    role: "Business Owner",
    review:
      "I gained lean muscle while improving my strength. The accountability made all the difference.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-[#050816] py-28 overflow-hidden"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-blue-400">
            Testimonials
          </span>

          <h2 className="mt-5 text-5xl font-black text-white">
            What My Clients
            <span className="text-blue-400"> Say</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Real feedback from people who transformed their lives.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="mb-5 flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="mr-1 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-gray-300">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full border-2 border-blue-500 object-cover"
                />

                <div>
                  <h3 className="font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-gray-400">
                    {item.role}
                  </p>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}