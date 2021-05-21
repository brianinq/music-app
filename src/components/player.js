import React, {useRef, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons'

function Player({currentSong, isPlaying, setIsPlaying}){
    //useRef to select an element on the document
    const audioRef = useRef(null)
    function playSongHandler(){
        if (isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        } else{
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })
    function timeUpdateHandler(event){
        const current = event.target.currentTime
        const duration = event.target.duration 
        setSongInfo({
            ...songInfo,
            currentTime: current,
            duration
        })
    }
    const getTime = (time) =>{
        return(
            Math.floor(time/60) + ":"+("0"+Math.floor(time%60)).slice(-2)
        )
    }
    function slideHandler(event){
        audioRef.current.currentTime = event.target.value
        setSongInfo({...songInfo, currentTime: event.target.value})
    }

 
    return(
        <div className='player'>
            <div className='time-control'>
            <p>{getTime(songInfo.currentTime)}</p>
            <input onChange={slideHandler} min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" name="" id="" />
            <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft}/>
                <FontAwesomeIcon className='play' size='2x' icon={isPlaying ? faPause :faPlay} onClick={playSongHandler}/>
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight}/>
            </div>
            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;