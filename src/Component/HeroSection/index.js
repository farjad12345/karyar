import React from 'react'
import "./style.css"
import ButtonMe from "../ButtonMe/ButtonMe"
export default function HeroSection() {
    return (
        <div className="section">
            <div className="container container-mobile">
                <section className="hero">

                <div className="right-section">
                        <h1 className="karyar-text">کاریار،</h1>
                        <h2>مدرسه آنلاین برنامه‌نویسی متصل به کار</h2>
                        <p> کاریار مرجع متفاوتی برای معرفی برنامه‌نویسان تازه‌نفس به استارتاپ‌های کوچک و شرکت‌های پیشرو در اکوسیستم استارتاپی ایران و پلتفرمی برای پرورش تولیدکنندگان تکنولوژی در سطح جهان است.</p>

                    <div className="button-section">
                            <ButtonMe 
                                text={
                                    " همین حالا ثبت نام کن"}
                                className={"register"}
                                link={""} />
                            <ButtonMe
                                text={
                                    " مطالعه بیشتر  "
                                }
                                className={"lern-more"}
                                link={""} /> 
                    </div>
                </div>
                    <div className="left-section">
                        <div className='imagewrapper'>

                            <img className='left-section-img' src={process.env.PUBLIC_URL + '/images/image12.png'} alt="" width="100%" height="100%" />
                        </div>
                    </div>
                    </section>
            </div>
        </div>
    )
}
