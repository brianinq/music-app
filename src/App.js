import React, {useState} from 'react'
import './styles/app.scss'
import Song from './components/Song'
import Player from './components/player'
import data from './utils'
import Library from './components/Library'
import { library } from '@fortawesome/fontawesome-svg-core'

function App() {

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong]= useState(songs[2])
  const [isPlaying, setIsPlaying] = useState(false)

  return ( <div className='App'>
     <Song currentSong={currentSong}/>
     <Player 
     currentSong={currentSong} 
     isPlaying={isPlaying} 
     setIsPlaying ={setIsPlaying}
     />
     <Library songs={songs}/>
    </div>
  )
}

export default App;