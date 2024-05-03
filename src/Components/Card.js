import "./Card.css";

const Card = ({isFlipped, info}) => {
 
    return (
        <div>
            <div className="container">
                <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card-content">
                                <img src={info.front} alt="Question"/>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <div className="card-content">
                                <img src={info.back} alt="Card logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;