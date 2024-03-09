import { useState } from 'react';
import { Inter } from "next/font/google";
import Card from './Components/Card/Card'
import Gallery2 from './Components/gallery2/gallery2'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
// const inter = Inter({ subsets: [""] });
export default function Home() {
  return (
    <>
      <Header className=" p-o box-border" />
      <div className=" text-right mx-auto w-12/12 ">
      <div className=" mx-auto  flex flex-wrap py-12   text-right w-12/12">
        <div class="md:w-4/12 text-sm w-full mb-4 px-4 ">
          <label className="text-zinc-500 mb-4 font-bold ">بهترین خانه های لوکس جهان
          </label>
          <p className="leading-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
        </div>
        <div className="md:w-4/12 text-sm w-full mb-4 px-4">
          <label className="text-zinc-500 mb-4 font-bold ">فقط بهترین خواص
          </label>
          <p className="leading-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
        </div>
        <div className="md:w-4/12 text-sm mb-4  px-4 ">
          <label className="text-zinc-500 mb-4  font-bold">پرداخت های ایمن در بعدی
          </label>
          <p className="leading-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
        </div>
        <div className="md:w-4/12 text-sm mb-4 px-4  ">
          <label className="text-zinc-500 mb-4 font-bold">1% مشاوران املاک برتر
          </label>
          <p className="leading-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
        </div>
        <div className="md:w-4/12 text-sm mb-4 px-4  ">
          <label className="text-zinc-500 mb-4 font-bold">خانه جدید در یک هفته</label>
          <p className="leading-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
        </div>
        <div className="md:w-4/12 text-sm mb-4 px-4  ">
          <label className="text-zinc-500 mb-4 font-bold ">همه خانه ها در مکان های برتر
          </label>
          <p className="leading-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
        </div>
        </div>

      </div>
      <div className=" md:flex-col flex-col-reverse lg:flex-row flex-wrap  py-18 bg-graylight-1 flex  w-full text-right  ">
        <div className="w-full  lg:w-6/12 md:w-12/12 flex-col bg-graylight-1 py-8 px-8  ">
          <p className="text-primary mt48 text-2xl	" >مشتریان خوشحال
          </p>
          <p className="text-grayDark-1 my-4 text-2xl italic">”بهترین تصمیم زندگی ما“
          </p>
          <p className="text-sm mb-12">متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن

          </p>
          <a href="*" className="bg-primary w-80 h-20 text-white px-4 py-2"> خانه خود را پیدا کنید</a>
        </div>
       <Card/>
        </div>

        <div className="flex  bg-white mb-8  justify-evenly  flex-wrap   py-8   ">

<Gallery2/>
<Gallery2/>
<Gallery2/>
<Gallery2/>
<Gallery2/>
<Gallery2/>

    
      </div>

      <Footer />

    </>

  )
}


