import "./VeniContainer.css";

const VeniContainer = (props) => {

 const {APIRequest} = props;

return (
    <>
    <div className="container">
        <h2 className="title">Veni Vici!</h2>
        <p className="title-description"> Discover Your New Favorite Anime!</p>
        <button className="explore-button" onClick={APIRequest}>Explore</button>
    </div>
    </>
)

}

export default VeniContainer;