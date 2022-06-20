import React, {useState} from 'react';
import TinderCard from 'react-tinder-card'
import'./TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url:'https://ichef.bbci.co.uk/news/976/cpsprodpb/FE31/production/_124937056_gettyimages-1240408699.jpg'
        },
        {
            name: 'Jeff Bezos',
            url:'https://imageio.forbes.com/specials-images/imageserve/5f469ea85cc82fc8d6083f05/Amazon-Founder-and-CEO-Jeff-Bezos/960x0.jpg?format=jpg&width=960'
        }
    ])

    const swiped = (direction, nameToDelete) =>{
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen!")
    }

  return (
    <div className='tindercards'>
        <div className='tinderCards__cardContainer'>
        {people.map((person) => (
            <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
            >
                <div
                    style={{ backgroundImage: `url(" ${person.url} ")`}}
                    className="card"
                >
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        </div>
        
    </div>
  )
}

export default TinderCards