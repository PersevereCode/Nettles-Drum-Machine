import React from 'react';
import{useDispatch} from 'react-redux'
import {useEffect} from 'react'

export const Box = (props)=> {
    let dispatch = useDispatch()
    useEffect(()=>document.addEventListener('keydown', handleKey))
    useEffect(()=>{
        return ()=>{document.removeEventListener('keydown', handleKey)}
    })
    const handleKey=(event)=>{
        if(event.keyCode=== props.keyCode){

            playSound()
        }
    }

const playSound=()=>{
    let sound = document.getElementById(props.keyTrigger)
   
    sound.parentNode.classList.add('active')
    
    setTimeout(()=>sound.parentNode.classList.remove('active'), 500)

    sound.currentTime = 0
    sound.play()
    dispatch({type: 'UPDATE_DISPLAY', text: props.text})
}


return(
    <div 
    className = 'box' 
    id = 'box'
    onClick={()=> 
    playSound()}>
        
        {props.keyTrigger}
        <audio 
        src={props.source} 
        id={props.keyTrigger}/>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
    </div>
)

}
