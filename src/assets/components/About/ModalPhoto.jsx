import React from 'react'

const ModalPhoto = ({image}) => {
  return (
    <div>
         <img src={image} className=" cursor-pointer scale-100 relative hover:scale-125 duration-200 " />
    </div>
  )
}

export default ModalPhoto