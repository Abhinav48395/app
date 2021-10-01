import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export const ItemCatagory = () => {
    const [itemState,setItemState]=useState({
        itemData:[]
    });

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res);
            setItemState({itemData:res.data});
        }).catch(err=>{
            console.log(err);
        })
    })

    return (
     <ul>
         {
            itemState.itemData.map((prod)=>(
                <li key={prod.id}><Link to={`/iSubCat/${prod.category}`}>d{prod.title}</Link></li>
            ))
         }
     </ul>
    )
}
