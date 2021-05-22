import React from 'react'

function LibrarySong({song, setCurrentSong, audioRef, isPlaying}){
    function songHandler(event){
        setCurrentSong(song)

        if(isPlaying){
            const PlayPromise = audioRef.current.play();
            if(PlayPromise){
                PlayPromise.then((audio)=>{
                    audioRef.current.play()
                })
            }
        }
    }
    return(
        <div onClick={songHandler} className="library-song">
        <img src={song.cover} alt="album art" />
        <div className="song-desc">
            <h3>{song.name}</h3>
            <h5>{song.artist}</h5>
        </div>
        
        </div>
    )
}

export default LibrarySong;