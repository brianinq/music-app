import React, {useState, useRef} from 'react'
import './styles/app.scss'
import Song from './components/Song'
import Player from './components/player'
import data from './utils'
import Library from './components/Library'
import Nav from './components/Nav'

function App() {

  const [songs, setSongs] = useState(data())
  const audioRef = useRef(null)
  const [currentSong, setCurrentSong]= useState(songs[2])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryOpen, setLibraryOpen]= useState(false)

  return ( <div className='App'>
    <Nav libraryOpen={libraryOpen} setLibraryOpen={setLibraryOpen}/>
     <Song currentSong={currentSong}/>
     <Player 
     songs={songs}
     audioRef={audioRef}
     currentSong={currentSong} 
     setCurrentSong={setCurrentSong}
     isPlaying={isPlaying} 
     setIsPlaying ={setIsPlaying}
     />
     <Library audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setSongs={setSongs} libraryOpen={libraryOpen}/>
    </div>
  )
}

export default App;