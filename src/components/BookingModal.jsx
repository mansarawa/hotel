import { useState, useEffect } from 'react'
import { roomsData } from '../data/hotelData'

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const todayStr = new Date().toISOString().split('T')[0]
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomorrowStr = tomorrow.toISOString().split('T')[0]

  const [bookingDetails, setBookingDetails] = useState({
    checkIn: initialData.checkIn || todayStr,
    checkOut: initialData.checkOut || tomorrowStr,
    guests: initialData.guests || '2',
    roomId: initialData.roomId || 'deluxe',
    name: '',
    email: '',
    phone: '',
    specialRequest: ''
  })
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (initialData) {
      setBookingDetails((prev) => ({
        ...prev,
        ...initialData,
        roomId: initialData.roomId || prev.roomId
      }))
    }
  }, [initialData])

  if (!isOpen) return null

  const selectedRoom = roomsData.find((r) => r.id === bookingDetails.roomId) || roomsData[0]

  // Calculate nights
  const checkInDate = new Date(bookingDetails.checkIn)
  const checkOutDate = new Date(bookingDetails.checkOut)
  const diffTime = Math.max(0, checkOutDate - checkInDate)
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)))
  const totalCost = nights * selectedRoom.price

  const handleChange = (e) => {
    const { name, value } = e.target
    setBookingDetails((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      onClose()
    }, 4000)
  }

  return (
    <div className="luxury-modal-backdrop" onClick={onClose}>
      <div className="luxury-modal" onClick={(e) => e.stopPropagation()}>
        <div className="luxury-modal-header">
          <div>
            <span className="section-subtitle mb-1">Direct Reservation</span>
            <h3 className="luxury-modal-title">Book Your Sanctuary</h3>
          </div>
          <button className="luxury-modal-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        {isSuccess ? (
          <div className="luxury-alert-success" style={{ margin: '20px 0' }}>
            <i className="bi bi-patch-check-fill" style={{ fontSize: '2rem' }}></i>
            <div>
              <h5 className="mb-1 text-white">Booking Confirmed!</h5>
              <p className="mb-0 small text-gold-light">
                Thank you, {bookingDetails.name}. A confirmation email with your booking itinerary has been sent to {bookingDetails.email}.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label text-gold small text-uppercase">Room Type</label>
                <select 
                  className="form-select" 
                  name="roomId" 
                  value={bookingDetails.roomId}
                  onChange={handleChange}
                >
                  {roomsData.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.title} (${room.price}/Night)
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label text-gold small text-uppercase">Guests</label>
                <select 
                  className="form-select" 
                  name="guests" 
                  value={bookingDetails.guests}
                  onChange={handleChange}
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults &amp; Kids</option>
                </select>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label text-gold small text-uppercase">Check-In</label>
                <input 
                  type="date" 
                  className="form-control" 
                  name="checkIn"
                  min={todayStr}
                  value={bookingDetails.checkIn}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label text-gold small text-uppercase">Check-Out</label>
                <input 
                  type="date" 
                  className="form-control" 
                  name="checkOut"
                  min={bookingDetails.checkIn || todayStr}
                  value={bookingDetails.checkOut}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label text-gold small text-uppercase">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="name" 
                  placeholder="e.g. John Doe"
                  value={bookingDetails.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label text-gold small text-uppercase">Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  name="email" 
                  placeholder="e.g. john@example.com"
                  value={bookingDetails.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Price summary badge */}
              <div className="col-12">
                <div className="p-3 my-2" style={{ background: 'rgba(197, 168, 128, 0.08)', border: '1px solid rgba(197, 168, 128, 0.2)' }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <strong className="text-white font-serif">{selectedRoom.title}</strong>
                      <div className="small text-muted">{nights} night{nights > 1 ? 's' : ''} &bull; ${selectedRoom.price} per night</div>
                    </div>
                    <div className="text-end">
                      <div className="small text-gold text-uppercase">Estimated Total</div>
                      <strong className="text-gold fs-4">${totalCost}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-gold w-100 py-3">
                  Confirm Reservation
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
