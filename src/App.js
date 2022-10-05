import "./styles.css";
import { useState } from "react";

var playlist = {
  "1960":[
  { song: "Ajeeb Dastan Hai Yeh ", movie: "—Dil Apna Aur Preet Parai" },
  { song: "Abhi Na Jao Chhodkar", movie: "   —Hum Dono" },
  { song: "Dil Ke Jharokhe Mein",movie :"  —Brahmachari" },
  { song:"Aajkal Tere Mere Pyar Ke Charche" , movie: " —Brahmachari" },
  { song: "Gumnaam Hai Koi", movie: " —Gumnaam" },
],
  "1970": [
    { song:"Kya Hua Tera Wada", movie: " —Hum Kisise Kum Naheen" },
    { song:"Dil To Hai Dil"  , movie: " —Muqaddar Ka Sikandar" },
    { song: "Chadti Jawani Meri Chaal Mastani",movie: " —Caravan," },
    { song:"Aap Yahan Aaye Kisliye" , movie: " —Kal Aaj Aur Kal" },
    { song:"Bachna Ae Haseeno" , movie: " —um Kisise Kum Naheen " },
  ],
  "1980": [
    { song:"Ae Mere Humsafar" , movie: " —Qayamat Se Qayamat Tak" },
    { song: "Chehra Hai Ya", movie: " —Saagar" },
    { song: "Sheesha Ho Ya Dil Ho", movie: " —Aasha" },
    { song: "Papa Kehte Hai", movie: " —Qayamat Se Qayamat Tak" },
    { song: "Ek Do Teen", movie: " —Teezab" },
  ],
  "1990": [
    { song: "Kuch Na Kaho", movie: " —A Love Story" },
    { song: "Pehla Nasha", movie: " —Jo Jeeta Wohi Sikandar" },
    { song: "Ek Ladki Ko Dekha", movie: " —A Love Story" },
    { song: "Kehna Hi Kya", movie: " —Bombay" },
    { song: "Dil To Pagal Hai",movie:" —Dil To Pagal Hai"},
  ]
  
};

export default function App() {
  var [state, updateState] = useState("1990");

  var playlistarray = Object.keys(playlist);

  function thingsClickHandler(state) {
    updateState(state);
  }
  return (
    <div className="App">
    <header>
      <h1>Bollywood Jukebox 📻</h1>
      </header>
    <h2>
    👇 Best songs of the respective decades 👇
    </h2>
      <nav className="nav">
        {playlistarray.map(function (state) {
          return (
            <button
              className="list-of-things"
              onClick={() => thingsClickHandler(state)}
              key={state}
            >
              {state}
            </button>
          );
        })}
      </nav>
      <div>
        <ul className="details">
          {playlist[state].map((item) => (
            <li key={item.name}>
              <div className="movielist"> {item.song} <span></span>{item.movie}</div>
              <p> </p>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        My <a className="link" href="https://open.spotify.com/user/pariikshitdeore1999">Spotify</a>
    </footer>
    </div>
    
  );
}
