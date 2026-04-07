import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    products: [
      { name: "E5 Sedan", href: "#" },
      { name: "E5 SUV", href: "#" },
      { name: "E7 Premium", href: "#" },
      { name: "All Models", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "News", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Center", href: "#" },
    ],
    support: [
      { name: "Service Centers", href: "#" },
      { name: "Warranty", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Legal Information", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="bg-gradient-to-b from-steel-900 to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-jade-400 to-transparent"></div>

      <div className="container-custom px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="font-display text-3xl font-bold gradient-text mb-4">
                CHERY
              </h3>
              <p className="text-steel-400 text-sm leading-relaxed">
                Creating the future of electric vehicles. Innovation, quality,
                and environmental care in every car.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-steel-300 hover:text-jade-400 transition-colors">
                <Phone size={18} />
                <span className="text-sm">+7 (800) 555-35-35</span>
              </div>
              <div className="flex items-center space-x-3 text-steel-300 hover:text-jade-400 transition-colors">
                <Mail size={18} />
                <span className="text-sm">info@chery-e5.com</span>
              </div>
              <div className="flex items-start space-x-3 text-steel-300 hover:text-jade-400 transition-colors">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  39 Leningradsky Prospekt, Moscow
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-steel-400 hover:text-jade-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-steel-400 hover:text-jade-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-steel-400 hover:text-jade-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-steel-400 hover:text-jade-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass-card p-6 md:p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h4 className="font-display text-2xl font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-steel-400 text-sm">
                Get the latest news about products and special offers
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-steel-400 focus:outline-none focus:border-jade-400 transition-colors"
              />
              <button className="btn-primary w-full sm:w-auto whitespace-nowrap justify-center">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-steel-400 text-sm">
            © 2026 CHERY E5. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-jade-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} className="text-white" />
                </a>
              );
            })}
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/10 hover:bg-jade-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} className="text-white" />
          </button>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p className="text-steel-500 text-xs tracking-wider uppercase">
            Drive Into the Future of Electric Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
