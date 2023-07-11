
import Axios from 'axios';
import { Field, Formik, Form } from 'formik';
// import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";

const Createuser = () => {
    let navigate = useNavigate();
    const createuserSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required().min(8),
        confirm_password: Yup.string().required().min(8)
    });

    return (
        <Formik
            validationSchema={createuserSchema}
            initialValues={{
                name: "",
                email: "",
                password: "",
                confirm_password: ""
            }}
            onSubmit={(formVal) => {
                alert('Done');
                Axios.post('https://api.darwinstech.com/api/register', {
                    'headers': {
                        'Accept': 'application/json'

                    },
                    ...formVal
                }).then((res) => {
                    navigate('/');
                    console.log(res);
                }).catch((err) => {
                    console.log("error", err.response.data.errors);
                });
            }}
        >

            {
                ({ errors, touched }) => {
                    return (
                        <Form>
                            <div>
                                <h3>Create New User
                                    <Link to={"/"}>Back To users</Link>
                                </h3>
                            </div>
                            <div>
                                <Field name="name" />
                                {
                                    errors.name && touched.name ? (<div>{errors.name}</div>) : null
                                }
                            </div>
                            <div>
                                <Field name="email" />
                                {
                                    errors.email && touched.email ? (<div>{errors.email}</div>) : null
                                }
                            </div>
                            <div>
                                <Field name="password" type="password" />
                                {
                                    errors.password && touched.password ? (<div>{errors.password}</div>) : null
                                }
                            </div>
                            <div>
                                <Field name="confirm_password" type="password" />
                                {
                                    errors.confirm_password && touched.confirm_password ? (<div>{errors.confirm_password}</div>) : null
                                }
                            </div>
                            <div>
                                <button type='submit'>Submit</button>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default Createuser;
