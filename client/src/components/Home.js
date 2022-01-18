import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ShopAuth from './ShopAuth'
import "./Home.css"

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
    <section className="homePageWrap">
      <img className="whitePinLogotype" src={require("../assets/white_pin.png")} alt="Localy Pin Icon"></img>
      <img className="fullLogotype" src={require("../assets/white_logo_full.png")} alt="Localy Logotype"></img>
      <h1 className="homePageH1">Find your local shopkeeper</h1>
      <Link className="mapLink" to={'/map'} state={state} ><button className="goToMapBtn">Go to Map</button></Link>
      <section className="loginSection">
        <h2 className="homePageH2">Are you a shop owner?</h2>
        <button className="loginBtn" onClick={(e) => { handleClick("login") }}>Login</button>
        <button className="registerBtn" onClick={(e) => { handleClick("register") }}>Register</button>
        <ShopAuth activeForm={activeForm} state={state} />
      </section>
    </section>
  )
}

export default Home
