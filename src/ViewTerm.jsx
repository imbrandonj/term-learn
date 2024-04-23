import { loadSet } from './loadSet.js';
import { loadTerm } from './loadTerm.js';
import bolt from './assets/bolt.svg';

import { useState, useEffect, useRef } from 'react';

export default function ViewTerm({ termSet, setHome }) {
  const terms = loadSet(termSet); // all terms for the term set
  const [term, setTerm] = useState(loadTerm(terms)); // initial term on first render
  const [userAnswer, setUserAnswer] = useState('');
  const [idk, setIdk] = useState(false); // was the answer provided by the application? (they hit the 'idk' button or typed 'idk')
  const problemHistory = useRef({});
  const [termsCompleted, setTermsCompleted] = useState(0);

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
    // all of this if the answer is correct:
    if (terms[term].toLowerCase() === userAnswer.toLowerCase()) {
      let termCounts = problemHistory.current; // obtain problem history counts (how many times a problem has been shown)
      console.log('before: ', termCounts);

      // mastering a term; if `idk` or answer was given, term count will not be incremented
      if (!idk) {
        termCounts[term] = (termCounts[term] || 0) + 1; // tally up or set the initial term
        if (termCounts[term] > 1) setTermsCompleted(termsCompleted + 1);
      }

      // load a new term for a term has been displayed less than twice:
      let newTerm = loadTerm(terms);
      while (termCounts[newTerm] > 1) {
        const termHistory = Object.values(termCounts);
        const termDefinitions = Object.values(terms);
        console.log(termHistory.length);
        console.log(termDefinitions.length);
        // check if the set is complete:
        if (termHistory.length === termDefinitions.length) {
          // do all terms tally to 2?
          if (termHistory.every((termCount) => termCount === 2)) {
            termCounts = {}; // reset the count and start anew
            setTermsCompleted(0);
          }
        }

        newTerm = loadTerm(terms);
      }

      // store the new term:
      setTerm(newTerm);
      console.log('after: ', termCounts);
      problemHistory.current = termCounts;

      // reset for next term:
      if (idk) {
        setIdk(false);
      }
      setUserAnswer('');
    } else if (userAnswer.toLowerCase() === 'idk') {
      setIdk(true);
      setUserAnswer(terms[term]); // displays the answer
    }
  };

  // user clicks 'idk give answer' button:
  const giveAnswer = () => {
    setIdk(true);
    setUserAnswer(terms[term]);
  };

  // 'return home' button
  const goHome = () => setHome(true);

  return (
    <div id="termContent">
      <h2>Terms Completed: {termsCompleted}</h2>
      <p className="definition">{term}</p>
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
