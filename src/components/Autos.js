import './styles.css'
import { useState } from 'react';

function Autos_card(props) {

    const [VerMas, setVerMas] = useState(false);

    let sectvermore = <p class="card-text">{limitDescription(props.value.Description, 30)} <a onClick={() => setVerMas(true)} className='text-dark card-link' >ver mas..</a></p>;

    if (VerMas){
        sectvermore= <p class="card-text">{props.value.Description} <a onClick={() => setVerMas(false)} className='text-dark card-link' >ver menos..</a></p>
        ;
    }else{
        let sectvermore = <p class="card-text">{limitDescription(props.value.Description, 30)} <a onClick={() => setVerMas(true)} className='text-dark card-link' >ver mas..</a></p>;
    }

    return (
        <div className="col-md-4 cardst">
            <div class="card text-dark  navstile" style={{ width: '18rem'}}>
                <img src={props.value.Poster} class="card-img-top" alt="..." />
                <div class="card-body ">
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