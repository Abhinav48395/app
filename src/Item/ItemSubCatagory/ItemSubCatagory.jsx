import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Card, CardGroup, Button, Nav } from 'react-bootstrap';


export const ItemSubCatagory = ({ match }) => {
  const [itemState, setItemState] = useState({
    itemData: []
  });

  const category_name = match.params.cat_name
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${category_name}`)
      .then(res => {
        console.log(res);
        setItemState({ itemData: res.data });
      }).catch(err => {
        console.log(err);
      })
  })


  return (
    <CardGroup>

      {
        itemState.itemData.map((item) => (
          <Card key={item.id}>
            <Card.Img variant="top" src={item.image} width="200px" height="400px" />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Button variant="warning">
                <Link to={`/itemDetails/${item.id}`} >learn more</Link>
              </Button>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
        )
        )
      }
    </CardGroup>

  )
}
