import React, { useEffect, useRef } from 'react'
import { useState  } from 'react'
import { getGrid } from '../../utils/startinggrid'
import './grid.css'
import { useParams } from '../../context/context'

export default function Grid() {

  const {grid,setgrid,editing,seteditFlag,mode,start,end,run,res,algo}  = useParams()

  const [refarray,mm]=useState(getrefarray(grid))
  
  function getrefarray(grid){
    let array=[]
   grid.forEach((elem)=>{
    elem.forEach((child)=>{
      array.push(useRef())
    })
   })
   return array
 }
return (
    <div className='board'>
      {refarray.map((elem,index)=> {
        let classList=['cell']

        let yindex=Math.floor(index/50)
        let xindex=index % 50
        let cell=grid[yindex][xindex]

        if (cell.iswall) {
          classList.push('wall')
        }
        
        return <div key={`${index}`} ref={elem}  className={classList.join(' ')}>
        
         

          {cell.weight > 1 ? <i className="bi bi-virus"></i> : null}
          {cell.isstart ? <i className="bi bi-geo-alt"></i> : null }
          {cell.istarget ? <i className="bi bi-geo"></i> : null }
          
         </div>
      })}
    </div>
  )
}