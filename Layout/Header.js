import React from 'react'
import Card from '../Components/Card/Card.js';
import { useState } from 'react';

const  Header =()=> {
  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <>
    <header className="w-full bg-primary flex flex-col" >
      {(isVisible) ?
       ( <button onClick={toggleMenu} className="flex  w-full justify-end min-height-20 bg-primary  text-white p-4 ">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button> ): 
        ( <>
            <button onClick={toggleMenu} className="  flex w-full justify-end min-height-20 bg-primary float-end text-white p-4 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className='transition-all w-full left-2/4 -translate-x-1/2 bg-secondry text-center text-sm items-center  h-full'>
              <li className='mb-20 mt-20 text-white w-40 px-8 py-4 bg-primary mx-auto list-none  text-center'><a href=''>صفحه اصلی</a></li>
              <li className='mb-20  w-40  px-8 py-4 bg-primary mx-auto list-none text-center'><a href=''>ویژگی ها</a> </li>
              <li className='mb-20  w-40  px-8 py-4 bg-primary mx-auto list-none text-center'><a href=''>نظرات</a></li>
              <li className='mb-20  w-40 px-8 py-4 bg-primary mx-auto list-none text-center'><a href=''>خانه</a> </li>
              <li className='mb-20  w-40 px-8 py-4 bg-primary mx-auto list-none text-center'><a href=''>گالری</a> </li>
            </ul>
          </>
        )}
        </header>
        

      <div className=" flex bg-cover  bg-linearGradient  flex-col ">
        <div className="	 flex flex-col  h-64  text-primary1 justify-center items-center">
          <div className="w-full flex my-6 justify-center ">
            <img
              src="/img/logo.png"
              width={120}
              height={32}
              alt="Picture of the author"
            />
          </div>
          <div className="px-8 flex justify h-64 flex-col w-full text-xs">
            <h3 className="w-full text-right text-primary text-xl color-primary1">:خانه خودتان </h3>
            <h1 className="w-full text-right  text-white text-2xl my-4">
              با خرید خانه نهایت آزادی را احساس کنید
            </h1>
            <div className="flex justify-end">

              <a href="#" className=" bg-primary text-sm bg-primary1 text-white px-4 flex py-2"> املاک ما رامشاهده کنید</a>
            </div>

          </div>
        </div>
      </div>
      <div className="flex  flex-col items-center text-primary text-2xl bg-secondry ">
        <p className=" mt-12 text-2xl w-full text-center   "> سه مالک برتر</p>

        <div className="text-center flex md:flex-row text-white text-sm items-center  w-full  p-4">
          <Card />

        </div>
      
      </div>
  </>
  )
}




export default Header