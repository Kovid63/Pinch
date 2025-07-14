
 const MovieTile = (props:any)=>{

    // Object { title: "Marvel's Ultimate Spider-Man", poster_path: "/jK3pc8XOQT8UgdvSjMFk8xLQOxE.jpg", media_type: "tv", vote_average: 7.676, year: "2012" }
    return(
        <div className="relative bg-gray-800 w-45 h-55 rounded-xl ">
            
           <img src={`https://image.tmdb.org/t/p/w300/${props.poster_path}`}  alt="movie poster" 
             className="absolute w-44 h-54 mt-0.5 ml-0.5 rounded-xl " />
            <div className="absolute  w-44 h-54 bg-black/20 backdrop-saturate-125 backdrop-contrast-100 border-gray-300 shadow-lg rounded-xl "></div>
            <div className="absolute  w-44 bg-white/10 h-54 backdrop-saturate-125 backdrop-contrast-125 border-gray-100 shadow-lg rounded-xl"></div>
        <p>{props.title}</p>
        </div>
    )
} 

export default MovieTile;