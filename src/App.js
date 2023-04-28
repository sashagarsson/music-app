import React, { useState } from "react"
import './App.css';
import Header from "./components/Header"
import SignIn from './components/SignIn'
import OnlineMode from './components/OnlineMode'
import MasterVolume from "./components/MasterVolume";
import SoundQuality from "./components/SoundQuality";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [changeVolume, setChangeVolume] = useState(20);
  const [musicQuality, setMusicQuality] = useState("")
  
  return (
    <div className="App">
      <Header />
      {isLoggedIn === true ? (
      <>
        <h1>Welcome User!</h1>
        <div className="app-cards">
        {/* isOnline={isOnline} allows offline message to toggle back and forth.
        isOnline and setIsOnline are props here.
        useState is defined here in the parent. This is the state of the Switch in OnlineMode. */}
        <OnlineMode isOnline={isOnline} setIsOnline={setIsOnline}/>
        <MasterVolume changeVolume={changeVolume} setChangeVolume={setChangeVolume} />
        <SoundQuality musicQuality={musicQuality} setMusicQuality={setMusicQuality} />
        </div>
        <div className="notifications">
          <h2>System Notifications:</h2>
          {/* If !Online is truthy, aka is not online, display below message. Otherwise display nothing. */}
          {!isOnline && (
          <p>Your application is offline. You won't be able to share or stream music to other devices.</p>
          )}
          { changeVolume >= 80 && (
            <p>Listening to music at a high volume could cause long-term hearing loss.</p>
          )}
          { musicQuality === 1 && (
            <p>Music quality is degraded. Increase quality if your connection allows it.</p>
          )}
        </div>
      </>
    ) // end of if isLoggedIn is true
     : (
    <SignIn setIsLoggedIn ={setIsLoggedIn} />
    )}
      
      
    </div>
  );
}

export default App;