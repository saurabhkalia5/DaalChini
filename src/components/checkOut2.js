import { Component } from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";


class CheckOutTwo extends Component {
    constructor() {
        super();
        this.state = {
            userName: localStorage.getItem('userName'),
            items: JSON.parse(localStorage.getItem('cart-item')),
            total:localStorage.getItem('sum')
        }
    }

    handleLogOut = () => {

        localStorage.removeItem("userName");


    }


    handChange = () => {
        let number = localStorage.getItem('userName');
        let newDigit = document.getElementById("inlineFormInputGroupUsername").value;
        console.log(newDigit);
        console.log(this.state.total);
        number = newDigit + "";
        localStorage.setItem('userName', number);
    }

    render() {
        (function () {
            let sum = 0;
                let data = JSON.parse(localStorage.getItem("cart-item") || '[]');
                for(let i = 0 ; i < data.length ;i++){
                    let quant = data[i].quantity;
                    let price = data[i].price;
                    let currSum = (quant*price).toFixed(2);
                    currSum = currSum*1;
                    sum += currSum;
                }
        
                localStorage.setItem('sum', sum);

        })();
        let mobile = localStorage.getItem("userName");

        if (mobile) {
            return (
                <div>
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p>Hello   {this.state.userName}</p>
                        </blockquote>
                        <blockquote class="blockquote">
                            <p>Your Order is as follows</p>
                        </blockquote>
                    </figure>
                   

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

                                this.state.items.map((prduct) => (
                                    <tr>
                                        <th scope="row"><img style={{ width: "8rem", padding: "1rem" }} src={prduct.filename} />{prduct.title}</th>
                                        <td>{prduct.type}</td>
                                        <td>₹ {prduct.price}</td>
                                        <td>{prduct.rating}</td>
                                        <td>{prduct.quantity}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <h3 style={{marginLeft:"1vw"}}>Your Total is ₹ {this.state.total}</h3>
                    <Link to="/cart" style={{ textDecoration: "none" }}><button type="submit" class="btn btn-primary logOut" onClick={this.handleLogOut()}>Logout</button></Link>
                    <Link to="/confirmation" style={{ textDecoration: "none" }}><button type="submit" class="btn btn-primary place">Place Order</button></Link>

                </div>
            )
        }

    }

}

export default CheckOutTwo;