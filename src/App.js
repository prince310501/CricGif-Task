// import logo from './logo.svg';
import React ,{ Component,useState } from 'react'
import {Button } from 'reactstrap'

function App() {
  const handlein=()=>{
    document.getElementById('zoom2').style.transform="scale(1.8,1.8)"
    
  }
  const handleout=()=>{
    document.getElementById('zoom2').style.transform="scale(1,1)"
  }
  const [toggle,setToggle]=useState(true)
  const handle=()=>false

  return (
    <div className="App" >
      <br/>
      <header className="App-header">
      <h1>CricGif Development Task</h1>
      <br/>
      {toggle===true && (<div id='zoom' style={{display:'flex',justifyContent:'center',alignContent:'center',maxWidth:'40%',maxHeight:'20%',margin:'0 auto',overflow:'hidden'}}>
        
        <video id='zoom2' onMouseLeave={handleout} onMouseEnter={handlein} controls style={{width:'100%',height:'100%',border:'3px solid purple'}}>
          <source src="https://storage.googleapis.com/cricgif-bucket-testing1/Singer%20-%2035867.mp4" type="video/mp4" />
        </video>
        
      </div>)}

      {toggle===false && (<div id='zoom' style={{display:'flex',justifyContent:'center',alignContent:'center',maxWidth:'40%',maxHeight:'20%',margin:'0 auto',overflow:'hidden'}}>
        
        <video id='zoom2' onMouseLeave={handleout} onMouseEnter={handlein} autoPlay loop muted playsInline style={{width:'100%',height:'100%'}}>
          <source src="https://storage.googleapis.com/cricgif-bucket-testing1/Singer%20-%2035867.mp4" type="video/mp4" />
        </video>
        
      </div>)}
      <Button color="primary"  className="mt-5 btn-lg" onClick={()=>setToggle(prev=>!prev)}>Toggle to view mp4/gif</Button>
      <br/>
      <div className="mt-3" style={{fontSize:'19px'}}>{toggle===true? 'This is a .mp4 Video':'This is a GIF'}</div>
      </header>
    </div>
          
        
    
    
   
  );
}

export default App;
