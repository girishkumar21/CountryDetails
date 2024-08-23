import { useContext, useState } from "react";
import CountriesList from "./CountriesList";
import Dropdown from "./Dropdown";
import Header from "./Header";
import Search from "./Search";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeProvider";

const Home = () => {
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [data] = useContext(ThemeContext);
  
    return (
        <>
            <main className={data?'dark':''}>
            <div className="search-filter-container">
                <Search setQuery={setQuery}/>
                <Dropdown setFilter={setFilter}/>
            </div>
            <CountriesList query={query.toLowerCase()} filter={filter.toLowerCase()}/>
            </main>
            
        </>
    )
  
}

export default Home
