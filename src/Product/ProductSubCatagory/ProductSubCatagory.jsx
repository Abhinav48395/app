import React, { useState } from 'react'
import productData from '../product.json';
import { Link } from 'react-router-dom';
import { Card, CardGroup, Button, Form, FormControl,Container,Row,Col } from 'react-bootstrap';
import './ProductSubCatDetails.css';

export const ProductSubCatagory = ({ match }) => {


  const [searchTerm, setSearchTerm] = useState("")


  const subCatValue = productData.Product.find((data) => data.p_name === match.params.pname); //p_name from product.jsom and pname is from route
  console.log("Sub Catagory value", subCatValue);
  return (

    <>

      <div className="container">

        <div className="row">
          <div className="col">
            <input
              type="text"
              placeholder="search"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />
          </div>
        </div>

      </div>


     <Container>
     
    

     
      <CardGroup><br />
      <Row>
        {

          subCatValue.subCatagory.filter((val) => {
            if (searchTerm === '') {
              return val;
            }
            else if (
              val.company.toLowerCase().includes(searchTerm.toLowerCase()) 
           

            ) {
              return val;
            }
          }).map((productvalue) => (
            <Col lg={4} md={4} sm={6}><br />
            <Card key={productvalue.s_id}>
              <Card.Img variant="top" src={productvalue.image} width="200px" height="400px" />
              <Card.Body>
                <Card.Title>{productvalue.company}</Card.Title>
                <Button variant="warning">
                  <Link to={`/productdetails/${match.params.pname}/${productvalue.s_id}`} >learn more</Link>
                </Button>
              </Card.Body>
           
            </Card>
            </Col>
          )
          )
        }
      
      </Row>
      </CardGroup>
    
 
      </Container>
    </>

  )
}
