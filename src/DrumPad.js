import React,{useRef,useEffect} from 'react'




const DrumPad = ({keyTrigger,url,volume,id,setClipName}) => {
    const audio= useRef(null);

    const handlekeypress =(e)=>{if(e.key.toUpperCase()===keyTrigger){
        if(audio.current !==null){
            audio.current.play();
            audio.current.volume=volume/100;
            setClipName(id);
        }
    }}
    
    
     window.addEventListener('keydown',handlekeypress);

    

    return (
        <div className="drum-pad" onClick={()=>{
            return(
                audio.current.play(),
                audio.current.volume=volume/100,
                setClipName(id)
            )}}>
            {keyTrigger}
        <audio ref={audio} src={url} className="clip" id={keyTrigger} />    
        </div>
    )
  }

  

export default DrumPad;
