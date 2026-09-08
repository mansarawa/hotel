import { aboutFeatures } from '../data/hotelData'

export default function About() {
  return (
    <section className="section-padding bg-light-custom" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="section-subtitle">Since 1928</span>
            <h2 className="section-title" id="aboutTitle">A Heritage of Elegance and Timeless Style</h2>
            <p className="mb-4">
              For nearly a century, Aurelia Grand has redefined luxury hospitality. Set in the heart of the city, our sanctuary blends historical elegance with modern, sophisticated design to offer you an unparalleled living experience.
            </p>
            <p className="mb-4">
              From custom-tailored room fragrances to bespoke butler service, every detail is engineered to wow your senses and leave an everlasting impression of luxury.
            </p>
            
            <div className="about-features">
              {aboutFeatures.map((feat) => (
                <div className="about-feature-item" key={feat.id}>
                  <div className="about-feature-icon" id={`featIcon${feat.id}`}>
                    <i className={`bi ${feat.icon}`}></i>
                  </div>
                  <div className="about-feature-text">
                    <h4 className="about-feature-title">{feat.title}</h4>
                    <p className="about-feature-desc">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img-wrapper">
              <img 
                src="/assets/images/about_hotel.png" 
                alt="Aurelia Grand Luxury Lobby" 
                className="about-img img-fluid" 
                id="aboutImg" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
