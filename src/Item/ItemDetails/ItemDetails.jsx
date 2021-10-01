import React,{useEffect,useState} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios';



export const ItemDetails = ({ match }) => {
    const [itemState,setItemState]=useState({
        itemData:[]
      });
    
      const id=match.params.id
      useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>{
          console.log(res);
          setItemState({itemData:res.data});
        }).catch(err=>{
          console.log(err);
        })
      })
    
    return (
        <div>

         <br />
         <br />
         <br />
             <div className="container">
                 <div className="row">
                     <div className="col">
                         <img src={ itemState.itemData.image} width="600" height="400px" />
                         <br></br>
                         
                     </div>
                     <div className="col">
                         <h1>{itemState. itemData.title}</h1>
                         <h4>{itemState. itemData.price}</h4><br />
                         <p>{itemState. itemData.description}</p>
                         
                         <Button variant="primary">Add to cart</Button>
                     </div>
                 </div>
             </div>
           
         
      

        </div>
    )
}
