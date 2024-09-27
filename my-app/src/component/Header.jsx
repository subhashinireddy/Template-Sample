import React from 'react'
import '../variables/Header.scss'

const Header = () => {
    return (
        <div className='header-main'>
            <div className='header-text'>
                <div className='header-funeral'>
                    <h1 className='header-funeral__header'>Funerals your way</h1>
                    <h5 className='header-funeral__body-text'>Body text</h5>
                    <div className='header__img'>
                        <button className="fa-solid fa-phone button-ph"> Button </button>
                        <button className='secondary-btn'> Button</button>
                    </div>
                </div>
            </div>
            <div className='header-img'>
                <img src="pic.png" alt="No image found" />
            </div>


        </div>
    )
}

export default Header