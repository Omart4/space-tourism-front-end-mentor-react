import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import './Root.css'

const RootLayout = () => {
    const location = useLocation()
    let currentLocation = location.pathname.substring(1)
    return(
        <div className={`app ${currentLocation}`}>
            <Navbar/>
            <Outlet/>
        </div>
    )    
}

export default RootLayout