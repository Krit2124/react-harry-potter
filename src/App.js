import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/cardList/cardList';
import Header from './components/header/header';

import axios from 'axios';

function App() {
  const [schools, setSchools] = useState([])
  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState(cards)

  useEffect(()=>{
    axios.get("http://localhost:3001/schools").then((data)=>{
      setSchools(data.data)
    })

    axios.get("http://localhost:3001/heroes").then((data)=>{
      setCards(data.data)
      setFilteredCards(data.data)
    })
  }, [])

  return (
    <div className="App">
      <div className='container'>
        <Header 
          schools={schools}
          setCards={setCards}
          cards={cards}
          filteredCards={filteredCards}
          setFilteredCards={setFilteredCards}
        />
      </div>

      <hr/>

      <CardList cards={filteredCards}/>
    </div>
  );
}

export default App;
