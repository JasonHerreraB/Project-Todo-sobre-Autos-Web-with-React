import './styles.css'

function Autos_card(props) {
    return (
        <div className="col-md-3 cardst">
            <div class="card text-dark  navstile" style={{ width: '18rem'}}>
                <img src={props.Poster} class="card-img-top" alt="..." />
                <div class="card-body ">
                    <h5 class="card-title">{props.Name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">De: {props.Origin}</h6>
                    <p class="card-text">{limitDescription(props.Description, 100)}</p>
                    <div class="card-footer">
                        {props.Year}
                    </div>
                </div>
            </div>
        </div>

    );
}

function limitDescription(description, maxLength) {
    if (description.length > maxLength) {
        return description.slice(0, maxLength) + "...";
    }
    return description;
}

export default Autos_card;