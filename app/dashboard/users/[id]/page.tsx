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
