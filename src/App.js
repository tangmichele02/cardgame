import Card from "./Components/Card";
import Button from "./Components/Button.js";
import Info from "./Components/Info.js";
import cardscontent from "./Components/CardsContent.js";
import "./App.css";
import React, { useState } from 'react';

const App = () => {
  const [isFlipped, setFlipped] = useState(false);
  const [cardNum, setCardNum] = useState(0);
  const [cardsarray, setCardsarray] = useState(cardscontent);

  // let cardsarray = cardscontent;

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (cardNum < cardsarray.length - 1) {
      setCardNum(cardNum+1);
      setFlipped(false);
    } else {
      setCardNum(0);
      setFlipped(false);
    }
  }

  const handleBack = () => {
    if (cardNum > 0) {
      setCardNum(cardNum-1);
      setFlipped(false);
    } else {
      setCardNum(cardsarray.length - 1);
      setFlipped(false);
    }
  }

  const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
  }; 

  const handleShuffle = () => {
    let newcardsarray = shuffle(cardsarray);
    setCardsarray(newcardsarray);
    setCardNum(0);
    setFlipped(false);
  }

  return(
    <div>
      <h1>know you to know me</h1>
      <div  className="info-container">
        <Info/>
      </div>
      <Card isFlipped={isFlipped} info={cardsarray[cardNum]}></Card>
      <div className="buttons-container">
      <Button handle={handleBack} buttonname={"Back"}/>
      <Button handle={handleFlip} buttonname={"Flip"}/>
      <Button handle={handleNext} buttonname={"Next"}/>
      <Button handle={handleShuffle} buttonname={"Shuffle"}/>
      </div>
    </div>
  );
};
 
export default App;
