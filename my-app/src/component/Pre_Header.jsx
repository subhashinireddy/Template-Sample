import React from 'react'
import '../variables/Pre-Header.scss'

const Pre_Header = () => {
    return (
        <div className='title-text'>
            <div className='title-container'>
                <h5 className='title-container__preHeader'>Pre-header</h5>
                <h2 className='title-container__heading'>Heading</h2>
                <p className='title-container__para'>Body small - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                    pretium risus nisi. Nunc cursus ut magna vel mollis. Mauris euismod porttitor
                    vehicula. Aenean vehicula, metus ac pretium varius, eros nisl tincidunt ipsum,
                    vitae consequat sapien justo a urna.</p>
                <div className='title-btn'>
                    <button className='first-btn' >Button</button>
                    <button className='second-btn'>Button</button>
                </div>
            </div>
            <div className='title-image'>
                <img src="ball.png" alt="No image Found" />
            </div>
        </div>
    )
}

export default Pre_Header