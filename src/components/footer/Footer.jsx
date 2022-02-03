import React from 'react'
import './FooterStyles.css'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="col">
                    <h3>Explore Our Menu</h3>
                    <p>Menu</p>
                    <p>Nutrition</p>
                    <p>Ingredients</p>
                    <p>Drink Menu</p>
                </div>
                <div className="col">
                    <h3>Get to know us</h3>
                    <p>About us</p>
                    <p>Franchising</p>
                    <p>Foundation</p>
                    <p>Mission Statement</p>
                    <p>Goals</p>
                </div>
                <div className="col">
                    <h3>Get in touch</h3>
                    <p>Press</p>
                    <p>Careers</p>
                    <p>Contact Us</p>
                    <p>Get Social</p>
                </div>
                <div>
                    <h3>Let's Connect</h3>
                    <div className="social">
                        <FaFacebookSquare className='icon' />
                        <FaInstagramSquare className='icon' />
                        <FaTwitterSquare className='icon' />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
