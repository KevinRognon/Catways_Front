"use client";

import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
import Cookies from 'js-cookie';


export default function LoginForm() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        console.log("submit");
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/users/authenticate', {
                name,
                email,
                password
            })

            if(response.status === 200) {
                const token = response.data.token;
                Cookies.set('token', token, {
                    expires: 0.5
                })
                router.push('/dashboard');
            }
        } catch (e) {
            console.error(`Erreur: ${e}`);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2 ">
                <input value={name} onChange={(e) => setName(e.target.value)} className="border-lime-300 border-2 p-2 outline-lime-800" type="text" name="name" id="name" required placeholder="Username"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="border-lime-300 border-2 p-2 outline-lime-800" type="email" name="email" id="email" required placeholder="Email"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="border-lime-300 border-2 p-2 outline-lime-800" type="password" name="password" id="password" required placeholder="Password"/>
                <button type="submit" className="p-2 border-2 border-lime-300 bg-lime-300 text-lime-500 hover:cursor-pointer hover:text-lime-50">Connexion</button>
            </form>
        </>
    )
}