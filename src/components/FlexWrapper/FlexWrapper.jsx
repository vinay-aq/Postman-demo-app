import React from 'react'
import "./FlexWrapper.scss";
/**
 * This function renders (Dropdown, input and the send Button) on UI responsible for search handling the API URL with API type(GET,POST,DELETE,PUT).  
 * @method ApiSearchBox
 * @param {object} [children]
 * @param {string} [height]
 * @param {string} [className]

 */

function FlexWrapper({children,height,direction,className}) {

let flexDirection = direction==="column"?"column":"row"

  return (
    <div className={`flex-wrapper ${className && className}`} style={{height, flexDirection}}>{children}</div>
  )
}

export default FlexWrapper