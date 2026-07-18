import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[160px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <span className="font-semibold uppercase tracking-[4px] text-blue-400">
            Contact Me
          </span>

          <h2 className="mt-5 text-5xl font-black text-white">
            Let's Build Your
            <span className="text-blue-400"> Best Body</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Ready to transform your body? Get in touch today and
            let's create a personalized fitness plan built around
            your goals.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="rounded-xl bg-blue-500 p-4 text-white">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-gray-400">Email</p>
                <h4 className="font-semibold text-white">
                  coach@email.com
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="rounded-xl bg-blue-500 p-4 text-white">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-gray-400">Phone</p>
                <h4 className="font-semibold text-white">
                  +1 (555) 123-4567
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="rounded-xl bg-blue-500 p-4 text-white">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-gray-400">Location</p>
                <h4 className="font-semibold text-white">
                  New York, USA
                </h4>
              </div>
            </div>

          </div>

          <div className="mt-10 flex gap-4">
            {[FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-white transition hover:bg-blue-500"
              >
                <Icon />
              </a>
            ))}
          </div>

        </motion.div>

        {/* Right */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              placeholder="First Name"
              className="rounded-xl border border-white/10 bg-[#0b1220] p-4 text-white outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="rounded-xl border border-white/10 bg-[#0b1220] p-4 text-white outline-none focus:border-blue-500"
            />

          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="mt-6 w-full rounded-xl border border-white/10 bg-[#0b1220] p-4 text-white outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Subject"
            className="mt-6 w-full rounded-xl border border-white/10 bg-[#0b1220] p-4 text-white outline-none focus:border-blue-500"
          />

          <textarea
            rows="6"
            placeholder="Tell me about your fitness goals..."
            className="mt-6 w-full rounded-xl border border-white/10 bg-[#0b1220] p-4 text-white outline-none focus:border-blue-500"
          />

          <button
            className="mt-8 w-full rounded-xl bg-blue-500 py-4 font-semibold text-white transition hover:bg-blue-600"
          >
            Send Message
          </button>

        </motion.form>

      </div>
    </section>
  );
}