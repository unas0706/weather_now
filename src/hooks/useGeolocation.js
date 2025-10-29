import { useState, useEffect } from 'react'

export const useGeolocation = () => {
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.')
      setLocation({ lat: 51.505, lng: -0.09 })
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
      (error) => {
        console.error("Error getting location:", error)
        setError('Unable to retrieve your location. Using default location.')
        setLocation({ lat: 51.505, lng: -0.09 })
      }
    )
  }, [])

  return { location, error }
}