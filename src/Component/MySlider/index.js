import './style.css';
import ReactCardSlider from 'react-card-slider-component';
function MySlider() {
    const sliderClick = (slider) => {
        alert("hello world");
    }


    const slides = [
        {
            image: process.env.PUBLIC_URL + "/images/PhotoBlog3.png", title: <div className='headertextWraper'><a className='link'><p>اخبار نیکارو</p></a>  <div className='textWraper'> <img className='imageCalender' src={process.env.PUBLIC_URL + "/images/calendar.png"}></img><p>۱۰ اسفند ۱۴۰۱</p></div></div>, description: "در رویداد “تا…کد” زاهدان چه گذشت؟", detail: <div className='headertextWraper'><a className='link'><p>اخبار نیکارو</p></a>  <div className='textWraper'> <img className='imageCalender' src={process.env.PUBLIC_URL + "/images/calendar.png"}></img><p>۱۰ اسفند ۱۴۰۱</p></div></div>
            , text: '123'
, clickEvent: sliderClick

        },
        { image: process.env.PUBLIC_URL + "/images/PhotoBlog2.png", title: "This is a second title", description: "This is a second description" , clickEvent: sliderClick },
        { image: process.env.PUBLIC_URL + "/images/PhotoBlog1.png", title: "This is a third title", description: "This is a third description", clickEvent: sliderClick },
        { image: "https://picsum.photos/500/400", title: "This is a fourth title", description: "This is a fourth description", clickEvent: sliderClick },
        { image: "https://picsum.photos/200/300", title: "This is a fifth title", description: "This is a fifth description", clickEvent: sliderClick },
        { image: "https://picsum.photos/800/700", title: "This is a sixth title", description: "This is a sixth description", clickEvent: sliderClick },
        { image: "https://picsum.photos/300/400", title: "This is a seventh title", description: "This is a seventh description", clickEvent: sliderClick },
    ]
    return (
        <div className="MySlider">
      

            <ReactCardSlider slides={slides} />
        </div>
    );
}

export default MySlider;
