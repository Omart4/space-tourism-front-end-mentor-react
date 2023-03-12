import './Tech.css'
import vehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import vehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import portPortrait from '../assets/technology/image-spaceport-portrait.jpg'
import portLandscape from '../assets/technology/image-spaceport-landscape.jpg'
import capsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg'
import capsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg'
import { useEffect , useState} from 'react'
const Tech = () => {
    const [index,setIndex] = useState(0)
    const getIndex = (event)=>{
        const target = event.currentTarget.id;
        setIndex(target)
    }
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    return(
        <div className='tech-container'>
            <h3><span>03</span>SPACE LAUNCH 101</h3>
            <div className="tech">
                <div className='tech-image'>
                    {
                        technology.map(t=>(
                            <img
                                className={`tech-photo ${t.id == index?'c-c-tech':''}`}
                                src={windowSize[0] < 821?t.images.landscape:t.images.portrait}
                                alt={t.name} 
                            />
                        ))
                    }
                </div>
                <div className='tech-text'>
                    <div className='tech-links'>
                        <button className={`but ${index == 0?'active-button':''}`} onClick={(e)=>{getIndex(e)}} id='0'>1</button>
                        <button className={`but ${index == 1?'active-button':''}`} onClick={(e)=>{getIndex(e)}} id='1'>2</button>
                        <button className={`but ${index == 2?'active-button':''}`} onClick={(e)=>{getIndex(e)}} id='2'>3</button> 
                    </div>
                    <div className='deets'>
                        <h4>THE TECHNOLOGY...</h4>
                        {
                            technology.map(n=>(
                                <div className={`tech-details ${index == n.id?'c-tech':''}`}>
                                    <h1>{n.name}</h1>
                                    <p>{n.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )    
}

const technology = [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": vehiclePortrait,
        "landscape": vehicleLandscape
      },
      "id":0,
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": portPortrait,
        "landscape": portLandscape
      },
      "id":1,
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": capsulePortrait,
        "landscape": capsuleLandscape
      },
      "id":2,
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]

export default Tech