import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import ButtonMe from "../ButtonMe/ButtonMe"

import "./style.css"
const CardArray = [
  {
    image: "/images/Frame1.png",
    title: " مسیر آموزش و اشتغال برنامه‌نویسی سمت سرور(بک‌اند)",
    description: " در این دوره ابتدا با تفکر الگوریتمی و مدل حل مسئله آشنا می‌شوید و در مرحله‌ی بعد مدل حل مسئله با زبان پایتون و جنگو را می‌آموزید.",
    course1: "مبانی برنامه‌نویسی و تفکر الگوریتمی",
    course2: "پایتون پیشرفته",
    course3: "جنگو",
  },
  {
    image: "/images/Frame2.png",

    title: "مسیر آموزش و اشتغال برنامه‌نویسی سمت کاربر (فرانت‌اند)",
    description: "در این دوره شما با زبان‌های HTML, CSS, JavaScript برای طراحی سایت آشنا می‌شوید. همه شرکت‌های بزرگ و کوچک و اشخاص حقیقی و کسب و کارهای خانوادگی به دنبال شما هستند تا سایتی برای آن‌ها طراحی کنید.",
    course1: "فرانت‌اند مقدماتی‌(HTML, CSS)",
    course2: "فرانت‌اند پیشرفته‌(JavaScript)",
    course3: "React JS",
    course4: "WordPress",
  },
  {
    image: "/images/Frame3.png",

    title: "مسیر آموزش و اشتغال امور اداری",
    description: "هر سازمانی برای انجام کارهای دفتری و مکاتبات، نیازمند استخدام کارمند اداری است. در این دوره با دانش عمومی کامپیوتر، کار با مرورگرهای وب و اینترنت آشنا می‌شوید.",
    course1: "مبانی برنامه‌نویسی و تفکر الگوریتمی",
    course2: "پایتون پیشرفته",
    course3: "جنگو"
  },
  {
    image: "/images/Frame4.png",

    title: "مسیر آموزش و اشتغال تحلیل داده",
    description: "ماینکه تحلیلگر داده کیست و یک تحلیلگر داده در طول روز چه کارهایی انجام می‌دهد؟ چه دانش و مهارت‌هایی باید داشته باشد؟ چگونه باید یک تحلیلگر داده استخدام کنیم و... از جمله سوالاتی است که با فکر کردن به این شغل به ذهنتان خطور می‌کند.",
    course1: "مبانی برنامه‌نویسی و تفکر الگوریتمی",
    course2: "تحلیل داده مقدماتی با پایتون",
    course3: "تحلیل داده پیشرفته"
  }
]
export default function index() {
  return (
    <div className='MainSection3 container container-mobile'>
      <h2 className='title-mainSection3'>دوره‌های آموزشی کاریار</h2>
        <div className='my-card-wrapper'>
        <Row ls={1} md={1} lg={2} className="g-4">
          {CardArray.map((card, idx) => (
            <Col>
              <Card ls={1} md={1} lg={2} >
                <div className='card-logo-title'>
                  <img className='Image' variant="top" src={process.env.PUBLIC_URL + card.image} alt="" width="24px" height="24px" />
                  <p className='Card-Title'>{card.title}</p>
                </div>
                <Card.Body>
                  <Card.Text className='detaels'>
                    {card.description}
                  </Card.Text>
                  <div className='wrapper-courses'>
                    <span >{card.course1}</span>
                    <span>{card.course2}</span>
                    <span>{card.course3}</span>
                    {card.course4 ? <span>{card.course4}</span> : ""}
                  </div>
                  <div className='wrappe-footer-section'>
                    <div >
                      <Image className='Image' variant="top" src={process.env.PUBLIC_URL + "/images/clock.png"} alt="clock" /> <span>سه ماه</span>
                      <Image className='Image' variant="top" src={process.env.PUBLIC_URL + "/images/calendar.png"} alt="calendar" /><span>۲۰ ساعت در هفته</span>
                    </div>
                    <div>

                      <span className='learn-more'>مشاهده دوره و ثبت نام
                      <a href='' ><Image className='Image' variant="top" src={process.env.PUBLIC_URL + "/images/arrow-left2.png"} alt="learn more" /></a>
                      </span>
                      <div className="button">
                        <ButtonMe
                          text={
                            "مشاهده دوره و ثبت نام"}
                          className={"register"}
                          link={""} />
                      </div>
                      </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
        </div>
    </div>

  );
}

