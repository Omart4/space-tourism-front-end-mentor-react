import { useState } from 'react'
import './Destination.css'
import Moon from '../assets/destination/image-moon.png'
import Mars from '../assets/destination/image-mars.png'
import Europa from '../assets/destination/image-europa.png'
import Titan from '../assets/destination/image-titan.png'

const Destination = () => {
    const [planet , setPlanet] = useState("Moon")
    const getPlanet = (event) => {
        const currentPlanet = event.currentTarget.id;
        setPlanet(currentPlanet)
    }
    return(
        <div className="destination-container">
            <h3><span>01</span>PICK YOUR DESTINATION</h3>
            <div className="planet">
                <div className="planet-image">
                    {destinations.map(n=>(
                        <img className={`planet-photo ${planet.toLowerCase()==n.name.toLowerCase()?"c-p-planet":''}`} src={n.images.png} alt="" />
                    ))}
                </div>
                <div className='planet-text'>
                    <div className='planet-links'>
                        <p className={`planet-link ${planet=="Moon"?"p-active":''}`} onClick={(e)=>{getPlanet(e)}} id="Moon">MOON</p>
                        <p className={`planet-link ${planet=="Mars"?"p-active":''}`} onClick={(e)=>{getPlanet(e)}} id="Mars">MARS</p>
                        <p className={`planet-link ${planet=="Europa"?"p-active":''}`} onClick={(e)=>{getPlanet(e)}} id='Europa'>EUROPA</p>
                        <p className={`planet-link ${planet=="Titan"?"p-active":''}`} onClick={(e)=>{getPlanet(e)}} id="Titan">TITAN</p>
                    </div>
                    {
                        destinations.map(m=>(
                            <div className={`planet-details ${planet.toLowerCase()==m.name.toLowerCase()?"c-planet":null}`}>
                                <h1>{m.name}</h1>
                                <p>{m.description}</p>
                                <div className="measures">
                                    <div className="meas">
                                        <p>AVG. DISTANCE</p>
                                        <h4>{m.distance}</h4>
                                    </div>
                                    <div className="meas">
                                        <p>EST. TRAVEL TIME</p>
                                        <h4>{m.travel}</h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )    
}
const destinations = [
    {
      "name": "MOON",
      "images": {
        "png":Moon,
        "webp": "../assets/destination/image-moon.webp"
      },
      "description": "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "MARS",
      "images": {
        "png": Mars,
        "webp": "../assets/destination/image-mars.webp"
      },
      "description": "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "EUROPA",
      "images": {
        "png": Europa,
        "webp": "../assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "TITAN",
      "images": {
        "png": Titan,
        "webp": "../assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
]


export default Destination