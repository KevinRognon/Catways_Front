"use client";

import withAuth from "../../../components/withAuth";
import {useEffect, useState} from "react";
import {useRouter} from 'next/navigation';
import axios from "axios";
import Link from "next/link";

function Users() {
    const router = useRouter();


    const [users, setUsers] = useState([]);

    const fetchdata = async () => {
        const response = await axios.get('https://catways-api.onrender.com/users/findall');
        const data = await response.data;
        setUsers(data);
    }

    const handleClick = (id) => {
        router.push(`/dashboard/users/${id}`);
    }

    useEffect(() => {

        fetchdata();

    }, []);

    return (
        <>
            <section className="flex flex-col items-center">
                <Link className="underline" href="/dashboard/users/create">
                    Create
                </Link>
                <article className="flex justify-center mt-5 gap-3 flex-wrap">
                    {
                        users.map(user => {
                           return <User
                                key={user._id}
                                onClick={() => {handleClick(user._id)}}
                                name={user.name}
                                email={user.email}
                            />

                        })
                    }
                </article>
            </section>
        </>
    )
}

function User(props) {
    return (
        <>
            <li onClick={props.onClick} className="list-none bg-lime-200 p-5 flex flex-col justify-center hover:cursor-pointer">
                <p>
                    <strong>Name: </strong> {props.name}
                </p>
                <p>
                    <strong>Email: </strong>{props.email}
                </p>
            </li>
        </>
    )
}

export default withAuth(Users);