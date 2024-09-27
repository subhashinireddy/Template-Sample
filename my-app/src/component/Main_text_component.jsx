import React from 'react';
import '../variables/Main_text_component.scss';

const Main_text_component = ({ colorClass, iconColorClass, hasBackground }) => {
    const additionalClass = hasBackground && colorClass === 'color-8' ? 'has-background' : '';

    return (
        <div className={`text-component ${colorClass} ${additionalClass}`}>
            <div className='text-para'>
                <h4>Text Component</h4>
                <h2 className='text-para__title'>Text Component</h2>
                <p className='text-para__text'>
                    Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend venenatis
                    eros, nec commodo massa porta sit amet. Sed sed mi ac velit congue luctus. Fusce sit amet nisi
                    aliquam mi congue facilisis. Proin faucibus eros leo. Fusce pulvinar metus at mauris commodo
                    ullamcorper.
                </p>

                <div className='text-primary'> 
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className={`text-icons ${iconColorClass}`}>
                            <i className="fa-solid fa-book"></i>
                            <h3 className='text-icons__text'>Text Components</h3>
                            <p className='text-icons__description'>Body XSmall - Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Pellentesque viverra arcu
                                id egestas volutpat. Duis accumsan feugiat sem, vel
                                elementum erat aliquet quis.</p>
                            <div>
                                <button className='icons__btn'>Button <i className="fa-solid fa-arrow-right"></i> </button>
                                <button className='icons__button'>Button <i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const MainComponent = () => {
    const themeCount = 8;

    return (
        <div>
            {[...Array(themeCount)].map((_, index) => {
                const colorClass = `color-${index + 1}`;
                const iconColorClass = `icon-color-${index + 1}`;
                const hasBackground = index + 1 === 8; // Example condition, change as needed
                return (
                    <Main_text_component
                        key={index}
                        colorClass={colorClass}
                        iconColorClass={iconColorClass}
                        hasBackground={hasBackground}
                    />
                );
            })}
        </div>
    );
};

export default MainComponent;
