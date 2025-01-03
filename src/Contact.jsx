import { FaFacebook, FaLinkedin, FaInstagram, FaGithub  } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Navbar } from "./Navbar";


export const Contact = () => {
    
 
    return (
        <div >
            <Navbar/>
        
        <div style={{background: "linear-gradient(to top right,rgb(255, 126, 70) 5%, #3d0076 90%", height:"100vh" }}>
        <div id="h1DivContact">
            <h1 style={{color:"white"}}>Contact me !</h1>
        </div>
        <div id="contactDiv">

        
        
        <div >
            <div id="phoneDiv">
                <BsFillTelephoneFill id="phone"/>
                <div className="contactIcons" >+49 1590 630 9461</div>
            </div>
            
            <div id="emailDiv">
                <MdEmail id="email"/>
                <div className="contactIcons" >Yazan.Esmaiel@outlook.de</div>
            </div>
            
            
        </div>

        <div>
                <a style={{textDecoration:"none", color:"black"}} href="https://github.com/YazanEsmaiel?tab=repositories">
            <div id="facebookDiv">
                <FaGithub id="facebook"/>
                <div className="contactIcons" >YazanEsmaiel</div>
            </div>
                </a>
            <a  style={{textDecoration:"none", color:"black"}} href="https://www.linkedin.com/in/yazan-abu-esmaiel-121488141/"> 
            <div id="linkedDiv">
                <FaLinkedin id="linkedin"/>
                <div className="contactIcons" >Yazan Abu Esmaiel</div>
            </div>
            </a>
            
        </div>
        </div>
        </div>
        </div>
    )
}
