import { testimonialsData } from '../data/hotelData'

export default function Testimonials() {
  return (
    <section className="section-padding" id="testimonials">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Guest Reviews</span>
          <h2 className="section-title text-center" id="testimonialsTitle">Stories of Satisfaction</h2>
          <p className="section-desc">
            Read about the premium experiences enjoyed by guests from all corners of the globe.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {testimonialsData.map((review) => (
            <div className="col-12 col-md-6 col-lg-4" key={review.id}>
              <div className="card testimonial-card" id={`cardTestimonial${review.id}`}>
                <i className="bi bi-quote quote-icon"></i>
                <div className="stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <i className="bi bi-star-fill" key={i}></i>
                  ))}
                </div>
                <p className="testimonial-text">&ldquo;{review.text}&rdquo;</p>
                <div className="client-info">
                  <div className="client-avatar-placeholder">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="client-name">{review.name}</h4>
                    <span className="client-role">{review.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
