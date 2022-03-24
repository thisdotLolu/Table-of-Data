import React from 'react'
import ListItem from './ListItem'


export default function List({items}) {
  return (
    <ul>
    {items.map(item => {
        return(
        <ListItem key={item.id} item={item}></ListItem>
    )})}
    </ul>
  )
}
