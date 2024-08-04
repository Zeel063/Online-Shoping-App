import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx';  
import ProductsPage from "./pages/ProductsPage";
import Tail from './pages/tail.jsx';
import Nav from './Nav.jsx';

function App() {
  return (
    <>
      <div>
      <Router>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/tail" element={<Tail/>}/>
            <Route path="*" element={<h1> PAGE NOT FOUND </h1>}/>
          </Routes>
      </Router>
     
      </div>
      
    </>
  )
}

export default App;
