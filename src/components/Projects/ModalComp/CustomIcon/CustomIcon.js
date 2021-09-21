import React,{useState} from 'react'
import './CustomIcon.css';

const CustomIcon = ({main}) => {
    const generateRandomColor = ()=>{
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let hexa = '#' + randomColor;
        return hexa; 
    }
    const [customStyle, setCustomStyle] = useState({
        backgroundColor: 'transparent',
        border: '2px solid ' + generateRandomColor()
    })

    
    const handleHoverIn = ()=>{
        
        setCustomStyle((prev)=>{
            let extractedColor = prev.border.substring(9);
            console.log("extraced:", extractedColor)
            return {
                ...prev,
                backgroundColor: extractedColor
            }    
        })
    }
    const handleHoverOut = ()=>{
        setCustomStyle((prev)=>{
            return{
                ...prev,
                backgroundColor: 'transparent',
            }
        })
    }
    return (
        <div 
            className="customicon-container attr-color"
            style={customStyle}          
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            >
         <span>{main}</span>
        </div>
    )
}

export default CustomIcon
