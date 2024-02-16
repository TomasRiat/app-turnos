'use client'

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase/config"
import { useRouter } from "next/navigation"
import { signOut } from "firebase/auth"
import Carousel from "../components/Carousel"
import ButtonAgenda from "../components/ButtonAgenda"

export default function HomeLoggedUser() {
    const [user] = useAuthState(auth)
    const router = useRouter()
    const userSession = sessionStorage.getItem('user')

    if (!user && !userSession) {
        router.push('/signIn')
    }

    return (
        <>
            <Carousel />
            <ButtonAgenda />
        </>
    )
}
