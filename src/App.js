
import './App.css';
import Navbar from './components/navbar';
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import List from './components/list';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <div style={{
            backgroundColor: "#F0F8F5",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}>
      <Navbar />
      <div className="row bg-light">
            <div
              className="col"
              style={{
                width: "100%",
                height: "4px",
              }}
            ></div>
          </div>
      <div className="container-fluid" style={{ padding: "0px", flex: 1 }}>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/list" element={<List/>}/>
      </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
