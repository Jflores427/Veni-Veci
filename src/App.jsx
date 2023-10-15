import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import VeniContainer from "./components/VeniContainer"
import BanList from "./components/BanList"
import './App.css'




function App() {
  const [history, setHistory] = useState({});
  const [banList, setBanList] = useState(new Set());
  const [data, setData] = useState({});
  
  useEffect(() => {
    
  }, [banList]);

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

    while(banList.has(...animeDetailsJSON.genres)) {
      randomPage = getRandomInt(POPULAR_ANIME_PAGES);
      popularAnimeJSON = await fetch("http://localhost:3000/popular?page=" + randomPage).then((response) => response.json());
  
      randomIndex = getRandomInt(popularAnimeJSON.length);
      
      animeDetailsJSON = await fetch("http://localhost:3000/anime-details/" + popularAnimeJSON[randomIndex].animeId).then((response) => response.json());
    }
    
    // console.log(popularAnimeJSON);
    // console.log(animeDetailsJSON);
    // console.log(data);

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
    banList.add(e.target.id);
    setBanList(new Set(banList));
  }

  const UnBan = (e) => {
    banList.delete(e.target.id);
    setBanList(new Set(banList));
  }



  return (
    <div className="veni-background">
      <VeniContainer APIRequest={APIRequest} 
      AddToBanList={AddToBanList} 
      data={data} 
      />
      <BanList banList={banList} UnBan={UnBan} />

      {/* <History></History> */}
    </div>
  )
}

export default App
