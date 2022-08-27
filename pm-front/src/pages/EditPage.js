 
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
 
const API_URL = "http://localhost:5005";
 
function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {projectId} = useParams()
  //este hoock es para redireccionar 
  const navigate = useNavigate()

  useEffect(() => {
      axios.get(`${API_URL}/api/projects/${projectId}`)
      .then((resultado) => {
          console.log(resultado.data)
          const {title,description} = resultado.data
          setTitle(title)
          setDescription(description)
      })
      .catch(console.log)
  },[])
  
  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(title, description)
      //con put vamos actualizar los proyectos
      axios.put(`${API_URL}/api/projects/${projectId}`,{title, description})
      .then(resultado => {
         console.log(resultado)
         navigate('/projects')
      })
      .catch(console.log)
  }
  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>
 
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
 
export default EditProjectPage;







