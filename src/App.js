import React, { useState, useEffect } from 'react'

// Components
import Formulario from './components/Formulario'
import ListadoImagenes from './components/ListadoImagenes'

function App() {

  // Main Sate
  const [busqueda, setBusqueda] = useState('')
  const [imagenes, setImagenes] = useState([])

  // Paginación - 1
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  
  useEffect(() => {

    const consultarAPI = async () => {
      // Si está vacío
      if(busqueda === '') return
  
      const imagesByPage = 30
      const key = '16043263-1e9b342f478dbdef76ffd9588'
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&page=${currentPage}&per_page=${imagesByPage}`
  
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
  
      setImagenes(resultado.hits)

      // Calcular el total de páginas - Paginación - 2
      const calcularTotal = Math.ceil(resultado.totalHits / imagesByPage)
      setTotalPages(calcularTotal)

      // Animación mover pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron')
      jumbotron.scrollIntoView({
        behavior: 'smooth'
      })
    }

    consultarAPI()

  }, [busqueda, currentPage])

  // Métodos - Paginación - 3
  const beforePage = () => {
    const newCurrentPage = currentPage - 1
    
    if(newCurrentPage === 0) return

    setCurrentPage(newCurrentPage)
  }

  const nextPage = () => {
    const newCurrentPage = currentPage + 1

    if(newCurrentPage > totalPages) return

    setCurrentPage(newCurrentPage)
  }


  return (
    <div className="container">
      <div className="jumbotron py-4">
        <div className="lead text-center">
          <Formulario 
            setBusqueda={setBusqueda}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes 
          imagenes={imagenes}
        />

        {
          (currentPage === 1) 
          ? null
          : (<button
              type="button"
              className="btn btn-info mr-1"
              onClick={beforePage}
            >&laquo; Anterior</button>)
        }

        {
          (currentPage >= totalPages)
          ? null
          : (<button
              type="button"
              className="btn btn-info"
              onClick={nextPage}
            >Siguiente &raquo;</button>)
        }

      </div>
    </div>
  )
}

export default App
