import React from "react";
import { Link } from "react-router-dom";
import './App.css';
function Nav()
{
    return(
        <div className="abc">
        <div className="navv">
            <Link className="xyz" to="/" style={{marginLeft:"1500px"}}>Home</Link>
            <Link className="xyz" to="/signin" style={{marginRight:"-10px"}}>SignIn</Link>
            <Link className="xyz" to="/SignUp"style={{marginRight:"-27px"}}>SignUp</Link>
           
            <Link className="xyz" to="/products">Products</Link>
        </div>
     </div>
    )
}
export default Nav;