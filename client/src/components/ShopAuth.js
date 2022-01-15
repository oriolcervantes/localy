import React, { useState, useEffect } from 'react'
import './ShopAuth.css'
import { login, register } from '../ApiClient'
import { useNavigate } from 'react-router-dom';

const ShopAuth = (props) => {

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
    navigate('/profile');
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
          {form.which === 'login' ?
            <>
              <form onSubmit={handleLogin}>
                <h1>Log In</h1>
                <label>E-mail
                  <input name='email' onChange={handleInputChange} type='email' value={user.email} placeholder='Enter your email' required />
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
                <label> First Name
                  <input name='firstName' onChange={handleInputChange} type='text' value={user.firstName} placeholder='Enter your first name' required />
                </label>
                <label> Last Name
                  <input name='lastName' onChange={handleInputChange} type='text' value={user.lastName} placeholder='Enter your last name' required />
                </label>
                <label> E-mail
                  <input name='email' onChange={handleInputChange} type='email' value={user.email} placeholder='Enter your e-mail' required />
                </label>
                <label> Password
                  <input name='password' onChange={handleInputChange} type='password' value={user.password} placeholder='Enter your password' required />
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
