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
        styles: { transform: 'translateY(15%)' },
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
          <h1 className="shopDetailsName">{shop.name}</h1>
          <button className="unfoldDetailsBtn" onClick={toggleDetails}>{shopDetails.isFullyUnfolded ? seeLessButton : seeMoreButton}</button>
          <div className="shopDetailsCategory">
            <img className="shopDetailsIcon" src={require("../assets/phone.png")} alt="Telephone Icon" />
            <p className="shopDetailsText">{shop.telephone}</p>
          </div>
          <div className="shopDetailsCategory">
            <img className="shopDetailsIcon" src={require("../assets/house.png")} alt="Address Icon" />
            <p className="shopDetailsText">{shop.address}</p>
          </div>
          <div className="shopImagesWrap">
            <div className="imageWrap">
              <img className="shopImage" src={shop.picture} alt="Shop"></img>
            </div>
          </div>
          <div className="shopDetailsCategory">
            <img className="shopDetailsIcon" src={require("../assets/world.png")} alt="Web Icon" />
            <p className="shopDetailsText">{shop.web}</p>
          </div>
          <div className="shopDetailsCategory">
            <img className="shopDetailsIcon" src={require("../assets/email.png")} alt="Email Icon" />
            <p className="shopDetailsText">{shop.email}</p>
          </div>
          <p className="shopDetailsDescription">Lorem ipsum dolor sit amet, consectetur adipiscing  sit amet elit. Praesent sed odio maximus, feugiat mi vitae, venenatis dolor. Pellentesque ut elit at diam convallis interdum a dictum leo. Etiam sed rutrum felis, at sagittis est.
            Suspendisse venenatis ultricies tortor eu facilisis. Sed turpis nunc, congue non sollicitudin nec, facilisis eget mauris. Pellentesque quis interdum odio. Ut eget iaculis dui. Nam ac sem hendrerit, sagittis nunc et, malesuada ipsum. Aliquam condimentum sollicitudin nulla, a convallis risus. In nisi dolor, pretium eu suscipit quis, vulputate et turpis</p>
          <button className="closeShopBtn" onClick={hideDetails}><img src={require("../assets/cross.png")} alt="Click to close" /></button>
        </div>
        :
        <></>}
    </div>
  )
}

export default ShopDetails
