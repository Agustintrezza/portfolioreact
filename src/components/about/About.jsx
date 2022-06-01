import React from "react";
import "./AbouyStyles.css";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div>
      <div className="contenedor-general-img">
        <motion.div
          className="contenedor-texto"
          initial={{ scale: 1 }}
          animate={{ scale: 0.9, y: -10 }}
          transition={{ duration: 1 }}
        >
          <p className="texto">
            <span className="span">Bienvendix</span> a mi portfolio! gracias por
            visitar! Mí nombre es Agustín Trezza. Tengo 33 años, soy músico y
            desarrollador Frontend Junior. A partir de la pandemia, me sumergí
            en el mundo web y del desarrollo. Me gusta
            también, diseñar y desarrollar ideas que estén buenas y me gusten.
            Mi objetivo es continuar aprendiendo, disfrutando y estudiar nuevas
            herramientas, para continuar creciendo como developer frontend.
            <br />
            <br />
            Por el sitio se pueden ver, algunos proyectos y ejercicios que fui
            haciendo a lo largo de todo este tiempo usando HTML5, CSS3,
            JAVASCRIPT, ANGULAR, REACT, NODE, etc. También, tener acceso a mi CV
            y la información de cursos realizados.
            <br />
            <br />
            A seguir practicando y aprendiendo! Espero les guste y sea un buen
            recorrido! Saludos! <br /> <br />
            Agustin!
          </p>
        </motion.div>
        <div className="contenedor-galeria">
          <div className="galeria">
            <div className="seccion-1">
              <div className="primer-imagen">
                <motion.div
                  className="card-img"
                  drag
                  inital={{
                    opacity: 0.5,
                    y: -15,
                  }}
                  initial={{ scale: 1 }}
                  animate={{
                    scale: 1.1,
                    zIndex: 1,
                    y: -30,
                    x: -5,
                    duration: 2,
                  }}
                  dragConstraints={{
                    right: 340,
                    left: -75,
                    top: -160,
                    bottom: 205,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  whileHover={{
                    opacity: 0.8,
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 1.5,
                    zIndex: 99,
                    opacity: 1,
                    duration: 3,
                  }}
                ></motion.div>
              </div>
              <motion.div
                className="card-img4"
                drag
                inital={{
                  opacity: 0.5,
                  y: -25,
                  scale: 2,
                }}
                animate={{
                  scale: 1.1,
                  zIndex: 1,
                  y: -35,
                }}
                dragConstraints={{
                  right: 320,
                  left: -120,
                  top: -370,
                  bottom: 0,
                }}
                transition={{
                  duration: 1,
                }}
                whileHover={{
                  opacity: 0.7,
                }}
                whileTap={{
                  scale: 1.8,
                  zIndex: 1,
                  opacity: 1,
                }}
              ></motion.div>
            </div>
            <div className="segundoo">
              <motion.div
                className="card-img2"
                drag
                inital={{
                  opacity: 0.5,
                  y: -25,
                  scale: 2,
                }}
                initial={{ scale: 1 }}
                animate={{
                  scale: 1.1,
                  y: -35,
                }}
                dragConstraints={{
                  right: 110,
                  left: -260,
                  top: -60,
                  bottom: 250,
                }}
                transition={{
                  duration: 1,
                }}
                whileHover={{
                  opacity: 0.7,
                  duartion: 0.9,
                }}
                whileTap={{
                  scale: 1.5,
                  zIndex: 1,
                  opacity: 1,
                }}
              ></motion.div>

              <motion.div
                className="card-img3"
                drag
                inital={{
                  opacity: 0.5,
                  y: -25,
                  scale: 2,
                }}
                animate={{
                  scale: 1.1,
                  y: -35,
                }}
                dragConstraints={{
                  right: 120,
                  left: -260,
                  top: -280,
                  bottom: 75,
                }}
                transition={{
                  duration: 1,
                }}
                whileHover={{
                  opacity: 0.7,
                  zIndex: 1,
                  duartion: 0.9,
                }}
                whileTap={{
                  scale: 1.9,
                  zIndex: 1,
                  opacity: 1,
                }}
              ></motion.div>

              <motion.div
                className="card-img1"
                drag
                inital={{
                  opacity: 0.5,
                  y: -25,
                  scale: 1,
                }}
                animate={{
                  scale: 1.1,
                  y: -35,
                }}
                dragConstraints={{
                  right: 130,
                  left: -230,
                  top: -390,
                  bottom: -20,
                }}
                transition={{
                  duration: 1,
                }}
                whileHover={{
                  opacity: 0.7,
                  zIndex: 1,
                  duartion: 0.9,
                }}
                whileTap={{
                  scale: 1.6,
                  zIndex: 1,
                  opacity: 1,
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
      <hr className="separador-about" />
    </div>
  );
};

export default About;
