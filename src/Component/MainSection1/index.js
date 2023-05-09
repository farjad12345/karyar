import React from 'react'
import "./style.css";
import EachBox from "../EachBox"
const datas = [
    { image: '/images/monitor-mobbile.png', title: "کلاس‌های آنلاین", content:"تمام فرآیند اجرایی و آموزشی کاریار آنلاین است، از این رو علاقمندان از سراسر ایران می‌توانند در دوره‌های آموزشی کاریار شرکت کنند." },
    { image: '/images/code-circle.png', title: "پروژه محور", content:"مهارت‌آموزان در هر دوره آموزشی، به صورت فردی و تیمی پروژه‌های کاربردی را انجام می‌دهند و پروژه‌های خود را در جلساتی با حضور کارفرماها ارائه می‌کنند." },
    { image: '/images/people.png', title: "حضور راهنما", content:"هر مهارت‌آموز در تمام مدت آموزش، با یک مربی حل تمرین و یک منتور در ارتباط است. آنها همراه و راهنمای مهارت‌آموزان در مسیر حرفه‌ای شدن هستند." },
    { image: '/images/book.png', title: "کارگاه‌های کاربردی", content: "کارگاه‌های کاربردی ماهانه، با هدف آموزش‌های کاربردی و در راستای نیاز بازار برگزار می‌شود. مدیران شرکت‌های بزرگ و کوچک برگزار‌کنندگان این کارگاه‌ها هستند." }


]
export default function MainSection1() { 
    return (
        <section className="MainSection1">
                <h2 className='title'>ویژگی‌های کاریار</h2>
            <div className="container container-mobile">
                <div className='cards' >
                    {datas.map(data => <EachBox  imageUrl={data.image} title={data.title} para={data.content} />)}
      
            </div>
        </div>
        </section>
    )
}
