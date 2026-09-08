import { useState, useEffect } from 'react'
import { hotelInfo } from '../data/hotelData'

export default function Contact({ preselectedRoom }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roomType: 'deluxe',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (preselectedRoom) {
      setFormData((prev) => ({
        ...prev,
        roomType: preselectedRoom
      }))
    }
  }, [preselectedRoom])

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      // Clear after 6 seconds
      setIsSubmitted(false)
    }, 6000)
  }

  return (
    <section className="section-padding bg-dark-custom" id="contact">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title text-center text-white" id="contactTitle">Book Your Luxury Stay</h2>
          <p className="section-desc text-white-50">
            Reach out to our reservation agents or concierge team directly to organize your upcoming luxury getaway.
          </p>
        </div>

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="contact-info-card" id="cardContactInfo">
              <h3 className="contact-info-title">Contact Information</h3>
              
              <div className="contact-info-item">
                <div className="contact-info-icon" id="infoIconAddress">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="contact-info-text">
                  <h5>Our Location</h5>
                  <p>{hotelInfo.address}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon" id="infoIconPhone">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="contact-info-text">
                  <h5>Reservations Hotline</h5>
                  <p>{hotelInfo.phone}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon" id="infoIconEmail">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="contact-info-text">
                  <h5>Email Contact</h5>
                  <p>{hotelInfo.email}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon" id="infoIconHours">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="contact-info-text">
                  <h5>Working Hours</h5>
                  <p>{hotelInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-wrapper" id="formWrapper">
              {isSubmitted && (
                <div className="luxury-alert-success" role="alert">
                  <i className="bi bi-check-circle-fill"></i>
                  <div>
                    <strong>Reservation Inquiry Received!</strong>
                    <div className="small">Thank you, {formData.name || 'Guest'}. Our concierge team will contact you shortly at {formData.email || 'your email'}.</div>
                  </div>
                </div>
              )}

              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label htmlFor="name" id="lblFormName">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" id="lblFormEmail">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      placeholder="yourname@email.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="roomType" id="lblFormRoomType">Select Room Type</label>
                    <select 
                      className="form-select form-control" 
                      id="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                    >
                      <option value="deluxe">Deluxe Room ($350/Night)</option>
                      <option value="suite">Premium Suite ($550/Night)</option>
                      <option value="family">Family Room ($450/Night)</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" id="lblFormPhone">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="phone" 
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" id="lblFormMessage">Special Inquiries / Requests</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      rows="5" 
                      placeholder="Let us know about airport transfers, dietary restrictions, or specific preferences..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-gold w-100 py-3" id="formSubmitBtn">
                      Submit Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
