import React, { useState } from 'react'

// Componentes
import Error from './Error'

const Formulario = ({setBusqueda}) => {

    const [termino, setTermino] = useState('')
    const [error, setError] = useState(false)

    // Enviar formulario
    const buscarImagenes = e => {
        e.preventDefault()

        // Validar
        if(termino.trim() === ''){
            setError(true)
            return
        }

        // Eliminar error
        setError(false)

        // eviar el término de búsqueda
        setBusqueda(termino)
    }

    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-center mb-5">Pixabay - Buscador de imágenes</h4>
                </div>
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="¿Qué imagen quieres buscar?"
                        onChange={ e => setTermino(e.target.value) }
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-secondary btn-block"
                        value="Buscar"
                    />
                </div>
            </div>

            {
                error ? <Error mensaje="Debes ingresar algún nombre para buscar imágenes" /> : null
            }

        </form>
    );
}
 
export default Formulario;