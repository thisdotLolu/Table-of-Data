import React from 'react'

export default function ListItem({item,setItems}) {
  return (
    <li>
        {JSON.stringify(item)}
    </li>
  )
}
