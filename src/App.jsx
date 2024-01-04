import ViewTerm from './ViewTerm.jsx';
import { useState } from 'react';

function App() {
  const [home, setHome] = useState(true);
  const [termSet, setTermSet] = useState('');

  const selectTermSet = (set) => {
    setTermSet(set);
    setHome(false);
  }

  if ( home ) {
    return (
      <div id="home">
        <h1>Welcome to Term Learn</h1>
        <h2>Select your term set:</h2>
        <ul className="btnBundle">
          <li><button onClick={() => selectTermSet('js')}>JavaScript</button></li>
          <li><button onClick={() => selectTermSet('dsa')}>DSA</button></li>
        </ul>
      </div>
    )
  }

  return (
    <ViewTerm termSet={termSet} />
  )
}

export default App
