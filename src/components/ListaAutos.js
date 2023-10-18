import dataAutos from "../data/autos";
import Autos_card from "./Autos";

function ListaAutos(props) {

    let lstAutos = props.Elementos.map(
        Element => {
            return <Autos_card 
                key = {Element.Id}
                value = {Element}
                cartofav = {props.cartofav}
            />
        }
    );

    return (
        <div className="container">
            <div className="row">
                {lstAutos}
            </div>
        </div>

    );
}

export default ListaAutos;