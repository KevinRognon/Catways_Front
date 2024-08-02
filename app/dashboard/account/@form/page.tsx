"use client";

import { useEffect, useState } from "react";
import BlueButton from "../../../../components/ui/buttons/BlueButton";
import withAuth from "../../../../components/withAuth";
import { useUser } from "../../../../context/userContext";
import axios from "axios";

function Account() {
    const {user, setUser} = useUser();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    const ErrorHandling = (text: string) => {
        setErrorMessage(text);
        setFieldsToDefault();
        setTimeout(() => {
            setErrorMessage('');
        }, 5000)
    }
    const SuccessHandling = (text: string) => {
        setSuccessMessage(text);
        setFieldsToDefault();
        setTimeout(() => {
            setSuccessMessage('');
        }, 5000)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`${process.env.URL}/users/${user.id}/update`, {
                name: name,
                email: email,
                password: password
            });
            SuccessHandling(response.data.message);
        } catch (e) {
            if (e.response && e.response.status === 400) {
                ErrorHandling(e.response.data.message);
            }
        }
    }


    const setFieldsToDefault = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    useEffect(() => {

    }, []);

    return (
        <>
            <div className="grid place-items-center border-t-2 border-b-2 border-r-2 p-5 w-3/5 mt-5 relative">
                {
                    errorMessage && <p className="text-red-500 font-bold absolute top-0" >{errorMessage}</p> 
                    ||
                    successMessage && <p className="text-green-500 font-bold absolute top-0">{successMessage}</p>
                }
                <form onSubmit={onSubmit} className="flex flex-col gap-2">
                    <input onChange={(e) => {setName(e.target.value)}} name="name" className="border-2 rounded-3xl p-2 pl-4 outline-0" type="text" placeholder="Dupont"/>
                    
                    <input onChange={(e) => {setEmail(e.target.value)}} name="email" className="border-2 rounded-3xl p-2 pl-4 outline-0" type="email" placeholder="votre@email.com"/>
                    
                    <input onChange={(e) => {setPassword(e.target.value)}} name="password" className="border-2 rounded-3xl p-2 pl-4 outline-0" type="password" placeholder="Nouveau mot de passe"/>

                    <BlueButton onClick={onSubmit} text="Modifier"  />
                </form>
            </div>
        </>
    )
}

export default withAuth(Account);