"use client";

import withAuth from "../../../components/withAuth";
import {useEffect, useState} from "react";
import axios from "axios";

function Users() {

    const [users, setUsers] = useState([]);

    const fetchdata = async () => {
        const response = await axios.get('http://localhost:8000/users/findall');
        const data = await response.data;
        setUsers(data);
    }

    useEffect(() => {

        fetchdata();

    }, []);

    return (
        <>
            <article>
                {
                    users.map(user => {
                       return <User
                            name={user.name}
                        />

                    })
                }
            </article>
        </>
    )
}

function User(props) {
    return (
        <>
            <li>
                {props.name}
                {props.email}
            </li>
        </>
    )
}

export default withAuth(Users);