import Favorito from "./Favoritos";

function ListFavoritos(props) {

    let listaFavoritosRendered = props.Elementos.map(Elements => {
        return <Favorito value={Elements} />
    })

    return (
        <div>
            <div class="alert favtitle alert-warning" role="alert">
                <h2>Favoritos!</h2>
            </div>
            {listaFavoritosRendered}
        </div>
    )
}

export default ListFavoritos;