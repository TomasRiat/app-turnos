'use client'

import { useState } from "react";
import signIn from "../firebase/auth/signIn";
import { useRouter } from 'next/navigation'
import Link from "next/link";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/home")
    }

    return (
        <div className="flex flex-col place-items-center gap-4 py-4 border-4 border-marron rounded-2xl w-[300px]">
            <h1 className="text-[2rem] text-center">Iniciar Sesion</h1>
            <form onSubmit={handleForm} className="flex flex-col gap-4 justify-center items-center w-[270px] ">
                <label htmlFor="email" className="flex flex-col gap-2 w-full">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className=" bg-transparent border-2 border-marron rounded-2xl p-2 outline-none" />
                </label>
                <label htmlFor="password" className="flex flex-col gap-2 w-full">
                    <p>Contraseña</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="***********" className=" bg-transparent border-2 border-marron rounded-2xl p-2 outline-none" />
                </label>
                <Link href='/' className="text-start">Olvidaste tu contraseña?</Link>
                <button type="submit" className="w-[127px] bg-transparent border-2 border-marron rounded-2xl p-2 outline-none">Enviar</button>
            </form>
        </div>
    );
}

export default Login;
