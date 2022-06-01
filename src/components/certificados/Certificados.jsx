import { React, useState } from "react";
import "./CertificadosStyles.css";
import { motion } from "framer-motion";
import { cards } from "../../Cards";

export const Certificados = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  

  const click = (id) => {
    const nuevosCards = cards.find(cards => id === cards.id );
    const cardFiltrado = nuevosCards;
    console.log(cardFiltrado)
    // console.log(nuevosCards)
    setIsOpen(!isOpen)
    // console.log(id);
    // const nuevosCards = cards.find(cards => id === cards.id );
}
// const handleClick = event => {
//   console.log(event.currentTarget.id);
//   setIsOpen(!isOpen)
// };


  return (
    <div className="contendedor-cards" id="Certificados">

    <div>
       <h1 className="titulo-expandibles">ALGUNA FORMACIÓN</h1>
    </div>
      
      
    <div className="cards">
    {cards.map((item) => (
        
        <motion.div
          key={item.id}
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          // onClick={() => setIsOpen(!isOpen)}
          onClick={() => {click(item.id)}}   
          // onClick={handleClick}
          className="card"
          drag
          // style={{
          //   borderRadius: "1rem",
          //   boxShadow: "0px 10px 30px rgba(0,0,0, 0.5",
          // }}
        >
          <button onClick={() => setIsOpen(!isOpen)}>Hola</button>
          <motion.h2 className="titulo-card" layout="position">{item.titulo}</motion.h2>

           {isOpen && ( 
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
              className="expand"
            >
               <motion.p className="descripcion" layout="position">{item.descripcion}</motion.p>

               <motion.div className="contenedor-boton">
               <motion.a href={item.source} target="_blank" className="boton-certificados"> Ver Certificado </motion.a>
              </motion.div>

              <div>{item.image}</div>

                <hr className="separador-certificados"/>
              
            </motion.div>
          )}
        </motion.div>

    ))}
    </div>
      
    </div>
  );
};

export default Certificados;
