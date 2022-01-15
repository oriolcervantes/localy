import React, { useEffect } from 'react'
import './ShopDetails.css'

const ShopDetails = (props) => {

  const shop = props.shopDetails.show === true ? props.shopDetails.shop[0] : undefined;
  const style = props.shopDetails.styles;
  const setShopDetails = props.setShopDetails;
  const shopDetails = props.shopDetails;

  const toggleDetails = (e) => {
    e.preventDefault();
    if (shopDetails.isFullyUnfolded === false) {
      setShopDetails({
        ...shopDetails,
        styles: { transform: 'translateY(0%)' },
        isFullyUnfolded: true
      });
    } else {
      setShopDetails({
        ...shopDetails,
        styles: { transform: 'translateY(70%)' },
        isFullyUnfolded: false
      });
    }
  }

  const hideDetails = (e) => {
    e.preventDefault();
    setShopDetails({
      ...shopDetails,
      styles: { transform: 'translateY(100%)' },
      isFullyUnfolded: false,
      show: false,
      shop: {}
    });
  }

  const seeMoreButton = "See more";
  const seeLessButton = "See less";

  return (
    <div className="shopDetailsWrap" style={style}>
      {props.shopDetails.show === true ?
        <div className="shopDetails">
          <h1>{shop.name}</h1>
          <p>{shop.address}</p>
          <p>{shop.telephone}</p>
          <p>{shop.website}</p>
          <img src={shop.picture} style={{ width: "100px" }} alt="Shop"></img>
          <button onClick={toggleDetails}>{shopDetails.isFullyUnfolded ? seeLessButton : seeMoreButton}</button>
          <button onClick={hideDetails}>Close</button>
        </div>
        :
        <></>}
    </div>
  )
}

export default ShopDetails
