// import React from 'react'
import {sculptureList} from "./Data"
import React,{useState} from "react";
export default function Welcome() {

    const [index,setIndex]=useState(0);
    const [show,setShow]=useState(false);
    let sculpture=sculptureList[index];
    let check=index<sculptureList.length-1;
    
    function updateIndex(){
        setIndex(index+1);
        if(check){
            setIndex(index+1);
        }else{
            setIndex(0);
        }
    }

    function handleShow(){
        setShow(!show);
       }
  return (
    <>
        <button onClick={updateIndex}>next</button>

        <h1>{sculptureList.name}</h1>
        
        <h2>({index+1} of {sculptureList.length})</h2>

        <button onClick={handleShow}>{show? 'Hide':'Show'}show details</button>
        <h1>{sculpture.description}</h1>
        <p>{show? sculptureList.description: ""}</p>
        <img src={sculpture.url} alt={sculpture.alt} />
    </>
  )
}
