import React, {useState, useRef} from 'react'
import './styles/app.scss'
import Song from './components/Song'
import Player from './components/player'
import data from './utils'
import Library from './components/Library'
import { Fontawesome } from '@fortawesome/fontawesome-svg-core'

function App() {

  const [songs, setSongs] = useState(data())
  const audioRef = useRef(null)
  const [currentSong, setCurrentSong]= useState(songs[2])
  const [isPlaying, setIsPlaying] = useState(false)

  return ( <div className='App'>
     <Song currentSong={currentSong}/>
     <Player 
     audioRef={audioRef}
     currentSong={currentSong} 
     isPlaying={isPlaying} 
     setIsPlaying ={setIsPlaying}
     />
     <Library audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying}/>
    </div>
  )
}

export default App;