import './styles.css'
import { useState } from 'react';

function Autos_card(props) {

    const [VerMas, setVerMas] = useState(false);

    const cardStyle = {
        height: '95%',    // Establece una altura fija para las tarjetas
    };

    let sectvermore = <p class="card-text">{limitDescription(props.value.Description, 30)} <a onClick={() => setVerMas(true)} className='text-dark card-link' >ver mas..</a></p>;

    if (VerMas) {
        sectvermore = <p class="card-text">{props.value.Description} <a onClick={() => setVerMas(false)} className='text-dark card-link' >ver menos..</a></p>
            ;
    } else {
        sectvermore = <p class="card-text">{limitDescription(props.value.Description, 30)} <a onClick={() => setVerMas(true)} className='text-dark card-link' >ver mas..</a></p>;
    }

    return (
        <div className="col-md-4 cardst">
            <div className="card text-dark   navstile cardstyle" style={{ width: '18rem'}}>
                <img src={props.value.Poster} className="card-img-top" alt="..." />
                <div class="card-body " style={cardStyle}>
                    <h5 class="card-title">{props.value.Name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">De: {props.value.Origin}</h6>
                    {sectvermore}
                    <div class="card-footer">
                        {props.value.Year}
                    </div>
                    <button onClick={() => props.cartofav(props.value)} className='btn stlbtnfav btn-warning'>Favorito</button>
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