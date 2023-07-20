import React from 'react'
import Images from './Images'

function ChooseItem(props) {
  return (
    <div className='Item'>
        <div className='item-background'></div>
        <div className='item-content'>
            <div className='item-header'>
                <Images name='item-icon' link={props.image} imagename='item-image'/>
                <h3>{props.heading1}<br/>{props.heading2}</h3>
            </div>
            <p>{props.text}</p>
        </div>
      
    </div>
  )
}

export default ChooseItem
