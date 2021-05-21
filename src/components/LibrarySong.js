import React from 'react'

function LibrarySong({song}){
    return(
        <div className="library-song">
        <img src={song.cover} alt="album art" />
        <div className="song-desc">
            <h3>{song.name}</h3>
            <h5>{song.artist}</h5>
        </div>
        
        </div>
    )
}

export default LibrarySong;