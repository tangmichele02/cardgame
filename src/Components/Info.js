import "./Info.css";
import Modal from "react-bootstrap/Modal"
import { useState } from "react";
import Button from "./Button.js";
import "bootstrap/dist/css/bootstrap.css";

const Info = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
      };
    return ( <>
        <div className="button-container-htp">
            <Button handle={handleShow} buttonname={"How to play"}/>
        </div>
        <Modal className="inside-container" show={show} onHide={() => setShow(false)} scrollable>
          <Modal.Body className="inside-content">
            This is a game inspired by my love for <b>asking people questions about their life experiences.</b>
            <br/>
            <br/>
            It is recommended for <b>2 players</b>, but you can certainly play with more or even reflect on your own! 
            <br/>
            <br/>
            In this game there are <b>2 kinds of cards:</b>
            <br/>
            <br/>
            <b>White cards</b>: these are questions <b>you ask to someone else</b>, for them to <b>answer about themselves</b>. 
            <br/>
            For example, one white card question is “Tell me about a great memory.” You would ask this to a fellow player for them to tell you about their memories.
            <br/>
            <br/>
            <b>Pink cards</b>: these are questions <b>you ask to someone else</b>, for them to <b>answer about you or your relationship with them</b>. 
            For example, one pink card question is “Describe me in a couple of sentences.” You would ask this to a fellow player for them to tell you about their thoughts about you.
            <br/>
            <br/>
            To use all of the cards, it is <b>recommended that players already know each other</b>. However, if you are just starting to get to know someone, feel free to play with only the white cards, or incorporate the pink cards for fun. Also, in this game, <b>relationship means any kind of social relationship</b>, whether that be romantic, friendly, familial, or otherwise.
            <br/>
            <br/>
            While there are <b>no specific rules</b>, here are some recommended ways to play:
            <ol>
                <li>Shuffle all cards into one deck and place them question-side down. Give each player 5 cards. Do not show other players your cards. Going counterclockwise, have each player pick a card to ask another player a question.</li>
                <li>Shuffle all cards into one deck and place them question-side down. Going counterclockwise, have each player pick the card from the top of the deck to ask another player a question.</li>
                <li>Place the white and pink cards in separate decks. In “truth or dare” style, ask another player which card they prefer. Pick the card from the top of the deck from their preferred card color and ask your fellow player.</li>
            </ol>
            There is no specific ending to the game. One possible ending could be finishing all the prompts. However, regardless of when you choose to end the game, wrap it up with one final reflection about <b>something you learned about your fellow player</b>.
            <br/>
            <br/>
            Remember: <b>you never have to ask or answer a question you are uncomfortable with!</b> This game is about communication and getting to know each other, which means being mindful about your own and each other’s boundaries and comfort zone. You are always welcome to skip a question or pick a new card.
            <br/>
            <br/>
            <b>Have fun!</b>
          </Modal.Body>
        </Modal>
      </>
    );
};

export default Info;