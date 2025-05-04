import { useEffect, useState } from "react";
import api_searchBar from "../api/get_searchBar";

function SearchBar() {
  const [search_text, setSearch_text] = useState("");

  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
  //     setSearch_text(e.target.value);
  // }

  useEffect(() => {
    if (!search_text) return;
    const fetch_data = async () => {
      try {
        const response = await api_searchBar.get(`search/multi`, {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            query: search_text,
            page: 1,
          },
        });

        const filtered = response.data.results.filter(
          (item: any) => item.media_type === "movie" || item.media_type === "tv"
        );
        console.log(
          filtered.map((item: any) => {
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
          })
        );

      } catch (err) {
        console.log(err);
      }
    };
    fetch_data();
  }, [search_text]);

  return (
    <>
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        value={search_text}
        onChange={(e) => setSearch_text(e.target.value)}
        placeholder="Type to search..."
      />
      <button></button>
      <p>{search_text}</p>
    </>
  );
}

export default SearchBar;
