import { useState, useEffect } from 'react'

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      const sections = ['home', 'about', 'rooms', 'services', 'gallery', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 150

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    setIsNavCollapsed(true)
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`} id="mainNavbar">
      <div className="container">
        <a 
          className="navbar-brand" 
          href="#home" 
          id="navBrand"
          onClick={(e) => handleLinkClick(e, 'home')}
        >
          AURELIA GRAND
          <span>LUXURY HOTEL &amp; RESORT</span>
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          aria-expanded={!isNavCollapsed} 
          aria-label="Toggle navigation" 
          id="navbarTogglerBtn"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <div className={`custom-toggler-icon ${!isNavCollapsed ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
                href="#home" 
                id="linkHome"
                onClick={(e) => handleLinkClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'rooms' ? 'active' : ''}`} 
                href="#rooms" 
                id="linkRooms"
                onClick={(e) => handleLinkClick(e, 'rooms')}
              >
                Rooms
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} 
                href="#services" 
                id="linkServices"
                onClick={(e) => handleLinkClick(e, 'services')}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`} 
                href="#gallery" 
                id="linkGallery"
                onClick={(e) => handleLinkClick(e, 'gallery')}
              >
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
                href="#about" 
                id="linkAbout"
                onClick={(e) => handleLinkClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} 
                href="#contact" 
                id="linkContact"
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <button 
                type="button"
                className="btn btn-gold px-4 py-2" 
                id="navBookBtn"
                onClick={() => {
                  setIsNavCollapsed(true)
                  onOpenBooking()
                }}
              >
                Book Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
