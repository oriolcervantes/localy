import React from 'react'
import './ShopProfile.css'

const ShopProfile = ({ activeProfile, setActiveProfile }) => {

  const hideProfile = (e) => {
    e.preventDefault();
    setActiveProfile({
      show: false,
      styles: { transform: 'translateY(100%)' },
    });
  }
  return (
    <div className='shopProfileWrap' style={activeProfile.styles}>
      <button onClick={hideProfile}>Close</button>
    </div>
  )
}

export default ShopProfile
