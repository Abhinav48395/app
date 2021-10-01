import React, { lazy, Suspense } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Home } from '../boot/Home/Home'
import { ProductCatagory } from '../Product/ProductCatagory/ProductCatagory'
import { ProductSubCatagory } from '../Product/ProductSubCatagory/ProductSubCatagory'
import { ProductDetails } from '../Product/ProductDetails/ProductDetails'
import { Header } from '../LayOut/Header/Header'
import { Regis } from '../Auth/Regis'
import { ItemCatagory } from '../Item/ItemCatagory/ItemCatagory'
import { ItemSubCatagory } from '../Item/ItemSubCatagory/ItemSubCatagory'
import { ItemDetails } from '../Item/ItemDetails/ItemDetails'
import { Login } from '../Auth/Login'
import Protected from './Protected'
import Search from '../Search'


const Contact = lazy(() => import("../boot/Contact/Contact"));
const Feedback = lazy(() => import("../boot/Feedback/FeedBack"));

export const Routes = () => {
    return (
        <Router>
            <Header>
            </Header>
            
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/regis" component={Regis}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route path="/item_category" component={ItemCatagory}></Route>
                <Route path="/iSubCat/:cat_name" component={ItemSubCatagory}></Route>
                <Route path="/itemDetails/:id" component={ItemDetails}></Route>
                <Route path="/search" component={Search}></Route>




                <Route path="/product_category" component={ProductCatagory}></Route>
                <Route path="/pSubCat/:pname" component={ProductSubCatagory}></Route>
                <Route path="/productdetails/:pname/:id" component={ProductDetails}></Route>


                <Protected
                    path="/contact"
                    render={() => (
                        <Suspense fallback={<h1>Loading....</h1>}>
                            <Contact />
                        </Suspense>
                    )}
                />


                <Route
                    path="/feedback"
                    render={() => (
                        <Suspense fallback={<h1>Loading....</h1>}>
                            <Feedback />
                        </Suspense>
                    )}
                />

                <Route render={() => <h2> 404: Page not found</h2>} />
            </Switch>
        </Router>

    )
}
