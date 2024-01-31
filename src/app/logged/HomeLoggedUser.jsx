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
        router.push('/signUp')
    }

    return (
        <div>
            <button onClick={() => {
                signOut(auth)
                sessionStorage.removeItem('user')
            }}>
                cerrar sesion
            </button>
        </div>
    )
}
