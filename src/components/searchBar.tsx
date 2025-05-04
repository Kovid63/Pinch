import { useState } from "react";

function SearchBar(){

    const [search_text,setSearch_text] = useState("");

    // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    //     setSearch_text(e.target.value);
    // }

    return(
        <>
            <input 
            type="text" 
            name="searchBar" 
            id="searchBar" 
            value={search_text}
            onChange={e=>setSearch_text(e.target.value)}
            placeholder="Type to search..."
            />
            <button type="submit"></button>
            <p>{search_text}</p>
        </>
    )
}

export default SearchBar;