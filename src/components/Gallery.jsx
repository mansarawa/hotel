import { useState } from 'react'
import { galleryData } from '../data/hotelData'

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [activeImage, setActiveImage] = useState(null)

  const categories = ['All', 'Rooms', 'Dining', 'Wellness', 'Amenities', 'Hotel']

  const filteredItems = selectedFilter === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category.toLowerCase() === selectedFilter.toLowerCase())

  return (
    <section className="section-padding bg-light-custom" id="gallery">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Visual Experience</span>
          <h2 className="section-title text-center" id="galleryTitle">The Aurelia Gallery</h2>
          <p className="section-desc">
            Take a visual tour through our elegant spaces, luxury suites, relaxation centers, and fine dining locations.
          </p>
        </div>

        {/* Interactive category filter buttons */}
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`gallery-filter-btn ${selectedFilter === category ? 'active' : ''}`}
              onClick={() => setSelectedFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              className="gallery-item" 
              key={item.id} 
              id={`galleryItem${item.id}`}
              onClick={() => setActiveImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveImage(item)}
            >
              <img 
                src={item.image} 
                alt={`${item.title} - ${item.subtitle}`} 
                className="gallery-item-img" 
              />
              <div className="gallery-item-overlay">
                <div className="gallery-overlay-icon">
                  <i className="bi bi-camera"></i>
                </div>
                <h4 className="gallery-overlay-title">{item.title}</h4>
                <span className="gallery-overlay-subtitle">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Lightbox Modal */}
        {activeImage && (
          <div 
            className="lightbox-backdrop" 
            onClick={() => setActiveImage(null)}
          >
            <div 
              className="lightbox-content animate-fade-in" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="d-flex justify-content-between align-items-center mb-2 px-1">
                <div>
                  <h4 className="font-serif mb-0 text-white">{activeImage.title}</h4>
                  <small className="text-gold text-uppercase">{activeImage.subtitle} &bull; {activeImage.category}</small>
                </div>
                <button 
                  className="lightbox-close" 
                  aria-label="Close" 
                  onClick={() => setActiveImage(null)}
                >
                  &times;
                </button>
              </div>
              <img 
                src={activeImage.image} 
                alt={activeImage.title} 
                className="lightbox-img" 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
