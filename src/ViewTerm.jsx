import { loadTerm } from './loadTerm';
import bolt from './assets/bolt.svg';

import { useState, useEffect } from 'react';

export default function ViewTerm({ termSet, setHome }) {
  const [term, setTerm] = useState(loadTerm(termSet));
  const [userAnswer, setUserAnswer] = useState('');

  const handleInput = (event) => {
    setUserAnswer(event.target.value);
  };

  // enter event on answer text box:
  const checkAnswer = () => {
    if (term.answer.toLowerCase() === userAnswer.toLowerCase()) {
      setUserAnswer('');
      setTerm(loadTerm(termSet));
    } else if (userAnswer.toLowerCase() === 'idk') {
      setUserAnswer(term.answer);
    }
  };

  // user clicks 'idk give answer' button:
  const giveAnswer = () => setUserAnswer(term.answer);

  // 'return home' button
  const goHome = () => setHome(true);

  // focus on answer box on load and input:
  useEffect(() => {
    document.getElementById('textBox').focus();
  }, [userAnswer]);

  return (
    <div id="termContent">
      <p className="definition">{term.problem}</p>
      <input
        type="text"
        id="textBox"
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
