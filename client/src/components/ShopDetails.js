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
          <h2 className="shopDetailsShopCategory">{shop.category}</h2>
          <div className="shopDetailsCategory">
            <img className="shopDetailsIcon" src={require("../assets/phone.png")} alt="Telephone Icon" />
            <p className="shopDetailsText">{shop.telephone}</p>
          </div>
          <div className="shopDetailsCategory">
            <img className="shopDetailsIcon" src={require("../assets/house.png")} alt="Address Icon" />
            <p className="shopDetailsText">{shop.address}</p>
          </div>
          <div className="shopImagesWrap">
            {shop.picture.map(picture => <div className="imageWrap">
              <img className="shopImage" src={picture} alt="Shop"></img>
            </div>)}
          </div>
          <div className="shopDetailsCategory">
            <img className="shopDetailsIcon" src={require("../assets/world.png")} alt="Web Icon" />
            <p className="shopDetailsText">{shop.website}</p>
          </div>
          <div className="shopDetailsCategory">
            <img className="shopDetailsIcon" src={require("../assets/email.png")} alt="Email Icon" />
            <p className="shopDetailsText">{shop.email}</p>
          </div>
          <p className="shopDetailsDescription">{shop.description}</p>
          <button className="closeShopBtn" onClick={hideDetails}><img src={require("../assets/cross.png")} alt="Click to close" /></button>
        </div>
        :
        <></>}
    </div>
  )
}

export default ShopDetails
