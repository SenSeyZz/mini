import React, { useState, useEffect } from 'react';
import styles from "./pendu.module.css";
import NavigationBar from '../navBar';

const Trivia = () => {

  //Create needed variables 
  const [wordToGuess, setWordToGuess] = useState("TEST");
  const [clickedButtons, setClickedButtons] = useState([]);
  const [i, seti] = useState(0);
  const maxIndex = 9;

  //Use effect function to select the current word to guess
  useEffect(() => {
    // Perform logic based on the updated value of i
    if (i === 0) {
      setWordToGuess("TEST");
    } else if (i === 1) {
      setWordToGuess("MON NOMBRE PREFERE EST 8");
    }else if (i===2) {
        setWordToGuess("TLRTESE SDAN EL RDOERSED")
    }else if (i===3) {
        setWordToGuess("PARTIR MARCHER LE LONG D UNE BELLE RIVIERE AVANT QUE L HIVER ARRIVE")
    }else if (i===4){
        setWordToGuess("SRUD TNOS SREVNE L A SELZZUP SEL")
    }else if (i===5) {
        setWordToGuess("C EST UN JEUX DE MERDE")    
    }else if (i===6) {
        setWordToGuess("QUI A TUE JFK")    
    }else if (i===7) {
        setWordToGuess("LA SALOPPE JOUE BILBOQUET PARKING IDEE")  
    }else if (i===8) {
        setWordToGuess("WG")    
    }else if (i===9) {
        setWordToGuess("VERRE TOUT LE FINIT SON MONDE")    
    }
  }, [i]); // The effect will run whenever i changes

  //Sets the new word to guess and handles the change in i 
  const changeWord = (change) => {
    setClickedButtons([]);
    console.log(wordToGuess);
    seti((previ) => {
      // Using the callback to ensure the updated value of i is used
      if (change === "prev") {
        if (previ > 0) {
          return previ - 1;
        }
      } else {
        // Add a condition to handle the maximum value for i
        if (previ < maxIndex) {
          return previ + 1;
        }
      }
      return previ;
    });
  };

  //adds the clicked letter to the array of clicked letters so we know which ones are remaining or not
  const checkLetter = (letter) => {
    setClickedButtons((prevClickedButtons) => [...prevClickedButtons, letter]);
    console.log(wordToGuess);
  };

  // Check if a letter that has been clicked is in the word and if yes, dispaly the letter otherwise display "_"
  const displayLetterOrLine = (letter) => {
    if (letter !== " ") {
      return clickedButtons.includes(letter) ? letter : '_';
    }
  };

  //Dispaly JSX element
  return (
    <div className={`${styles['centered']} ${styles['background-image']}`}>
    <NavigationBar/>
      <h1 >Pendu</h1>

      <div>
        {Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i)).map(letter => (
          <button key={letter} onClick={() => checkLetter(letter)} className={clickedButtons.includes(letter) ? styles['red-button'] : ''}>
            {letter}
          </button>
        ))}
      </div>

      <div className={styles['margin-top']}>
        {Array.from({ length: wordToGuess.length }, (_, i) => (
          <span key={i} className={`${styles['space']}`}>
            {displayLetterOrLine(wordToGuess[i])}
          </span>
        ))}
      </div>

      <button className={styles['margin-top']} onClick={() => changeWord("prev")}>Previous</button>
      <button className={styles['margin-top']} onClick={() => changeWord("up")}>Next</button>

    </div>
  );
};

export default Trivia;
