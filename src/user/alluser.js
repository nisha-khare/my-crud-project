import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Alluser = () => {
    const [alluser, setallUsers] = useState([]);


    const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNmJjYmRlNTVhN2JjZjhhOGQwNzY3ZDliZjRkNWU0ZmUxNTNiZGU3ZTljZDEzM2MxYWZlNGQ0MGQ0MGUyNjUwZTJiYTI0NTEzNWQxZjI2OWEiLCJpYXQiOjE2ODY5OTI2NTEuOTI2NDE1LCJuYmYiOjE2ODY5OTI2NTEuOTI2NDE4LCJleHAiOjE3MTg2MTUwNTEuOTIzNjUzLCJzdWIiOiIyMzYiLCJzY29wZXMiOltdfQ.uVh2aoNXRqf9_nWKK9UtRJzDMnrUQ0GUYxsAKXnQmaMAO8E7RlGqV72IukLlSUvT8JU5fNF9SF38_28YpdRDDQDp9jJ0DyS39ciCDQ1h7MgQI2JUOUYLjtA4ww7clPeK_Byr-ni1qOT2h2Nu0hVB1_kO0ti00EGlc-6jhuh6FoxihffHA5zFRYP2J8hudyAzjyeN5z27qrfjLLtaR3DRI5g7bKmVlodJWuFx-tS5mTTjVb8ad7yrAVMpJ081Cb8Op-BE9bcJW_zkX66REtI1Gsihv0AX6KNWizQQdFsamzpnpIO2NALgF21sLGrXymuHfipjyovlYdu6fUf6i0-483IzSt5h6rRHtuO-f-M_lX7kutEfYoGyeWHiYadk3tl1brHDDQEPGs6jnpuas03-f3WnZN2gcCj55cIaTjQRKre39jiSpvgovIH1R2s2wSYTdnrOgwAnYcRJt2JfQa3l5X-DxlFxZ6BNVc794hiyua2JmxwItkvkmtknucDAdJEepb7ReQAZlxmXMkXTUzxXgUg44pmya0Thvhpe1ZqqvFYhing0ReLW38mBEcFw9nvzCtsgNoCaijPddoGNypkdi-PEQNsZbwg1aX4RMjQUESTPHLV9x4qXybQUANdlwcs6nPOZxmj48jTnlYrLuwnRMMKJh93J5FdOhH1CEAPddS0';

    const getalluser = () => {
        Axios.get("https://api.darwinstech.com/api/all-users", {
            headers: {
                'Accept': 'application/json',
                'Authorization': token
            }
        }).then((data) => {
            setallUsers(data.data.data.data);
        });
    }
    useEffect(() => {
        getalluser();
    }, [])

    const userDelete = (id) => {
        Axios.post(`https://api.darwinstech.com/api/user/delete/${id}`, {}, {
            headers: {
                'Accept': 'application/json',
                'Authorization': token
            }
        }).then((res) => {
            if (window.confirm('Are sure want to delete this?')) {
                if (res.status === 200) {
                    getalluser();
                }
            }
        });
    }

    return (
        <div>
            <h1>User form <Link to={"/user/createuser"}>Create New User</Link></h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>email</th>
                        <th colSpan={3}>action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/user/edit/${user.id}`}>edit</Link>
                                    </td>
                                    <td>
                                        <a href='#' onClick={(e) => {
                                            e.preventDefault();
                                            userDelete(user.id);
                                        }}>Delete</a>
                                    </td>
                                    <td>
                                        <Link to="view">View</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Alluser;
