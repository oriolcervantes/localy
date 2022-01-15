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
    latitude: 0,
    longitude: 0,
    address: "",
    telephone: 0,
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

  // const handleFileSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(previewSource);
  //   const uploadedPic = await uploadImage(previewSource);
  //   console.log(uploadedPic.public_id);
  // }

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
    console.log(previewSource)
  }

  const hideForm = () => {
    setActiveForm({
      show: false,
      styles: { transform: 'translateY(100%)' },
    })
  }

  return (
    <div className="createShopFormWrap" style={form.styles}>
      <form onSubmit={handleSubmit}>
        <h1>Open a shop!</h1>
        <label>Your shop name
          <input name='name' onChange={handleInputChange} type='text' value={shop.name} placeholder='Enter the name of your shop' required />
        </label>
        <label>Where is it?
          <input name='latitude' onChange={handleInputChange} type='text' value={shop.latitude} placeholder='Enter the extact latitude' required />
          <input name='longitude' onChange={handleInputChange} type='text' value={shop.longitude} placeholder='Enter the exact longitude' required />
          <input name='address' onChange={handleInputChange} type='text' value={shop.address} placeholder='Enter the full address' />
        </label>
        <label>Telephone
          <input name='telephone' onChange={handleInputChange} type='text' value={shop.telephone} placeholder='Where to call you?' />
        </label>
        <label>E-mail
          <input name='email' onChange={handleInputChange} type='email' value={shop.email} placeholder='Where to e-mail you?' />
        </label>
        <label>Website
          <input name='website' onChange={handleInputChange} type='text' value={shop.website} placeholder='Enter your website' />
        </label>
        <label>What's in stock?
          <input name='products' onChange={handleInputChange} type='text' value={shop.products} placeholder='List your products, comma separated' required />
        </label>
        <label>Main picture
          <input name='picture' onChange={handleFileInputChange} type='file' value={shop.picture} />
        </label>
        <button type='submit'>Place in map!</button>
      </form>
      {/* <form onSubmit={handleFileSubmit}>
        <label>Main picture
          <input name='picture' onChange={handleFileInputChange} type='file' value={shop.picture} />
        </label>
        <button type='submit'>Upload Pic!</button>
      </form> */}
      <button onClick={hideForm}>Take me back</button>
      {previewSource && (<img src={previewSource} alt="Your shop" style={{ height: '200px' }}></img>)}
    </div>
  )
}

export default CreateShopForm
