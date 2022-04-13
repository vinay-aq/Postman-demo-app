import React, { useState } from "react";
import FlexWrapper from "../../FlexWrapper/FlexWrapper";
import Dropdown from "../Dropdown/index/Dropdown";

import "./ApiSearchbox.scss";
import SendButton from "../SendButton/SendButton";

/**
 * This function renders (Dropdown, input and the send Button) on UI responsible for search handling the API URL with API type(GET,POST,DELETE,PUT).
 * @method ApiSearchBox
 * @param {string} [apiURL]
 * @param {method} [setApiURL]
 * @param {method} [handleAPIRequest]
 * @param {method} [apiTypeListDropdown]
 * @param {method} [setApiTypeListDropdown]
 */
function ApiSearchbox({
  apiURL,
  setApiURL,
  handleAPIRequest,
  apiTypeListDropdown,
  setApiTypeListDropdown,
}) {
  let selectedString = apiTypeListDropdown.find(
    (input) => input.selected
  ).apiType;

  const handleSelectDD = (selectedItem) => {
    let newInputArray = apiTypeListDropdown.map((item) =>
      item.apiType === selectedItem.apiType
        ? { ...item, selected: true }
        : { ...item, selected: false }
    );
    setApiTypeListDropdown(newInputArray);
  };

  const handleChangeInput = (event) => {
    setApiURL(event.target.value);
  };

  return (
    <React.Fragment>
      <FlexWrapper className="input-container">
        <Dropdown
          inputArray={apiTypeListDropdown}
          onSelect={handleSelectDD}
          selectedString={selectedString}
        />
        {/* <Input  onChangeValue={handleChangeInput}/> */}
        <input
          type="text"
          placeholder="Enter Request URL"
          className="input-container__input"
          onChange={handleChangeInput}
          value={apiURL}
          onKeyDown={(e) => {
            if(e.key === "Enter") 
               handleAPIRequest();
          }}
        />
        <SendButton onClick={handleAPIRequest} />
      </FlexWrapper>
    </React.Fragment>
  );
}

export default ApiSearchbox;
