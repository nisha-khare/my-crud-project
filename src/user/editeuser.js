import axios from 'axios';
import { Field, Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Yup from "yup";

const Edituser = () => {
    const [user, setUser] = useState({});

     const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjgxZTViM2VlNTQ5ZDhkZjM3NTQ2ODRiYThhYWM2YjA2ODEwNDNjMGY4ZGJkYWI2Y2JjNWY4MGU0MjRhNWIyMmU4NGRiMWM2N2RhOWQ3ODciLCJpYXQiOjE2ODcwNzEwODYuMjI1Mjc2LCJuYmYiOjE2ODcwNzEwODYuMjI1Mjc4LCJleHAiOjE3MTg2OTM0ODYuMDU2NDg1LCJzdWIiOiIyMzciLCJzY29wZXMiOltdfQ.g4HI_ls9mDiBkTN59fAs7AlZdfyLkQcL-usbz8REmvwRKZHPxeD0evlVpCsuMjtTispD8rWLaIsgBGUrwjJHNb2DcrebEhPUnTLRc1ZNxsiuQe4e2uO7KfwwtI04qi9B6o64cJCxDnLgSAn55JrC5a8fQ4dAwy-EkTm5NdclWwuJjHr8MGkaRlMa624BuJXf2CJwhF2HFErHUEojqG5A2Krm-5yWpve4kZNXup0hX__dW_OQSSWIrRVNCKClpMJggKuTtf93ZlaDG1dH3Gpjjl_BNDXsSJ7NjZRQtcv6cQgjMvXp3oa2FVGt39x9efC1ZpPiZ3sW1pgoUiTaqzNwvC3MXNOpsklCgnpnFcIG0H9Mob992U6R8uVrQrmWQCfCenD2lOqfytC9LBOVsynw-arHaDwYDDiy3NJZfTZ2nST6ev9D6W-sE2JFxjJ_IN2AhxZawdsuvutUdMGHlFk4mlddNTJgzD7IaEU5PEN9U72R6V7T6p1NZKNWJ_V_cBNt-I5fyOYhREhhOZVvKuf5hxVw0rB_zcsx1KfR0MHlDepqgrfeeNYECcUWHZECIVy1Is-yjYH23H_M4jeb0KDYk2DDeOfApGPOZGZzmEL5mNs9q0YmeD69t5A3mWjxblIkabFiVCo7l0fIqp6LQMRAchEN75NN5zszRHNHSOU2Fag'
    const param = useParams();

    let navigate = useNavigate();

    const createuserSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
    });


    const getUser = () => {
        axios.get("https://api.darwinstech.com/api/user/edit/" + param.id,
            {
                Accept: 'application/json',
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjgxZTViM2VlNTQ5ZDhkZjM3NTQ2ODRiYThhYWM2YjA2ODEwNDNjMGY4ZGJkYWI2Y2JjNWY4MGU0MjRhNWIyMmU4NGRiMWM2N2RhOWQ3ODciLCJpYXQiOjE2ODcwNzEwODYuMjI1Mjc2LCJuYmYiOjE2ODcwNzEwODYuMjI1Mjc4LCJleHAiOjE3MTg2OTM0ODYuMDU2NDg1LCJzdWIiOiIyMzciLCJzY29wZXMiOltdfQ.g4HI_ls9mDiBkTN59fAs7AlZdfyLkQcL-usbz8REmvwRKZHPxeD0evlVpCsuMjtTispD8rWLaIsgBGUrwjJHNb2DcrebEhPUnTLRc1ZNxsiuQe4e2uO7KfwwtI04qi9B6o64cJCxDnLgSAn55JrC5a8fQ4dAwy-EkTm5NdclWwuJjHr8MGkaRlMa624BuJXf2CJwhF2HFErHUEojqG5A2Krm-5yWpve4kZNXup0hX__dW_OQSSWIrRVNCKClpMJggKuTtf93ZlaDG1dH3Gpjjl_BNDXsSJ7NjZRQtcv6cQgjMvXp3oa2FVGt39x9efC1ZpPiZ3sW1pgoUiTaqzNwvC3MXNOpsklCgnpnFcIG0H9Mob992U6R8uVrQrmWQCfCenD2lOqfytC9LBOVsynw-arHaDwYDDiy3NJZfTZ2nST6ev9D6W-sE2JFxjJ_IN2AhxZawdsuvutUdMGHlFk4mlddNTJgzD7IaEU5PEN9U72R6V7T6p1NZKNWJ_V_cBNt-I5fyOYhREhhOZVvKuf5hxVw0rB_zcsx1KfR0MHlDepqgrfeeNYECcUWHZECIVy1Is-yjYH23H_M4jeb0KDYk2DDeOfApGPOZGZzmEL5mNs9q0YmeD69t5A3mWjxblIkabFiVCo7l0fIqp6LQMRAchEN75NN5zszRHNHSOU2Fag'
            }
        ).then((data) => {
            // console.log(data.data.data[0]);
            setUser(data.data.data[0]);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        getUser()
    }, []);

    const userInfo = {
        name: user.name,
        email: user.email,
        password: user.password
    }

    return (
        <Formik
            validationSchema={createuserSchema}
            initialValues={userInfo}
            enableReinitialize
            onSubmit={(formVal) => {
                axios.post(`https://api.darwinstech.com/api/user/update/${param.id}`, {
                    headers: {
                        'Accept': 'application/json'
                    },
                    ...formVal
                }).then((res) => {
                    navigate('/');
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
                                <h3>
                                    {user.name}
                                    Create New User
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
                                <Field name="password" />
                                {
                                    errors.password && touched.password ? (<div>{errors.password}</div>) : null
                                }
                            </div>

                            <div>
                                <button type='submit'>UPDATE</button>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik >
    )
}

export default Edituser;
