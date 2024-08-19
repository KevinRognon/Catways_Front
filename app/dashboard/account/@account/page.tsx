"use client";

import {useRouter} from "next/navigation";
import AccountCard from "../../../../components/ui/cards/AccountCard";
import withAuth from "../../../../components/withAuth";
import { useUser } from "../../../../context/userContext";
import LateralColor from "../../../../components/ui/lateralColor/LateralColor";
import ModalUploadFile from "../../../../components/ui/modal/ModalUploadFile";
import { useEffect, useState } from "react";
import axios from "axios";
import {resetCookies} from '../../../../constants/functions';

function Account() {
    
    const {user} = useUser();
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        if (user) {
            setAvatar(user.avatar);
        }
    }, [user])

    if (!user) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-xl">Vous n'êtes pas connecté.</p>
            </div>
        );
    }


    const switchModal = () => {

        setShowModal(!showModal);
    }

    const succesUpload = async () => {
        switchModal();
        
        const response = await axios.get(`${process.env.URL}/users/${user._id}`);
        resetCookies('user', response.data, 0.5);
        
        setAvatar(user.avatar);


    }

    const deleteAvatar = async () => {
        console.log("Suppression de l'avatar");
        try {
            const response = await axios.patch(`${process.env.URL}/users/${user._id}/update`, {
                avatar: ""
            });
            console.log(response.data);
            
            setAvatar(null);
            resetCookies('user', response.data.user, 0.5);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {
                showModal && <ModalUploadFile onSuccessUpload={succesUpload} onClick={switchModal} title="Upload" text="Test" />
            }
            <div className="grid lg:grid-cols-3 gap-20 lg:place-items-center">

                    <div className="flex flex-col gap-5 items-center justify-start">
                        {
                            !avatar ?
                                <div className="relative bg-gray-700 p-10 rounded-full">
                                    <svg onClick={switchModal} className="absolute bottom-0 right-0 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#4CAF50"/><g fill="#fff"><path d="M21 14h6v20h-6z"/><path d="M14 21h20v6H14z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16">
                                    <path fill="white" d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295c.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023c.144-.32.336-.607.576-.847c.24-.24.528-.431.848-.575c.32-.144.672-.208 1.024-.208c.368 0 .704.064 1.024.208c.32.144.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848a2.84 2.84 0 0 1-.848.575a2.715 2.715 0 0 1-2.064 0a2.84 2.84 0 0 1-.848-.575a2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406a4.883 4.883 0 0 0-1.088-1.135a5.207 5.207 0 0 0-1.04-.608a2.82 2.82 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.624 3.624 0 0 0 .528-1.934a3.71 3.71 0 0 0-.288-1.47a3.799 3.799 0 0 0-.816-1.199a3.845 3.845 0 0 0-1.2-.8a3.72 3.72 0 0 0-1.472-.287a3.72 3.72 0 0 0-1.472.288a3.631 3.631 0 0 0-1.2.815a3.84 3.84 0 0 0-.8 1.199a3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784c.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"/></svg>
                                </div>
                            :
                                <div className="relative rounded-full hover:cursor-pointer">
                                    <img className="w-40 h-40 rounded-full" src={avatar} alt={`avatar_${user.name}`} />
                                    <svg onClick={deleteAvatar} xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 hover:cursor-pointer"  width="30" height="30" viewBox="0 0 16 16"><path fill="red" fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m4-7a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5A.75.75 0 0 0 12 8" clipRule="evenodd"/></svg>
                                </div>
                        }
                        <div>
                            <p className="text-black font-bold text-2xl">{user.name}</p>
                            <p className="text-gray-500 underline">{user.email}</p>
                        </div>
                    </div>

                <div className="flex flex-col gap-5 lg:col-span-2">
                    <div>
                        <h2 className="pl-2 relative text-3xl font-bold font-">
                            Informations personnelles
                            <LateralColor color="bg-blue-700" />
                            <p className="text-gray-700 text-sm">Modifiez vos informations personnelles</p>
                        </h2>
                    </div>
                    
                    <ul className="grid grid-cols-2 lg:grid-cols-2 gap-5 place-items-center">
                        <AccountCard title_patch="name" id={user.id} type="text" title="Nom" option={user.name} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="blue" d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295c.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023c.144-.32.336-.607.576-.847c.24-.24.528-.431.848-.575c.32-.144.672-.208 1.024-.208c.368 0 .704.064 1.024.208c.32.144.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848a2.84 2.84 0 0 1-.848.575a2.715 2.715 0 0 1-2.064 0a2.84 2.84 0 0 1-.848-.575a2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406a4.883 4.883 0 0 0-1.088-1.135a5.207 5.207 0 0 0-1.04-.608a2.82 2.82 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.624 3.624 0 0 0 .528-1.934a3.71 3.71 0 0 0-.288-1.47a3.799 3.799 0 0 0-.816-1.199a3.845 3.845 0 0 0-1.2-.8a3.72 3.72 0 0 0-1.472-.287a3.72 3.72 0 0 0-1.472.288a3.631 3.631 0 0 0-1.2.815a3.84 3.84 0 0 0-.8 1.199a3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784c.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"/></svg>}/>
                        <AccountCard title_patch="email" id={user.id} type="email" title="Email" option={user.email} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="blue" d="M0 262q0 43 24.5 81T90 405q-2 7-4.5 18t-7 34.5t-3.5 39T85 512q30 0 60.5-16t48.5-32t19-16q55 0 107-21q-6-2-22.5-12T277 405h-64q-18 0-38 20q-28 25-53 36l6-77l-17-15q-68-44-68-107q0-16 6-36q-4-6-5.5-18.5T42 185v-23l1-13Q0 195 0 262zM299 0q-89 0-151.5 52T85 177q0 72 62 118t152 46q1 0 20.5 21.5t51.5 43t62 21.5q7 0 8.5-11t-1.5-26.5t-7-31.5t-7-27l-4-11q41-25 65.5-62.5T512 177q0-73-62.5-125T299 0zm102 284l-28 17l11 32q2 5 5 17t6 19q-22-15-52-45q-23-25-42-25q-70 0-120.5-32.5T130 177q-1-56 48.5-95T299 43t120.5 39t49.5 95q0 63-68 107z"/></svg>}/>
                        <AccountCard title_patch="password" id={user.id} type="password" title="Password" option="********" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26"><path fill="blue" d="M17.625.188c-1.678 0-3.242.68-4.531 1.968C11.63 3.62 10.96 5.42 11.156 7.344c.147 1.428.799 2.868 1.844 4.156l-7.25 7.25l-1.313-1.313c-.64-.643-1.171-.11-1.812.532L2 18.625c-.642.639-1.172 1.14-.531 1.781L2.78 21.72l-1.03 1.03a1.63 1.63 0 0 0 0 2.313c.64.639 1.671.639 2.313 0l11.375-11.375c1.232.772 2.57 1.187 3.874 1.187c1.677 0 3.244-.68 4.532-1.969c1.465-1.463 2.134-3.263 1.937-5.187c-.176-1.731-1.095-3.473-2.562-4.938C21.557 1.117 19.572.187 17.625.187zm.063 2.062c1.393 0 2.84.713 4.093 1.969c1.114 1.11 1.809 2.402 1.938 3.656c.133 1.304-.326 2.546-1.344 3.563c-.912.91-1.975 1.374-3.125 1.374c-1.394 0-2.838-.714-4.094-1.968c-1.113-1.113-1.808-2.402-1.937-3.656c-.132-1.304.325-2.545 1.344-3.563c.912-.91 1.975-1.375 3.124-1.375z"/></svg>}/>
                        <AccountCard title_patch="creation" id={user.id} type="" title="Création" option={new Date(user.created).toLocaleString()} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="blue" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12c0-4.243 0-5.364 1.318-6.682C5.636 4 7.758 4 12 4c4.243 0 6.364 0 7.682 1.318C21 6.636 21 7.758 21 12c0 4.243 0 6.364-1.318 7.682C18.364 21 16.242 21 12 21c-4.243 0-6.364 0-7.682-1.318C3 18.364 3 16.242 3 12Zm13.5-7V3m-9 2V3M3.25 8h17.5"/></svg>}/>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default withAuth(Account);