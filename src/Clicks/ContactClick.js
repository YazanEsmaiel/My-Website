import { Link } from 'react-router-dom';

import { useState } from 'react';


export const ContactClick = () => {
    const [isHovered, setIsHovered] = useState(true);
    
        const handleMouseEnter = () => {
            setIsHovered(false);
        };
    
        const handleMouseLeave = () => {
            setIsHovered(true);
        };
    
    return(
        <Link 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ 
            textDecoration: "none",
            fontWeight: "750",
            fontSize: "25px",
            transition:"0.5s",
            color: isHovered ? "#ff9100" : "white",
            filter:isHovered ? "drop-shadow(0px 0px 0px white" : "drop-shadow(2px 2px 8px #3d0076",
            scale: isHovered ? "" : "1.5" }}
        to= "/Contact">Contact</Link>
    )
}