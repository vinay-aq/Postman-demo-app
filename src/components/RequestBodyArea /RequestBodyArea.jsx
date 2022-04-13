import React from 'react'
import "./RequestBodyArea.scss";
/**
 * This component renders the textArea required to input payload in the request body of the API requests.
 * @method RequestBodyArea
 * @param {method} onChange
 * @param {object} value
 * 
 */
function RequestBodyArea({onChange,value}) {
  
  return (
    <textArea className="text-area" spellCheck={false} onChange={onChange} value={value}/>
  )
}

export default RequestBodyArea