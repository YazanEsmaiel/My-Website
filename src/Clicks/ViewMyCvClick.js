import { Link } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';

export const ViewMyCvClick = () => {
    
    let [text, setText] = useState("more Info !");
    
    const handleMouseEnter = () => {
        setText("this website was created by React Js and was used React Router Dom, react library, useState and much more.\nI will be happy if you take a tour of the whole site. use the navbar at the top and enjoy it.");
      };
    
      const handleMouseLeave = () => {
        setText("more Info !");
      };
    
    return(
        
        <div >
        {/* <Link id='HomeClick' to= "/MyPersonalDoku"></Link> */}
        <button 
                // style={{width:"400px", 
                //         transition: "background-color 0.3s ease, color 0.3s ease", 
                //         whiteSpace: "pre-line", 
                //         border: "1px solid black", 
                //         padding: "10px" }}

                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                id="viewBtn">{text}</button>
        
        </div>
        
        
      
    ) 
     
}