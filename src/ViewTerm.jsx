import { loadTerm } from './loadTerm';

import { useState } from 'react';

export default function ViewTerm({ termSet }) {
    const [term, setTerm] = useState(loadTerm(termSet));
    const [userAnswer, setUserAnswer] = useState('');

    // let result = loadTerm(termSet)

    // console.log(result);

    const handleInput = (event) => {
        setUserAnswer(event.target.value);
    }

    const checkAnswer = () => {
        if (term.answer.toLowerCase() === userAnswer.toLowerCase()) {
            setUserAnswer('');
            setTerm(loadTerm(termSet));
        }
    }

    const giveAnswer = () => setUserAnswer(term.answer);


    return (
        <div id="termContent">
            <p className="definition">{term.problem}</p>
            <input type="text" id="textBox" value={userAnswer} onChange={handleInput} onKeyDown={event => {if (event.key === 'Enter') {checkAnswer()}}} />
            <button id="giveAnswer" onClick={giveAnswer}>IDK give answer</button>
        </div>
    )
}