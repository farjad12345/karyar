import React from 'react';
import "./ButtonMe.css";
function ButtonMe({className,text,link}) {
  return (
      <a className={className} href={link}>
          {text}
      </a>)
}
export default ButtonMe