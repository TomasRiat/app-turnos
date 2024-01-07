'use client'

import { useState } from "react";
import signIn from "@/app/firebase/auth/signIn";
import { useRouter } from 'next/navigation'


    interface Email {
        email: string;
    }

export default function page() {
    const [email, setEmail] = useState<Email>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter()

    const handleForm = async (event: React.ChangeEvent<HTMLInputElement>) => {
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
        <div>
            <div className="">
                <h1 className="">Sign in</h1>
                <form onSubmit={handleForm} className="form">
                    <label htmlFor="email">
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                    </label>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    )
}
