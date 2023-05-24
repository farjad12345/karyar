import React from 'react'

import "./style.css"
const datas = [
  {
    Id:1,
    guestion: "آیا شرایط سنی خاصی برای شرکت در دوره هست؟",
    answertitle: "به چه ابزارهایی برای شرکت در دوره‌های کاریار نیاز دارم؟",
    answer:"شما برای شرکت در دوره‌های کاریار باید در جلسات آنلاین شرکت کنید و تمرین‌های کلاسی را انجام دهید، بنابراین به لپ تاپ یا کامپیوتر مجهز به دوربین نیاز دارید."
  },
  {
    Id:2,
    guestion: "آیا بعد از گذراندن دوره‌ها امکان اشتغال برای من فراهم می‌شود؟",
    answertitle: "به چه ابزارهایی برای شرکت در دوره‌های کاریار نیاز دارم؟",
    answer:"شما برای شرکت در دوره‌های کاریار باید در جلسات آنلاین شرکت کنید و تمرین‌های کلاسی را انجام دهید، بنابراین به لپ تاپ یا کامپیوتر مجهز به دوربین نیاز دارید."
  },
  {
    Id:3,
    guestion: "مراحل پذیرش در دوره‌های کاریار چیست؟",
    answertitle: "به چه ابزارهایی برای شرکت در دوره‌های کاریار نیاز دارم؟",
    answer:"شما برای شرکت در دوره‌های کاریار باید در جلسات آنلاین شرکت کنید و تمرین‌های کلاسی را انجام دهید، بنابراین به لپ تاپ یا کامپیوتر مجهز به دوربین نیاز دارید."
  },
  {
    Id:4,
    guestion: "آیا در پایان دوره مدرک خاصی دریافت می کنم؟",
    answertitle: "به چه ابزارهایی برای شرکت در دوره‌های کاریار نیاز دارم؟",
    answer:"شما برای شرکت در دوره‌های کاریار باید در جلسات آنلاین شرکت کنید و تمرین‌های کلاسی را انجام دهید، بنابراین به لپ تاپ یا کامپیوتر مجهز به دوربین نیاز دارید."
  },
]
const myarray = [1, 2, 3, 4];
const handleOnclickAddClass = (e) => {
  e.preventDefault()
  console.log(e.target.id)
  var element =""
  myarray.map((ma) => 
    element = document.getElementById(ma).classList.add("display-none")
  
  )
}
const handleOnclickRmoveClass = (e) => {
  e.preventDefault()
  console.log(e.target.id)
  var ma = e.target.alt
  var element1 = ""
  myarray.map((ma) =>
    element1 = document.getElementById(ma).classList.add("display-none")

  )
  var element = document.getElementById(ma).classList.remove("display-none")
  console.log(ma);
  // )
}
export default function MainSection4() {
  return (
    <div className='MainSection4  '>
      <h2 className='title-mainSection3'>سوالات متداول</h2>
      {datas.map((data) => (
        <div className='faq-wrraper'>
          <div className='each-questin'>
            <p alt="add" className='add'>
              <img alt={data.Id}  onClick={handleOnclickRmoveClass} src={process.env.PUBLIC_URL + "/images/add.png"} />
            </p>
            <p>
              {data.guestion}</p></div>
          <div id={data.Id} className='each-answer'>
            <p  id={data.Id } className="minus" >
              <img alt='minus' id={data.Id} onClick={handleOnclickAddClass} src={process.env.PUBLIC_URL + "/images/minus.png"}  />
</p>

            <p className='title-answer'>{ data.answertitle}</p>
            <p className='answer'>{ data.answer}</p>
        </div>
     </div>))}

        </div>

  );
}

