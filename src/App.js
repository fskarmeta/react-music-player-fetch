import React, { useState, useRef, useEffect } from "react";
import Songs from "./songs.js";
import Buttons from "./buttons.js";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([
    {
      id: 1,
      category: "game",
      name: "Mario Castle",
      url: "files/mario/songs/castle.mp3",
    },
    {
      id: 2,
      category: "game",
      name: "Mario Star",
      url: "files/mario/songs/hurry-starman.mp3",
    },
    {
      id: 3,
      category: "game",
      name: "Mario Overworld",
      url: "files/mario/songs/overworld.mp3",
    },
  ]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [songId, changeSongId] = useState(0);
  const [hide, setHide] = useState(false)

  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/sound/songs")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSongs(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  let player = useRef(null);

  function selectSong(i) {
    changeSongId(i);
    player.src = `https://assets.breatheco.de/apis/sound/${songs[i].url}`;
    player.play();
    setHide(true)
  }
  
  function hider(){
    if (hide) {
      return {display: "none"}
    } else {
      return {display: "inherit"}
    }
  }
 
  function hider2(){
    if (hide) {
      return {display: "inherit"}
    } else {
      return {display: "none"}
    }
  }

  function playSong() {
    player.play();
    setHide(true)
  }
  function stopSong() {
    player.pause();
    setHide(false)
    
  }

  function nextSong() {
    if (songId < songs.length - 1) {
      player.src = `https://assets.breatheco.de/apis/sound/${
        songs[songId + 1].url
      }`;
      changeSongId(songId + 1);
      player.play();
    }
  }

  function lastSong() {
    if (songId > 0) {
      player.src = `https://assets.breatheco.de/apis/sound/${
        songs[songId - 1].url
      }`;
      changeSongId(songId - 1);
      player.play();
    }
  }

  function colorItem(i) {
   if (songId === i) {
    return { backgroundColor: "rgba(174, 173, 173, 0.2)" };
  }
}

if (error) {
  return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
  return <div>Loading...</div>;
} else {
  return (
    <div className="over-container">
      <div className="block"></div>
      <Songs songs={songs} selectSong={selectSong}  colorItem={colorItem} />
      <Buttons
        stopSong={stopSong}
        playSong={playSong}
        hider={hider}
        hider2={hider2}
        nextSong={nextSong}
        lastSong={lastSong}
      />
      <audio ref={(t) => (player = t)} src={`https://assets.breatheco.de/apis/sound/${
        songs[0].url
      }`} />
    </div>
  );
}
}
export default App;
