

export default function LoginForm() {
    return (
        <>
            <form className="flex flex-col justify-center gap-2 " action="https://catways.onrender.com/users/authenticate" method="post">
                <input className="border-lime-300 border-2 p-2 outline-lime-800" type="text" name="name" id="name" required placeholder="Username"/>
                <input className="border-lime-300 border-2 p-2 outline-lime-800" type="email" name="email" id="email" required placeholder="Email"/>
                <input className="border-lime-300 border-2 p-2 outline-lime-800" type="password" name="password" id="password" required placeholder="Password"/>
                <input className="p-2 border-2 border-lime-300 bg-lime-300 text-lime-500 hover:cursor-pointer hover:text-lime-50" type="submit" value="Connexion"/>
            </form>
        </>
    )
}