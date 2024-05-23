import ViewTerm from './ViewTerm.jsx';

import jsIcon from './assets/js.svg';
import pyIcon from './assets/py2.svg';
import dsaIcon from './assets/dsa.svg';
import javaIcon from './assets/java.svg';
import cybersecIcon from './assets/cybersec.svg';
import pmIcon from './assets/pm.svg';
import awsIcon from './assets/aws.svg';

import { useState } from 'react';

function App() {
  const [home, setHome] = useState(true);
  const [termSet, setTermSet] = useState('');

  const selectTermSet = (set) => {
    setTermSet(set);
    setHome(false);
  };

  if (home) {
    return (
      <div id="home">
        <h1>
          Welcome to <span>Term Learn</span>
        </h1>
        <h2>Select your term set:</h2>
        <ul className="btnBundle">
          <li>
            <button onClick={() => selectTermSet('js')}>
              <img src={jsIcon} height={'60'} />
              JavaScript
            </button>
          </li>
          <li>
            <button onClick={() => selectTermSet('python')}>
              <img src={pyIcon} height={'60'} />
              Python
            </button>
          </li>
          <li>
            <button onClick={() => selectTermSet('dsa')}>
              <img src={dsaIcon} height={'60'} />
              DSA
            </button>
          </li>
          <li>
            <button onClick={() => selectTermSet('java')}>
              <img src={javaIcon} height={'60'} />
              Java
            </button>
          </li>
          <li>
            <button onClick={() => selectTermSet('cyber')}>
              <img src={cybersecIcon} height={'60'} />
              Cybersecurity
            </button>
          </li>
          <li>
            <button onClick={() => selectTermSet('pm')}>
              <img src={pmIcon} height={'60'} />
              Project+
            </button>
          </li>
          <li>
            <button onClick={() => selectTermSet('aws')}>
              <img src={awsIcon} height={'60'} />
              AWS Cloud
            </button>
          </li>
        </ul>
      </div>
    );
  }

  return <ViewTerm termSet={termSet} setHome={setHome} />;
}

export default App;
