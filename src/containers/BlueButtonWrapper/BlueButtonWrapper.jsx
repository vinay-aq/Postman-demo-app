import React from 'react'
import "./BlueButtonWrapper.scss";
/**
 * This function is a  wrapper component for Blue Buttons in the application.   
 * @method ApiSearchBox
 * @param {object} [children]
 * @param {string} [className]
 * @param {method} [onClick]
 * 
 */
function BlueButtonWrapper({children,className,onClick}) {
  return (
    <button onClick={onClick} className={`blue-btn-wrapper ${className && className}`}>{children}</button>
  )
}

export default BlueButtonWrapper