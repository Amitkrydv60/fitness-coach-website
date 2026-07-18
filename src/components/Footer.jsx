import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030712] pt-20">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-black text-white">
            ELITE<span className="text-blue-500">FIT</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            Helping people build stronger bodies, healthier lifestyles
            and long-term confidence through personalized coaching.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-white">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#services" className="hover:text-blue-400">Services</a></li>
            <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-white">
            Programs
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li>Personal Training</li>
            <li>Online Coaching</li>
            <li>Muscle Building</li>
            <li>Fat Loss</li>
            <li>Nutrition Coaching</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-white">
            Follow Me
          </h3>

          <div className="flex gap-4">

            {[FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-white transition hover:bg-blue-500"
                >
                  <Icon />
                </a>
              )
            )}

          </div>

          <p className="mt-8 text-gray-400">
            Available Monday - Saturday
          </p>

          <p className="text-gray-500">
            9:00 AM - 7:00 PM
          </p>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-gray-500">
        © 2026 ELITEFIT. All Rights Reserved.
      </div>

    </footer>
  );
}