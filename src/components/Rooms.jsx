import { roomsData } from '../data/hotelData'

export default function Rooms({ onBookRoom }) {
  return (
    <section className="section-padding" id="rooms">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Our Accommodations</span>
          <h2 className="section-title text-center" id="roomsTitle">Exquisite Rooms &amp; Suites</h2>
          <p className="section-desc">
            Each space has been meticulously designed with comfort and sophistication in mind, offering a perfect blend of high-end design, technology, and absolute peace.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {roomsData.map((room) => (
            <div className="col-12 col-md-6 col-lg-4" key={room.id}>
              <div className="card room-card h-100" id={`card${room.id}`}>
                <div className="room-card-img-wrapper">
                  <span className="room-badge">{room.badge}</span>
                  <img 
                    src={room.image} 
                    className="room-card-img" 
                    alt={`${room.title} at Aurelia Grand`} 
                  />
                </div>
                <div className="room-card-body d-flex flex-column">
                  <h3 className="room-card-title">{room.title}</h3>
                  <div className="room-price">
                    ${room.price} <span>{room.period}</span>
                  </div>
                  <p className="card-text text-muted mb-4">
                    {room.description}
                  </p>
                  <ul className="room-features flex-grow-1">
                    {room.features.map((item, idx) => (
                      <li key={idx}>
                        <i className={`bi ${item.icon}`}></i> {item.text}
                      </li>
                    ))}
                  </ul>
                  <button 
                    type="button" 
                    className="btn btn-gold-outline w-100 mt-3" 
                    id={`btnBook${room.id}`}
                    onClick={() => onBookRoom(room)}
                  >
                    Book {room.title.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
