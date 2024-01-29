'use client'

import { useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()
        try {
            const res = await signInWithEmailAndPassword(email, password)
            console.log({ res })
            setEmail('')
            setPassword('')
            router.push("/")
        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <div className="flex flex-col place-items-center gap-4 py-4 border-4 border-marron rounded-2xl w-[300px] md:w-[400px] lg:w-[500px]">
            <h1 className="text-[2rem] text-center">Iniciar Sesion</h1>
            <form onSubmit={handleForm} className="flex flex-col gap-4 justify-center items-center w-[270px] md:w-[370px] lg:w-[470px]">
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
