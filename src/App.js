//import logo from './logo.svg';
import './App.css';

function App() {
  const user = {
    name: 'Bruno',
    lastName: 'Jatobá',
    image: null,
  };

  function formatName(data) {
    return data.name + data.lastName;
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          formatName(user)
        }
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
