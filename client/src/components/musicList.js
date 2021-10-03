import React from 'react';
import Swal from '../../node_modules/sweetalert2/dist/sweetalert2'

const Musica = ({song,setSong,music, setListUpdated}) =>{
    //Delete
    const handleDelete = id =>{
         //Eliminación de datos
         const requestInit = {
            method: 'DELETE'
          
        }
        fetch('http://localhost:9000/api/' +id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Datos eliminados correctamente',
            showConfirmButton: false,
            timer: 1500
          })
    }

    let{DSC_NOMBRE, DSC_ARTISTA, FEC_LANZAMIENTO} = song
    //Update
    const handleUpdate = id =>{
        //Validación de los datos
        if(DSC_NOMBRE === '' || DSC_ARTISTA === '' || FEC_LANZAMIENTO === ''){
            alert('Todos los campos son obligatorios')
            return 
        }
        //Actualización de datos
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(song)
          
        }
        fetch('http://localhost:9000/api/' +id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //Reiniciando state de la canción
        setSong({
            DSC_NOMBRE: '',
            DSC_ARTISTA: '',
            FEC_LANZAMIENTO: '2021-08-14'
        })

        setListUpdated(true)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Datos actualizados correctamente',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return (
        <div className="tabla table-responsive">
                    <table className="table table-primary table-striped table-hover table-sm ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre de la canci&oacute;n</th>
                                <th scope="col">Artista</th>
                                <th scope="col">A&ntilde;o de lanzamiento</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {music.map(music => (
                                  <tr className="table-active" key={music.IDE_CANCION}>
                                    <th scope="row">{music.IDE_CANCION}</th>
                                    <td>{music.DSC_NOMBRE}</td>
                                    <td>{music.DSC_ARTISTA}</td>
                                    <td>{music.FEC_LANZAMIENTO}</td>
                                    <td>
                                        <div className="mb-3">
                                            <button onClick={() => handleUpdate(music.IDE_CANCION)} className="btn btn-warning"> <i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        </div>
                                        <div className="mb-3">
                                            <button onClick={() => handleDelete(music.IDE_CANCION)} className="btn btn-danger"> <i className="fa fa-trash" aria-hidden="true"></i></button>
                                        </div>
                                    </td>
                                  </tr> 
                            ))}
                        </tbody>
                    </table>
        </div>
    );
}

export default Musica;