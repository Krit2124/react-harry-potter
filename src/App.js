import './App.css';
import CardList from './components/cardList/cardList';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
      </div>

      <hr/>

      <CardList />
    </div>
  );
}

export default App;
