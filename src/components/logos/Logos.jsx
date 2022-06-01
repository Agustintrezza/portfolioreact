import React from 'react'
import './logosStyle.css'
import logo1 from '../../assets/logos/react-brands.svg'
import logo2 from '../../assets/logos/angular-brands.svg'
import logo3 from '../../assets/logos/html5-brands.svg'
import logo4 from '../../assets/logos/css3-alt-brands.svg'
import logo5 from '../../assets/logos/node-brands.svg'
import logo6 from '../../assets/logos/github-brands.svg'
import logo7 from '../../assets/logos/wordpress-brands.svg'
import {GrHeroku} from 'react-icons/gr'
import {SiNetlify} from 'react-icons/si'
import {FiFigma} from 'react-icons/fi'


export const Logos = () => {
  return (
    <div className='macro'>
        <div className='slider'>

            <div className="slide-track">

                <div className='slide'>
                    <img className='loguito' src={logo1} alt="react-logo" height="100"/>
                </div>
                <div className='slide'>
                    <img className='loguito' src={logo2} alt="react-logo" height="100"/>
                </div>
                <div className='slide'>
                    <img className='loguito' src={logo3} alt="react-logo" height="100"/>
                </div>
                <div className='slide'>
                    <img className='loguito' src={logo4} alt="react-logo" height="100"/>
                </div>
                <div className='slide'>
                    <img className='loguito' src={logo5} alt="react-logo" height="100"/>
                </div>
                <div className='slide'>
                    <img className='loguito' src={logo6} alt="react-logo" height="100"/>
                </div>
                <div className='slide'>
                    <img className='loguito' src={logo7} alt="react-logo" height="100"/>
                </div>
                <div className='slide'>
                    <GrHeroku className='loguito1'/>
                </div>

                <div className='slide'>
                    <SiNetlify className='loguito1'/>
                </div>
                <div className='slide'>
                    <FiFigma className='loguito1'/>
                </div>


                <div className='slide'>
                    <img className='loguito' src={logo1} alt="react-logo" height="100"/>
                </div>
                <div className='slide'>
                    <img className='loguito' src={logo2} alt="react-logo" height="100"/>
                </div>
                <div className='slide'>
                    <img className='loguito' src={logo3} alt="react-logo" height="100"/>
                </div>
                <div className='slide'>
                    <img className='loguito' src={logo4} alt="react-logo" height="100"/>
                </div>
                <div className='slide'>
                    <img className='loguito' src={logo5} alt="react-logo" height="100"/>
                </div>
                <div className='slide'>
                    <img className='loguito' src={logo6} alt="react-logo" height="100"/>
                </div>
                <div className='slide'>
                    <img className='loguito' src={logo7} alt="react-logo" height="100"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Logos
