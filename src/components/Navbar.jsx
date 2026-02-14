import { useState } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'innovations', label: 'Innovations' },
    { id: 'vehicle', label: 'Vehicle' },
    { id: 'testimonials', label: 'Testimonials' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-steel-900/95 backdrop-blur-lg shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-display font-bold gradient-text">
              CHERY
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-steel-200 hover:text-jade-400 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jade-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button className="btn-primary flex items-center space-x-2">
              <span>Test Drive</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-steel-800/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-steel-200 hover:text-jade-400 transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <button className="btn-primary w-full flex items-center justify-center space-x-2">
                <span>Test Drive</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar