"use client";

import BlueButton from "../../../../components/ui/buttons/BlueButton";
import withAuth from "../../../../components/withAuth";
import { useUser } from "../../../../context/userContext";

function Account() {
    const {user, setUser} = useUser();

    return (
        <>
            <div className="grid place-items-center border-2 rounded-lg p-5 w-3/5 mt-5">
                <form className="flex flex-col gap-2">
                    <input className="border-2 rounded-3xl p-2" type="text" placeholder="Username"/>
                    
                    <input className="border-2 rounded-3xl p-2" type="email" placeholder="Email"/>
                    
                    <input className="border-2 rounded-3xl p-2" type="password" placeholder="Password"/>

                    <BlueButton onClick={console.log('Test')} text="Modifier"  />
                </form>
            </div>
        </>
    )
}

export default withAuth(Account);