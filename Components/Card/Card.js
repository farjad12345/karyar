

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
    {datas.map((data)=>  (<div className="text-center  flex flex-col  text-white text-sm items-center  w-full  p-4 ">
          <img
            className="rounded-8xl"
            src={data.src}
            width={data.w}
            height={data.h}
            alt={data.alt}
          />
          <div className="my-4">
            <h3 className="text-xs">
       {data.h3}
            </h3>
            <p className="text-xs">{data.p}</p>

          </div>
        </div>
        ))}
    </div>


)}
export default Card;