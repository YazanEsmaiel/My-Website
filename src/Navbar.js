import './App.css';
import { HomeClick } from './Clicks/HomeClick';
import { SkillsClick } from './Clicks/SkillsClick';
import { CvClick } from './Clicks/CvClick';
import { ContactClick } from './Clicks/ContactClick';
import { LogoClick } from './Clicks/LogoClick';



export const Navbar = () => {
    

    return(
        
        
        <div style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"1rem",
            background: "linear-gradient(to top right,rgb(71, 0, 97) 30% ,rgb(63, 0, 157) 90% )",
            borderBottom:"solid rgb(255, 255, 255) 5px",
            
        }}>
        <div style={{marginLeft:"1.5rem"}}> 

        <LogoClick/>
        </div>
        
        <div
        id='navbarDiv'
        style={{width:"60%", display:"flex", justifyContent:"space-evenly" }} >
        <HomeClick id='skillsId1' />
        <SkillsClick id='skillsId2' />
        <CvClick id='skillsId3' />
        <ContactClick id='skillsId4' />
        </div>
        </div>
        
    )
}