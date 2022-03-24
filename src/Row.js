import React from 'react'
import Cell from './Cell'

export default function Row({item}) {
  return (
    <tr>
        {Object.entries(item).map(([key,value])=>{
          return(
              <Cell key={key} Cell={JSON.stringify(value)}></Cell>
          )  
        })}
    </tr>
  )
}
