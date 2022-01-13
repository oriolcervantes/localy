import React from 'react'
import './ShopDetails.css'

const ShopDetails = (props) => {

  const shop = props.shopDetails.show === true ? props.shopDetails.shop[0] : undefined;
  const style = props.shopDetails.styles;

  const unfoldDetails = () => {
    props.shopDetails.styles = { transform: 'translateY(100%)' }
  }

  return (
    <div className="shopDetailsWrap" style={style}>
      {props.shopDetails.show === true ?
        <div className="shopDetails">
          <h1>{shop.name}</h1>
          <p>{shop.address}</p>
          <p>{shop.telephone}</p>
          <p>{shop.website}</p>
          <button onClick={(e) => (e) => { unfoldDetails() }}>See more</button>
        </div>
        :
        <></>}
    </div>
  )
}

export default ShopDetails
