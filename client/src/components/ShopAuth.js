import React, { useState, useEffect } from 'react'
import './ShopAuth.css'
import { login, register } from '../ApiClient'

const ShopAuth = (props) => {

  const [form, setForm] = useState({
    show: props.activeForm.show,
    styles: props.activeForm.styles,
    which: props.activeForm.which
  });

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: ""
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

  const handleLogin = (e) => {
    e.preventDefault();
    login(user);
  }

  const handleRegister = (e) => {
    e.preventDefault();
    register(user);
  }

  const hideForm = () => {
    setForm({
      show: false,
      styles: { transform: 'translateY(100%)' },
      which: "none"
    })
  }

  const toggleForm = () => {
    const toWhichForm = form.which === 'login' ? 'register' : 'login'
    setForm({ ...form, which: toWhichForm })
  }

  return (
    <>
      {form.show === true ?
        <div className="shopAuthWrap" style={form.styles}>
          {form.which === 'login' ?
            <>
              <form onSubmit={handleLogin}>
                <h1>Log In</h1>
                <label>Username
                  <input name='username' onChange={handleInputChange} type='text' value={user.username} placeholder='Enter your username' required />
                </label>
                <label>Password
                  <input name='password' onChange={handleInputChange} type='password' value={user.password} placeholder='Enter your password' required />
                </label>
                <button type='submit'>Log In</button>
              </form>
              <button onClick={toggleForm}>I don't have an account yet</button>
              <button onClick={hideForm}>Take me back</button>
            </>
            :
            <>
              <form onSubmit={handleRegister}>
                <h1>Register</h1>
                <label> Username
                  <input name='username' onChange={handleInputChange} type='text' value={user.username} placeholder='Enter your username' required />
                </label>
                <label> Password
                  <input name='password' onChange={handleInputChange} type='password' value={user.password} placeholder='Enter your password' required />
                </label>
                <label> e-mail
                  <input name='e-mail' onChange={handleInputChange} type='email' value={user.email} placeholder='Enter your e-mail' required />
                </label>
                <button type='submit'>Register</button>
              </form>
              <button onClick={toggleForm}>I already have an account</button>
              <button onClick={hideForm}>Take me back</button>
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
