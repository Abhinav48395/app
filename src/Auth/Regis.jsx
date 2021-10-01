
import React, { useState } from 'react'
import './regis.css'
import axios from 'axios';
import { Link,useHistory } from 'react-router-dom'

export const Regis = () => {

    let history=useHistory()

    const validateEmail = RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$');

    const validatePassword =RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
    const [inputState, setInputState] = useState({
        isError: {
            username: '',
            email: '',
            password: ''
            
        },cityName:["kolkata","delhi","mumbai"]
    })


    const handleChange = (event) => {
        event.persist();
        // console.log(event);
        let { name, value } = event.target
        let errHandle = { ...inputState.isError };
        switch (name) {
            case "username":
                errHandle.username =
                    value.length < 5 ? "Atleast 5 character" : "";
                break;
           
            case "email":
                errHandle.email =
                    // value.length < 10 ? "Atleast 10 characters" : "";
                    validateEmail.test(value) ? "" : "Wrong Pattern"
                break;
         case "password":
                errHandle.password =
                    // value.length < 5 ? "Atleast 5 characters" : "";
                    validatePassword.test(value) ? "" : "Wrong Pattern"
                break;
            default:
                break;
        }
        setInputState({ ...inputState, [name]: value, isError: errHandle });

        console.log("InputState: ", inputState)
    }


    const submitHandler = (event) => {

        // history.push("/login")
        alert("registration sucessfull")
        event.preventDefault();
        console.log("After submit:", inputState);
        // console.log(event);
        // const value = inputState
        // // axios.post('https://jsonplaceholder.typicode.com/users', value)
        //     .then((res) =>{
        //         console.log("Axios res:", res);
        //     })
        //     .catch((err) =>{
        //         console.log(err);
        //     })
    }



return (
    <>

        <div className="border">
            <h1>CREATE ACCOUNT</h1><br />
            <form onSubmit={submitHandler}>
                <input type="text" name="username" placeholder="User Name" onChange={handleChange} /><br />
                {inputState.isError.username.length > 0 &&
                    (<span>{inputState.isError.username}</span>)} <br />
             
                <input type="email" name="email" placeholder="Your Email" id="" onChange={handleChange} /><br />
                {inputState.isError.email.length > 0 &&
                    (<span>{inputState.isError.email}</span>)}<br />
           
                <input type="password" name="password" placeholder="Password" id="" onChange={handleChange} /><br />
                {inputState.isError.password.length > 0 &&
                    (<span>{inputState.isError.password}</span>)}<br />

                    <select name="city" id="" onChange={handleChange}>
                        {inputState.cityName.map((city,index)=>(
                            <option value={city} key={index}>{city}</option>
                        ))
                        }
                    </select>

                <button type="submit">SIGN UP</button><br /><br />
                <p>Have already an account?</p><a href="#">Login Here</a>
            </form>
        </div>
    </>
)

                }