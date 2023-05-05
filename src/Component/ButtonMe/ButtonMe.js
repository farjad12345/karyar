import React from 'react';
import "./ButtonMe.css";
function ButtonMe({className,text,link}) {
  return (
      <a class={className} href={link}>
          {text}
      </a>)
}
export default ButtonMe