import axios from 'axios';
import { useEffect, useState } from 'react';
import './header.scss';

function Header({schools, setCards, cards, filteredCards, setFilteredCards}) {
    const [choosedSchool, setChoosedSchool] = useState()
    const [name, setName] = useState("")

    const filterByName = () => {
        let newCards = []

        filteredCards.forEach((card) => {
            if(card.name.toLowerCase().includes(name.toLowerCase())) {
                newCards.push(card)
            }
        });
        setCards(newCards)
        setFilteredCards(newCards)
    }

    useEffect(() => {
        if (name.length > 1) {
            filterByName()
        } else {
            setFilteredCards(cards)
        }
    }, [name])

    const handleChoosedSchool = () => {
        axios.get("http://localhost:3001/heroesFilterBySchool/" + choosedSchool).then((data)=>{
            setCards(data.data)
            setFilteredCards(data.data)
        })
    }

    useEffect(() => {
        if (choosedSchool > 0) {
            handleChoosedSchool()
        } else if (name.length === 0) {
            axios.get("http://localhost:3001/heroes").then((data)=>{
                setCards(data.data)
                setFilteredCards(data.data)
            })
        }
    }, [choosedSchool])

    return (
        <header>
            <h1>Harry Potter</h1>
            <h2>View all characters from the Harry Potter universe</h2>

            <div className='inputs'>
                <form action="">
                    <div className='name'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' value={name} onChange={(element) => {setName(element.target.value)}}/>
                    </div>
                    
                    <div className='school'>
                        <label htmlFor="school">School</label>
                        <select name="" id="school" onChange={(element) => {setChoosedSchool(element.target.value)}}>
                            <option value="">Choose one</option>
                            {schools.map((school)=>{
                                return <option value={school.id}>{school.name}</option>
                            })}
                        </select>
                    </div>
                </form>
            </div>
        </header>
    );
}

export default Header;