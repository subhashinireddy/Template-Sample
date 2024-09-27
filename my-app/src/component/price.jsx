import React from 'react'
import Location from './Locations'
import Text_component from './Text_component'
import '../variables/price.scss'

const price = () => {

    return (
        <div className='details'>
            <div className='details-price'>
                <i className="fa-solid fa-print fa-2x "></i>
                <div className='details-icons'>
                    <h3 className='details-icons__text'>View Pricing</h3>
                    <i className="fa-solid fa-arrow-right fa-lg "></i>
                </div>
            </div>

            <Location />
            <Text_component />

        </div>

    )
}

export default price