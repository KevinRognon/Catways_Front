"use client";

import withAuth from "../../../../components/withAuth";
import {useEffect, useState} from "react";
import {useRouter, useParams} from "next/navigation";
import axios from "axios";


const Detail_User = () => {

    const [user, setUser] = useState(null);
    const router = useRouter();
    const {id} = useParams();

    const fetchdata = async () => {
        const response = await axios.get(`http://localhost:8000/users/${id}`);
        const data = await response.data;
        setUser(data);
    }

    useEffect(() => {
        fetchdata();
    }, [id]);

    if(!user) return <p className="text-orange-300" >Loading..</p>

    return (
        <>
            <User
                name={user.name}
                email={user.email}
            />
        </>
    )
}

function User(props) {
    return (
        <>
            <article>
                <p>
                    <strong>Name: </strong> {props.name}
                </p>
                <p>
                    <strong>Email: </strong> {props.email}
                </p>
            </article>
        </>
    )
}


export default withAuth(Detail_User);