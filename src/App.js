import React, { useState } from 'react';
import Video from './Video/video.mp4';
import './App.css';

function App() {


let cTime = new Date().toLocaleTimeString();

let [time,setTime] = useState(cTime);


function RefTime()
{
   let NewTime = new Date().toLocaleTimeString();
   setTime(NewTime)
}

setInterval(RefTime);

  return (
    <div className="App">
        <video id="myVideo" autoPlay loop>
      <source src = {Video} type="video/mp4" />
    </video>
      <header className="content">

        <h1>{time}</h1>
    
      </header>
    </div>
  );
}

export default App;
