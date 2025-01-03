import './App.css';
import { ViewMyCvClick } from './Clicks/ViewMyCvClick';


export const MainContent = () => {
    
    return(
        
        <div id="divText">
        
            <div>
                <h2>Hi, I'm Yazan</h2>
                <h1>Web Developer</h1>
                
            <div id="divBtn">    
                <ViewMyCvClick/>
                </div>
            </div>
        </div>
    )
}