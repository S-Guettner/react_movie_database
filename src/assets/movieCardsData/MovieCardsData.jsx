const MovieCardsData = (props) => {
    return ( 
        <div className="text-center bg-slate-500 text-white pt-4">
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.genre}</p>
            <p>{props.rate}</p>
        </div>

    
     );
}
 
export default MovieCardsData;