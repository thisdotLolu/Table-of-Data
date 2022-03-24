import React from 'react'

export default function Button({buttonText,reqType, setReqType}) {
  return (
    <button className={buttonText===reqType? "selected" : null}
    type='button'
    onClick={()=>setReqType(buttonText)}
    >
        {buttonText}
    </button>
  )
}
