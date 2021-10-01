import React from 'react'
import {Redirect} from 'react-router';

const Protected = (props) => {
    let ProtectedCom=props.component;
    let isLoggedin=window.sessionStorage.getItem('Token')
    return isLoggedin
             ? (<ProtectedCom/>)
             :(<Redirect to="/login" />)
}

export default Protected
