import React from 'react'

const Card = ({item}) => {
  return (
    <>
    <p>{item.name}</p>
    <p>{item.id}</p>
    </>
  )
}

export default Card