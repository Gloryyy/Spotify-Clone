import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromURL } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player';
import { useDataLayerValue } from './Redux/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
       })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(':fire', user)

        dispatch({
          type: 'SET_USER',
          user
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcIJazRV9ISoM').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })
    }

    // console.log('I am a TOKEN >>>>....', token)
  }, []);
  /* console.log(':person', user)

  here we can take the token value:
  console.log(':fire', token) */

  return (
    <div className="app">
      {
        token ? 
          <Player spotify={spotify} /> :
          <Login />
      }
    </div>
  );
}

export default App;
