import React from 'react'
import "./RequestBodyOptions.scss";

/**
 * This function renders the list of tabs options, for API requests body and header.
 * @method RequestBodyOptions
 * @param {array} [optionsList]
 * @param {method} [onClickTab]
 */
function RequestBodyOptions({optionsList,onClickTab}) {
  return (
    <div className='request-body-options'>
        {optionsList.map((data,index) => (
        <div key={index} className={data.selected ? 'active-selection':''} onClick={()=>onClickTab(index)}>
          
            {data.type}
        </div>
    ))}</div>
  )
}

export default RequestBodyOptions