import React from 'react'
import '../variables/Form_Text_component.scss'

const Form_Text_component = () => {
  return (
    <div>
        <div className='cards-sets'>
            <div className='cards-container'>
                <h4 className= 'cards-container__pretext'>Text Component</h4>
                <h1 className= 'cards-container__title'>Text Component</h1>
                <p className='cards-container__para'>
                    Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend venenatis
                    eros, nec commodo massa porta sit amet. Sed sed mi ac velit congue luctus. Fusce sit amet nisi
                    aliquam mi congue facilisis. Proin faucibus eros leo. Fusce pulvinar metus at mauris commodo
                    ullamcorper.
                </p>

                <div className='cards-blocks'>
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className='cards-icon'>
                            <i className="fa-solid fa-book fa-2x"></i>
                            <h3 className='cards-icon__text'>Text Components</h3>
                            <p className='cards-icon__para'>Body XSmall - Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Pellentesque viverra arcu
                                id egestas volutpat. Duis accumsan feugiat sem, vel
                                elementum erat aliquet quis.</p>
                            <div>
                                <button className='btn'>Button</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Form_Text_component