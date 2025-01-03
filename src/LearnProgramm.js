import {FaBootstrap, FaCss3, FaHtml5, FaGithub, FaGit, FaReact} from "react-icons/fa6";
import {TbBrandJavascript} from "react-icons/tb";
import {AiOutlineConsoleSql} from "react-icons/ai";
import {SiRedux} from "react-icons/si";
import { Navbar } from "./Navbar";




export const LearnProgramm = () => {
    return(
        <div className="LearnProgrammDiv">
            
            <Navbar />
            <div className="LearnH1">
                <h1>What i learned ?</h1>
            </div>

            <div className="LearnIcons1">
            
            <FaHtml5    className="HtmlIcon"/>
            <FaReact    className="ReactIcon" />
            <FaCss3     className="CssIcon"/>
            <TbBrandJavascript className="JsIcon" />
            <AiOutlineConsoleSql className="SqlIcon" />
            </div>

            <div className="LearnIcons2">
                <SiRedux     className="ReduxIcon"/>
                <FaGithub     className="GithubIcon"/>
                <FaGit     className="GitIcon"/>
                <FaBootstrap     className="BootsIcon"/>
            
            </div>

        </div>
            
        
    )
}



