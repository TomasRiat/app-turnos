'use client'

import { useState } from "react";
import signUp from "../firebase/auth/signUp";
import { useRouter } from 'next/navigation'
import InputSelect from "../components/InputSelect";


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/")
    }

    return (
        <div className="flex flex-col gap-4 border-2 border-[#000] rounded-2xl p-4 w-[300px]">
            <h1 className="text-[2rem] text-center">Registro</h1>
            <form onSubmit={handleForm} className="flex flex-col gap-4 justify-center items-center w-[270px] ">
                <div className="flex flex-row justify-center items-center gap-4">
                    <label htmlFor="email" className="flex flex-col gap-2 w-full">
                        <p>Nombre</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="name" name="name" id="name" className="w-[127px] bg-transparent border-2 border-[#000] rounded-2xl p-2 outline-none"/>
                    </label>
                    <label htmlFor="email" className="flex flex-col gap-2 w-full">
                        <p>Apellido</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="lastname" name="lastname" id="lastname" className="w-[127px] bg-transparent border-2 border-[#000] rounded-2xl p-2 outline-none"/>
                    </label>
                </div>
                <label htmlFor="email" className="flex flex-col gap-2 w-full">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className=" bg-transparent border-2 border-[#000] rounded-2xl p-2 outline-none" />
                </label>
                <label htmlFor="email" className="flex flex-col gap-2 w-full">
                    <p>Telefono</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="number" name="phone" id="phone" placeholder="example@mail.com" className=" bg-transparent border-2 border-[#000] rounded-2xl p-2 outline-none" />
                </label>
                <label htmlFor="password" className="flex flex-col gap-2 w-full">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className=" bg-transparent border-2 border-[#000] rounded-2xl p-2 outline-none" />
                </label>
                <InputSelect options={['Ya paciente', 'Nuevo Paciente']}/>
                <button type="submit" className="w-[127px] bg-transparent border-2 border-[#000] rounded-2xl p-2 outline-none">Sign up</button>
            </form>
        </div>
    );
}

export default Register;
