import axios from "axios";

 const api_searchBar = axios.create(
    {baseURL:import.meta.env.VITE_TMDB_BASE_URL}
);

export default api_searchBar;