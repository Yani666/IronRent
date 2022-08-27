import { useState, useEffect } from "react";
import axios from "axios";
import {useParams, Link, useNavigate} from "react-router-dom"
 
 
function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null);
  const {projectsId} = useParams()  
  const navigate = useNavigate()


  useEffect(() => {
    axios.get(`http://localhost:5005/api/projects/${projectsId}`)
    .then((resultado) => {
        setProject(resultado.data)
    })
    .catch(console.log)
  }, [])

  const handleDelete = () => {
    axios.delete(`http://localhost:5005/api/projects/${projectsId}`)
    .then(() => {
      navigate('/projects')
    })
  }
 
  
  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}
 
      {project &&
        project.tasks.map((task) => (
          <li className="TaskCard card" key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
      ))}

      {
          project && project.tasks.length === 0 && <p>Sin tareas</p>
      }
 
      <Link to="/projects">
        <button>Back to projects {projectsId}</button>
      </Link>
      {
        project && <Link to={`/projects/edit/${project._id}`}>
          <button>Edit</button>
      </Link>
      }
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
 
export default ProjectDetailsPage;









