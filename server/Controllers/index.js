// const fetch = require("node-fetch");
import fetch from "node-fetch";

const handleGETRequest = (req, res) => {
  let apiURL = req.body.apiURL;
// https://i.airlinq.com:7889/locales/en/translation.json
  // https://i.airlinq.com:7889/locales/en/navigation.json
  // https://i.airlinq.com:7889/locales/en/terms.json
  const response = fetch(apiURL,{method:"GET"})
    .then((data) => data.json())
    .then((data) => res.send(data))
    .catch((error) => console.log(error));

};

const handlePOSTRequest = (req, res) => {
  let {apiURL,reqBodyData:body,additionalHeaders:headers} = req.body;

  
    const response = fetch(apiURL,{method:"POST",body,headers})
      .then((data) => data.json())
      .then((data) => res.send(data))
      .catch((error) => console.log(error));
  
};

const handlePUTRequest = (req, res) => {
  let {apiURL,reqBodyData:body} = req.body;
    const response = fetch(apiURL,{method:"PUT",body})
      .then((data) => data.json())
      .then((data) => res.send(data))
      .catch((error) => console.log(error));
  
};

const handleDELETERequest = (req, res) => {
  let apiURL = req.body.apiURL;
    
    const response = fetch(apiURL,{method:"DELETE"})
      .then((data) => data.json())
      .then((data) => res.send(data))
      .catch((error) => console.log(error));
  
};

export const Controller = {
  handleGETRequest,
  handlePOSTRequest,
  handlePUTRequest,
  handleDELETERequest,
};
