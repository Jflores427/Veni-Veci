import "./VeniContainer.css";

const VeniContainer = (props) => {

 const {APIRequest, AddToBanList, AddToHistory, data} = props;

 const {animeTitle, animeImg, animeGenres, animeId, animeStatus, animeRelease} = data;

 const APICallAndHistory = async () => {
    if (data) {
        AddToHistory();
    }
    APIRequest();
 }

return (
    <div className="container">
        <div className="veni-container">
            <h2 className="title">Veni Vici - Anime Edition!</h2>
            <div className="title-description"> Discover Your New Favorite Anime!</div>
            <div className="query-container">
                <h3 className="query-title">{animeTitle}</h3>
                <p className="query-release"> {animeRelease && "Released : " + animeRelease}</p>
                <p className="query-status">{animeStatus && "Status: " + animeStatus}</p>
                <div className="query-button-container"> {animeGenres && animeGenres.map((animeGenre) =>(<button key={animeGenre} id={animeGenre} className="banlist-button" onClick={AddToBanList}>{animeGenre}</button>))} </div>
                <img className="query-image" src={animeImg}></img>
                <button className="explore-button" onClick={APICallAndHistory}>Explore</button>
            </div>
        </div>
    </div>
);

};

export default VeniContainer;