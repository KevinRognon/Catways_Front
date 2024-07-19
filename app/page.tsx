import LoginForm from "../components/login_form";

export default function Login() {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full mt-20">
                <h1 className="text-3xl">Capitainerie De Russell</h1>
                <p className="text-sm">Veuillez vous connecter pour continuer sur la gestion du site.</p>
                <p className="text-sm">En cas de problème, merci de contacter le support informatique.</p>
            </div>

            <div className="flex flex-col items-center justify-center w-full mt-10">

                <h2>Se connecter</h2>
                <LoginForm />

            </div>

        </>
    )
}