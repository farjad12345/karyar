import React, { useState, useEffect } from 'react';
import './AutoSlider.css';

const cards = [
    {
        name: 'فاطمه خواجه',
        titlePerson:"مهارت آموز دوره دوم",
        image: '/images/fatemeh.png',
        peopleDescription: 'من فکر می کنم سخت ترین بخش ، همین روند پیدا کردن کار باشد; منتورم در کاریار به من کمک کرد که در مسیر پیدا کردن شغل توانایی‌های خودم را آنطور که هست نشان بدهم و خودم را دست کم نگیرم.',

    },
    {
        name: 'سهند کریم‌نژاد',
        titlePerson:"مهارت آموز دوره دوم",
        image: '/images/sahand.png',
        peopleDescription: 'بزرگترین دستاورد من از دوره‌های آموزشی کاریار، هدایت من برای ورود به دنیای کار برنامه‌نویسی و آشنا شدن با گزینه های پیش رویم است. کاریار و منتورها خیلی من را آگاه کردند و دیدم نسبت به قبل خیلی بازتر شده است.',

    },
    {
        name: 'مجتبی یعقوب‌پور',
        titlePerson:"مهارت آموز دوره دوم",
        image: '/images/mojtaba.png',
        peopleDescription: 'من قبل اینکه وارد کاریار بشوم، کمی سرگردان بودم، نمی‌دانستم کدام راه را انتخاب کنم و درسم را چه کار کنم. کاریار انگیزه من را برای آن حرفه‌ای که داشتم دنبال می‌کردم، بیشتر کرد.',

    },
    {
        name: 'فاطمه خواجه',
        titlePerson: "مهارت آموز دوره دوم",
        image: '/images/fatemeh.png',
        peopleDescription: 'من فکر می کنم سخت ترین بخش ، همین روند پیدا کردن کار باشد; منتورم در کاریار به من کمک کرد که در مسیر پیدا کردن شغل توانایی‌های خودم را آنطور که هست نشان بدهم و خودم را دست کم نگیرم.',

    }
    
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
                <div className="auto-slider-container" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {cards.map((card, index) => (
                    <div className="auto-slider-card" key={index}>
                        <div className='peoples'>
                            <div className='image-wapper'>
                                    <img alt='image' src={process.env.PUBLIC_URL + card.image } />
                            </div>
                            <div className='peoples-descriptions'>
                                    <p className='name-person'>{card.name}</p>
                                    <p className='title-person'>{ card.titlePerson}</p>
                            </div>
                        </div>
                            <p className='details-para'>{card.peopleDescription}</p>
                        <div className='end-of-cards'>
                            <div>
                            <img src={process.env.PUBLIC_URL + '/images/star.png'} alt={card.title} />
                            <img src={process.env.PUBLIC_URL + '/images/star.png'} alt={card.title} />
                            <img src={process.env.PUBLIC_URL + '/images/star.png'} alt={card.title} />
                            <img src={process.env.PUBLIC_URL + '/images/star.png'} alt={card.title} />
                            <img src={process.env.PUBLIC_URL + '/images/star.png'} alt={card.title} />
                                </div>
                            <img src={process.env.PUBLIC_URL + '/images/quote-down.png'} alt={card.title} />

                        </div>
                    </div>
                ))}
                </div>
                <div className='wrapper-bottons'>

                    <button className="auto-slider-prev" onClick={handlePrevClick}>
                        <img alt='logo' src={process.env.PUBLIC_URL + '/images/arrow-right.png'} />
                    </button>
                    <button className="auto-slider-next" onClick={handleNextClick}>
                        <img alt='logo' src={process.env.PUBLIC_URL + '/images/arrow-left.png'} />

                    </button>
                </div>
            </div>
        </div>
    );
}

export default AutoSlider;