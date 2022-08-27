
import { Link } from "react-router-dom";

// Link es la forma con la cual nosotros vamos a lograr hacer que 
// React se comporte como un SPA(Single Page Application)
// Es decir que no va a recargar toda la pagina y solo va a actualizar lo
// que sea necesario. Podriamos decir que Link es la etiqueta <a></a>
 
function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <button>Home</button>
      </Link>
 
      <Link to="/projects">
        <button>Projects</button>
      </Link>

      <Link to="/new">
        <button>New Project</button>
      </Link>
    </nav>
  );
}
 
export default Navbar;