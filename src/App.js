import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/cardList/cardList';
import Header from './components/header/header';

import axios from 'axios';

function App() {
  const [schools, setSchools] = useState([])

  const [cards, setCards] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/schools").then((data)=>{
      setSchools(data.data)
    })

    axios.get("http://localhost:3001/heroes").then((data)=>{
      setCards(data.data)
    })
  }, [])

  return (
    <div className="App">
      <div className='container'>
        <Header schools={schools}/>
      </div>

      <hr/>

      <CardList cards={cards}/>
    </div>
  );
}

export default App;
