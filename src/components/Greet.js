import React, { useState } from 'react'

function Greet (){
    const [data, setData]= useState(false)
    const name = ["intekhab"]
  return (
    <div className='App'>
        <h1>
            hello {name}
         <p>you Clicked {data} times</p> 
        </h1>
        <button onClick={()=>setData(data + 1)}>count me </button>
    </div>
  )
}

export default Greet