import React, { useState } from 'react'
import './ShopElement.css'
import ShopProfile from './ShopProfile'

const ShopElement = ({ shop }) => {

  const [activeProfile, setActiveProfile] = useState({
    show: false,
    styles: { transform: 'translateY(100%)' },
  })

  const showShopProfile = (e) => {
    e.preventDefault();
    setActiveProfile({
      show: true,
      styles: { transform: 'translateY(0%)' },
    })
  }

  return (
    <div className="shopElement">
      <h5>{shop.name}</h5>
      <button className="showProfileBtn" onClick={showShopProfile}>Edit</button>
      <ShopProfile activeProfile={activeProfile} setActiveProfile={setActiveProfile} />
    </div>
  )
}

export default ShopElement
