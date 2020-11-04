import React from 'react';

const Buttons = (props) => {
  return (
    <div className="player">
      <div className="player-icon">
        <i className="fas fa-backward fa-2x" onClick={() => props.lastSong()}></i>
        <i className="fas fa-play-circle fa-2x" style={props.hider()} onClick={() => props.playSong()}></i>
        <i className="fas fa-pause-circle fa-2x" style={props.hider2()} onClick={() => props.stopSong()}></i>
        <i className="fas fa-forward fa-2x" onClick={() => props.nextSong()}></i>
      </div>
    </div>
  );
};

export default Buttons