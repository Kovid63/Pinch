import { useEffect, useState } from "react";
import api_searchBar from "../api/get_searchBar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import useDebounce from "../customHooks/useDebounce";

function SearchBar() {
  const [search_text, setSearch_text] = useState("");
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const debouncedVal = useDebounce(search_text,200);

  useEffect(() => {
    if (!debouncedVal){
      setSearchResult([]);
      return;
    }

    const controller = new AbortController();

    const fetch_data = async () => {

      try {
        const response = await api_searchBar.get(`search/multi`, {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            query: debouncedVal,
            page: 1,
            signal:controller.signal
          },
        });

        const filtered = response.data.results.filter(  
          (item: any) => item.media_type === "movie" || item.media_type === "tv").map((item: any) => {
            const arr = {
              title: "",
              poster_path: item.poster_path,
              media_type: item.media_type,
              vote_average: item.vote_average,
              year: 0,
            };
            if (item.media_type == "tv") {
              arr["year"] = item.first_air_date.split("-")[0];
              arr["title"] = item.name;
            } else {
              arr["year"] = item.release_date.split("-")[0];
              arr["title"] = item.title;
            }
            return arr;
          });

        setSearchResult(filtered);
      } catch (err) {
        console.log(err);
      }

      return ()=> controller.abort();
    };
    fetch_data();
  }, [debouncedVal]);

  return (
    <div className="flex flex-col">

    <div className="flex gap-2.5">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        value={search_text}
        onChange={(e) => setSearch_text(e.target.value)}
        placeholder="Type to search..."
        className="min-w-xl p-3  bg-gray-900 rounded-md focus:outline-none "
      />
      <button className="bg-gray-800 rounded-md cursor-pointer  "><MagnifyingGlassIcon className="w-10 h-7" /></button>
       </div>

      <div className="flex flex-col max-w-xl max-h-60 bg-gray-900 overflow-y-auto">
        {searchResult.length > 0 && (
          searchResult.map((item)=>(

            <div className="flex p-1 cursor-pointer ">
              {item.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w45${item.poster_path}`} 
                alt={item.poster_path}
                className="w-10 h-13" 
                />
              )}
    
              <div className="px-5 mt-4">
              {item.title}

              {item.media_type.toUpperCase()} • {item.year}

              </div>
            </div>

          ))
        )}

      </div>

   
    </div>
  );
}

export default SearchBar;
