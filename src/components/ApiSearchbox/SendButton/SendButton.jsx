import React from 'react'
import "./SendButton.scss"
import BlueButtonWrapper from '../../../containers/BlueButtonWrapper/BlueButtonWrapper';

/**
 * This component renders the textArea required to input payload in the request body of the API requests.
 * @method RequestBodyArea
 * @param {method} onClick
 *
 * 
 */
function SendButton({onClick}) {
  return (

    <BlueButtonWrapper className='send-btn' onClick={onClick}>
       Send
    </BlueButtonWrapper>
  )
}

export default SendButton