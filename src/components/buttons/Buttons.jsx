import React, { useState } from "react";
import "./ButtonStyles.css";
// import ReactSwitch from 'react-switch'
// import {  RiContactsBook2Line } from "react-icons/ri";
import { HashLink as Link } from "react-router-hash-link";
import { BsArrowUpCircle } from "react-icons/bs"
// import {BiUserCircle} from 'react-icons/bi'
// import {FaUser, FaArrowCircleUp} from 'react-icons/fa'
import { motion } from 'framer-motion';
import {BsMusicPlayer} from 'react-icons/bs'
// import {AiOutlineArrowUp} from 'react-icons/ai'
import {IoShareSocialOutline} from 'react-icons/io5'

export const Buttons = (props) => {

  const [switchToggled, setSwitchToggled] = useState(false);

  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    console.log(switchToggled);
    if (props.theme === "light") {
      props.toogleTheme("dark");
    } else {
      props.toogleTheme("light");
    }
  };

  // const [footer, setFooter] = useState(false);

  

  return (
    <div>
      {/* <div className="contenedor-botonera"> */}
      <motion.div className="botonera"
      drag="y"
      whileTap={{ cursor: "grabbing" }}
      dragConstraints={{top: -295, bottom: -10}}
      initial={{scale: 1}}
      transition={{ duration: 1}}
      animate= {{
        scale: 1.1,
        zIndex: 1,
        y: -10,
        // x:-5,
        duration: 5
    }}
      >
        <svg
          id="luna"
          onClick={ToggleSwitch}
          className={switchToggled ? "fa-sun" : "fa-moon"}
        ></svg>
        {/* <label> {props.theme === "light" ? "Light Mode" : "Dark Mode"} </label> */}
        {/* <ReactSwitch onChange={props.toogleTheme} checked={props.theme === "dark"}/> */}

        <ul>
          <li>
            <Link className="logos" logos smooth to="#Header">
              <BsArrowUpCircle />
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <div className="logouser" onClick={props.toggleFooter}>
              <IoShareSocialOutline className="user-logo" />
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="logouser" onClick={props.toggleAudio}>
              <BsMusicPlayer className="user-logo" />
            </div>
          </li>
        </ul>
      </motion.div>
    </div>
    // </div>
  );
};
