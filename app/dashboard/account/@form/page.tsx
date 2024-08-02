"use client";

import BlueButton from "../../../../components/ui/buttons/BlueButton";
import withAuth from "../../../../components/withAuth";
import { useUser } from "../../../../context/userContext";

function Account() {
    const {user, setUser} = useUser();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Test');
    }

    return (
        <>
            <div className="grid place-items-center border-t-2 border-b-2 border-r-2 p-5 w-3/5 mt-5">
                <form onSubmit={onSubmit} className="flex flex-col gap-2">
                    <input className="border-2 rounded-3xl p-2 pl-4" type="text" placeholder="Username"/>
                    
                    <input className="border-2 rounded-3xl p-2 pl-4" type="email" placeholder="Email"/>
                    
                    <input className="border-2 rounded-3xl p-2 pl-4" type="password" placeholder="Password"/>

                    <BlueButton onClick={onSubmit} text="Modifier"  />
                </form>
            </div>
        </>
    )
}

export default withAuth(Account);