import { Component } from "react";
import { products } from "../data/products";


class Body extends Component {
    constructor() {
        super();
        this.state={
            total:1,
            items:[...products]
        }
    }


    handleCart = (prduct) => {
       
        prduct.cart = 0;
        prduct.quantity++;
        console.log(prduct.title + "===" + prduct.quantity + "====" + prduct.cart);
       

        this.setState({
            total:this.state.total+1
        })
        this.handleFavourites(prduct);
        
    }

    handleFavourites = (prduct)=>{
        console.log(prduct);
        let oldData = JSON.parse(localStorage.getItem('cart-item') || '[]')
        if(prduct.quantity<2){
        oldData.push(prduct); 
        }else{
            let idx = this.getInxFromID(prduct,oldData);
            oldData[idx] = prduct;
        }
        localStorage.setItem("cart-item",JSON.stringify(oldData));
    }

    getInxFromID = (prduct,oldData)=>{
        console.log(prduct.filename);
        let idx = 0;
        for(let i =0 ; i < oldData.length ;i++){
            if(oldData[i].filename == prduct.filename){
                idx = i;
                break;
            }
        }

        return idx;
    }

    render() {
        (function () {
            
            let oldData = JSON.parse(localStorage.getItem('cart-item') || '[]')
            if(oldData.length>0){
                 for (let i = 0; i < products.length; i++) {
                for(let j = 0 ; j < oldData.length ;j++){
                    if(products[i].filename==oldData[j].filename){
                        products[i].quantity=oldData[j].quantity;
                    }
                }
            }
            }
           

        })();

        (function () {
            let links = ["https://i.postimg.cc/SxcnfSMD/0.jpg", "https://i.postimg.cc/HLHVSq0H/1.jpg", "https://i.postimg.cc/Bn5v1mrz/10.jpg", "https://i.postimg.cc/CKFxCjYx/11.jpg", "https://i.postimg.cc/1tdRZ2F8/12.jpg", "https://i.postimg.cc/pdqXspXY/13.jpg", "https://i.postimg.cc/LX54w2Jd/14.jpg", "https://i.postimg.cc/WzJNp8mX/15.jpg", "https://i.postimg.cc/SjFyn9Dq/16.jpg", "https://i.postimg.cc/gk8hNH9V/17.jpg", "https://i.postimg.cc/Cx0qtnYW/18.jpg", "https://i.postimg.cc/wBTsxK12/19.jpg", "https://i.postimg.cc/SKrjHgV9/2.jpg", "https://i.postimg.cc/qBtyCdjZ/20.jpg", "https://i.postimg.cc/2SxZfjS3/21.jpg", "https://i.postimg.cc/kMk8QhHM/22.jpg", "https://i.postimg.cc/3wS0dLpT/23.jpg", "https://i.postimg.cc/zBybWnSR/24.jpg", "https://i.postimg.cc/7h75twRH/25.jpg", "https://i.postimg.cc/xjbN131w/26.jpg", "https://i.postimg.cc/NMZyx5pC/27.jpg", "https://i.postimg.cc/xTvkKjHg/28.jpg", "https://i.postimg.cc/52fXpcSJ/29.jpg", "https://i.postimg.cc/7hC6Gw41/3.jpg", "https://i.postimg.cc/7ZXfWBK2/30.jpg", "https://i.postimg.cc/qMVhh6tz/31.jpg", "https://i.postimg.cc/xdCcDKZF/32.jpg", "https://i.postimg.cc/s2N1VMdf/33.jpg", "https://i.postimg.cc/XJBqXn4f/34.jpg", "https://i.postimg.cc/tJhgtD17/35.jpg", "https://i.postimg.cc/FFc14FPm/36.jpg", "https://i.postimg.cc/3NMRvzxP/37.jpg", "https://i.postimg.cc/CLg5Lyt8/38.jpg", "https://i.postimg.cc/pLVdzfPX/39.jpg", "https://i.postimg.cc/sxt25qfk/4.jpg", "https://i.postimg.cc/R0NVbv3k/40.jpg", "https://i.postimg.cc/xdhjwBMc/41.jpg", "https://i.postimg.cc/fTfLV2nr/42.jpg", "https://i.postimg.cc/9M9XC1Y1/43.jpg", "https://i.postimg.cc/kgjgc25N/44.jpg", "https://i.postimg.cc/6qNW3RHK/45.jpg", "https://i.postimg.cc/T1qRWwSD/46.jpg", "https://i.postimg.cc/gcvc7SJ2/47.jpg", "https://i.postimg.cc/wTgxYXyc/48.jpg", "https://i.postimg.cc/RZ0MNvTW/49.jpg", "https://i.postimg.cc/MKQHz6dq/5.jpg", "https://i.postimg.cc/sDmjjM5F/50.jpg", "https://i.postimg.cc/xC1qQLF4/6.jpg", "https://i.postimg.cc/bJVrwd7N/7.jpg", "https://i.postimg.cc/zDM3mbwx/8.jpg", "https://i.postimg.cc/Hk1xxqh5/9.jpg"]
            for (let i = 0; i < products.length; i++) {
                products[i].filename = links[i];
            }
        
                
        })();

        return (
            <>
            <a href="https://blinkit.com/paan" target="_blank"><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg" className="img-fluid"></img></a>
            <div className="container">
                <div className="cards">
                    {this.state.items.map((prduct) => (
                        <div class="card" style={{ width: "18rem", height: "25rem" }}>
                            <img src={prduct.filename} class="card-img-top" style={{ width: "18rem", height: "15rem" }} alt="..." />
                            <div class="card-body" style={{ width: "15rem", height: "2px", wordWrap: "break-word", overflow: "hidden", padding: "5px" }}>
                                <strong><h5 class="card-title" style={{ fontWeight: "bold" }}>{prduct.title}</h5></strong>
                                <p class="card-text" style={{ overflow: "hidden", paddingBottom: "5px" }} >{prduct.description}...</p>
                            </div>
                            <div className="lowerEnd" style={{ display: "flex", margin: "2px", position: "absolute", bottom: "8px", justifyContent: "space-evenly" }}>
                                <a href="#" class="btn btn-primary " id={prduct.filename} type="buttonJi" onClick={() => this.handleCart(prduct) } style={{marginLeft:"15px"}}>{prduct.quantity>0?prduct.quantity + "            | +":"Add To Cart"}</a>
                                <p style={{ marginLeft: "50px", fontWeight: "bold" }}>₹ {prduct.price}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            </>
           
        )
    }
}

export default Body;




