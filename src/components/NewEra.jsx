import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

const NewEra = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="section-padding bg-gradient-to-b from-steel-800 via-jade-900/20 to-steel-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-jade-600/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-jade-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="/images/wheel.webp"
                  alt="Chery E5 Wheel Design"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl"
              >
                <div className="text-center">
                  <p className="text-jade-400 font-bold text-2xl">600+</p>
                  <p className="text-steel-300 text-sm">km range</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="text-jade-400 font-medium text-sm md:text-base tracking-wider uppercase">
                  Step Into The Future
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display text-4xl md:text-6xl font-bold leading-tight"
              >
                Step Into a <span className="gradient-text">New Era</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-display text-2xl md:text-3xl text-steel-200"
              >
                Drive with Purpose,
                <br />
                Move with Energy
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-steel-300 text-lg leading-relaxed"
              >
                Discover a new era of electric vehicles. CHERY E5 combines 
                advanced technology, eco-friendliness, and unmatched 
                comfort. The future of mobility starts here and now.
              </motion.p>
            </div>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                "Fast Charging",
                "Lifetime Warranty",
                "Zero Emissions",
                "Smart Technologies",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-jade-400 rounded-full"></div>
                  <span className="text-steel-200">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary flex items-center justify-center space-x-2 group">
                <Calendar size={20} />
                <span>Book a Test Drive</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="btn-secondary">Check Pricing</button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="glass-card p-6 grid grid-cols-3 gap-4"
            >
              {[
                { value: "10K+", label: "Happy Customers" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "5★", label: "Average Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-2xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-steel-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewEra;