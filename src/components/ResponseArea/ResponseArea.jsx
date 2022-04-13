import React from 'react'
import "./ResponseArea.scss"
/**
 * This function returns the JSON response sent by the server.
 * @method ResponseArea
 * @param {object} [apiResponseData]
 */
function ResponseArea({apiResponseData}) {
  return (
      <React.Fragment>
          { Object.keys(apiResponseData).length === 0 ? "":  <pre className='pre-response' >{JSON.stringify(apiResponseData,null,2)}</pre>}

      </React.Fragment>
  )
}

export default ResponseArea