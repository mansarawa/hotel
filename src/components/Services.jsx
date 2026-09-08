import { servicesData } from '../data/hotelData'

export default function Services() {
  return (
    <section className="section-padding bg-dark-custom" id="services">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Luxury Amenities</span>
          <h2 className="section-title text-center text-white" id="servicesTitle">World-Class Services</h2>
          <p className="section-desc text-white-50">
            Every moment of your stay at Aurelia Grand is designed to provide seamless comfort, luxury wellness, and gastronomic joy.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {servicesData.map((service) => (
            <div className="col-12 col-md-6 col-lg-4" key={service.id}>
              <div className="card service-card h-100" id={`cardService${service.id}`}>
                <div className="service-icon-box">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
