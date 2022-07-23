import { useState, useEffect } from 'react';
import './App.css';
import { Button, Spinner, Image, Skeleton, Input } from '@chakra-ui/react'
import Card from './components/Card';
import Navbar from './components/NavBar';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import ListaCasas from "./components/ListaCasas";
import Detalle from './components/Detalle';
import Form from './components/Form'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [show,setShow] = useState(true)
  const [data,setData] = useState([])
  const [dataCp, setDataCp] = useState ([])
  const [search, setSearch] = useState("")
  

  //useEffect conectar una API   
  useEffect(() => {
    console.log("soy useEffect")
    fetch("https://ironbnb-m3.herokuapp.com/apartments")
    .then(datos => {
      datos.json().then((casas) => {
        console.log("datos de las casas",casas)
        setData(casas)
        setDataCp(casas)//es una copia de seguridad 
        setShow(false)
      })   
    })
    .catch(console.log)
 },[])                                                                
  


  const toggleShow = () => {
     console.log("toggle activado");
     //para mostrar el spiner cuando se de click al boton
     setShow(!show)
  }

  //funcion para controlar lo que sucede con el input
  const actualizarInput = (e) => {
    //console.log("Actualizando:...", e.target.value)
    setSearch(e.target.value)
  }

  //useEffect esta al pediente del update del state del input
  //este useEffect nos permite filtrar :D
  useEffect(() => {
    console.log("SE ESTA ACTUALIZANDO")
    const dataFilrada = dataCp.filter((casa) => {
      return casa.title.toLowerCase().includes(search.toLowerCase())
    })
    setData(dataFilrada)
  },[search])

  return (
    <Router>
      <Navbar/>
        <Input placeholder="Buscar propiedad..." value={search} onChange={actualizarInput}/> {/* con el value hacemos este componente controlado, desactivamos la busqueda y con el onchange permitimos hacer cambios en la busqueda que sean controlados por react*/}
      <Routes>
        <Route path ="/signin" element={<SignIn/>}/>
        <Route path ="/signup" element={<SignUp/>}/>
        <Route path = "/casas/:id" element={<Detalle/>}/> {/*esta ruta nos envia el id de un departamento en especifico*/}
        <Route path = "/" element={<ListaCasas data={data}/>}/>
        <Route path = "/formulario-registro" element={<Form/>}/>
      </Routes>
      
      
       {/* {
         show === false ? (
          <Image src={url} alt="img"/>
         ) : (
           <Skeleton height="40px" />
         )} */}
      </Router>
  );
}

export default App;
