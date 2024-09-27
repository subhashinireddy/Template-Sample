import React from 'react'
import '../variables/Heading_component.scss'

const Heading_component = () => {
    return (
        <div className='card'>
            <div className='title'>
                <h1 className='title__preHeader'>Pre-header</h1>
                <h4 className='title__heading'>Heading</h4>
                <p className='title__description'>Body small - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                    pretium risus nisi. Nunc cursus ut magna vel mollis. Mauris euismod porttitor
                    vehicula. Aenean vehicula, metus ac pretium varius, eros nisl tincidunt ipsum,
                    vitae consequat sapien justo a urna.</p>
                <button className='third-btn'>Button</button>
                <button className='forth-btn'>Button</button>
            </div>
            <div className='block'> </div>
        </div>
    )
}



export default Heading_component