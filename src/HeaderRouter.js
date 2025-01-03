import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Navbar } from "./Navbar"
import { HomePage } from "./HomePage"



export const HeaderRouter = () => {
    return(
        <div>
            <Navbar/>
            <HomePage/>
        </div>
    )
}