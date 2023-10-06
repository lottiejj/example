import IconMusicalNotes from "../assets/music"
import IconHeart from "../assets/heart"
import IconMusicCircle from "../assets/logo"
import IconSearchCircleSharp from "../assets/search"
import { useEffect, useState } from "react";
import React from "react";
import SongPlayer from "./song-player";
import { Navbar } from "./navbar";
const CLIENT_ID = '191961a6acf64c7980c12a6ce419b673';
const CLIENT_SECRET = '6f0c927ecdeb44fca968a32bea49d2fe';

export function Main() {
    const [searchInput, setSearchInput] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [albums, setAlbums] = useState([]);

    const [favourites, setFavourites] = useState([]);

    const [playingTrack, setPlayingTrack] = useState();

    function addToFavourites(song) {
       if (favourites.includes(song)) {
            return ;
            } 
            setFavourites([...favourites, song]) 
        }

    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearchInput('')
    }
    useEffect(() => {
      var params = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
      }
  fetch('https://accounts.spotify.com/api/token', params)
  .then(result => result.json())
  .then(data => setAccessToken(data.access_token));
  }, [])

  //search
  async function search() {
var artistParams = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
    }
}
var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', artistParams)
.then(res => res.json())
.then(data => {return data.artists.items[0].id})

console.log("Artist ID is " + artistID)

var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&limit=50', artistParams)
.then(response => response.json())
.then(data => {
    setAlbums(data.items);
});
  }

    return (
        <div className="main-content"> 
        <h1></h1>
        <div className="search-area">     
        <input className="search-box"
        onKeyPress={event => {
            if (event.key == "Enter") {
                search()
            }
        }}
        onChange={event => setSearchInput(event.target.value)}></input>
       <button className="search-button"
       onClick={search}>
        <IconSearchCircleSharp />
       </button>
       </div>
       <div className="albums">
        {albums.map((album, index) => {
            console.log(favourites.includes(album.name))
            return (
                <div className="album-card" key={album.id}>
                <img src={album.images[0].url}></img>
                <IconHeart 
                onClick={() => addToFavourites(album.name)}
                isFave={favourites.includes(album.name)}/>
                <p>{album.name}</p>
                </div>
            )
        })}
       </div>
 </div>
    )
}

export default function Home() {
    return (
        <>
        <Navbar />
        <Main />
        <SongPlayer />
        </>
    )
};