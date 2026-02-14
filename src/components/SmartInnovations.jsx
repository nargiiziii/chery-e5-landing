import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Brain, Eye, Wifi, Battery, Zap } from "lucide-react";

const SmartInnovations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const innovations = [
    {
      icon: Brain,
      title: "Seamless Flow",
      description:
        "Intelligent flow management system for a smooth and effortless ride",
    },
    {
      icon: Cpu,
      title: "Smart Processor",
      description: "High-performance processor for lightning-fast data processing",
    },
    {
      icon: Eye,
      title: "Intelligent Guidance",
      description: "Smart control system and advanced driver assistance features",
    },
    {
      icon: Wifi,
      title: "Intelligent in a Glance",
      description: "Instant access to critical information with just one look",
    },
  ];

  const interiorFeatures = [
    {
      title: "Intelligent In-Car Assistant",
      description: "Smart voice assistant to control all vehicle functions",
    },
    {
      title: "Smart Climate Control",
      description: "Automatic maintenance of your ideal cabin environment",
    },
  ];

  return (
    <section
      id="innovations"
      className="section-padding bg-gradient-to-b from-steel-800 to-steel-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-jade-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Smart <span className="gradient-text">Innovations</span>
          </h2>
          <p className="font-display text-2xl md:text-4xl text-steel-200">
            Crafted for Every Drive of the Future
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Innovation Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {innovations.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-card p-6 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="text-4xl">{item.image}</div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-jade-400 to-jade-600 p-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-steel-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right - Interior Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/interior.jpg`} 
                alt="Chery E5 Interior"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {interiorFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="glass-card p-4 hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="text-white font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-steel-300 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Dashboard Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 space-y-4">
              <Battery className="w-16 h-16 text-jade-400" />
              <h3 className="font-display text-2xl font-bold">
                Energy Management
              </h3>
              <p className="text-steel-300">
                Intelligent energy management system for maximum driving efficiency
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/dashboard.jpg`} 
                  alt="Energy Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartInnovations;