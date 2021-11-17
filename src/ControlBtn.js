import React ,{useState} from 'react'

const ControlBtn = (props) => {
    const [activeBox, setActiveBox] = useState(false);

    return (
        <div>
            <p>{props.label}</p>
            <div className="box" onClick={()=>{
                return (setActiveBox(!activeBox),
                props.setData())
            }}>
                <div className={`box1 ${activeBox?"":"box-active"}`}></div>

                <div className={`box1 ${activeBox?"box-active":""}`}></div>
                
            </div>
        </div>
    )
}

export default ControlBtn
