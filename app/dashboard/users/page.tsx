"use client";

import withAuth from "../../../components/withAuth";
import {useEffect, useState} from "react";
import {useRouter} from 'next/navigation';
import axios from "axios";
import GreenButton from "../../../components/ui/buttons/GreenButton";
import { useUser } from "../../../context/userContext";
import LateralColor from "../../../components/ui/lateralColor/LateralColor";
import SearchBar from "../../../components/ui/inputs/SearchBar";

function Users() {
    const router = useRouter();
    const {user, setUser} = useUser();


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
        if (user) {
            fetchdata();
        }

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
        router.push('/dashboard/users/create');
    }

    return (
        <>
            <article className="flex flex-col p-8 h-96">
                <div className="flex justify-between mb-3">
                    <SearchBar handleChange={handleChange} searchText={searchText} text="Saisissez un utilisateur" />
                    <GreenButton onClick={navigateToCreationForm} text="Créer" />
                </div>


                <ul className="grid grid-cols-1 gap-1">
                    {
                        filteredUsers.map(item_user => {
                            if(item_user.name === user.name) {
                                return;
                            }
                           return <User
                                key={item_user._id}
                                onClick={() => {handleClick(item_user._id)}}
                                name={item_user.name}
                                email={item_user.email}
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
            <li onClick={props.onClick} className="list-none relative bg-cyan-50 text-black p-5 flex justify-between items-center hover:cursor-pointer">
                <LateralColor color="bg-blue-700" />
                <div>
                    <p>
                        <strong>Name: </strong> {props.name}
                    </p>
                    <p>
                        <strong>Email: </strong>{props.email}
                    </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4.615 19q-.69 0-1.152-.462Q3 18.075 3 17.385v-2.116h1v2.116q0 .23.192.423q.193.192.423.192h14.77q.23 0 .423-.192q.192-.193.192-.423V6.615q0-.23-.192-.423Q19.615 6 19.385 6H4.615q-.23 0-.423.192Q4 6.385 4 6.615v2.116H3V6.615q0-.69.463-1.152Q3.925 5 4.615 5h14.77q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.152q-.463.463-1.153.463H4.615Zm7.27-3.577l-.708-.72l2.21-2.203H3v-1h10.387l-2.21-2.204l.708-.72L15.308 12l-3.423 3.423Z"/></svg>
            </li>
        </>
    )
}

export default withAuth(Users);