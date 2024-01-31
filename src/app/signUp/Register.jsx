'use client'

import { useState } from "react";

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    const handleForm = async (event) => {
        event.preventDefault()
        try {
            const res = await createUserWithEmailAndPassword(email, password)
            console.log({ res })
            sessionStorage.setItem('user', true)
            setEmail('')
            setPassword('')
            router.push("/logged")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="flex flex-col place-items-center gap-4 py-4 border-4 border-marron rounded-2xl w-[300px] md:w-[400px] lg:w-[500px]">
            <h1 className="text-[2rem] text-center">Registro</h1>
            <form onSubmit={handleForm} className="flex flex-col gap-4 justify-center items-center w-[270px] md:w-[370px] lg:w-[470px]">
                {/* <div className="flex flex-row justify-center items-center gap-4">
                    <label htmlFor="email" className="flex flex-col gap-2 w-full">
                        <p>Nombre</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="name" name="name" id="name" placeholder="Juan" className="w-[127px] bg-transparent border-2 border-marron rounded-2xl p-2 outline-none md:w-[177px] lg:w-[227px]" />
                    </label>
                    <label htmlFor="email" className="flex flex-col gap-2 w-full">
                        <p>Apellido</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="lastname" name="lastname" id="lastname" placeholder="Perez" className="w-[127px] bg-transparent border-2 border-marron rounded-2xl p-2 outline-none md:w-[177px] lg:w-[227px]" />
                    </label>
                </div> */}
                <label htmlFor="email" className="flex flex-col gap-2 w-full">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className=" bg-transparent border-2 border-marron rounded-2xl p-2 outline-none" />
                </label>
                {/* <label htmlFor="email" className="flex flex-col gap-2 w-full">
                    <p>Telefono Celular</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="number" name="phone" id="phone" placeholder="341777444" className=" bg-transparent border-2 border-marron rounded-2xl p-2 outline-none appearance-none" />
                </label> */}
                <label htmlFor="password" className="flex flex-col gap-2 w-full">
                    <p>Contraseña</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="***********" className=" bg-transparent border-2 border-marron rounded-2xl p-2 outline-none" />
                </label>
                {/* <InputSelect className options={['Ya paciente', 'Nuevo Paciente']} /> */}
                <button type="submit" className="w-[127px] bg-transparent border-2 border-marron rounded-2xl p-2 outline-none">Enviar</button>
            </form>
        </div>
    );
}

export default Register;
