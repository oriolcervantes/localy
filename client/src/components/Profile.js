import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { profile, logout, getShopsByUserId } from '../ApiClient'
import CreateShopForm from './CreateShopForm'


const Profile = () => {
  const [user, setUser] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    shops: false
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
            shops: true
          };
        })
      } else {
        console.log('No shops 😞');
      }
    }
    getProfile();
    getShops(user.id);
  }, [user.id]);

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
    <section>
      <h2>My Profile</h2>
      <h3>
        Hi {user.firstName}, this is your dashboard!
      </h3>
      <h4>My Shops:</h4>
      {user.shops ? shops.map(shop => <h5 key={shop.id}>{shop.name}</h5>) : <p>You have no shops in the map!</p>}
      <button onClick={handleCreateShop}>Create shop profile</button>
      <button onClick={handleLogout}>Logout</button>
      <CreateShopForm activeForm={activeForm} UserId={user.id} />
    </section>
  )
}

export default Profile
