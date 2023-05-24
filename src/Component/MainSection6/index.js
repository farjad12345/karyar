import React from 'react'

import "./style.css"
import ButtonMe from "../ButtonMe/ButtonMe"

export default function MainSection6() {
  return (
    <div className='MainSection6  cantainer '>
      <div className='rightsection parent-sections'>
        <h3>همکاری داوطلبانه با کاریار</h3>
        <p className='title'>عضوی از خانواده‌ی کاریار باشید</p>
        <p className='para'>اگر علاقه‌مند به فعالیت اجتماعی هستید و از ارتقای کیفیت زندگی دیگران لذت می‌برید.اگر در رشته‌ی خود موفق هستید، سابقه‌ی کار حرفه‌ای و مدیریتی دارید یا در حال حاضر کسب و کار خود را اداره می‌کنید، از شما دعوت می‌کنیم به گروه راهنماهای کاریار بپیوندید و هدایت مهارت‌آموزان را بر عهده بگیرید.</p>
        <ButtonMe
          text={
            " همین حالا اقدام کنید"}
          className={"register"}
          link={""} />
      </div>  
      <div className='leftsection parent-sections' >2
      </div>  

        </div>

  );
}

