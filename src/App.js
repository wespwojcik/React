import './App.css';
import DataFetch from './components/DataFetch';
import Container from 'react-bootstrap/Container';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <Container className="Container">
        <Intro />
        <DataFetch />
      </Container>
    </div>
  );
}

export default App