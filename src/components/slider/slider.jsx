import './sliderstyle.css'
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from '../../images'
import images2 from '../../images2'


function Slider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  // function description() {
  //   // eslint-disable-next-line no-restricted-globals
  //   confirm('Agus')
  // }


  return (
    <div className="App" id="Slider">
      <h1 className='titulo-slider'>PROYECTOS Y EJERCICIOS HECHOS</h1>

      <motion.div
        // drag="x"
        dragConstraints={{ right: 2, left: -width }}
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner-carousel"
        >
          {images.map((item) => {
            return (
              <motion.div   className="item" key={item.source} 
              whileHover={{scale: .9, opacity:.9, duration: 2 }}
              initial={{scale:.8}}
              animate={{y: 10}}
              transition={{ duration: .5}}
              >
                <a href={item.source} target= "_blank" rel="noreferrer" className="item" onClick={(e) => {
                 // eslint-disable-next-line no-restricted-globals
                 const confirmo = confirm(item.descripcion);
                 if (confirmo === true) {
               } else {
                 e.preventDefault();
               }
              }}>
                <img src={item.image} onclick={item.source} alt="imagen"/>
                {/* <div className='contenedor-titulo'> */}
                  <h1 className="titulos-proyectos">{item.title}</h1>
                {/* </div> */}
                
                </a>
              
              </motion.div>
        
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
        drag="x"
      >
        <motion.div
          // drag="x"
          dragConstraints={{ right: -2, left: -width }}
          className="inner-carousel"
        >
          {images2.map((item) => {
            return (
              <motion.div
                className="item" key={item.source}  
                initial={{scale: .8}}
                whileHover={{scale: .9, opacity: .9}}
                animate={{y: -10, duration: .5}}
                transition={{ duration: .5}}
                >
                <a href={item.source} target= "_blank" rel="noreferrer" className="item" onClick={(e) => {
                 // eslint-disable-next-line no-restricted-globals
                 const confirmo = confirm(item.descripcion);
                 if (confirmo === true) {
               } else {
                 e.preventDefault();
               }
              }}>
                <img src={item.image} alt="imagen" />
                <h1 className="titulos-proyectos">{item.title}</h1>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <hr className="separador-slider"/>
    </div>
  );
}

export default Slider;
