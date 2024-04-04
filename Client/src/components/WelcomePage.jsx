import React from 'react'
import {useNavigate} from "react-router-dom"
import './Styles/Welcome.css'

function WelcomePage() {
  const navigate = useNavigate()
  return (
    <div className='WelcomePage'>
    <p>
      Introducing <span className='appName'>Sparkl</span>  the all-in-one app designed to simplify your digital lifestyle.
      <br />
      Sparkl is your haven for digital organization, seamlessly bringing together your favorite applications,
      <br />
      entertainment preferences, and personal expressions in one centralized hub.
    </p>
    <button onClick={() => navigate('/register')}>Get Started ⭐ </button>
  </div>
  )
}

export default WelcomePage