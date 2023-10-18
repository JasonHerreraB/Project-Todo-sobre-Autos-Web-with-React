

function Favorito(props) {
    return (
        <div>
            <div className="alert favtitle alert-info p-0" role="alert">
                <div className="row align-items-center">
                    <div className="col">
                        <img height="100px" src={props.value.Poster} alt="Poster" />
                    </div>
                    <div className="col">
                        <small>{props.value.Name}</small>
                    </div>
                    <div className="col">
                        <button onClick={() => props.deltofav(props.value)} className="btn btn-danger">Borrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorito;