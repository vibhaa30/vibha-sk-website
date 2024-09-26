import picture from './vibha_pp.jpg'
import { Link } from "react-router-dom"
import linkedin from './linkedin.jpeg'
import mail from './email.png'

export default function Home() {
    return(
        <div className='bio-container'>
            <img src={picture} className="vibha-picture"/>
            <div className='bio-text-container'>
                <h2>About me!</h2>
                <p>I’m a third-year undergraduate studying 
                    Electrical and Computer Engineering at the 
                    University of Washington. My engineering interests are in
                    radio frequency systems, wireless technologies,
                    VLSI, and embedded systems. Currently, I am an undergraduate 
                    researcher in UW's Sensor Systems Lab, 
                    advised by Dr. Joshua R Smith. </p>
                <br></br>
                <p>
                    With the desire to be involved on campus, I also became an Engineering Peer Educator (EPE) and 
                    Resident Advisor (RA) allowing me to engage with many different students and work alongside my peers
                    to foster a great UW community! 
                </p>
                <br></br>
                <p>
                    In my free time, I enjoy spending time with family and friends, reading, listening to new music, 
                    going on walks, visiting cafes, and bouldering! 
                </p>

                <div className='bio-container-logos'>
                    <Link to="https://www.linkedin.com/in/vibha-sk">
                        <img src={linkedin} alt="LinkedIn" className='logo' type="button"/>
                    </Link>

                    <Link to="mailto:vsk30@uw.edu">
                        <img src={mail} alt="Email" className='logo' type="button"/>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}