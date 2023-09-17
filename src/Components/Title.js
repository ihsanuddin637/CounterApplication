'use client'
import React from 'react'

const Title = (props) => {
    console.log(props.test);
  return (
    <div>
        <h1 className='flex items-center justify-center'>{props.test}</h1>
    </div>
  )
}

export default Title