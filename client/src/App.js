import React, {Fragment , useState, useEffect, useLayoutEffect} from 'react';
import Navbar from './components/navbar';
import Musica from './components/musicList';
import Form from './components/form';

function App() {
  //Estado para limpiar los valores de las canciones
  const [song,setSong] = useState({
      DSC_NOMBRE: '',
      DSC_ARTISTA: '',
      FEC_LANZAMIENTO: '2021-08-14'
  })
  
  //Estado para que se refresque a la hora de eliminar un dato de la tabla
  const [listUpdated,setListUpdated] = useState(false)
  
  //Estado para traer las canciones
  const [music,setMusic] = useState([])
  //Efecto para traer las canciones
  useEffect(() => {
    //Select
    const getMusic = () =>{
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setMusic(res))
    }
    getMusic()
    setListUpdated(false)
  }, [listUpdated])

  return (
      <Fragment>
          <Navbar brand='Mi playlist'/>
          <div className="container">
              <div className="row">
                  <div className="col-7">
                      <h2 style={{textAlign:'center'}}>Lista de reproducci&oacute;n</h2>
                      <Musica song={song} setSong={setSong} music={music} setListUpdated={setListUpdated}/>
                  </div>
                  <div className="col-5">
                      <h2 style={{textAlign:'center'}}>Agregar a la cola</h2>
                      <Form song={song} setSong={setSong}/>
                  </div>
              </div>
          </div>
      </Fragment>
  );
}

export default App;
