import { useState } from 'react'
import { hotelInfo } from '../data/hotelData'

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (newsletterEmail) {
      setSubscribed(true)
      setNewsletterEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  const handleScrollTo = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="footer">
      <div className="container">
        <div className="row g-5">
          {/* Brand Block */}
          <div className="col-12 col-md-6 col-lg-4">
            <a 
              className="footer-brand" 
              href="#home" 
              id="footerBrand"
              onClick={(e) => handleScrollTo(e, 'home')}
            >
              {hotelInfo.name.toUpperCase()}
              <span>{hotelInfo.tagline.toUpperCase()}</span>
            </a>
            <p className="footer-desc">
              Experience standard-setting 5-star hospitality, premium architectural design, and timeless comfort since {hotelInfo.since}.
            </p>
            <div className="footer-social-links">
              <a href={hotelInfo.social.facebook} className="footer-social-link" aria-label="Facebook Link" id="socialFb">
                <i className="bi bi-facebook"></i>
              </a>
              <a href={hotelInfo.social.twitter} className="footer-social-link" aria-label="Twitter Link" id="socialTw">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href={hotelInfo.social.instagram} className="footer-social-link" aria-label="Instagram Link" id="socialIg">
                <i className="bi bi-instagram"></i>
              </a>
              <a href={hotelInfo.social.linkedin} className="footer-social-link" aria-label="LinkedIn Link" id="socialLi">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">
            <h3 className="footer-title">Explore</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About Us</a></li>
              <li><a href="#rooms" onClick={(e) => handleScrollTo(e, 'rooms')}>Our Rooms</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Services</a></li>
            </ul>
          </div>

          {/* Info/Resources */}
          <div className="col-6 col-lg-2">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><a href="#gallery" onClick={(e) => handleScrollTo(e, 'gallery')}>Gallery</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>Contact Us</a></li>
              <li><a href="#footer">Privacy Policy</a></li>
              <li><a href="#footer">Terms of Use</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-6 col-lg-4">
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-newsletter-text">
              Subscribe to receive exclusive seasonal offers and invitations to Aurelia Grand events.
            </p>
            {subscribed ? (
              <div className="text-gold small mb-3">
                <i className="bi bi-check2-circle me-1"></i> Thank you for subscribing! Check your inbox soon.
              </div>
            ) : null}
            <form className="footer-newsletter-form" onSubmit={handleNewsletterSubmit} id="newsletterForm">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your Email Address" 
                  aria-label="Your Email Address" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required 
                />
                <button className="btn" type="submit" aria-label="Subscribe" id="newsletterBtn">
                  <i className="bi bi-send"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright Bottom */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="copyright-text" id="copyrightTxt">
                &copy; 2026 {hotelInfo.name} {hotelInfo.tagline}. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="footer-bottom-links">
                <li><a href="#footer">Privacy</a></li>
                <li><a href="#footer">Terms</a></li>
                <li><a href="#footer">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
