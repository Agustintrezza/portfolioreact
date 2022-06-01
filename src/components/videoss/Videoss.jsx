import React from 'react'
import { videoss } from '../../video'
import './VideosStyles.css'

export const Videoss = () => {
  return (

    <div className='video'>
    
        {videoss.map ((item) => (

        
        <video width="1200" height="340" autoPlay controls>
            <source src={item.source} type="video/mp4"/>
        </video>

        ))}

    </div>
  )
}
