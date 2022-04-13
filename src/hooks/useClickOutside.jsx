import {React,useState,useEffect,useRef} from 'react'
/**
 * A custom hook for handle outside click events
 * @method useClickOutside
 */
function useClickOutside(onClickOutside) {
  

let containerRef = useRef();

useEffect(()=> {

  window.addEventListener('click',(event)=> handleClickOutside(event))
},[])


const handleClickOutside=(event)=> {
  if( containerRef.current && !containerRef.current.contains(event.target)) {

    onClickOutside();
  }
}

return containerRef;
   
}

export default useClickOutside