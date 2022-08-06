import { Component } from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";


class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            currText:"",
            items:[...products],
            total:0
        }
    }


 
    render() {
        return (
            <>
                <nav className=" navbar navbar-expand-lg bg-light top-ribbon " style={{position:"sticky",top:"0px",zIndex:"2"}}>
                    <div className=" container-fluid ">

                        <div className=" collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li><Link to="/"><img src="https://d35fo82fjcw0y8.cloudfront.net/2022/01/25060423/Blinkit_Logo%402x.png" className="logo"></img></Link></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Manage Orders
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/checkout" style={{textDecoration:"none"}}><a className="dropdown-item" href="#">Order History</a></Link></li>
                                        <li><a className="dropdown-item" href="https://github.com/saurabhkalia5/DaalChini/blob/main/README.md">Usage Methodologies</a></li>
                                    </ul>
                                </li>
                               
                                
                                <li className="cart-item">
                                <Link to="/cart" style={{textDecoration:"none"}} ><button className="btnBox" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>Cart <i className="fa fa-cart-plus" style={{margin:"2px"}}></i></button></Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>

               
            </>

        )
    };
}

export default Navbar;