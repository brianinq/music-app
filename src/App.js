import React, {useState} from 'react'
import './styles/app.scss'
import Song from './components/Song'
import Player from './components/player'
import data from './utils'

function App() {

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong]= useState(songs[2])
  return ( <div className='App'>
     <Song currentSong={currentSong}/>
     <Player/>
    </div>
  )
}

export default App;