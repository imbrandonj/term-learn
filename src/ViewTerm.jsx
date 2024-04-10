import { loadTerm } from './loadTerm';
import bolt from './assets/bolt.svg';

import { useState, useEffect, useRef } from 'react';

export default function ViewTerm({ termSet, setHome }) {
  const [term, setTerm] = useState(loadTerm(termSet)); // initial term on first render
  const [userAnswer, setUserAnswer] = useState('');
  const problemHistory = useRef({});

  useEffect(() => {
    // focus on answer box on load and input:
    document.getElementById('textBox').focus();
  }, [userAnswer]); // dependency to focus after user clicks `idk give answer` box

  // input event handler
  const handleInput = (event) => {
    setUserAnswer(event.target.value);
  };

  // enter event on answer text box:
  const checkAnswer = () => {
    if (term.answer.toLowerCase() === userAnswer.toLowerCase()) {
      // place the term in useRef; only display a term twice at most
      let termCounts = problemHistory.current;
      termCounts[term.problem] = (termCounts[term.problem] || 0) + 1; // tally up or set the initial term

      // load a new term for a term has been displayed less than twice:
      let newTerm = loadTerm(termSet);
      while (termCounts[newTerm.problem] > 1) {
        // check if the set is complete, i.e., all terms tally to 2:
        const setComplete = Object.values(termCounts).every(
          (termCount) => termCount === 2,
        );
        if (setComplete) {
          termCounts = {}; // reset the count and start anew
        }

        newTerm = loadTerm(termSet);
      }

      // store the new term:
      setTerm(newTerm);
      problemHistory.current = termCounts;

      setUserAnswer('');
    } else if (userAnswer.toLowerCase() === 'idk') {
      setUserAnswer(term.answer); // displays the answer
    }
  };

  // user clicks 'idk give answer' button:
  const giveAnswer = () => setUserAnswer(term.answer);

  // 'return home' button
  const goHome = () => setHome(true);

  return (
    <div id="termContent">
      <p className="definition">{term.problem}</p>
      <input
        type="text"
        id="textBox"
        autoComplete="off"
        value={userAnswer}
        onChange={handleInput}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            checkAnswer();
          }
        }}
      />
      <button id="giveAnswer" className="termBtn" onClick={giveAnswer}>
        IDK give answer
      </button>
      <button className="termBtn" onClick={goHome}>
        Return Home
      </button>
      <h3>
        <img src={bolt} height="60"></img> Type &apos;idk&apos; in the answer
        text box for a quick-solution.
      </h3>
    </div>
  );
}
