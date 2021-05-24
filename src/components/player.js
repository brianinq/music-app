import React, { useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons'

function Player({currentSong, setCurrentSong, isPlaying, setIsPlaying, audioRef, songs}){
    //useRef to select an element on the document
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
    
    async function skipTrack(direction){
        let currentIndex = songs.indexOf(currentSong)
        if (direction==='next'){
            await setCurrentSong(songs[(currentIndex + 1)%songs.length])
        }
        if (direction==='previous'){
            if ((currentIndex - 1) % songs.length === -1){
                await setCurrentSong(songs[songs.length - 1])
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1)%songs.length])
        }
    }
 
    return(
        <div className='player'>
            <div className='time-control'>
            <p>{getTime(songInfo.currentTime ) || '0:00'}</p>
            <input onChange={slideHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" name="" id="" />
            <p>{getTime(songInfo.duration ) || '0:00'}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft} onClick={()=>{skipTrack('previous')}} />
                <FontAwesomeIcon className='play' size='2x' icon={isPlaying ? faPause :faPlay} onClick={playSongHandler} />
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight} onClick={()=>{skipTrack('next')}} />
            </div>
            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onEnded={()=>{skipTrack('next')}}></audio>
        </div>
    )
}

export default Player;