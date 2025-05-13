import axios from "axios";

export async function getAllStarships(currentPage) {
    let result = await axios.get('https://www.swapi.tech/api/starships/',
        {
            params: {
                page: currentPage,
                limit: 10
            }
        }
    );
    return result.data;
}
export async function getStarship(id) {
    let result = await axios.get(`https://www.swapi.tech/api/starships/${id}`);
    return result.data;
}