import { useState } from 'react'

export default function BookingBar({ onCheckAvailability }) {
  // Format dates: today and tomorrow as default
  const todayStr = new Date().toISOString().split('T')[0]
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomorrowStr = tomorrow.toISOString().split('T')[0]

  const [checkIn, setCheckIn] = useState(todayStr)
  const [checkOut, setCheckOut] = useState(tomorrowStr)
  const [guests, setGuests] = useState('2')

  const handleSubmit = (e) => {
    e.preventDefault()
    onCheckAvailability({
      checkIn,
      checkOut,
      guests
    })
  }

  return (
    <section className="container px-4 px-lg-0">
      <div className="booking-bar animate-fade-in">
        <form className="row g-3 align-items-end" onSubmit={handleSubmit}>
          <div className="col-12 col-md-6 col-lg-3">
            <label htmlFor="checkInDate" id="lblCheckIn">Check-In</label>
            <input 
              type="date" 
              className="form-control" 
              id="checkInDate" 
              value={checkIn}
              min={todayStr}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <label htmlFor="checkOutDate" id="lblCheckOut">Check-Out</label>
            <input 
              type="date" 
              className="form-control" 
              id="checkOutDate" 
              value={checkOut}
              min={checkIn || todayStr}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <label htmlFor="guestSelect" id="lblGuests">Guests</label>
            <select 
              className="form-select" 
              id="guestSelect"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults &amp; Kids</option>
            </select>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <button type="submit" className="btn btn-gold w-100 py-3" id="bookingBarSearchBtn">
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
