import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import { useFormik } from 'formik';
import './login.css'
import axios from 'axios';





export const Login = () => {

    let history=useHistory()

    const validateEmail = RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$');
    const validatePassword = RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');

    const ValidateErrors = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Required'
        }
        else if (!validateEmail.test(values.email)) {
            errors.email = "Wrong Pattern"
        }

        if (!values.password) {
            errors.password = 'Required'
        } else if (!validatePassword.test(values.password)) {
            errors.password = "Wrong Pattern"
        }
        return errors

    }

        const formik = useFormik({
            initialValues: {

                email: '',
                password: ''              //Abhinav@100

            },
            validate: ValidateErrors,
            onSubmit: (values) => {
                history.push("/item_category")
                console.log(values);
                axios.post('https://project-node-1.herokuapp.com/postLoginData', values)
                .then((res) => {
                    console.log("Axios res:", res);
                    window.sessionStorage.setItem("Token",res.data.token)
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        });

        return (
            <>
                <div className="area">

                    <form onSubmit={formik.handleSubmit}><br />
                        <h1>LOGIN</h1><br />
                        <input type="email" name="email" placeholder="email" id="" value={formik.values.email} onChange={formik.handleChange} /><br />
                        {formik.errors.email ? <span className="err">{formik.errors.email}</span> : null}<br />
                        <input type="password" name="password" placeholder="password" id="" value={formik.values.password} onChange={formik.handleChange} /><br />
                        {formik.errors.password ? <span className="err">{formik.errors.password}</span> : null}<br />
                        <button type="submit" disabled={!(formik.isValid && formik.dirty)}>LOGIN</button><br /><br />
                        <p>Not a Member?</p>
                        <Link to="/regis">Sign Up</Link>
                    </form>
                </div>
            </>
        )
    }
