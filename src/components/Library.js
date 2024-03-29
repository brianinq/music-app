import React from 'react';
import LibrarySong from './LibrarySong' 

function Library({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryOpen}){
    return(
        <div className={`library ${libraryOpen && 'library-active'}`}>
            <h2>Library</h2>
            <div className="library-songs">
            {songs.map(song => <LibrarySong song={song} audioRef={audioRef} key={song.id} setCurrentSong={setCurrentSong} isPlaying={isPlaying} songs={songs} setSongs={setSongs} />)}
            </div>
        </div>
    )
}

export default Library;