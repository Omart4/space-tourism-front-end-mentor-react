import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import './Root.css'

const RootLayout = () => {
    return(
        <div className="app">
            <Navbar/>
            <Outlet/>            
        </div>
    )    
}

export default RootLayout