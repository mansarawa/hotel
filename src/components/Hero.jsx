export default function Hero({ onOpenBooking }) {
  const handleScrollToRooms = (e) => {
    e.preventDefault()
    const roomsEl = document.getElementById('rooms')
    if (roomsEl) {
      roomsEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="hero-section" id="home">
      <div className="container hero-content animate-fade-in-up">
        <span className="hero-subtitle">Welcome to Pure Luxury</span>
        <h1 className="hero-title">Experience <span>Luxury</span> &amp; Comfort</h1>
        <p className="hero-desc">
          A sanctuary of style, sophistication, and timeless elegance. Experience the finest world-class hospitality in our beautifully curated rooms and suites.
        </p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <button 
            type="button" 
            className="btn btn-gold" 
            id="heroBookBtn"
            onClick={onOpenBooking}
          >
            Book Your Stay
          </button>
          <a 
            href="#rooms" 
            className="btn btn-outline-white" 
            id="heroExploreBtn"
            onClick={handleScrollToRooms}
          >
            Explore Rooms
          </a>
        </div>
      </div>
    </header>
  )
}
