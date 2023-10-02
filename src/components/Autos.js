function Autos_card(props) {
    return (
        <div className="col-md-3">
            <div class="card text-dark" style={{ width: '18' + 'rem' }}>
                <img src={props.Poster} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.Name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">De: {props.Origin}</h6>
                    <p class="card-text">{props.Description}</p>
                    <div class="card-footer">
                        {props.Year}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Autos_card;