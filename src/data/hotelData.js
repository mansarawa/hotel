export const hotelInfo = {
  name: 'Aurelia Grand',
  tagline: 'Luxury Hotel & Resort',
  since: '1928',
  address: '742 Luxury Avenue, Elite District, NY 10021',
  phone: '+1 (555) 234-5678',
  email: 'reservations@aureliagrand.com',
  hours: 'Reservations open 24/7',
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
  }
}

export const roomsData = [
  {
    id: 'deluxe',
    title: 'Deluxe Room',
    badge: 'Popular',
    price: 350,
    period: '/ Night',
    image: '/assets/images/room_deluxe.png',
    description: 'A perfect retreat of modern elegance. Indulge in designer furniture, custom bedding, and premium smart tech features.',
    features: [
      { icon: 'bi-arrows-fullscreen', text: '45 m² Area' },
      { icon: 'bi-tv', text: 'Smart TV & Sound System' },
      { icon: 'bi-wifi', text: 'Free High-Speed Wi-Fi' },
      { icon: 'bi-cup-hot', text: 'Premium Coffee Machine' }
    ]
  },
  {
    id: 'suite',
    title: 'Premium Suite',
    badge: 'Best Choice',
    price: 550,
    period: '/ Night',
    image: '/assets/images/room_suite.png',
    description: 'Unparalleled ocean-front luxury. Enjoy a separate lounge area, marble spa bathroom, and personalized butler service.',
    features: [
      { icon: 'bi-arrows-fullscreen', text: '75 m² Area' },
      { icon: 'bi-brightness-high', text: 'Private Ocean-view Balcony' },
      { icon: 'bi-person-check', text: '24/7 Butler Service' },
      { icon: 'bi-water', text: 'Luxury Marble Bathtub' }
    ]
  },
  {
    id: 'family',
    title: 'Family Room',
    badge: 'Spacious',
    price: 450,
    period: '/ Night',
    image: '/assets/images/room_family.png',
    description: 'Exquisite living designed for the family. Features two queen beds, custom kids\' amenities, and serene garden-view vistas.',
    features: [
      { icon: 'bi-arrows-fullscreen', text: '60 m² Area' },
      { icon: 'bi-people', text: 'Comfortably Sleeps 4 Guests' },
      { icon: 'bi-controller', text: 'Dedicated Entertainment Box' },
      { icon: 'bi-balloon', text: 'Kids Welcome Pack' }
    ]
  }
]

export const servicesData = [
  {
    id: 'dining',
    title: 'Fine Dining',
    icon: 'bi-cup-straw',
    description: 'Savor spectacular seasonal menus created by Michelin-starred culinary professionals, served with exquisite pairings.'
  },
  {
    id: 'pool',
    title: 'Infinity Pool',
    icon: 'bi-water',
    description: 'Relax and swim in our outdoor heated infinity pool, featuring panoramic vistas of the spectacular skyline.'
  },
  {
    id: 'spa',
    title: 'Spa & Wellness',
    icon: 'bi-flower1',
    description: 'Rejuvenate with custom stone massages, essential oil treatments, and steam therapies in our high-end spa center.'
  },
  {
    id: 'wifi',
    title: 'Ultra-Fast Wi-Fi',
    icon: 'bi-wifi',
    description: 'Stay seamlessly connected throughout the entire resort grounds with high-performance optical fiber connectivity.'
  },
  {
    id: 'room-service',
    title: '24/7 Room Service',
    icon: 'bi-bell',
    description: 'Bespoke, private in-room dining and concierge services delivered to your door within moments, day or night.'
  }
]

export const galleryData = [
  {
    id: 1,
    title: 'Infinity Pool',
    category: 'Amenities',
    subtitle: 'Sunset view',
    image: '/assets/images/hero_bg.png'
  },
  {
    id: 2,
    title: 'Deluxe Bedroom',
    category: 'Rooms',
    subtitle: 'Elegant interior',
    image: '/assets/images/room_deluxe.png'
  },
  {
    id: 3,
    title: 'Premium Suite',
    category: 'Rooms',
    subtitle: 'Ocean-front View',
    image: '/assets/images/room_suite.png'
  },
  {
    id: 4,
    title: 'The Grand Lobby',
    category: 'Hotel',
    subtitle: 'Concierge Lounge',
    image: '/assets/images/about_hotel.png'
  },
  {
    id: 5,
    title: 'Wellness Spa',
    category: 'Wellness',
    subtitle: 'Massage Treatment Room',
    image: '/assets/images/gallery_spa.png'
  },
  {
    id: 6,
    title: 'Grand Restaurant',
    category: 'Dining',
    subtitle: 'Fine Gastronomy',
    image: '/assets/images/gallery_restaurant.png'
  }
]

export const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Leisure Traveler',
    initials: 'SJ',
    rating: 5,
    text: 'An absolute dream stay! The concierge arranged everything perfectly. The views from the Premium Suite balcony were unforgettable. Highly recommended.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Executive Guest',
    initials: 'MC',
    rating: 5,
    text: 'Exquisite service, luxurious bedding, and Michelin-starred dining on site. Aurelia Grand is our new favorite hotel. Worth every single penny.'
  },
  {
    id: 3,
    name: 'Emma Watson',
    role: 'Wellness Enthusiast',
    initials: 'EW',
    rating: 5,
    text: 'The spa treatments are heavenly. The infinity pool at sunset is a sight to behold. Truly a 5-star experience from start to finish.'
  }
]

export const aboutFeatures = [
  {
    id: 1,
    icon: 'bi-house-heart',
    title: 'Luxury Rooms',
    description: 'Indulgently spacious bedrooms featuring curated fine art, Italian linens, and stunning panoramic views.'
  },
  {
    id: 2,
    icon: 'bi-award',
    title: 'Premium Service',
    description: 'Experience 24/7 personalized concierge services and high-end amenities tailored to your exact taste.'
  },
  {
    id: 3,
    icon: 'bi-geo-alt',
    title: 'Best Location',
    description: 'Nestled in the city\'s premier district, placing the absolute best dining, arts, and shopping at your doorstep.'
  }
]
