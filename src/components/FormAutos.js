import './styles.css'
import { useState } from 'react';

function CreateAutos(props) {

    const [Name, setName] = useState("");
    const [Year, setYear] = useState("");
    const [Origin, setOrigin] = useState("");
    const [Description, setDescription] = useState("");
    const [Poster, setPoster] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.fnNewAuto({
            'Name': Name,
            'Year': Year,
            'Origin': Origin,
            'Description': Description,
            'Poster': Poster
        });

        setName("");
        setOrigin("");
        setDescription("");
        setPoster("");
        setYear("");
    }


    return (

        <div className='Container frmaut'>
            <p>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Añadir un auto
                </button>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card-body navstile border border-2 rounded-3 shadow p-3">
                    <div class="row">
                        <div class="col">
                            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                                <div class="form-group">
                                    <label class="control-label">Nombre:</label>
                                    <input type="text" class="form-control" required
                                        value={Name}
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Año:</label>
                                    <input type="text" class="form-control" required
                                        value={Year}
                                        onChange={(e) => setYear(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Pais de Orige:</label>
                                    <input type="text" class="form-control" required
                                        value={Origin}
                                        onChange={(e) => setOrigin(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Descripción:</label>
                                    <input type="text" class="form-control" required
                                        value={Description}
                                        onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Imagen:</label>
                                    <input type="text" class="form-control" required
                                        value={Poster}
                                        onChange={(e) => setPoster(e.target.value)} />
                                </div><br />
                                <div className="form-group">
                                    <input type="submit" className='btn btn-primary' value={"Guardar"} />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateAutos;