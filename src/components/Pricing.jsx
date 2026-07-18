import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "Starter",
    price: "$49",
    description: "Perfect for beginners starting their fitness journey.",
    features: [
      "Personal Workout Plan",
      "Basic Nutrition Guide",
      "Weekly Check-in",
      "Email Support",
    ],
    featured: false,
  },
  {
    title: "Pro",
    price: "$99",
    description: "The most popular coaching package.",
    features: [
      "Custom Workout Plan",
      "Advanced Nutrition Plan",
      "Weekly Video Call",
      "24/7 WhatsApp Support",
      "Progress Tracking",
    ],
    featured: true,
  },
  {
    title: "Elite",
    price: "$149",
    description: "Complete transformation with premium coaching.",
    features: [
      "Everything in Pro",
      "Daily Accountability",
      "Priority Support",
      "Supplement Guidance",
      "Lifestyle Coaching",
      "Monthly Progress Review",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-[#050816] py-28 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-0 top-20 w-80 h-80 rounded-full bg-blue-500/20 blur-[150px]" />
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Pricing Plans
          </span>

          <h2 className="text-5xl font-black text-white mt-5">
            Choose Your
            <span className="text-blue-400"> Program</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Flexible coaching packages designed for every fitness goal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6, delay: index * .1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl border p-8 backdrop-blur-xl ${
                plan.featured
                  ? "border-blue-500 bg-blue-500/10 scale-105 shadow-2xl shadow-blue-500/20"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-5 py-2 text-sm font-bold text-white">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-3xl font-bold text-white">
                {plan.title}
              </h3>

              <h2 className="mt-6 text-6xl font-black text-blue-400">
                {plan.price}
              </h2>

              <p className="mt-4 text-gray-400">
                {plan.description}
              </p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheck className="text-blue-400" />
                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 w-full rounded-xl py-4 font-semibold transition ${
                  plan.featured
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-white/10 text-white hover:bg-blue-500"
                }`}
              >
                Get Started
              </button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}