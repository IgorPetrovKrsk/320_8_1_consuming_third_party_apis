import { useState, useEffect } from 'react'
import './App.css'
import { getAllStarships } from './services/sw-api.mjs'
import Starship from './starship';



function App() {

  const [starships, setStarships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStarships() {
      const starshipsArray = await getAllStarships(currentPage);
      setStarships(starshipsArray.results);
      setLoading(false);
    }    
    setTimeout(() => {  
      fetchStarships();
    }, 2000);
    return () => { }; //not cleaning up
  }, [currentPage])

  function nextPage() {
    setLoading(true);
    if (currentPage == 4) {
      setCurrentPage(1);
    } else {
      setCurrentPage(c => c + 1);
    }

  }

  const starshipsArray = starships.map(it => {
    return <Starship starship={it} key={it.name} />
  })

  return (
    <>
      <h1>STAR WARS STARSHIPS</h1>
      {loading ? <h1>Loading...</h1> : starshipsArray}
      <br />
      <button onClick={nextPage} disabled={loading}>Next Page</button>
    </>
  )
}

export default App
