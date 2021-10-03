import React from 'react';
import Swal from '../../node_modules/sweetalert2/dist/sweetalert2'


const Form = ({song, setSong}) => {

    const handleChange = e =>{
        setSong({
            ...song,
            [e.target.name]: e.target.value

        })
    }

    let{DSC_NOMBRE, DSC_ARTISTA, FEC_LANZAMIENTO} = song
    //Insert
    const handleSubmit = () =>{
        //Validación de los datos
        if(DSC_NOMBRE === '' || DSC_ARTISTA === '' || FEC_LANZAMIENTO === ''){
            Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'Debe rellenar los datos!',  
                footer: '<a href>Porqué tengo este error?</a>',
                timer: 3000
              });  
            return 
        }
        //Insercción de datos
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(song)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Datos insertados correctamente',
            showConfirmButton: false,
            timer: 1500
          })

        //Reiniciando state de la canción
        setSong({
            DSC_NOMBRE: '',
            DSC_ARTISTA: '',
            FEC_LANZAMIENTO: '2021-08-14'
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="txt_nombre" className="form-label">Nombre de la canci&oacute;n</label>
                <input value={DSC_NOMBRE}onChange={handleChange} type="text" className="form-control" id="txt_nombre" name="DSC_NOMBRE" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="txt_artista" className="form-label">Artista</label>
                <input  value={DSC_ARTISTA}onChange={handleChange} type="text" className="form-control" id="txt_artista" name="DSC_ARTISTA"/>
            </div>
            <div className="mb-3">
                <label htmlFor="txt_fecha" className="form-label" >Fecha de lanzamiento</label>
                <input value={FEC_LANZAMIENTO}onChange={handleChange} type="date" id="txt_fecha" name="FEC_LANZAMIENTO"value="2021-08-14"/>
            </div>
            <button type="submit" className="btn btn-primary">Procesar</button>
        </form>
    );
}

export default Form