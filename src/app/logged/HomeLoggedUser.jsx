'use client'

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase/config"
import { useRouter } from "next/navigation"
import { signOut } from "firebase/auth"

export default function HomeLoggedUser() {
    const [user] = useAuthState(auth)
    const router = useRouter()
    const userSession = sessionStorage.getItem('user')

    if (!user && !userSession) {
        router.push('/signIn')
    }

    return (
        <div>
            <button onClick={() => {
                signOut(auth)
                sessionStorage.removeItem('user')
                router.push('/')
            }}>
                cerrar sesion
            </button>
        </div>
    )
}
