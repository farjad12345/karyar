import React from 'react'
import "./MyMain.css";
import HeroSection from '../../Component/HeroSection';
import MainSection0 from '../../Component/MainSection0'
import MainSection1 from '../../Component/MainSection1'
import MainSection2 from '../../Component/MainSection2'
export default function MyMain() {
  return (
      <div>
      <HeroSection />
      <MainSection0/>
      <MainSection1 />
      <MainSection2/>
    </div>
  )
}
