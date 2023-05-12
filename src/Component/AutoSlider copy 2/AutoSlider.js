import React, { useState, useEffect } from 'react';
import './AutoSlider.css';

const cards = [
    {
        title: 'Card 1',
        image: 'https://picsum.photos/200/300',
        description: 'This is the first card',
    },
    {
        title: 'Card 2',
        image: 'https://picsum.photos/200/300',
        description: 'This is the second card',
    },
    {
        title: 'Card 3',
        image: 'https://picsum.photos/200/300',
        description: 'This is the third card',
    },
    {
        title: 'Card 4',
        image: 'https://picsum.photos/200/300',
        description: 'This is the third card',
    },
    {
        title: 'Card 5',
        image: 'https://picsum.photos/200/300',
        description: 'This is the third card',
    },
];

function AutoSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex(activeIndex === cards.length - 1 ? 0 : activeIndex + 1);
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [activeIndex]);

    const handlePrevClick = () => {
        setActiveIndex(activeIndex === 0 ? cards.length - 1 : activeIndex - 1);
    };

    const handleNextClick = () => {
        setActiveIndex(activeIndex === cards.length - 1 ? 0 : activeIndex + 1);
    };

    return (
        <div className="auto-slider">
            <div className="auto-slider-wrapper">
                <div className="auto-slider-container" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>                    {cards.map((card, index) => (
                        <div className="auto-slider-card" key={index}>
                            {/* <img src={card.image} alt={card.title} /> */}
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
                <div className='wrapper-bottons'>

                    <button className="auto-slider-prev" onClick={handlePrevClick}>
                        <img alt='logo'  src={process.env.PUBLIC_URL + '/images/arrow-left.png'} />
                    </button>
                    <button className="auto-slider-next" onClick={handleNextClick}>
                        <img alt='logo'  src={process.env.PUBLIC_URL + '/images/arrow-right.png'} />

                    </button>
                </div>
            </div>
        </div>
    );
}

export default AutoSlider;