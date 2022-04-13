import { React, useState } from "react";
import "./Dropdown.scss";
import Capsule from "../capsule/Capsule";
import useClickOutside from "../../../../hooks/useClickOutside";
/**
 * This function renders general Dropdowns, used in  API type(GET,POST,DELETE,PUT) Dropdown in here.  
 * @method Dropdown
 * @param {string} [inputArray]
 * @param {method} [onSelect]
 * @param {method} [selectedString]
 * 
 */

function Dropdown({ inputArray, onSelect, selectedString }) {
  let [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useClickOutside(() => setShowDropdown(false));

  return (
    <div className="dropdown">
      <Capsule
        text={selectedString}
        onClickCapsule={() => setShowDropdown(!showDropdown)}
        showDropdown={showDropdown}
      ></Capsule>
      {showDropdown && (
        <div className="dropdown-container" ref={containerRef}>
          {inputArray.map((input, index) => (
            <div
              key={index}
              className={`dropdown-container__item ${
                input.selected && `dropdown-selected`
              }`}
              onClick={() => {
                 onSelect(input);
                 setShowDropdown(false);
              }}
            >
              {input.apiType}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
