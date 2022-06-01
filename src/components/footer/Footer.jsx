import React from 'react';
import {motion} from 'framer-motion'
import './footerStyles.css'
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
// import {MdContactMail} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'
// import {Link} from 'react-router-dom'


// import {useState} from 'react'

export const Footer = (props) => {

   

  return (



    <div className='contenedor-principal'>

        <motion.div className={props.footer ? "contenedor-footer" : "contenedor-footer-pasive"}
        drag="y"
        whileTap={{ cursor: "grabbing" }}
        dragConstraints={{top: -185, bottom: 20}}
        initial={{scale: 1}}
        transition={{ duration: 5}}
        animate= {{
          scale: 1.2,
          zIndex: 1,
          y: -4,
      }}
        >
        
        <a href="https://github.com/Agustintrezza" target="{_blank}">
        <FaGithub/>  
        </a>
        
        <a href="https://www.linkedin.com/in/agustin-trezza-920a5358/" target="{_blank}">
        <FaLinkedin/>
        </a>

        <a href="https://www.instagram.com/agustintrezza/" target="{_blank}">
        <FaInstagram/> 
        </a>
         
        
        <AiOutlineWhatsApp/>

        </motion.div>
        
    </div>
  )
}


