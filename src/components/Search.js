import "../styles/components/Search.scss";
import { searchPlaces } from "../api";
import WeatherContext from "../context/weather.context";
import { useContext, useState } from "react";

function Search() {
  const { setPlace } = useContext(WeatherContext)
  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState([])
  const [openSearchResults, setOpenSearchResults] = useState(false)

  async function onSearch(e) {
    setText(e.target.value);

    try {
        const data = await searchPlaces(e.target.value);

        // Ensure `data` is defined and an array before accessing `.length`
        if (data && Array.isArray(data)) {
            setSearchResults(data);
            setOpenSearchResults(data.length > 0);
        } else {
            console.error("Invalid data returned from searchPlaces:", data);
            setSearchResults([]);
            setOpenSearchResults(false);
        }
    } catch (error) {
        console.error("Error fetching search places:", error);
        setSearchResults([]);
        setOpenSearchResults(false);
    }
}


  const changePlace = (place) => {
    setPlace(place);
    setText("");
    setOpenSearchResults(false);
  }

  return <>
    <div className="search-container">
        <div className="search-icon">
            <i className="bi bi-search"></i>
        </div>
        <div className="search-input">
            <input 
            type = "text"
            name = "search-city"
            placeholder="Search city ..."
            value = {text}
            onChange={onSearch}
            />
        </div>
        {
        openSearchResults && (
            <div className="search-results">
                <div className="results-container">
                    {searchResults.map((place) =>
                        <div className="result" 
                            key={place.place_id} 
                            onClick={() => changePlace(place)}
                            >
                            {place.name}, {place.adm_area1}, {place.country}
                </div>
            )
            }
            </div>
        </div>
        )
        }
        
    </div>
    </>;
}

export default Search