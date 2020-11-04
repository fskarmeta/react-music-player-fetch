import React from 'react'


const Songs = (props) => {
    return (
        <div className="audio-container">
       {props.songs.map((e,i) => ( 
           <div className="box" key={i} style={props.colorItem(i)} onClick={() => props.selectSong(i)}>
            <div className="song-id"><span className="song-id-text">{e.id}</span></div>
            <div className="song-box"><span className="song-text" >{e.name}</span></div>
        </div>))}
    </div>
    )
};

export default Songs