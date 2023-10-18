

function Favorito(props){
    return (
        <div>
            <div className="alert favtitle alert-info p-0" role="alert">
                <img height="100px" src={props.value.Poster} alt="Poster" />
                <small>{props.value.Name}</small>
            </div>
        </div>
    )
}

export default Favorito;