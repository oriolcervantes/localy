import React, { useState, useEffect } from 'react'
import './ShopAuth.css'
import { login, register } from '../ApiClient'
import { useNavigate } from 'react-router-dom';

const ShopAuth = (props) => {

  const state = props.state;

  const [form, setForm] = useState({
    show: props.activeForm.show,
    styles: props.activeForm.styles,
    which: props.activeForm.which
  });

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  useEffect(() => {
    setForm({
      show: props.activeForm.show,
      styles: props.activeForm.styles,
      which: props.activeForm.which
    });
  }, [props])

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(user);
    navigate('/profile', { state });
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    await register(user);
    navigate('/profile');
  }

  const hideForm = () => {
    setForm({
      show: false,
      styles: { transform: 'translateY(100%)' },
      which: "none"
    })

    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    })
  }

  const toggleForm = () => {
    const toWhichForm = form.which === 'login' ? 'register' : 'login';
    setForm({ ...form, which: toWhichForm });
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    })
  }

  return (
    <>
      {form.show === true ?
        <div className="shopAuthWrap" style={form.styles}>
          <img className="whitePinLogotype" src={require("../assets/purple_pin.png")} alt="Localy Pin Icon"></img>
          <img className="fullLogotype" src={require("../assets/purple_logo_full.png")} alt="Localy Logotype"></img>
          <h1 className="loginPageH1">Introduce your login details</h1>
          {form.which === 'login' ?
            <>
              <form className="loginForm" onSubmit={handleLogin}>
                <input className="formInput" name='email' onChange={handleInputChange} type='email' value={user.email} placeholder='Enter your email' required />
                <input className="formInput" name='password' onChange={handleInputChange} type='password' value={user.password} placeholder='Enter your password' required />
                <button className="submitBtn" type='submit'>Log In</button>
              </form>
              <h2 className="formPageH2">I don't have a shopkeeper account</h2>
              <button className="changeFormBtn" onClick={toggleForm}>Register</button>
              <img className="logLocalyFormIcon" src={require("../assets/purple_logo_short.png")} alt="Localy Icon"></img>
              <button className="closeFormBtn" onClick={hideForm}><img src={require("../assets/cross.png")} alt="Click to close" /></button>
            </>
            :
            <>
              <form onSubmit={handleRegister}>
                <input className="formInput" name='firstName' onChange={handleInputChange} type='text' value={user.firstName} placeholder='Enter your first name' required />
                <input className="formInput" name='lastName' onChange={handleInputChange} type='text' value={user.lastName} placeholder='Enter your last name' required />
                <input className="formInput" name='email' onChange={handleInputChange} type='email' value={user.email} placeholder='Enter your e-mail' required />
                <input className="formInput" name='password' onChange={handleInputChange} type='password' value={user.password} placeholder='Enter your password' required />
                <button className="submitBtn" type='submit'>Register</button>
              </form>
              <h2 className="regFormPageH2">I already have an account</h2>
              <button className="changeFormBtn" onClick={toggleForm}>Log In</button>
              <img className="regLocalyFormIcon" src={require("../assets/purple_logo_short.png")} alt="Localy Icon"></img>
              <button className="closeFormBtn" onClick={hideForm}><img src={require("../assets/cross.png")} alt="Click to close" /></button>
            </>
          }
        </div>
        :
        <></>
      }
    </>
  )
}

export default ShopAuth
