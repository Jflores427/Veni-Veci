import "./VeniContainer.css";

const VeniContainer = (props) => {

 const {APIRequest, data} = props;

 const animeGenres = [1,2,3,4];
return (
    <>
    <div className="container">
        <h2 className="title">Veni Vici!</h2>
        <p className="title-description"> Discover Your New Favorite Anime!</p>
        <div className="query-container">
            <h3 className="query-title">{data.animeTitle}</h3>
            <div className="query-button-container"> {animeGenres.map((animeGenre) => (<button key={animeGenre} className="banList">{animeGenre}</button>))} </div>
            <img className="query-image" src={data.animeImg}></img>
            <button className="explore-button" onClick={APIRequest}>Explore</button>
        </div>
    </div>
    </>
)

}

export default VeniContainer;