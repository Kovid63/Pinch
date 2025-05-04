import { useEffect, useState } from "react";
import api_searchBar from "../api/get_searchBar";

function SearchBar(){

    const [search_text,setSearch_text] = useState("");

    // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    //     setSearch_text(e.target.value);
    // }

    useEffect(()=>{
        if (!search_text) return;
        const fetch_data = async ()=>{
            try{
                const response = await api_searchBar.get(`search/movie`,{
                    params:{
                        api_key:import.meta.env.VITE_TMDB_API_KEY,
                        query:search_text,
                        page:1
                    }
                });
               
                console.log(response.data.results.map( (movie:any)=>{
                    const arr = {title:movie.title, release_year:movie.release_date.split('-')[0], poster_path:movie.poster_path};
                    return arr;
                }
                ));

            }catch(err){
                console.log(err);
            }
        }
        fetch_data();
    }
        ,[search_text]);

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
            <button></button>
            <p>{search_text}</p>
        </>
    )
}

export default SearchBar;