import React from "react";
import HeadersTable from "../HeadersTable/HeadersTable";
import RequestBodyArea from "../RequestBodyArea /RequestBodyArea";
/**
 * This component renders the `additional Headers table` or `request body area` component based on the selection on the tabs(Headeror Body)
 * @method RequestInputArea
 * @param {method} handleChangeHeader
 * @param {string} selectedOptionType
 * @param {object} additionalHeaders
 * @param {method}   setRequestBodyData
 * @param {object} reqBodyData
 */
const RequestInputArea = ({
  handleChangeHeader,
  selectedOptionType,
  additionalHeaders,
  setRequestBodyData,
  reqBodyData
}) => {
  switch (selectedOptionType) {
    case "Headers":
      return (
        <HeadersTable
          handleChangeHeader={handleChangeHeader}
          additionalHeaders={additionalHeaders}
        />
      );

    case "Body":
      return (
        <RequestBodyArea
          onChange={(e) =>
            setRequestBodyData(JSON.parse(e.currentTarget.value))
          }
          value={reqBodyData}
        />
      );
  }
};

export default RequestInputArea;
