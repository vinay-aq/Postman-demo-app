import React, { useState } from "react";
import "./Content.scss";
import { ApiSearchbox } from "../ApiSearchbox";
import ResponseArea from "../ResponseArea/ResponseArea";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HTTPService from "../../services/HTTPService";
import RequestBodyOptions from "../RequestBodyOptions/RequestBodyOptions";
import useLocalStorage from "../../hooks/useLocalStorage";
import RequestInputArea from "../RequestInputArea/RequestInputArea";
/**
 * This function renders the Central UI section which includes searching of API and showing results.   
 * @method Content
 * 
 */
function Content() {
  const initialDD = [
    { apiType: "GET", selected: true },
    { apiType: "POST", selected: false },
    { apiType: "PUT", selected: false },
    { apiType: "DELETE", selected: false },
  ];

  const optionsList = [
    { type: "Headers", selected: false },
    { type: "Body", selected: true },
  ];
  const [apiURL, setApiURL] = useState("");
  const [apiResponseData, setApiResponseData] = useState({ data: [] });
  const [apiTypeListDropdown, setApiTypeListDropdown] = useState(initialDD);
  const [reqBodyData, setRequestBodyData] = useState({});
  const [headerOptions, setHeaderOptions] = useState(optionsList);
  const [additionalHeaders, setAdditionalHeaders] = useLocalStorage("headers",{
    key: "",
    value: "",
  });

  const handleClickTab = (selectedIndex) => {
    let headerOptionsNew = headerOptions.map((tab, index) =>
      index === selectedIndex
        ? { ...tab, selected: true }
        : { ...tab, selected: false }
    );
    setHeaderOptions(headerOptionsNew);
  };

  const handleAPIRequest = async () => {
    if (apiURL) {
      let apiTypeSelected = apiTypeListDropdown.filter((api) => api.selected)[0]
        .apiType;

      let apiResponse = await getAPIResponse(apiTypeSelected, apiURL);

      setApiResponseData(apiResponse);
    } else {
      toast("API URL is empty");
    }
  };

  const getAPIResponse = async (apiTypeSelected, apiURL) => {
    let response = {};
    // Change is about to happen in the file 1
    switch (apiTypeSelected) {
      case "GET":
        return await HTTPService.post("http://localhost:2410/GET-call", {
          apiURL,
        });

      case "POST":
        return await HTTPService.post("http://localhost:2410/POST-call", {
          apiURL,
          reqBodyData,
          additionalHeaders
        });
      case "PUT":
        return await HTTPService.post("http://localhost:2410/PUT-call", {
          apiURL,
          reqBodyData,
        });
      case "DELETE":
        return await HTTPService.post("http://localhost:2410/DELETE-call", {
          apiURL,
        });
    }
  };

  const handleChangeHeader = (e) => {
    let additionalHeadersCopy = {
      ...additionalHeaders,
      [e.target.name]: e.target.value,
    };


    setAdditionalHeaders(additionalHeadersCopy);
  };

  let selectedOptionType = headerOptions.filter((option) => option.selected)[0]
    .type;

  return (
    <React.Fragment>
      <FlexWrapper direction="column" className="main-container">
        <ApiSearchbox
          apiResponseData={apiResponseData}
          setApiResponseData={setApiResponseData}
          apiURL={apiURL}
          setApiURL={setApiURL}
          handleAPIRequest={handleAPIRequest}
          apiTypeListDropdown={apiTypeListDropdown}
          setApiTypeListDropdown={setApiTypeListDropdown}
        />
        <RequestBodyOptions
          optionsList={headerOptions}
          onClickTab={handleClickTab}
        />
        <RequestInputArea
          reqBodyData={reqBodyData}
          setRequestBodyData={setRequestBodyData}
          selectedOptionType={selectedOptionType}
          handleChangeHeader={handleChangeHeader}
          additionalHeaders={additionalHeaders}
        />

        <ResponseArea apiResponseData={apiResponseData.data} />

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
      </FlexWrapper>
    </React.Fragment>
  );
}

export default Content;
