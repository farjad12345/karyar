import React from 'react'
import "./style.css";
// import EachBox from "../EachBox"
// const datas = [
//     { image: '/images/monitor-mobbile.png', title: "کلاس‌های آنلاین", content:"تمام فرآیند اجرایی و آموزشی کاریار آنلاین است، از این رو علاقمندان از سراسر ایران می‌توانند در دوره‌های آموزشی کاریار شرکت کنند." },
//     { image: '/images/code-circle.png', title: "پروژه محور", content:"مهارت‌آموزان در هر دوره آموزشی، به صورت فردی و تیمی پروژه‌های کاربردی را انجام می‌دهند و پروژه‌های خود را در جلساتی با حضور کارفرماها ارائه می‌کنند." },
//     { image: '/images/people.png', title: "حضور راهنما", content:"هر مهارت‌آموز در تمام مدت آموزش، با یک مربی حل تمرین و یک منتور در ارتباط است. آنها همراه و راهنمای مهارت‌آموزان در مسیر حرفه‌ای شدن هستند." },
//     { image: '/images/book.png', title: "کارگاه‌های کاربردی", content: "کارگاه‌های کاربردی ماهانه، با هدف آموزش‌های کاربردی و در راستای نیاز بازار برگزار می‌شود. مدیران شرکت‌های بزرگ و کوچک برگزار‌کنندگان این کارگاه‌ها هستند." }


// ]
export default function MainSection2() {
    return (
        <section className="MainSection2">
            <div className="container container-mobile">
            <h2 className='title'>کاریار از نگاه آمار و ارقام</h2>
                <div className='cards-MainSection2'>
                    <div className=' each-section ' >
                        <p className='MainSection2-Logo-box'><img src={process.env.PUBLIC_URL + '/images/user-tag.png'} alt="کاریار" /></p>
                        <div className='each-content'>
                            <p className='text1'>۲۵۹</p>
                            <p className='text2'>مهارت آموز</p>
                        </div>
                    </div>
                    <div className=' each-section ' >
                        <p className='MainSection2-Logo-box'><img src={process.env.PUBLIC_URL + '/images/book2.png'} alt="کاریار" /></p>
                        <div className='each-content'>
                            <p className='text1'>۵</p>
                            <p className='text2'>دوره آموزشی</p>
                        </div>
                    </div>
                    <div className=' each-section ' >
                        <p className='MainSection2-Logo-box'><img src={process.env.PUBLIC_URL + '/images/profile-2user.png'} alt="کاریار" /></p>
                        <div className='each-content'>
                            <p className='text1'>۸۸</p>
                            <p className='text2'>منتور و مربی</p>
                        </div>
                    </div>
                    <div className=' each-section ' >
                        <p className='MainSection2-Logo-box'><img src={process.env.PUBLIC_URL + '/images/brifecase-tick.png'} alt="کاریار" /></p>
                        <div className='each-content'>
                            <p className='text1'>۹۰٪</p>
                            <p className='text2'>ورود به بازار کار</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
