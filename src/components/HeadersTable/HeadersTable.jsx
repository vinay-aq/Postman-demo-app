import React from 'react'
import "./HeadersTable.scss"
/**
 * This component renders the table of key-value pairs required for additional Headers for the API requests.    
 * @method HeadersTable
 * @param {string} text
 * @param {method} onClickCapsule
 * @param {Boolean} showDropdown
 * 
 */

function HeadersTable({handleChangeHeader,additionalHeaders}) {
  return (
    <table className='headers-table'>
        <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
    <tr>
        
      <td><textarea placeholder="Key" name="key" onChange={handleChangeHeader} value={additionalHeaders.key} /> </td>
      <td><textarea placeholder="Value" name="value" onChange={handleChangeHeader} value={additionalHeaders.value}/></td>
    </tr>
        </thead>
  </table>
  )
}

export default HeadersTable