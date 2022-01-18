import React, { useState } from 'react'
import './ShopElement.css'
import ShopProfile from './ShopProfile'

const ShopElement = ({ shop, updateShopsState }) => {

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
      <h3 className="shopElementName">{shop.name}</h3>
      <button className="shopElementEdit" onClick={showShopProfile}>Edit</button>
      <ShopProfile activeProfile={activeProfile} setActiveProfile={setActiveProfile} shop={shop} updateShopsState={updateShopsState} />
    </div>
  )
}

export default ShopElement
