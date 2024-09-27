import React from 'react'
import '../variables/Navbar.scss'

const Navbar = () => {

    return (
        <div className='container'>

            <div className='container-navbar'>
                <img src="cvf.png" alt="No image displayed" />

                <a href="#" className="container-navbar__links">Our Team</a>
                <a href="#" className="container-navbar__links">Prepaid Funerals</a>
                <a href="#" className="container-navbar__links">Notices</a>
                <a href="#" className="container-navbar__links">More</a>
                <a href="#" className="container-navbar__links">About Us</a>
            </div>
            <div className='container-details'>
                <i className="fa-solid fa-phone container-details__phone"> 02 66427995</i>
                <button className='contact_btn'> Contact Us</button>
            </div>

        </div>

    )
}

export default Navbar