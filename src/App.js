import React, { useState } from 'react'
import { bankOne, bankTwo } from './data';
import './index.css';
import DrumPad from './DrumPad';
import ControlBtn from './ControlBtn';





function App() {
  const [data, setData] = useState(true);
  const [clipName, setClipName] = useState("click on keys");
  const [range, setRange] = useState("100");
  
  return (
    <>
    {/* {keys} */}
    <div id="drum-machine" className="container">
      <div id="display" className="pad-container">
        {(data ? bankOne : bankTwo).map((obj) => <DrumPad {...obj} key={obj.id} volume={range} setClipName={setClipName}/>)}
    </div>

      <div className="control">
      {/* {mutebtn} */}
        <ControlBtn label={"Mute"} setData={() =>setRange("0")} />
        <div className="showpad">{clipName}</div>

      {/* {volume} */}
        <div className="range" >
        <input type="range" id="volume" name="volume" min="0" max="100" value={range} onChange={(e)=>setRange(e.target.value)} />
        
      {/* {swithbtn} */}
          <label htmlFor="volume">Volume</label></div>
        <ControlBtn label={"Switch"} setData={() => setData(!data)} />
      </div>
    </div>
    <p className="foot">by Shiva &#x1F60E;</p></>
  );
}

export default App;
