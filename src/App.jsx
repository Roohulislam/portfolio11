import './App.css';
import Navbar from './components/Navbar';
import { allroutes } from './components/Routes/allroutes';  // Assuming this is where your route definitions are
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>  {/* Wrap Routes inside the Router */}
    <Navbar/>
      <Routes>
        {allroutes.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
