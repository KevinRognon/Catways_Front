"use client";

import withAuth from "../../../../components/withAuth";
import {useEffect, useState} from "react";
import {useRouter, useParams} from "next/navigation";
import axios from "axios";
import Loader from "../../../../components/Loader";
import ModalConfirmation from "../../../../components/ui/modal/ModalConfirmation";
import BlueButton from "../../../../components/ui/buttons/BlueButton";
import DeleteButton from "../../../../components/ui/buttons/DeleteButton";
import BackButton from "../../../../components/ui/buttons/BackButton";


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

function User({id, name, email}) {

    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    async function handleDelete() {
        await axios.delete(`${process.env.URL}/users/${id}`);
        router.replace(`/dashboard/users`);
    }

    const askConfirmation = () => {
        setShowModal(true);
    }

    const abortFunction = () => {
        setShowModal(false);
    }

    const confirmFunction = () => {
        handleDelete();
    }

    const navigateToUpdate = () => {
        router.push(`/dashboard/users/${id}/update`);
    }

    return (
        <>
            <div className="grid place-items-center">
                <article className="w-2/3 bg-cyan-50 p-6 rounded-lg shadow-md text-cyan-950">
                    <div className="flex justify-between items-center ">
                        <div>
                            <h2 className="text-2xl font-semibold text-cyan-700 mb-4">User Detail</h2>
                            <p className="mb-2">
                                <strong>Name: </strong> {name}
                            </p>
                            <p className="mb-4">
                                <strong>Email: </strong> {email}
                            </p>
                            <div className="flex items-center gap-2">
                                <BackButton />
                                <BlueButton onClick={navigateToUpdate} text="Modifier" />
                                <DeleteButton onClick={askConfirmation} text="Supprimer" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-start mr-8">
                            <div className="bg-gray-700 p-10 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16">
                                <path fill="white" d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295c.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023c.144-.32.336-.607.576-.847c.24-.24.528-.431.848-.575c.32-.144.672-.208 1.024-.208c.368 0 .704.064 1.024.208c.32.144.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848a2.84 2.84 0 0 1-.848.575a2.715 2.715 0 0 1-2.064 0a2.84 2.84 0 0 1-.848-.575a2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406a4.883 4.883 0 0 0-1.088-1.135a5.207 5.207 0 0 0-1.04-.608a2.82 2.82 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.624 3.624 0 0 0 .528-1.934a3.71 3.71 0 0 0-.288-1.47a3.799 3.799 0 0 0-.816-1.199a3.845 3.845 0 0 0-1.2-.8a3.72 3.72 0 0 0-1.472-.287a3.72 3.72 0 0 0-1.472.288a3.631 3.631 0 0 0-1.2.815a3.84 3.84 0 0 0-.8 1.199a3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784c.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"/></svg>
                            </div>
                            <p className="text-gray-500">{email}</p>
                        </div>

                    </div>
                </article>
            </div>
            {
                showModal 
                    &&
                <ModalConfirmation title={"Êtes-vous sûr de supprimer " + name + " ?"} option1="Annuler" option2="Supprimer" onAbort={abortFunction} onConfirm={confirmFunction} />
            }
        </>
    )
}


export default withAuth(Detail_User);
