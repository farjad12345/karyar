import React from 'react'
import "./style.css"
import ButtonMe from "../ButtonMe/ButtonMe"
export default function HeroSection0() {
    return (
        <div className="section2">
            <div className="container container-mobile">
                <section className="heroSection">

                <div className="right-section">
                        <h2>دوره متناسب با بازار کار</h2>
                        <p>
                            اکثر مجموعه هایی که بکار آموزش علاقمندان به حضور در فضای کسب و کارهای آنلاین و استارتاپی مشغول هستند، نیازسنجی مناسبی از احتیاجات کسب و کارها ندارند.
                        </p>
                        <p>ما در کاریار با تمرکز بر روی علاقمندان ورود به دنیای برنامه نویسی، نیارهای امروز کسب و کارها را شناخته و سعی داریم تا همان نیرویی که نیاز کسب و کارها است، پروش داده و آماده ورود به بازار کار کنیم.</p>
                        <p>در کاریار یاد بگیرید که چگونه یک برنامه‌‌‌‌‌نویس حرفه‌‌‌‌‌‌‌‌‌ای شوید. مهارت‌های تخصصی و ارتباطی خود را تقویت کنید و به شبکه وسیعی از افراد حرفه‌ای و کارفرماها متصل شوید.</p>
                    <div className="button-section">
                            <ButtonMe 
                                text={
                                    "  ثبت نام کن"}
                                className={"register"}
                                link={""} />
                            <ButtonMe
                                text={
                                    " اطلاعات بیشتر  "
                                }
                                className={"lern-more"}
                                link={""} /> 
                    </div>
                </div>
                    <div className="left-section">
                        <div className='imagewrapper'>

                            <img className='left-section-img' src={process.env.PUBLIC_URL + '/images/Picture.png'} alt="" width="100%" height="100%" />
                        </div>
                    </div>
                    </section>
            </div>
        </div>
    )
}
