 import {Link} from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar" style={{
            display: "flex",
            position:"fixed",
            alignItems: "center",
            justifyContent: "space-around",
            width: "80%",
            margin: "auto",
            textDecoration: "none"
        }} >

            <Link to="/" >Home</Link>
            <Link to="/men" >Men</Link>
            <Link to="/women" >Women</Link>
            <Link to="/jeans" >Jeans</Link>
            <Link to="/winter" >Winter</Link>
            <Link to="/sale" >sale</Link>

           

            <Link to="/login">Login</Link>


        </div>
    )
}

export default Navbar 