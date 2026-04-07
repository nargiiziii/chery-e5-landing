import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Gauge, Shield, Zap, Sun, Droplet } from "lucide-react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Leaf,
      title: "Sustainable",
      subtitle: "Energy Efficiency",
      description: "Eco-friendliness and energy efficiency for the future of our planet",
      color: "from-green-400 to-jade-500",
    },
    {
      icon: Gauge,
      title: "Tax Light",
      subtitle: "Premium Choice",
      description:
        "Tax incentives and a premium choice for savvy owners",
      color: "from-jade-400 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      subtitle: "Peace of Mind",
      description: "Lifetime warranty and confidence in every journey",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Zap,
      title: "Zero Maintenance",
      subtitle: "Easy Ownership",
      description:
        "Minimal maintenance and simple ownership of your electric vehicle",
      color: "from-jade-400 to-green-500",
    },
    {
      icon: Sun,
      title: "Environment Friendly",
      subtitle: "Green Future",
      description: "Respect for the environment and a clean future",
      color: "from-yellow-400 to-jade-500",
    },
    {
      icon: Droplet,
      title: "Hydrophobic Exterior",
      subtitle: "Self-Cleaning",
      description: "Hydrophobic coating and self-cleaning exterior",
      color: "from-blue-400 to-jade-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="features"
      className="section-padding bg-gradient-to-b from-steel-900 to-steel-800 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-jade-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-jade-600/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Made to <span className="gradient-text">Elevate</span>
          </h2>
          <h3 className="font-display text-3xl md:text-5xl font-bold text-steel-200">
            Every Journey
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-16">
            <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/car-side.webp`}
                alt="Chery E5 Side View"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="feature-card group"
              >
                <div className="space-y-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-jade-400 font-medium text-sm uppercase tracking-wider">
                      {feature.subtitle}
                    </p>
                    <p className="text-steel-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-jade-400 to-jade-600 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;