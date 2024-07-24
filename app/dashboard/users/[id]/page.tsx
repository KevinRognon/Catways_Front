"use client";

import withAuth from "../../../../components/withAuth";
import {useEffect, useState} from "react";
import {useRouter, useParams} from "next/navigation";
import axios from "axios";
import Loader from "../../../../components/Loader";


const Detail_User = () => {

    const [user, setUser] = useState(null);
    const {id} = useParams();

    const fetchdata = async () => {
        const response = await axios.get(`${process.env.URL}/users/${id}`);
        const data = await response.data;
        setUser(data);
    }

    useEffect(() => {
        fetchdata();
    }, [id]);

    if (!user) return <Loader/>;

    return (
        <div className="p-10">
            <User
                name={user.name}
                email={user.email}
                id={id}
            />
        </div>
    )
}

function User(props) {

    const router = useRouter();
    async function handleDelete() {
        await axios.delete(`${process.env.URL}/users/${props.id}`);
        router.replace(`/dashboard/users`);
    }

    return (
        <article className="w-2/5 bg-cyan-50 p-6 rounded-lg shadow-md text-cyan-950">
            <h2 className="text-2xl font-semibold text-cyan-700 mb-4">User Detail</h2>
            <p className="mb-2">
                <strong>Name: </strong> {props.name}
            </p>
            <p className="mb-4">
                <strong>Email: </strong> {props.email}
            </p>
            <div className="flex items-center gap-2">
                <button onClick={() => { router.replace(`/dashboard/users/${props.id}/update`) }} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Modifier</button>
                <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Supprimer</button>
            </div>
        </article>
    )
}


export default withAuth(Detail_User);
