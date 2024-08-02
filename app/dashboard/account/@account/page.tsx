"use client";

import withAuth from "../../../../components/withAuth";
import { useUser } from "../../../../context/userContext";

function Account() {
    
    const {user, setUser} = useUser();

    return (
        <>
            <div className="flex justify-between border-l-2 border-t-2 border-b-2 p-5 w-3/5 mt-5">
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
        </>
    )
}

export default withAuth(Account);