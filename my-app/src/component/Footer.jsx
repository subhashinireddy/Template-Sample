import React from 'react'
import '../variables/Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>


            <div className='footer-details'>
                <div className='footer-information'>
                    <h2 className='footer-information__text'>Get in touch</h2>
                    <h3 className='footer-information__services'>We're here for you 24 hours a day, 7 days a week.
                        Give us a call or request a call back.</h3>
                    <button className='footer-prim-btn'><i className="fa-solid fa-phone"> 1300 000 000</i> </button>
                    <button className='footer-sec-btn'>Enquire now</button>

                </div>
                <div className='footer-payment'>
                    <h2 className='footer-payment__Method'>Need to pay an account?</h2>
                    <h3 className='footer-payment__service'>If you re ready to pay for a service you can pay your
                        account online.</h3>
                    <button className='footer-btn'>Pay now</button>
                </div>
                <div className='footer-simplicity'>
                    <h2 className='footer-simplicity__details'>Learn more about Simplicity</h2>
                    <ul className='footer-simplicity__info'>
                        <li className='footer-simplicity__info--list'>About us</li>
                        <li className='footer-simplicity__info--list'>FAQs</li>
                        <li className='footer-simplicity__info--list'>Customer feedback </li>
                        <li className='footer-simplicity__info--list'>Payment options</li>
                    </ul>
                </div>
            </div>
            <div className='summary'>
                <h5 className='summary-details'>Simplicity Funerals are proud members of the Australian Funeral Directors Association (AFDA).
                    Proudly part of InvoCare. InvoCare is Australia s leading provider of funeral, cemetery, crematoria and related services.</h5>
            </div>
            <div className='company-information'>
                <h5 className='company-details'> @2021 InvoCare Australia Pty Ltd. All rights reserved.</h5>
                <ul className='company-details__types'>
                    <li className='company-details__types--terms'>Terms of use</li>
                    <li className='company-details__types--policy'>Privacy Policy</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer