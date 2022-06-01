import React, { useRef } from 'react';
import './player.scss';
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';
import {motion} from 'framer-motion'

const Player = ({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs, audio})=> {

  const clickRef = useRef();

  const PlayPause = ()=>
  {
    setisplaying(!isplaying);

  }


  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }

  const skipBack = ()=>
  {
    const index = songs.findIndex(x=>x.title == currentSong.title);
    if (index == 0)
    {
      setCurrentSong(songs[songs.length - 1])
    }
    else
    {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
    
  }


  const skiptoNext = ()=>
  {
    const index = songs.findIndex(x=>x.title == currentSong.title);

    if (index == songs.length-1)
    {
      setCurrentSong(songs[0])
    }
    else
    {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;
    
  }
  // <div className={props.audio ? "player_container" : "player_container-pasive"}>
  return (
    <motion.div className={audio ? "player_container" : "player_container-pasive"}
    drag="x"
    whileTap={{ cursor: "grabbing" }}
    dragConstraints={{left: -840, right: 30}}
    initial={{scale: 1}}
    transition={{ duration: 5}}
        animate= {{
          zIndex: 1,
          y: -4,
      }}
    >
      <div className='separador'>
          <div className="title">
            <p>{currentSong.title}</p>
          </div>
          
      

      <div className="navigation">
            <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
              <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
            </div>
          </div>
      
          </div>

      <div className="controls">
        <BsFillSkipStartCircleFill className='btn_action' onClick={skipBack}/>
        {isplaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause}/> : <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/>}
        <BsFillSkipEndCircleFill className='btn_action' onClick={skiptoNext}/>        
      </div>
      
    </motion.div>
  
  )
}

export default Player