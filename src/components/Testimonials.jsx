import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      text: "Every drive feels effortless. The transition is smooth, quiet, and powerful — it's like floating on a cloud. The responsiveness and control gave me confidence on every road.",
      author: 'Maria Gonzalez',
      role: 'Happy Owner',
      rating: 5
    },
    {
      text: 'Impressive technology and incredible comfort. Every trip turns into a pleasure. The driver assistance system works flawlessly.',
      author: 'Alexander Petrov',
      role: 'E5 Owner',
      rating: 5
    },
    {
      text: 'Savings on fuel and maintenance have exceeded all expectations. This is not just a car — it is an investment in the future.',
      author: 'Elena Smirnova',
      role: 'Business Executive',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-steel-900 to-steel-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-jade-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="font-display text-2xl md:text-3xl text-steel-200">
            About Their Driving Experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-card p-8 hover:bg-white/15 transition-all duration-300 group relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-jade-400 to-jade-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-jade-400 text-jade-400" />
                ))}
              </div>

              <p className="text-steel-200 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-white/10 pt-4">
                <p className="font-display text-lg font-bold gradient-text">
                  {testimonial.author}
                </p>
                <p className="text-steel-400 text-sm">
                  {testimonial.role}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-jade-400 to-jade-600 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-steel-300 mb-6 text-lg">
            Join thousands of satisfied owners
          </p>
          <button className="btn-primary">
            Leave a Review
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials