import React from 'react';
import LibrarySong from './LibrarySong' 

function Library({songs, setCurrentSong, audioRef, isPlaying}){
    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
            {songs.map(song => <LibrarySong song={song} audioRef={audioRef} key={song.id} setCurrentSong={setCurrentSong} isPlaying={isPlaying} />)}
            </div>
        </div>
    )
}

export default Library;