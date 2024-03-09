import React from 'react'

function Gallery() {
  return (
    <div>            <div class="story__pictures">
    <img
        src="img/story-1.jpeg"
        alt="Couple happy for new house"
        class="story__img-1"
    />
    <img
        src="img/story-2.jpeg"
        alt="New house"
        class="story__img-2"
    />
</div>

<div class="story__content">
    <h3 class="u-heading--light u-heading-3">مشتریان خوشحال</h3>

    <h2 class="u-heading--dark u-heading-2 u-my-small">
        &rdquo;بهترین تصمیم زندگی ما&ldquo;
    </h2>

    <p class="story__text u-mb-medium">
        متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن
        فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان
        وب و گرافیک از این متن برای پرکردن
    </p>

    <button class="btn btn-brown">خانه خود را پیدا کنید</button>
</div>

<div class="homes">
    <div class="card">
        <img src="img/gal-2.jpeg" alt="House 6" class="card__img" />
        <h5 class="card__title">آپارتمان خانوادگی مدرن</h5>
        <svg class="card__like">
             xlinkHref="img/sprite.svg#icon-heart-full" 
        </svg>
        <div class="card__details">
            <svg class="card__icon">
                xlinkHref="img/sprite.svg#icon-map-pin" 
            </svg>
            <p class="card__text">مالدیو</p>

            <svg class="card__icon">   xlinkHref="img/sprite.svg#icon-profile-male" </svg>
            <p class="card__text">4 اتاق</p>

            <svg class="card__icon">
                <span xlinkHref="img/sprite.svg#icon-expand"></span>
            </svg>
            <p class="card__text">400 متر مربع</p>

            <svg class="card__icon"> xlinkHref="img/sprite.svg#icon-key" </svg>
            <p class="card__text">560 میلیون تومان</p>
        </div>

        <a href="singleHouse.html" class="btn btn-brown btn-card">مشاهده ملک</a>
    </div>
    <div class="card">
        <img src="img/gal-2.jpeg" alt="House 6" class="card__img" />
        <h5 class="card__title">آپارتمان خانوادگی مدرن</h5>
        <svg class="card__like">
            <span xlinkHref="img/sprite.svg#icon-heart-full"></span>
        </svg>
        <div class="card__details">
            <svg class="card__icon">
                <span xlinkHref="img/sprite.svg#icon-map-pin"></span>
            </svg>
            <p class="card__text">مالدیو</p>

            <svg class="card__icon">
                <use
                    xlinkHref="img/sprite.svg#icon-profile-male"
                ></use>
            </svg>
            <p class="card__text">4 اتاق</p>

            <svg class="card__icon">
                <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p class="card__text">400 متر مربع</p>

            <svg class="card__icon">
                <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p class="card__text">560 میلیون تومان</p>
        </div>

        <a href="singleHouse.html" class="btn btn-brown btn-card">مشاهده ملک</a>
    </div>
    <div class="card">
        <img src="img/gal-2.jpeg" alt="House 6" class="card__img" />
        <h5 class="card__title">آپارتمان خانوادگی مدرن</h5>
        <svg class="card__like">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
        </svg>
        <div class="card__details">
            <svg class="card__icon">
                <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p class="card__text">مالدیو</p>

            <svg class="card__icon">
                <use
                    xlinkHref="img/sprite.svg#icon-profile-male"
                ></use>
            </svg>
            <p class="card__text">4 اتاق</p>

            <svg class="card__icon">
                <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p class="card__text">400 متر مربع</p>

            <svg class="card__icon">
                <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p class="card__text">560 میلیون تومان</p>
        </div>

        <a href="singleHouse.html" class="btn btn-brown btn-card">مشاهده ملک</a>
    </div>
    <div class="card">
        <img src="img/gal-2.jpeg" alt="House 6" class="card__img" />
        <h5 class="card__title">آپارتمان خانوادگی مدرن</h5>
        <svg class="card__like">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
        </svg>
        <div class="card__details">
            <svg class="card__icon">
                <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p class="card__text">مالدیو</p>

            <svg class="card__icon">
                <use
                    xlinkHref="img/sprite.svg#icon-profile-male"
                ></use>
            </svg>
            <p class="card__text">4 اتاق</p>

            <svg class="card__icon">
                <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p class="card__text">400 متر مربع</p>

            <svg class="card__icon">
                <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p class="card__text">560 میلیون تومان</p>
        </div>

        <a href="singleHouse.html" class="btn btn-brown btn-card">مشاهده ملک</a>
    </div>
    <div class="card">
        <img src="img/gal-2.jpeg" alt="House 6" class="card__img" />
        <h5 class="card__title">آپارتمان خانوادگی مدرن</h5>
        <svg class="card__like">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
        </svg>
        <div class="card__details">
            <svg class="card__icon">
                <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p class="card__text">مالدیو</p>

            <svg class="card__icon">
                <use
                    xlinkHref="img/sprite.svg#icon-profile-male"
                ></use>
            </svg>
            <p class="card__text">4 اتاق</p>

            <svg class="card__icon">
                <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p class="card__text">400 متر مربع</p>

            <svg class="card__icon">
                <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p class="card__text">560 میلیون تومان</p>
        </div>

        <a href="singleHouse.html" class="btn btn-brown btn-card">مشاهده ملک</a>
    </div>
    <div class="card">
        <img src="img/gal-2.jpeg" alt="House 6" class="card__img" />
        <h5 class="card__title">آپارتمان خانوادگی مدرن</h5>
        <svg class="card__like">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
        </svg>
        <div class="card__details">
            <svg class="card__icon">
                <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p class="card__text">مالدیو</p>

            <svg class="card__icon m-4">
                <use
                    xlinkHref="img/sprite.svg#icon-profile-male"
                ></use>
            </svg>
            <p class="card__text">4 اتاق</p>

            <svg class="card__icon m-4">
                <div xlinkHref="img/sprite.svg#icon-expand"></div>
            </svg>
            <p class="card__text">400 متر مربع</p>

            <svg class="card__icon">
                <div xlinkHref="img/sprite.svg#icon-key"></div>
            </svg>
            <p class="card__text">560 میلیون تومان</p>
        </div>

        <a href="singleHouse.html" class="btn btn-brown btn-card">مشاهده ملک</a>
    </div>

</div>

<div class="gallery">
    <figure class="gallery__box gallery__box-1">
        <img
            src="img/gal-1.jpeg"
            alt="Galley house-1"
            class="gallery__img"
        />
    </figure>
    <figure class="gallery__box gallery__box-2">
        <img
            src="img/gal-2.jpeg"
            alt="Galley house-2"
            class="gallery__img"
        />
    </figure>
    <figure class="gallery__box gallery__box-3">
        <img
            src="img/gal-3.jpeg"
            alt="Galley house-3"
            class="gallery__img"
        />
    </figure>
    <figure class="gallery__box gallery__box-4">
        <img
            src="img/gal-4.jpeg"
            alt="Galley house-4"
            class="gallery__img"
        />
    </figure>
    <figure class="gallery__box gallery__box-5">
        <img
            src="img/gal-5.jpeg"
            alt="Galley house-5"
            class="gallery__img"
        />
    </figure>
    <figure class="gallery__box gallery__box-6">
        <img
            src="img/gal-6.jpeg"
            alt="Galley house-6"
            class="gallery__img"
        />
    </figure>
    <figure class="gallery__box gallery__box-7">
        <img
            src="img/gal-7.jpeg"
            alt="Galley house-7"
            class="gallery__img"
        />
    </figure>
    <figure class="gallery__box gallery__box-8">
        <img
            src="img/gal-8.jpeg"
            alt="Galley house-8"
            class="gallery__img"
        />
    </figure>
    <figure class="gallery__box gallery__box-9">
        <img
            src="img/gal-9.jpeg"
            alt="Galley house-9"
            class="gallery__img"
        />
    </figure>
    <figure class="gallery__box gallery__box-10">
        <img
            src="img/gal-10.jpeg"
            alt="Galley house-10"
            class="gallery__img"
        />
    </figure>
    <figure class="gallery__box gallery__box-11">
        <img
            src="img/gal-11.jpeg"
            alt="Galley house-11"
            class="gallery__img"
        />
    </figure>
    <figure class="gallery__box gallery__box-12">
        <img
            src="img/gal-12.jpeg"
            alt="Galley house-12"
            class="gallery__img"
        />
    </figure>
    <figure class="gallery__box gallery__box-13">
        <img
            src="img/gal-13.jpeg"
            alt="Galley house-13"
            class="gallery__img"
        />
    </figure>
    <figure class="gallery__box gallery__box-14">
        <img
            src="img/gal-14.jpeg"
            alt="Galley house-14"
            class="gallery__img"
        />
    </figure>
</div></div>
  )
}

export default Gallery