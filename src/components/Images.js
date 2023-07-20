import React from 'react'

function Images(props) {
  return (
    <div className={props.name}>
      <img src={props.link} className={props.imagename} alt={props.imagename}/>
    </div>
  )
}

export default Images
