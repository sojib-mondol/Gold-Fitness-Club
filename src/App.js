import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MainContainer from './components/Main-Container/MainContainer';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <MainContainer></MainContainer>
      </div>
    </div>
  );
}

export default App;
