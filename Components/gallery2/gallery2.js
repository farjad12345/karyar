
import React from 'react'

function Gallery2() {
  return (
     <div className="w-5/12 mb-8   ">
      <img
        className=" 	"
        src="/img/gal-2.jpeg"

        alt="Picture"
      />
      <p className="text-center  text-white mx-auto bg-secondry px-8 py-4 leading-4 h-12 " >آپارتمان خانوادگی مدرن </p>
      <div className="w-full bg-graylight-1 flex-col flex gap-8 h-48   justify-between p-4	">
        <div className="mt-8 mx-auto flex  justify-between w-full">
          <div>مالدیو</div>
          <div>اتاق ۴</div>
        </div>
        <div className=" flex  justify-between w-full">
          <div>    مترمربع  </div> <span>۸۰۰</span>
          <div>       قیمت ۵۰۰ میلیون </div>
        </div>
      </div>

      <div className="flex  w-3/3">
        <a href="#" className="  text-center mx-auto text-xl text-white bg-primary w-full px-4 py-2"> مشاهده ملک</a>
      </div>
  
    </div>
  )
}

export default Gallery2