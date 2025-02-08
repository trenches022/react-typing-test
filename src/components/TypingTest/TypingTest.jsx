import useTypingStore from "../store/useTypingStore";
import { getRandomText } from "../utils/getRandomText";
import { useEffect, useState, useRef } from "react";
import './TypingTest.css';

const TypingTest = () => {
  const { userInput, setUserInput, timer, isRunning, startTimer, reset } = useTypingStore();
  const [text, setText] = useState(""); 
  const [wpm, setWpm] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setText(getRandomText());
  }, []);

  useEffect(() => {
    if (isRunning && timer > 0) {
      const interval = setInterval(() => {
        useTypingStore.setState((state) => ({ timer: state.timer - 1 }));
      }, 1000);
      return () => clearInterval(interval);
    }

    if (timer === 0) {
      const wordsTyped = userInput.trim().split(/\s+/).length;
      setWpm(Math.round(wordsTyped / 0.5));
    }

  }, [isRunning, timer]);



  const getHighlightedText = () => {
    return text.split('').map((char, index) => {
      let colorClass = "gray";
      if (index < userInput.length) {
        colorClass = char === userInput[index] ? "correct" : "wrong";
      }
      return <span key={index} className={colorClass}>{char}</span>;
    });
  };

  const handleReset = () => {
    reset();
    setText(getRandomText());
    setWpm(null);
    if (inputRef.current) {
      inputRef.current.innerText = '';
    }
  }

  return (
    <div className="typing-container">
      <p className="typing-text">{getHighlightedText()}</p>
      {isRunning && <p className="timer" style={{color: '#facc15', fontSize: '19px'}}>{timer}s</p>}

      {timer === 0 && (
         <p className="wpm-result" style={{color: '#22c55e', fontSize: '20px'}}>
         Your speed: {wpm} WPM
       </p>
      )}

      <div
        ref={inputRef}
        contentEditable={timer > 0}
        suppressContentEditableWarning={true}
        spellcheck="false"
        onInput={(e) => {
          if (!isRunning) startTimer();
          setUserInput(e.currentTarget.innerText);
        }}
        className="typing-box"
      ></div>
      <button onClick={handleReset} className="reset-btn">Reset</button>
    </div>
  );
};

export default TypingTest;
