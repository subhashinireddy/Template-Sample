import React from 'react'
import '../variables/Trucker.scss'

const Trucker = () => {
    return (
        <div className='contact'>
            <div className='contact-information'>
                <h1 className='contact-information__header'>Contact Tuckers</h1>
                <h4 className='contact-information__text'>Some information</h4>

            </div>
            <form className='form'>
                <label className='form-input'>
                    Your name* <input type="text" />

                </label>
                <label className='form-input'>
                    Email* <input type="email" />
                </label>

                <div className='form-phone'>
                    <label>
                        Phone* <input type="number" />
                    </label>
                    <label>
                        Postcode* <input type="number" />
                    </label>
                </div>
                Enquiring about <input type="text" className='form-input' />
                Message<textarea rows="10" cols="50"></textarea>
                <button className='submit-btn'>Submit</button>
                <h4 className='form-message'>By clicking send you agree to our <span>privacy
                    policy.</span></h4>
            </form>
        </div>
    )
}

export default Trucker