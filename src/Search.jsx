import React,{useState} from 'react'
import { Navbar,Card, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import productData from './Product/product.json'


const Search = () => {


    
    const [searchTerm, setSearchTerm] = useState("")
 
   
    
    return (
        <><br /><br />
           <section>
               <div className="container">
            
                <div className="row">
                    <div className="col">
                        <input
                         type="text"
                        placeholder="search"
                         value={searchTerm}
                          onChange={(e)=>
                            setSearchTerm(e.target.value)
                        }
                        />
                    </div>
                </div>
   

                  {
                      productData.Product.filter((val)=>{
                          if (searchTerm ===''){
                              return val;
                          }
                          else if(
                              val.p_name.toLowerCase().includes(searchTerm.toLowerCase())||
                              val.description.toLowerCase().includes(searchTerm.toLowerCase())
                            
                              ){
                              return val;
                          }
                      }).map((item,key)=>{
                         return(
                             <div key={key}>
                              <p>{item.p_name}</p>
                              <p>{item.description}</p>
                            
                          </div>
                         ) 
                      })
                  }

                   <div className="row">

                       <div className="col">
                      
                       </div>
                   </div>
               </div>

               
               </section> 
        </>
    )
}

export default Search
