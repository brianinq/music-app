import React from 'react'

function LibrarySong({song, setCurrentSong, audioRef, isPlaying, songs, setSongs}){
    function songHandler(event){
        setCurrentSong(song)

        //change active song
        const newSongs = songs.map((s) => {
            if(s===song){
                return{...s, active: true}
            } else {
                return{...s, active: false}  
            }
        })
        setSongs(newSongs)

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
        <div onClick={songHandler} className={`library-song ${song.active && 'active'}`}>
        <img src={song.cover} alt="album art" />
        <div className="song-desc">
            <h3>{song.name}</h3>
            <h5>{song.artist}</h5>
        </div>
        
        </div>
    )
}

export default LibrarySong;