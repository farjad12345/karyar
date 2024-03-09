

const datas = [{
  "src": "/img/realtor-1.jpeg",
  "w": "64",
  "h": "64",
  "alt": "Picture",
  "h3": " مهدی ایلخانی نسب",
  "p": "  869 فروش خانه "
}, {
  "src": "/img/realtor-2.jpeg",
  "w": "64",
  "h": "64",
  "alt": "Picture",
  "h3": "  کوثر بهشتی  ",
  "p": "  245 فروش خانه "
}, {
  "src": "/img/realtor-3.jpeg",
  "w": "64",
  "h": "64",
  "alt": "Picture",
  "h3": "                 عرشیا احسنی  ",
  "p": "  130 فروش خانه "
}]
function Card() {
  return (
    <div className="flex mx-auto md:flex-row flex-col gap-24  justify-between items-center text-center">
    {datas.map((data)=>  ( <div className="bg-primary lg:w-6/12 md:flex-row flex-col flex  relative  ">
      <p className="text-primary text-sm">  سه مالک برتر</p>
          <img
            className="shadow-3xl flex-row rounded-full  w-5/12  md:w-4/12 absolute md:top-28 lg:top-10 top-8 left-40 md:left-100 lg:-left-4"
            width={data.w}
            height={data.h}
            src={data.src}
            alt={data.alt} />
          <div className='md:py-16 px-16 md:pb-16  ' >

            {/* <img
              className=" flex-col md:w-3/12   shadow-3xl   mx-auto"
              src={data.src}
              alt={data.alt}
            /> */}
          </div>
          <h3/>{data.h3}<h3/>
          <p>{data.p}</p>
        </div>
     
        ))}
    </div>


)}
export default Card;