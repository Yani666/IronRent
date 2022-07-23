import React, {useState} from 'react'


//Formulario controlado

//1 definir el form
//2 definir los inputs cons sus types
//3 controlar los inputs usando usestate
 // --> se convierten en inputs controlados lo cual nos va a dar una advertencia en la consola
 //4 a los inputs definir una funcion onchange la cual va a ctualizar el estado usestate de cada input 
 //el paso 4 es importante para poder escribir ybque se refleje en el input
 //5 la etiqueta form tiene un evento especial llamado onSubmit el cual se va a disparar cuando demos click al boton
//6 onSubmit lo vamos a vincular con una funcion
//7 Enviar los datos al backend/servidor usando el metodo post y la info va a ir en el body
const Form = () => {
     const [title, setTitle] = useState("")
     const [image, setImage] = useState("")
     const [price, setPrice] = useState(0)

   //PASO4 me va ayudar actualizar el useState
   // vamos a recibir el evento el cual es una reprentacion de los que sucedde en el input
   //usaremos siempre e.target.value para acceder al contenido del input
     const actualizarTitle = (e) => {
         console.log("Actualiza el title", e.target.value)
         setTitle(e.target.value)
    }

    const actualizarImage = (e) => {
        console.log("Actualiza la imagen", e.target.value)
        setImage(e.target.value)
    }

    const actualizarPrice = (e) => {
        console.log("Actualiza el precio", e.target.value)
        setPrice(e.target.value)
    }
  //funcion para escuchar el onSubmit la cual va a recibir el evento del envio y vamos a prevenir el conportamiento por defecto o evitar que se recargue con e.preventDefault()
    const enviarDatos = (e) => {
        e.preventDefault();
        const datosAEnviar = {
            title: title,
            img: image,
            pricePerDay: price
        }
        console.log('enviar los siguientes datos:', datosAEnviar);
       //para conectar back y front
        fetch('https://ironbnb-m3.herokuapp.com/apartments', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "post", 
            body: JSON.stringify(datosAEnviar)
        })
           .then((respuesta) => respuesta.json())
           .then((datos) => console.log(datos))
           .catch(console.log)
    }

  return (
     <div>
        <br/>
        <br/>
        <form onSubmit={enviarDatos}>
        <input 
        placeholder='Title' 
        type="text" 
        value={title} 
        onChange={actualizarTitle}
        />
        <input 
        placeholder='Image' 
        type="text"
        value={image} 
        onChange={actualizarImage}
        />
        <input 
        placeholder='Price' 
        type="number"
        value={price} 
        onChange={actualizarPrice}
        min="0"
        />
        <button>Registrar propiedad</button>
        </form>
    </div>
  )
}

export default Form