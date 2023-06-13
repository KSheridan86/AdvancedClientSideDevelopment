import { useState } from "react";
import axios from "axios";
import Uni from "./Uni";

function Unis() {
    const [unis, setUnis] = useState([]);
    const [query, setQuery] = useState("");

    function handleSearchQuery(event) {
        event.preventDefault();
        setQuery(event.target.value);
    }

    async function searchUnis(event) {
        event.preventDefault();
        let response = await axios.get("http://universities.hipolabs.com/search", {params: {country: query}});
        setUnis(response.data);
    }

    return (
        <div>
            <input value={query} type="text" onChange={handleSearchQuery} placeholder="Enter a country name..." />
            <button onClick={searchUnis}>Search</button>
            <ul>
            {
                unis.map((uni, index) => {
                    return (
                        <li key={index}>
                            <Uni key={index} 
                                name={uni.name} 
                                country={uni.country} 
                                webPage={uni.web_pages[0]} 
                            />
                        </li>
                    )
                })
            }
            </ul>
            
        </div>
    )
}

export default Unis;