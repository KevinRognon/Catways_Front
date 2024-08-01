"use client";

import withAuth from "../../../components/withAuth";
import { useUser } from "../../../context/userContext";

function Account() {
    const {user, setUser} = useUser();

    return (
        <>
            <article className="grid place-items-center text-black">
                <div className="bg-white w-3/4 p-10 rounded-lg">
                    <h1 className="text-2xl">Account settings</h1>
                    <div className="flex justify-between border-2 rounded-lg p-5 w-3/5 mt-5">
                        <div className="flex flex-col justify-between w-2/4">
                            <p>Username:</p>
                            <p>Email:</p>
                            <p>Créé le:</p>
                        </div>
                        <span className="w-1 h-fit bg-black"></span>
                        <div className="flex flex-col justify-between w-2/4">
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{new Date(user.created).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default withAuth(Account);