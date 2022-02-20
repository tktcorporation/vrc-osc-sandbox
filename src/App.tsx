import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Bundle, Client } from 'node-osc';

function App() {
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(count + 1)
    // a bundle without an explicit time tag
    const bundle = new Bundle(['/input/MoveForward', 1], ['/input/MoveRight', 2], ['/input/Jump', 3]);

    // a bundle with a timetag of 10
    // bundle.append(new Bundle(10, ['/four', 4]));

    const client = new Client('127.0.0.1', 9000);
    client.send(bundle);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => countUp()}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App