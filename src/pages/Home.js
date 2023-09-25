import React from 'react'
import { Link } from "react-router-dom"
import BannerImage from '../assets/Chicken_katsu.jpg'
import '../styles/Home.css'

function Home() {
  return <div className="home" style={{ backgroundImage:`url(${BannerImage})` }}>
    <div className="headerContainer">
      <h1>CW Coffee</h1>
      <p>Ready to conquer the day</p>
      <Link to="/menu">
      <button>Order Now</button>
      </Link>
    </div>
    </div>;
  }

export default Home