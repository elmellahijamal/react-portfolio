import React from 'react'
import './Home.css'
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <>
        <section className='center-container'>
            <div className="aboutme">
            <h1 id="typewriter">Full Stack Developer <span>wanna be 👀</span>!</h1>
                    <p id='intro'>
                    I'm Mohamed Jamal El Mellahi, You can call me Jamal .. <br /><br />
                    Currently Student At ENSA Tetouan, but soon I'll be at the saint of your company
                    </p>
            </div>
            <div className="myimage">
            <img src="https://media.licdn.com/dms/image/D4E03AQF8T2ib0Yh98A/profile-displayphoto-shrink_800_800/0/1701539858155?e=1725494400&v=beta&t=ATAzc9zriMlb2Rz2kQi_X-djFgm1_HOjwtS4QsE7Bsk" alt="" />
            </div>
        </section>
        <div className="btn-go">
          
         <Link to="education" className="nav-link" smooth={true} duration={500}>
                           <button >Let's Gooo !</button>
                    </Link>
        </div>
    </>
  )
}

export default Home