import React from 'react'
import productData from '../product.json';
import { Button } from 'react-bootstrap'


export const ProductDetails = ({ match }) => {
    
    const productDetails = productData.Product.find((data) => data.p_name === match.params.pname);
    console.log("subCat", productDetails);


    const prodDetails = productDetails.subCatagory.find((data) => data.s_id === match.params.id)
    console.log("productdetails", prodDetails)
    return (
        <div>

            <br />
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={prodDetails.image} width="600" height="400px" />
                        <br></br>

                    </div>
                    <div className="col">
                        <h1>{prodDetails.company}</h1>
                        <h4>{prodDetails.price}</h4><br />
                        <p>{prodDetails.s_des}</p>

                        <Button variant="primary">Add to cart</Button>
                    </div>
                </div>
            </div>




        </div>
    )
}
