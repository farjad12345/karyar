import React from 'react'
import { useState } from 'react';

const  Footer =()=> {  
  return (
    <>
    <footer className="  bg-secondry flex-row flex-wrap px-24" >
    <ul class=" flex py-24 justify-between">
                    <li class="list-none flex j gap-4 ">
                        <a href="#" class=" text-white text-xl" >خانه رویایی خود را پیدا کنید</a >
                    </li>
                    <li class="list-none text-sm">
                        <a href="#" class=" text-white text-xl ">درخواست پروپوزال</a>
                    </li>
                    <li class="list-none text-sm">
                        <a href="#" class=" text-white text-xl mx-4">برنامه اجاره خانه ها</a>
                    </li>
                    <li class="list-none text-sm">
                        <a href="#" class=" text-white text-xl mx-4">با ما تماس بگیرید</a>
                    </li>
                    <li class="list-none text-sm">
                        <a href="#" class=" text-white text-xl mx-4">ملک خود را ارسال کنید</a>
                    </li>

                </ul>

                <p class="text-white text-center pb-24">
                    &copy;  حقوق مادی معنوی این سایت برای <strong class="text-white"> فرجادباباپور </strong>
                    محفوظ میباشد
                </p> </footer>
     
  </>
  )
}




export default Footer