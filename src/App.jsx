import { useState } from 'react'
import viteLogo from '/vite.svg'
import VeniContainer from "./components/VeniContainer"
import './App.css'


function App() {
  const [history, setHistory] = useState({});
  const [banList, setBanList] = useState([]);
  const [data, setData] = useState({});

  const getRandomInt = (max) => {
    let randomValue = Math.floor(Math.random() * max);
    return (randomValue !== max) ? randomValue : getRandomInt(max);
  }

  const APIRequest = async () => {
    const randomPage = getRandomInt(504);
    const popularAnimeJSON = await fetch("http://localhost:3000/popular?page=" + randomPage).then((response) => response.json());

    const randomIndex = getRandomInt(popularAnimeJSON.length);
    
    if(popularAnimeJSON) {
    setData({...data, animeId : popularAnimeJSON[randomIndex].animeId, animeTitle: popularAnimeJSON[randomIndex].animeTitle, animeImg: popularAnimeJSON[randomIndex].animeImg});

    const animeDetailsJSON = await fetch("http://localhost:3000/anime-details/" + popularAnimeJSON[randomIndex].animeId).then((response) => response.json());
    //console.log(animeDetailsJSON);

    if(animeDetailsJSON) {
      //setData({...data, animeGenres: animeDetailsJSON.genres, animeStatus: animeDetailsJSON.status, animeRelease: animeDetailsJSON.releasedDate});  
      console.log(data);
    }
  }
  }



  return (
    <div className="veni-background">
      <VeniContainer APIRequest={APIRequest} data={data} ></VeniContainer>
      {/* <BanList></BanList>
      <History></History> */}
    </div>
  )
}

export default App
