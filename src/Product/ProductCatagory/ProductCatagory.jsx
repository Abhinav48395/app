import React from 'react'
import productData from '../product.json'
import {Link} from 'react-router-dom'

export const ProductCatagory = () => {
    return (
        <div>
           {
               productData.Product.map((prodValue)=>(
                   
                
                   <Link to={`/pSubCat/${prodValue.p_name}`} key={prodValue.p_id} > {prodValue.p_name} </Link>
                 
               ))
           } 
        </div>
    )
}
