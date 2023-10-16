import "./History.css"

const History = (props) => {
    const { History } = props;

    const HistoryList = [...History.values()];

    return (
        <>
        <div className="history-container">
            <h5 className="history-title">Animes Seen So Far</h5>
            {HistoryList && HistoryList.map((entry) => 
            (<div key={entry.animeId} className="history-entry" id={entry.animeId}>
                <img className="history-img" src={entry.animeImg} />
                <div className="history-title">{entry.animeTitle}</div>
            </div>))}
        </div>
        </>
    );
};

export default History;