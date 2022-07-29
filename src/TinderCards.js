import React, { useState, useEffect } from "react";
import database from "./firebase";
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect (() => {
        const unsubscribe = database
            .collection('people')
            .onSnapshot((snapshot) => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );
        return () => {
            unsubscribe();
        };
    }, []);

    return (
            <div className="tinderCards_cardContainer">
                {people.map(person => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                        <div 
                            style = {{ backgroundImage: `url(${person.url})`}} 
                            className="card">
                            <h3>{person.name}</h3>
                            <LocationOnIcon className="location_icon" fontsize="small" />
                            <h4>{person.location}</h4>
                        </div>
                    </TinderCard>
                ))}
            </div>
    )
};

export default TinderCards;

//<ImageBackground
        //style={{width:100%, height:280}}
        //source={{uri:"image_url"}}

        //<LinearGradient
            //color={["#00000000", "#000000"]}
            //style={{height : "100%, width: "100%}}

            //</LinearGradient>
        //</ImageBackground>