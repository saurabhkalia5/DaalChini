import { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            cartItem: []
        }
    }

    componentDidMount() {
        let data = JSON.parse(localStorage.getItem("cart-item") || '[]');

        this.setState({
            cartItem: [...data]

        })
    }

    handleDecre = (prduct) => {
        let data = JSON.parse(localStorage.getItem("cart-item") || '[]');
        let idx = this.getInxFromID(prduct, data);
        data[idx].quantity = data[idx].quantity - 1;
        if (data[idx].quantity == 0) {
            alert("Can't Delete Item Once Added");
            data[idx].quantity = data[idx].quantity + 1;
        }
        this.setState({
            cartItem: [...data]

        });
        localStorage.setItem("cart-item", JSON.stringify(data));

    }

    handleIncre = (prduct) => {
        let data = JSON.parse(localStorage.getItem("cart-item") || '[]');
        let idx = this.getInxFromID(prduct, data);
        data[idx].quantity = data[idx].quantity + 1;
        this.setState({
            cartItem: [...data]

        })
        localStorage.setItem("cart-item", JSON.stringify(data));

    }

    getInxFromID = (prduct, oldData) => {
        console.log(prduct.filename);
        let idx = 0;
        for (let i = 0; i < oldData.length; i++) {
            if (oldData[i].filename == prduct.filename) {
                idx = i;
                break;
            }
        }

        return idx;
    }

    render() {
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Type</th>
                            <th scope="col">Price</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.cartItem.map((prduct) => (
                                <tr>
                                    <th scope="row"><img style={{ width: "8rem", padding: "1rem" }} src={prduct.filename} />{prduct.title}</th>
                                    <td>{prduct.type}</td>
                                    <td>₹ {prduct.price}</td>
                                    <td>{prduct.rating}</td>
                                    <td>{prduct.quantity}<div className="btn-group" id={prduct.filename} role="group" aria-label="Basic example" style={{ marginLeft: "1.5rem", backgroundCOLOR: "#67a75c" }}>

                                        <button type="button" className="btn btn-primary" id={prduct.filename} style={{ marginLeft: "2px" }} onClick={() => this.handleIncre(prduct)}>+   </button>
                                        <button type="button" className="btn btn-primary" id={prduct.filename} onClick={() => this.handleDecre(prduct)}>- </button>
                                    </div></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="d-grid gap-1 col-1 mx-auto">
                <Link to="/checkout"><button className="btn btn-primary checkOut" type="button">CheckOut</button></Link>
                </div>
            </>



        )
    }
}

export default Cart;