import React from 'react'

export default function ApartmentContainer({className, price}) {
  return (
    <div className={className} price={price}>
        ApartmentContainer
        {price}
    </div>
  )
}
