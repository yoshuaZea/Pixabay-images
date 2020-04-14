import React from 'react'

const Imagen = ({datos}) => {

    const { largeImageURL, likes, previewURL,  tags, views } = datos

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img 
                    className="card-img-top"
                    src={previewURL} 
                    alt={tags}
                />

                <div className="card-body">
                    <p className="card-text m-0">{likes} Me gusta</p>
                    <p className="card-text m-0">{views} Vistas</p>
                </div>
                <div className="card-footer">
                    <a 
                        className="btn btn-primary btn-block"
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >Ver imagen</a>
                </div>
            </div>
        </div>
     );
}
 
export default Imagen;