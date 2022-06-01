import React from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import './headerStyles.css'
import {motion} from 'framer-motion'

export const Header = (props) => {

    console.log(props)
  return (
    <motion.div id="Header"
    initial={{scale: 1}}
    transition={{ duration: 1}}
    animate= {{
      scale: .9,
      duration: 2
    }}
    >
        <div className='contenedor-general'>
            <div className='contenedor-titulos'>
                <h1 className='titulo'>Agustin Trezza</h1>
                <h2 className='subtitulo'>Frontend Developer <span className='junior'>Junior</span></h2>
            </div>
            

            <div className='contenedor-nav'>
              <ul>
                    <li>
                      <Link className='navitem' smooth to='#About'>HOME</Link>
                    </li>
                    <li>
                      <Link className='navitem' smooth to='#Slider'>PROYECTOS</Link>
                    </li>
                    <li className='cursos-cv'>
                      <Link className='navitem' smooth to='#Acordion'>CURSOS Y CV</Link>
                    </li>
              </ul>
                  {/* <div className="switch">
                    {/* <label> {props.theme === "light" ? "Light Mode" : "Dark Mode"} </label> */}
                    {/* <ReactSwitch onChange={props.toogleTheme} checked={props.theme === "dark"}/>
                  </div>  */} 
            </div>
        </div>
    </motion.div>
  )
}
