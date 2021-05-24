import React from 'react'

function LibrarySong({song, setCurrentSong, audioRef, isPlaying, songs, setSongs}){
    async function songHandler(event){
        await setCurrentSong(song)

        //change active song
        const newSongs = songs.map((s) => {
            if(s===song){
                return{...s, active: true}
            } else {
                return{...s, active: false}  
            }
        })
        setSongs(newSongs)

        if(isPlaying) audioRef.current.play()
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