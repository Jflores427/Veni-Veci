import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import VeniContainer from "./components/VeniContainer"
import BanList from "./components/BanList"
import History from  "./components/History"
import './App.css'


function App() {
  const [history, setHistory] = useState(new Set());
  const [banSet, setBanSet] = useState(new Set());
  const [data, setData] = useState({});
  


  const POPULAR_ANIME_PAGES = 504;

  const getRandomInt = (max) => {
    let randomValue = Math.floor(Math.random() * max);
    return (randomValue !== max) ? randomValue : getRandomInt(max);
  }

  const APIRequest = async () => {
    let randomPage = getRandomInt(POPULAR_ANIME_PAGES);
    let popularAnimeJSON = await fetch("http://localhost:3000/popular?page=" + randomPage).then((response) => response.json());

    let randomIndex = getRandomInt(popularAnimeJSON.length);
    
    let animeDetailsJSON = await fetch("http://localhost:3000/anime-details/" + popularAnimeJSON[randomIndex].animeId).then((response) => response.json());

    let genreList = animeDetailsJSON.genres;

    for(let i = 0; i < genreList.length; i++) {
      const isBanned = banSet.has(genreList[i]);
      if(isBanned) {
        APIRequest();
        return;
      }
    }
    
    if(popularAnimeJSON && animeDetailsJSON) {
      setData({ 
        animeId : popularAnimeJSON[randomIndex].animeId, 
        animeTitle: popularAnimeJSON[randomIndex].animeTitle, 
        animeImg: popularAnimeJSON[randomIndex].animeImg, 
        animeGenres: animeDetailsJSON.genres, 
        animeStatus: animeDetailsJSON.status, 
        animeRelease: animeDetailsJSON.releasedDate});
    }
  
  }

  const AddToBanList = (e) => {
    banSet.add(e.target.id);
    setBanSet(new Set(banSet));
  }

  const UnBan = (e) => {
    banSet.delete(e.target.id);
    setBanSet(new Set(banSet));
  }

  const AddToHistory = () => {
    if(data)
     history.add(data);
     setHistory(new Set(history));
  }



  return (
    <div className="veni-background">
      <History History={history} />

      <VeniContainer APIRequest={APIRequest} 
      AddToBanList={AddToBanList} 
      data={data}
      AddToHistory={AddToHistory} 
      />
      <BanList banList={banSet} UnBan={UnBan} />


    </div>
  )
}

export default App;
