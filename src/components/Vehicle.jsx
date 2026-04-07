import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

const Vehicle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = [
    {
      name: "Green Jade Two Tone",
      color: "bg-gradient-to-br from-jade-300 to-jade-600",
    },
    {
      name: "Pearl White",
      color: "bg-gradient-to-br from-gray-100 to-gray-300",
    },
    {
      name: "Midnight Black",
      color: "bg-gradient-to-br from-gray-800 to-black",
    },
    {
      name: "Silver Metallic",
      color: "bg-gradient-to-br from-gray-400 to-gray-600",
    },
  ];

  const specs = [
    { label: "Price from", value: "CNY 369,900" },
    { label: "Power", value: "400+ hp" },
    { label: "Range", value: "600+ km" },
    { label: "0-100 km/h", value: "3.8 sec" },
  ];

  return (
    <section
      id="vehicle"
      className="section-padding bg-gradient-to-b from-steel-900 via-steel-800 to-steel-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-jade-900/10 via-transparent to-transparent"></div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-block">
            <span className="text-jade-400 font-medium text-sm md:text-base tracking-wider uppercase">
              Drive E-Future
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-bold">
            CHERY <span className="gradient-text">E5</span>
          </h2>

          <p className="text-steel-300 text-xl max-w-2xl mx-auto">
            The future of electric vehicles starts today
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative aspect-[16/9] bg-gradient-to-br from-steel-700/20 to-jade-900/10 rounded-3xl backdrop-blur-sm border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-jade-400/0 via-jade-400/5 to-jade-600/10 group-hover:from-jade-400/10 group-hover:via-jade-400/20 group-hover:to-jade-600/30 transition-all duration-500"></div>

            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/car-colors/${selectedColor === 0 ? "green" : selectedColor === 1 ? "white" : selectedColor === 2 ? "black" : "silver"}.jpg`}
                alt={`Chery E5 ${colors[selectedColor].name}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-900/60 to-transparent"></div>

              <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
                <ChevronLeft className="text-white" />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
                <ChevronRight className="text-white" />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <div className="glass-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h3 className="font-display text-xl md:text-2xl font-bold text-center md:text-left">
                {colors[selectedColor].name}
              </h3>

              <div className="flex flex-nowrap gap-3 md:gap-4">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-10 h-10 md:w-16 md:h-16 rounded-full ${color.color} border-2 md:border-4 transition-all duration-300 ${
                      selectedColor === index
                        ? "border-white scale-110 shadow-lg"
                        : "border-white/30 hover:border-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {specs.map((spec, index) => (
            <div
              key={index}
              className="glass-card p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300 group"
            >
              <p className="text-steel-400 text-xs md:text-sm mb-1 md:mb-2">
                {spec.label}
              </p>
              <p className="font-display text-lg md:text-2xl font-bold gradient-text group-hover:scale-105 transition-transform">
                {spec.value}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn-primary w-full sm:w-auto">
            Book a Test Drive
          </button>
          <button className="btn-secondary w-full sm:w-auto">
            View Details
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center gap-2 mt-12"
        >
          {[0, 1, 2].map((dot) => (
            <Circle
              key={dot}
              className={`w-3 h-3 ${dot === 0 ? "fill-jade-400 text-jade-400" : "fill-steel-600 text-steel-600"}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Vehicle;
