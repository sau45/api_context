import React,{useContext, useState} from 'react'
import  './context.css'
import context from './Context';
import joker1 from './joker1.jpg'
import joker2 from './joker2.jpg'

function Child0() {
    const value = useContext(context);
    const [data] = useState({
        text:"Using ContextApi"
    })
    
  return (
      <>
    <div className='Context'>
{

    value?
          <div className="card">
            <img src={joker1} class="card-img-top" alt="..."/>
            <h1>{data.text}</h1>
        </div>

   :
         <div className="card">
         <img src={joker2} class="card-img-top" alt="..."/>
         <h1>{data.text}</h1>
         </div>
}
    </div>

    </>
  )
}

export default Child0