import React, { useState, useEffect } from 'react'
import { createShop, uploadImage } from '../ApiClient'
import './CreateShopForm.css'

const CreateShopForm = (props) => {

  const UserId = props.UserId;
  const setUser = props.setUser;
  const user = props.user;
  const setActiveForm = props.setActiveForm;

  const [form, setForm] = useState({
    show: props.activeForm.show,
    styles: props.activeForm.styles,
  });

  const [shop, setShop] = useState({
    name: "",
    latitude: null,
    longitude: null,
    address: "",
    telephone: null,
    email: "",
    website: "",
    products: "",
    picture: ""
  })

  const [previewSource, setPreviewSource] = useState('');

  useEffect(() => {
    setForm({
      show: props.activeForm.show,
      styles: props.activeForm.styles,
    });
  }, [props])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadedPic = await uploadImage(previewSource);
    await createShop({ ...shop, UserId, picture: uploadedPic.secure_url });
    setActiveForm({
      show: false,
      styles: { transform: 'translateY(100%)' },
    })
    setUser({
      ...user,
      shops: user.shops + 1
    })
  }

  const handleInputChange = (e) => {
    setShop({
      ...shop,
      [e.target.name]: e.target.value
    })
  }

  const handleFileInputChange = (e) => {
    setShop({
      ...shop,
      [e.target.name]: e.target.value
    })
    const file = e.target.files[0];
    console.log(file);
    previewFile(file);
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }

  const hideForm = () => {
    setActiveForm({
      show: false,
      styles: { transform: 'translateY(100%)' },
    })
  }

  return (
    <div className="createShopFormWrap" style={form.styles}>
      <img className="createShopLogotype" src={require("../assets/purple_logo_full.png")} alt="Localy Logotype" />
      <img className="createShopPinLogotype" src={require("../assets/purple_pin.png")} alt="Localy Pin Icon" />
      <form onSubmit={handleSubmit}>
        <h1 className="createShopH1">Place a new shop in the map!</h1>
        <input className="createShopFormInput" name='name' onChange={handleInputChange} type='text' value={shop.name} placeholder='Enter the name of your shop' required />
        <input className="createShopFormInput" name='latitude' onChange={handleInputChange} type='text' value={shop.latitude} placeholder='Enter the extact latitude' required />
        <input className="createShopFormInput" name='longitude' onChange={handleInputChange} type='text' value={shop.longitude} placeholder='Enter the exact longitude' required />
        <input className="createShopFormInput" name='address' onChange={handleInputChange} type='text' value={shop.address} placeholder='Enter the full address' />
        <input className="createShopFormInput" name='telephone' onChange={handleInputChange} type='text' value={shop.telephone} placeholder='Where to call you?' />
        <input className="createShopFormInput" name='email' onChange={handleInputChange} type='email' value={shop.email} placeholder='Where to e-mail you?' />
        <input className="createShopFormInput" name='website' onChange={handleInputChange} type='text' value={shop.website} placeholder='Enter your website' />
        <input className="createShopFormInput" name='products' onChange={handleInputChange} type='text' value={shop.products} placeholder='List your products, comma separated' required />
        <input className="createShopFormInput" name='picture' onChange={handleFileInputChange} type='file' value={shop.picture} />
        <button className="submitBtn" type='submit'>Place in map!</button>
      </form>
      <button className="closeFormBtn" onClick={hideForm}><img src={require("../assets/cross.png")} alt="Click to close" /></button>
      <div className="imgWrap">
        {previewSource && (<img src={previewSource} alt="Your shop"></img>)}
      </div>
    </div>
  )
}

export default CreateShopForm
