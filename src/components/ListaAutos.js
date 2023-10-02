import dataAutos from "../data/autos";
import Autos_card from "./Autos";

function ListaAutos() {

    let lstAutos = dataAutos.map(
        Element => {
            return <Autos_card 
                Name={Element.Name}
                Description={Element.Description}
                Year={Element.Year}
                Origin={Element.Origin}
                Poster={Element.Poster}
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