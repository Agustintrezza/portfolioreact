import React, { useState } from "react";
import { certificados, certificados1, certificados2, cve } from "../../acordion";
import "./acordionStyles.css";
import { motion } from "framer-motion";
// import {Link} from 'react-router-dom'


export const Acordion = () => {
  const [selected, setSelected] = useState(null);

  const [selected1, setSelected1] = useState(null);

  const [selected2, setSelected2] = useState(null);

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }

    setSelected(id);
  };

  const toggle1 = (i) => {
    if (selected1 === i) {
      return setSelected1(null);
    }

    setSelected1(i);
  };

  const toggle2 = (i) => {
    if (selected2 === i) {
      return setSelected2(null);
    }

    setSelected2(i);
  };

  return (
    <div id="Acordion">
      <h1 className="titulo-slider">MI CV Y CURSOS</h1>
    
    <div className="wrapper">
      <div className="accordion">
        {certificados.map((item, id) => (
          <motion.div
            className="item1"
            onClick={() => toggle(id)}
            // drag="x"
            initial={{ scale: 1 }}
            animate={{ scale: 0.9, y: -10 }}
            transition={{ duration: 1 }}
          >
            <div className="title">
              <h2>{item.titulo}</h2>
              <span>{selected === id ? "-" : "+"}</span>
            </div>

            <div className={selected === id ? "content show" : "content"}>
              {item.descripcion}
              <div className="alinear-boton">
                <a href={item.source} className="clase-boton" target="_blank" rel="noreferrer">VER PDF</a>
              </div>
            </div>
            {/* <button className={selected === id ? 'content show' : 'content'}>Ver CV</button> */}
          </motion.div>
        ))}
      </div>

      <div className="accordion2">
        {certificados1.map((data, i) => (
          <motion.div
            className="item2"
            onClick={() => toggle1(i)}
            // drag="x"
            initial={{ scale: 1 }}
            animate={{ scale: 0.9, y: -10 }}
            transition={{ duration: 1 }}
          >
            <div className="title2">
              <h2>{data.titulo1}</h2>
              <span>{selected1 === i ? "-" : "+"}</span>
            </div>
            <div className={selected1 === i ? "content2 show2" : "content2"}>
              {data.descripcion1}
              <div className="alinear-boton">
              <a href={data.source} className="clase-boton" target="_blank" rel="noreferrer">VER PDF</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="accordion3">
        {certificados2.map((info, i) => (
          <motion.div
            className="item3"
            onClick={() => toggle2(i)}
            // drag="x"
            initial={{ scale: 1 }}
            animate={{ scale: 0.9, y: -10 }}
            transition={{ duration: 1 }}
          >
            <div className="title3">
              <h2>{info.titulo2}</h2>
              <span>{selected2 === i ? "-" : "+"}</span>
            </div>
            <div className={selected2 === i ? "content3 show3" : "content3"}>
              {info.descripcion2}
              <div className="alinear-boton">
              <a href={info.source} className="clase-boton" target="_blank" rel="noreferrer">VER PDF</a>
              </div>
            </div>
            
            

          </motion.div>

        ))}

        
            <div className="item4">
            
            {cve.map((cve, i) => (
              <a href={cve.source} target="_blank" rel="noreferrer">
              <div className="title4">
                <h2>MI CV</h2>
              </div>
              </a>
            ))}
            </div>
             
      </div>
    </div>
    </div>
  );
};
