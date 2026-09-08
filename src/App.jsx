import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingBar from './components/BookingBar'
import About from './components/About'
import Rooms from './components/Rooms'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalInitialData, setModalInitialData] = useState({})
  const [preselectedRoom, setPreselectedRoom] = useState('deluxe')

  const handleOpenBooking = (data = {}) => {
    setModalInitialData(data)
    setIsModalOpen(true)
  }

  const handleCloseBooking = () => {
    setIsModalOpen(false)
  }

  const handleBookRoom = (room) => {
    setPreselectedRoom(room.id)
    handleOpenBooking({
      roomId: room.id
    })
  }

  const handleCheckAvailability = ({ checkIn, checkOut, guests }) => {
    handleOpenBooking({
      checkIn,
      checkOut,
      guests
    })
  }

  return (
    <div className="app-container">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* Quick Booking Bar */}
      <BookingBar onCheckAvailability={handleCheckAvailability} />

      {/* About Hotel */}
      <About />

      {/* Accommodations */}
      <Rooms onBookRoom={handleBookRoom} />

      {/* World-Class Services */}
      <Services />

      {/* Visual Experience / Gallery */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact & Inquiries */}
      <Contact preselectedRoom={preselectedRoom} />

      {/* Footer */}
      <Footer />

      {/* Quick Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={handleCloseBooking} 
        initialData={modalInitialData} 
      />
    </div>
  )
}
