import { Component } from "react";
import { Link } from "react-router-dom";

class Confirmation extends Component {

    handlePlace = ()=>{
        localStorage.clear();
    }

    render(){
        return(
            <>
            <Link to="/" reloadDocument="true"><div className="confirmation" onClick={this.handlePlace}>  
            </div></Link>
            </>
        )
    }
}

export default Confirmation;