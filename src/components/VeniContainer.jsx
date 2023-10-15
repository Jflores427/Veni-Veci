import "./VeniContainer.css";

const VeniContainer = (props) => {

 const {APIRequest, AddToBanList, data} = props;

 const {animeTitle, animeImg, animeGenres, animeId, animeStatus, animeRelease} = data;

 console.log(animeGenres);

return (
    <div className="container">
        <div className="veni-container">
            <h2 className="title">Veni Vici!</h2>
            <div className="title-description"> Discover Your New Favorite Anime!</div>
            <div className="query-container">
                <h3 className="query-title">{animeTitle}</h3>
                <p className="query-status">{animeStatus && "Status: " + animeStatus}</p>
                <p className="query-release"> {animeRelease && "Released : " + animeRelease}</p>
                <div className="query-button-container"> {animeGenres && animeGenres.map((animeGenre) =>(<button key={animeGenre} id={animeGenre} className="banlist-button" onClick={AddToBanList}>{animeGenre}</button>))} </div>
                <img className="query-image" src={animeImg}></img>
                <button className="explore-button" onClick={APIRequest}>Explore</button>
            </div>
        </div>
    </div>
);

};

export default VeniContainer;