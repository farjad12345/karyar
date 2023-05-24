import React, { useState } from 'react'; 
import "./style.css";
// console.log(process.env.PUBLIC_URL + '/images/1.jpg');

export default function MySlider() {
    const img = document.querySelector(".img");
    var index = 0;
    const circles = document.getElementsByClassName("fa-circle");
    const leftCursor = document.querySelector(".fa-angle-left");
    const rightCurser = document.querySelector(".fa-angle-right");
    let x = "";
    const source = [
        {
            img: "1.jpg",
            circle: ".one",
        },
        {
            img: "2.jpg",
            circle: ".two",
        },
        {
            img: "3.jpg",
            circle: ".three",
        },
    ];
    
    
    //start the slider
     function start() {
        clearInterval(x);
        x = setInterval(function () {
            if (index == 2) {
                index = 0;
                // img.setAttribute("src", `${process.env.PUBLIC_URL}/images/${source[index].img}`);
                // console.log(`${process.env.PUBLIC_URL}/images/${source[index].img}`);
                
            } else {
                index++;
                // img.setAttribute("src", `${process.env.PUBLIC_URL}/images/${source[index].img}`);
                // console.log(`${process.env.PUBLIC_URL}/images/${source[index].img}`);

            }
            for (let i = 0; i < 3; i++) {
                circles[i].classList.remove("color-black");
            }
            document
                .querySelector(`${source[index].circle}`)
                .classList.add("color-black");
            img.setAttribute("src", `${process.env.PUBLIC_URL}/images/${source[index].img}`);
        }, 3000);
    }
    // slider to right and right Arow
    
     function right() {
        clearInterval(x);
        if (index == 2) {
            index = 0;
        } else {
            index++;
        }
        //  let srcNew = `${process.env.PUBLIC_URL}/images/${source[index].img}`
         img.setAttribute("src", `${process.env.PUBLIC_URL}/images/${source[index].img}`);
        //  console.log(srcNew);
        for (let i = 0; i < 3; i++) {
            circles[i].classList.remove("color-black");
        }
        document
            .querySelector(`${source[index].circle}`)
            .classList.add("color-black")
    }
    // slider to left and left Arow
    
     function left() {
        clearInterval(x);
        // console.log(index);
        if (index == 0) {
            index = 2;
            img.setAttribute("src", `${process.env.PUBLIC_URL}/images/${source[index].img}`);
            console.log(img);
            for (let i = 0; i < 3; i++) {
                circles[i].classList.remove("color-black");
            }
            document
                .querySelector(`${source[index].circle}`)
                .classList.add("color-black");
        } else {
            index--;
            img.setAttribute("src", `${process.env.PUBLIC_URL}/images/${source[index].img}`);
            for (let i = 0; i < 3; i++) {
                circles[i].classList.remove("color-black");
            }
            document
                .querySelector(`${source[index].circle}`)
                .classList.add("color-black");
        }
    }
    // circle buttom one
     function one() {
        index = 0;
         img.setAttribute("src", `${process.env.PUBLIC_URL}/images/1.jpg`);
        var circles = document.getElementsByClassName("fa-circle");
        for (let i = 0; i < 3; i++) {
            circles[i].classList.remove("color-black");
        }
        document
            .querySelector(`${source[index].circle}`)
            .classList.add("color-black");
    }
    // // circle buttom two
    
    //  function two() {
    //     index = 1;
    //     img.setAttribute("src", `${process.env.PUBLIC_URL} + ${source[index].img}`);
    //     var circles = document.getElementsByClassName("fa-circle");
    //     for (let i = 0; i < 3; i++) {
    //         circles[i].classList.remove("color-black");
    //     }
    //     document
    //         .querySelector(`${source[index].circle}`)
    //         .classList.add("color-black");
    // }
    // // circle buttom three
    
    //  function three() {
    //     index = 2;
    //     img.setAttribute("src", `${process.env.PUBLIC_URL} + ${source[index].img}`);
    //     var circles = document.getElementsByClassName("fa-circle");
    //     for (let i = 0; i < 3; i++) {
    //         circles[i].classList.remove("color-black");
    //     }
    //     document
    //         .querySelector(`${source[index].circle}`)
    //         .classList.add("color-black");
    // }
  return (
      <div className='MySlider'>
          <div className="slider-wraper">
              <div >
                  <img src={process.env.PUBLIC_URL + '/images/1.jpg'} alt="slider" className="img" />
                  <i className="fas fa-angle-left"
                      onClick={left}
                  ></i>
                  <i className="fas fa-angle-right"
                      onClick={right}
                    //   onLoad={start}
                  ></i>
              </div>
              <div className="wraper-circles">
                  <i className="fas fa-circle one color-black"
                      onClick={one}
                  ></i>
                  <i className="fas fa-circle two"
                    //   onClick={two}
                  ></i>
                  <i className="fas fa-circle three"
                    //   onClick={three}
                  ></i>
              </div>

          </div>
    </div>
  )
}
