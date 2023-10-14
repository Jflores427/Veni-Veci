import { useState } from 'react'
import viteLogo from '/vite.svg'
import VeniContainer from "./components/VeniContainer"
import './App.css'


function App() {
  const [history, setHistory] = useState({});
  const [banList, setBanList] = useState([]);
  const APIRequest = async () => {
    let result = await fetch("http://localhost:3000/recent-release")
    .then((response) => response.json())
    .then((animelist) => console.log(animelist));
    console.log(result)

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
