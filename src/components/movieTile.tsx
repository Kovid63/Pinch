
 const MovieTile = ()=>{

    // Object { title: "Marvel's Ultimate Spider-Man", poster_path: "/jK3pc8XOQT8UgdvSjMFk8xLQOxE.jpg", media_type: "tv", vote_average: 7.676, year: "2012" }
    return(
        <div className="relative bg-gray-800 w-45 h-55 rounded-xl ">
            <img src={`https://image.tmdb.org/t/p/w300/jK3pc8XOQT8UgdvSjMFk8xLQOxE.jpg`}  alt="movie poster" 
             className="absolute w-45 h-55 rounded-xl " />
            {/* <h4>Movie name</h4> */}
            <div className="absolute w-45 h-55 bg-black/10 backdrop-saturate-125 backdrop-contrast-110 border-gray-300 shadow-lg rounded-xl "></div>
            <div className="absolute w-45 bg-white/20 h-55 backdrop-saturate-125 backdrop-contrast-125 border-gray-100 shadow-lg rounded-xl"></div>
        </div>
    )
} 

export default MovieTile;