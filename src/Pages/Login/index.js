import React from 'react'
import "./style.css"
export default function Login() {
  return (
    <div className='logIn'>
      <div className='right-side'>
        <img alt='logo-karyar' className='logo-login' src={process.env.PUBLIC_URL + '/images/logo.png'} />
        <p className='title-login'>به سامانه آموزشی کاریار خوش آمدید</p>
        <form action='' method='' className='form'>
          <label>
            <p className='name-text'>نام کاربری، آدرس ایمیل</p>
          </label>
          <input className=' input-text input-name-or-email' ></input>
          <label>
            <p className='pass-txt'>رمز عبور</p>
          </label>
          <input className=' input-text input-pass'></input>

          <div className='wrapper-chkbox-txt'>
            <div className='wrapper-chkbox'>
              <input className='check' type="checkbox" /> <span className='remember-me'>مرا بخاطر بسپار</span>
            </div>
            <span className='forgot-user-pass'>نام کاربری یا رمز ورود خود را فراموش کرده‌اید؟</span>

          </div>
          <button className='enter'>ورود</button>

          <span className='two-para'>
            <p className='no-member'>عضو سامانه آموزشی کاریار نیستید؟</p><a className='guest'>ورود بصورت میهمان</a>
          </span>
        </form>
        <div className='pay-attention'>
          <p>نکته مهم:</p> <span>توجه کنید که کوکی‌ها باید در مرورگر شما فعال باشند.</span>
        </div>
      </div>
      <div className='left-side'>
        <img src={process.env.PUBLIC_URL + '/images/Photo.png'} alt="کاریار" />
      </div>
    </div>
  )
}
