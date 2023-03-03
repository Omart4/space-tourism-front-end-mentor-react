import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/shared/logo.svg'
import './Navbar.css'
const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false)
    return(
        <nav>
            <Link to='/'><img src={logo} alt="logo" /></Link>
            <ul className={`links ${isOpen? "showing":null}`}>
                <li><NavLink to='/'><span>00</span> HOME</NavLink></li>
                <li><NavLink to='destination'><span>01</span> DESTINATION</NavLink></li>
                <li><NavLink to='crew'><span>02</span> CREW</NavLink></li>
                <li><NavLink to='technology'><span>03</span> TECHNOLOGY</NavLink></li>
            </ul>
            <div className={`hamburger ${isOpen? "show":null}`} onClick={()=>{setIsOpen(!isOpen)}}></div>
        </nav>
    )
}

export default Navbar