import './Crew.css'
import Douglas from '../assets/crew/image-douglas-hurley.png'
import Mark from '../assets/crew/image-mark-shuttleworth.png'
import Victor from '../assets/crew/image-victor-glover.png'
import Anousheh from '../assets/crew/image-anousheh-ansari.png'
import { useState } from 'react'

const Crew = () => {
    const [index,setIndex] = useState(0)
    const getIndex = (event)=>{
        const target = event.currentTarget.id;
        setIndex(target)
    }
    return(
        <div className='crew-container'>
            <h3><span>02</span>MEET YOUR CREW</h3>
            <div className="member">
                <div className='member-image'>
                    {
                        crew.map(i=>(
                            <img className={`member-photo ${i.id == index?'c-c-member':''}`} src={i.images.png} alt={i.name} />
                        ))
                    }
                </div>
                <div className='member-text'>
                    <div className='member-links'>
                        <span className={`dot ${index == 0?'active-dot':''}`} onClick={(e)=>{getIndex(e)}} id='0'></span>
                        <span className={`dot ${index == 1?'active-dot':''}`} onClick={(e)=>{getIndex(e)}} id='1'></span>
                        <span className={`dot ${index == 2?'active-dot':''}`} onClick={(e)=>{getIndex(e)}} id='2'></span>
                        <span className={`dot ${index == 3?'active-dot':''}`} onClick={(e)=>{getIndex(e)}} id='3'></span>
                    </div>
                    {
                        crew.map(m=>(
                            <div className={`member-details ${index == m.id?'c-member':''}`}>
                                <h4>{m.role}</h4>
                                <h1>{m.name}</h1>
                                <p>{m.bio}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )    
}
const crew =  [
    {
      "name": "Douglas Hurley",
      "id":0,
      "images": {
        "png": Douglas,
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "id":1,
      "images": {
        "png": Mark,
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "id":2,
      "images": {
        "png": Victor,
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "id":3,
      "images": {
        "png": Anousheh,
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ]

export default Crew