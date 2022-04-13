import React from "react";
import "./Capsule.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * This is a child component for DropDown Component, it renders the box above actual drop down, which shows the selected value of dropdown.   
 * @method Capsule
 * @param {string} text
 * @param {method} onClickCapsule
 * @param {Boolean} showDropdown
 * 
 */
function Capsule({ text, onClickCapsule, showDropdown }) {
  return (
    <div
      className="dropdown-capsule"
      onClick={(event) => {
        event.stopPropagation();
        onClickCapsule();
      }}
    >
      {text}
      {showDropdown ? (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/chevron-down.svg`}
          alt="chevron-up"
          className="dropdown-capsule-img-down"
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/chevron-down.svg`}
          alt="chevron-down"
          className="dropdown-capsule-img"
        />
      )}
    </div>
  );
}

export default Capsule;
