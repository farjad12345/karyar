import React from 'react'
import "./MyMain.css";
import HeroSection from '../../Component/HeroSection';
import MainSection0 from '../../Component/MainSection0'
import MainSection1 from '../../Component/MainSection1'
import MainSection2 from '../../Component/MainSection2'
import MainSection3 from '../../Component/MainSection3'
import MainSection4 from '../../Component/MainSection4'
import MainSection5 from '../../Component/MainSection5'
import MainSection6 from '../../Component/MainSection6'
import AutoSlider from "../../Component/AutoSlider/AutoSlider";
import MySlider from "../../Component/MySlider"
export default function MyMain() {
  return (
      <div>
      <HeroSection />
      <MainSection0/>
      <MainSection1 />
      <MainSection2 />
      <AutoSlider />
      <MainSection3/>
      <MainSection4/>
      <MainSection5/>
      <MainSection6 />
      <div>
        <div className='MySlider-header container'>
          <p>آخرین اخبار</p>
          <a href='' className=''>
            <p>
            مشاهده همه
            </p>
            <p>
              <img className='' src={process.env.PUBLIC_URL + '/images/arrow-left2.png'} alt="arrow-left2"  />

            </p>
            
            
          </a>
        </div>
      <MySlider/>
      </div>
    </div>
  )
}
