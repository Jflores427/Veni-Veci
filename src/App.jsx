import { useState } from 'react'
import viteLogo from '/vite.svg'
import VeniContainer from "./components/VeniContainer"
import './App.css'


function App() {
  const [history, setHistory] = useState({});
  const [banList, setBanList] = useState([]);
  const [data, setData] = useState({});

  const APIRequest = async () => {
    const popularAnime = await fetch("http://localhost:3000/popular")
    if(popularAnime) {
    const popularAnimeJSON = popularAnime.json();
    }
    setData({...data, animeId : popularAnimeJSON.animeID, animeTitle: popularAnimeJSON.animeTitle, animeImg: popularAnimeJSON.animeImg});

  }
  return (
    <div className="veni-background">
      <VeniContainer APIRequest={APIRequest} ></VeniContainer>
      {/* <BanList></BanList>
      <History></History> */}
    </div>
  )
}

export default App
