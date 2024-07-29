"use client";

import withAuth from "../../../components/withAuth";
import {useEffect, useState} from "react";
import {useRouter} from 'next/navigation';
import axios from "axios";
import GreenButton from "../../../components/ui/buttons/GreenButton";

function Users() {
    const router = useRouter();


    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    const fetchdata = async () => {
        const response = await axios.get(`${process.env.URL}/users/findall`);
        const data = await response.data;
        setUsers(data);
        setFilteredUsers(data);
    }

    const handleClick = (id) => {
        router.push(`/dashboard/users/${id}`);
    }

    useEffect(() => {

        fetchdata();

    }, []);

    const handleChange = (e) => {
        const recherche = e.target.value;
        setSearchText(prev => recherche);
        if(recherche.length > 1){
            const filtered = users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredUsers(filtered);
        }

        if(recherche === "") {
            setFilteredUsers(users);
        }
    }

    const navigateToCreationForm = () => {
        router.push('/dashboard/catways/create');
    }

    return (
        <>
            <article className="flex flex-col p-8 h-96">
                <div className="flex flex-col mb-3">
                    <input className="w-1/3 p-2 text-black" type="text" value={searchText} name="search"
                        placeholder="Saisissez un utilisateur" onChange={(e) => handleChange(e)}/>

                    <GreenButton onClick={navigateToCreationForm} text="Créer" />
                </div>


                <ul className="grid grid-cols-1 gap-1">
                    {
                        filteredUsers.map(user => {
                           return <User
                                key={user._id}
                                onClick={() => {handleClick(user._id)}}
                                name={user.name}
                                email={user.email}
                            />

                        })
                    }
                </ul>
            </article>
        </>
    )
}

function User(props) {
    return (
        <>
            <li onClick={props.onClick} className="list-none bg-cyan-700 text-cyan-100 p-5 flex flex-col justify-center hover:cursor-pointer">
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