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
    category: "",
    address: "",
    telephone: null,
    email: "",
    website: "",
    description: "",
    latitude: null,
    longitude: null,
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
        <label className="createShopFormLabel">Shop details</label>
        <input className="createShopFormInput" name='name' onChange={handleInputChange} type='text' value={shop.name} placeholder='Enter the name of your shop' required />
        <input className="createShopFormInput" name='category' onChange={handleInputChange} type='text' value={shop.category} placeholder='Enter a category (e.g. Coffee House)' required />
        <input className="createShopFormInput" name='address' onChange={handleInputChange} type='text' value={shop.address} placeholder='Enter the full address' />
        <input className="createShopFormInput" name='telephone' onChange={handleInputChange} type='text' value={shop.telephone} placeholder='Where to call you?' />
        <input className="createShopFormInput" name='email' onChange={handleInputChange} type='email' value={shop.email} placeholder='Where to e-mail you?' />
        <input className="createShopFormInput" name='website' onChange={handleInputChange} type='text' value={shop.website} placeholder='Enter your website' />
        <textarea className="describeShopFormInput" name='description' onChange={handleInputChange} value={shop.description} placeholder='Describe your business!' required />
        <label className="createShopFormLabel">Shop Location</label>
        <input className="createShopFormInput" name='latitude' onChange={handleInputChange} type='text' value={shop.latitude} placeholder='Enter the exact latitude' required />
        <input className="createShopFormInput" name='longitude' onChange={handleInputChange} type='text' value={shop.longitude} placeholder='Enter the exact longitude' required />
        <label className="createShopFormLabel">Products and Services</label>
        <input className="createShopFormInput" name='products' onChange={handleInputChange} type='text' value={shop.products} placeholder='List your products, comma separated' required />
        <label className="createShopFormLabel" >Main Picture</label>
        <label className="createShopFormFileLabel" htmlFor="fileUpload">Select Main Picture</label>
        <input className="createShopFormFileInput" id="fileUpload" name='picture' onChange={handleFileInputChange} type='file' value={shop.picture} />
        {previewSource && (<div className="imgWrap"><img src={previewSource} alt="Your shop"></img></div>)}
        <button className="submitBtn submitShopFormBtn" type='submit'>Place in map!</button>
      </form>
      <button className="closeFormBtn" onClick={hideForm}><img src={require("../assets/cross.png")} alt="Click to close" /></button>
      <img className="profLocalyFormIcon" src={require("../assets/purple_logo_short.png")} alt="Localy Icon"></img>

    </div>
  )
}

export default CreateShopForm
