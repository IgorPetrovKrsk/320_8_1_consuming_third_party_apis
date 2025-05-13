import { useState,useEffect } from 'react';
import { getStarship } from './services/sw-api.mjs'
import './starship.css'

export default function Starship({ starship }) {
    const [starshipData, setStarshipData] = useState(null);
    useEffect(() => {
        async function fetchStarship(id) {
            const starshipDetails = await getStarship(id);
            console.log(starshipDetails.result.properties);
            
            setStarshipData(starshipDetails.result.properties);
        }
        fetchStarship(starship.uid);

        return () => { }; //not cleaning up
    }, [])

    return (
        <>
            <div id='starshipDiv'>
                <h1>{starship.name}</h1>                
                {starshipData == null ? <h3>Loading...</h3> :
                    <ul>
                        <li>Crew: {starshipData.crew}</li>
                        <li>Starship class: {starshipData.starship_class}</li>
                        <li>Manufacturer: {starshipData.manufacturer}</li>
                        <li>Hyperdrive Rating: {starshipData.hyperdrive_rating}</li>
                    </ul>}
            </div>
        </>
    )
}