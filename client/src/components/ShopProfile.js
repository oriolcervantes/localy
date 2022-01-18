import React, { useState } from 'react'
import './ShopProfile.css'
import { uploadImage, addImage, addProducts, removeProduct } from '../ApiClient'

const ShopProfile = ({ activeProfile, setActiveProfile, shop, updateShopsState }) => {

  const [previewSource, setPreviewSource] = useState('');
  const [newPicture, setNewPicture] = useState({ picture: '' });
  const [newProducts, setNewProducts] = useState({ products: '' });


  const hideProfile = (e) => {
    e.preventDefault();
    setActiveProfile({
      show: false,
      styles: { transform: 'translateY(100%)' },
    });
  }

  const handleInputChange = (e) => {
    setNewProducts({
      [e.target.name]: e.target.value
    })
  }

  const handleFileInputChange = (e) => {
    setNewPicture({
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

  const handleProductsSubmit = async (e) => {
    e.preventDefault();
    await addProducts({ shopId: shop.id, products: newProducts.products })
    updateShopsState(shop.id, newProducts.products, "add")
    setNewProducts({
      products: ''
    })
  }

  async function deleteProduct(productToDelete) {
    await removeProduct({ shopId: shop.id, product: productToDelete });
    updateShopsState(shop.id, productToDelete, "remove");
  }

  const handlePictureSubmit = async (e) => {
    e.preventDefault();
    const uploadedPic = await uploadImage(previewSource);
    await addImage({ shopId: shop.id, picture: uploadedPic.secure_url });
    setNewPicture({
      picture: ''
    })
    setPreviewSource('');
  }

  return (
    <div className='shopProfileWrap' style={activeProfile.styles}>
      <button className="logoutBtn" onClick={hideProfile}><img src={require("../assets/white_cross.png")} alt="Click to logout" /></button>
      <h1 className="profileGreeting">{shop.name}</h1>
      <h2 className="shopsListTitle">{shop.name}'s details</h2>
      <h3 className="productsTitle">Your shop can be found by:</h3>
      <div className="productsWrap">{shop.products.map(product =>
        <div className="product">
          <p>{product}</p>
          <button onClick={() => deleteProduct(product)}>
            <img src={require("../assets/cross.png")} alt="Delete product"></img>
          </button>
        </div>)}
      </div>
      <p className="newProductsFormLabel">Add products or services</p>
      <form className="newProductsForm" onSubmit={handleProductsSubmit}>
        <input className="newProductsFormInput" name='products' onChange={handleInputChange} type='text' value={newProducts.products} placeholder='Add more products, comma separated' required />
        <button className="submitNewProductsBtn" type='submit'>Add!</button>
      </form>
      <p className="newProductsFormLabel">Add another picture</p>
      <form className="newProductsForm" onSubmit={handleProductsSubmit}>
        <label className="newPictureLabel" htmlFor="fileUpload">Add another picture</label>
        <input className="newPictureInput" id="fileUpload" name='picture' onChange={handleFileInputChange} type='file' value={newPicture.picture} />
        <button className="submitNewProductsBtn" onClick={handlePictureSubmit}>Add!</button>
      </form>
      {previewSource && (<div className="newImgWrap"><img src={previewSource} alt="Your shop"></img></div>)}
    </div>
  )
}

export default ShopProfile
