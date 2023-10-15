import "./BanList.css";

const BanList = (props) => {
    const { banList, UnBan } = props;
    const banListArray = [...banList.values()];
    
    return( 
        <>
            <div className="banList-container">
                <h2 className="banList-title"> Ban List</h2>
                <p className="banList-description"> Select an attribute in the listing to ban it!</p>
                {banListArray && banListArray.map((ban) => (<button className="banList-buttons" id={ban} key={ban} onClick={UnBan}>{ban}</button>))}
            </div>
        </>
    );
    

};

export default BanList;