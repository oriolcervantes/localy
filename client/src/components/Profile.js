import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { profile, logout, getShopsByUserId } from '../ApiClient'
import CreateShopForm from './CreateShopForm'
import ShopElement from './ShopElement'
import "./Profile.css"

const Profile = () => {
  const [user, setUser] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    shops: 0
  });

  const [shops, setShops] = useState([])

  const [activeForm, setActiveForm] = useState({
    show: false,
    styles: { transform: 'translateY(100%)' },
  })


  useEffect(() => {
    const getProfile = async () => {
      const userInfo = await profile();
      if (userInfo) {
        const { id, firstName, lastName } = userInfo;
        setUser((prevState) => {
          return {
            ...prevState,
            id,
            firstName,
            lastName,
          };
        });
      } else {
        console.log('No user info found 😞');
      }
    };

    const getShops = async (UserId) => {
      const userShops = await getShopsByUserId(UserId);
      if (userShops) {
        setShops(userShops);
        setUser((prevState) => {
          return {
            ...prevState,
            shops: shops.length
          };
        })
      } else {
        console.log('No shops 😞');
      }
    }
    getProfile();
    getShops(user.id);
  }, [user.id, user.shops]);

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleCreateShop = () => {
    setActiveForm({
      show: true,
      styles: { transform: 'translateY(0%)' },
    })
  }

  return (
    <section className="shopKeeperProfileWrap">
      <h1 className="profileGreeting">Hello, {user.firstName}!</h1>
      <h2 className="shopsListTitle">Your shops</h2>
      <section className="shopsWrap">
        {shops.length ? shops.map(shop => <ShopElement key={shop.id} shop={shop} />) : <p>You have no shops in the map!</p>}
      </section>
      <h3 className="placeShopH3">Do you want to place a shop in the map?</h3>
      <button className="newShopFormBtn" onClick={handleCreateShop}>Create a new shop</button>
      <button className="logoutBtn" onClick={handleLogout}><img src={require("../assets/logout.png")} alt="Click to logout" /></button>
      <CreateShopForm activeForm={activeForm} setActiveForm={setActiveForm} UserId={user.id} user={user} setUser={setUser} />
      <img className="profLocalyFormIcon" src={require("../assets/purple_logo_short.png")} alt="Localy Icon"></img>
    </section>
  )
}

export default Profile
