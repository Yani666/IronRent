import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar"
import HomePage from './pages/HomePage';
import ProjectListPage from './pages/ProjectsListPage';
import './App.css';
import AddProject from './pages/AddProjectPage';
import ProjectDetailsPage from './pages/DetailPage';
import EditProjectPage from './pages/EditPage';

function App() {
  return (
    
      <Router>
        <Navbar/>
        <Routes>
           <Route path="/" element={<HomePage/>} />
           <Route path="/projects" element={<ProjectListPage/>} />
           <Route path="/new" element={<AddProject/>} />
           <Route path="/projects/:projectsId" element={<ProjectDetailsPage/>} />
           <Route path="/projects/edit/:projectsId" element={<EditProjectPage/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
