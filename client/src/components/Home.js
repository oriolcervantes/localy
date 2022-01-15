import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ShopAuth from './ShopAuth'

const Home = () => {

  const [state, setstate] = useState({
    longitude: 0,
    latitude: 0
  })

  const [activeForm, setActiveForm] = useState({
    show: false,
    styles: { transform: 'translateY(100%)' },
    which: "none"
  })

  const handleClick = (whichform) => {
    setActiveForm({
      show: true,
      styles: { transform: 'translateY(0%)' },
      which: whichform
    })
  }


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
    <>
      <h1>Localy</h1>
      <p>Longitude: {state.longitude}</p>
      <p>Latitude: {state.latitude}</p>
      <Link to={'/map'} state={state} >Find Nearby Shops</Link>
      <h2>Are you a shop owner?</h2>
      <button onClick={(e) => { handleClick("login") }}>Login</button>
      <button onClick={(e) => { handleClick("register") }}>Register</button>
      <ShopAuth activeForm={activeForm} />
    </>
  )
}

export default Home
