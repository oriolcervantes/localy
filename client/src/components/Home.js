import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [state, setstate] = useState({
    longitude: 0,
    latitude: 0
  })


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setstate({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        })
      },
      function (error) {
        console.log(error);
      },
      { enableHighAccuracy: true }
    );
  }, [])

  return (
    <div>
      <h1>Geolocation</h1>
      <p>Longitude: {state.longitude}</p>
      <p>Latitude: {state.latitude}</p>
      <Link to={'/map'} state={state} >See my location</Link>
    </div>
  )
}

export default Home
