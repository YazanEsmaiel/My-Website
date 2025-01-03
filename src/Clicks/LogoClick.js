import { useState } from 'react';
import { Link } from 'react-router-dom';



export const LogoClick = () => {
    
    let yazan = "<Yazan/>"
    
    const [isHovered, setIsHovered] = useState(true)

    const onMouseHover = () => {
        setIsHovered(true)
    }

    const onMouseHoverno = () => {
        setIsHovered(false)
    }
    
    
    return(
        <Link 
        onMouseEnter={onMouseHover}
        onMouseLeave={onMouseHoverno}
        style={{
            textDecoration: "none",
            fontSize: "1.5rem",
            fontWeight: "750",
            color: "#ff9100",
            filter:isHovered ? "drop-shadow(2px 2px 8px #ff9100" : "drop-shadow(2px 2px 8px rgba(255, 145, 0, 0)"

            
        }}
        
        to= "/HeaderRouter">
            <h1 id='logo'>{yazan}</h1>
        </Link>
    )
}