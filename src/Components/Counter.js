'use client'
import React, { useState } from 'react'
import {AiOutlineMinus} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import {GrPowerReset} from "react-icons/gr"



const Counter = () => {
    let [count, setCount] =useState(0)
    const handlePlus=() => {
        setCount(count +1)
    };
    const handleMinus=() => {
        if(count ===0){
            setCount(0)
        }
        else{
            setCount(count -1)
        }
    }
    const reset =()=>{
        setCount(0)
    }
  return (
    <div className='p-10 my-5'>
        <div className='flex items-center justify-center gap-x-5 text-white text-3xl '>
            <button className='rounded-md bg-lime-500 px-7 py-2.5' onClick={handleMinus}>
            <AiOutlineMinus />
            </button>
            <p className='rounded-md bg-lime-500 px-8 text-3xl py-2'>{count}</p>
           <button className='rounded-md bg-lime-500 px-7 py-2.5' onClick={handlePlus}>
           <AiOutlinePlus />
           </button>
           
        </div>
          <div className='flex item-center justify-center mt-5 text-2xl'>
            <button className='rounded-md bg-lime-500 px-7 py-3' onClick={reset}>
           <GrPowerReset />
           </button>
          </div>
    </div>
    
  )
}

export default Counter