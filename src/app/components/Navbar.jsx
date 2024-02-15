'use client'

import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';

import Image from 'next/image';
import Link from 'next/link';


export default function Navbar() {
    const [user] = useAuthState(auth);
    const [isLoggedIn, setIsLoggedIn] = useState(user || sessionStorage.getItem('user'));
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setIsLoggedIn(!!authUser || !!sessionStorage.getItem('user'));
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        signOut(auth)
        sessionStorage.removeItem('user')
        setIsLoggedIn(false);

        router.push('/')
    };

    return (
        <header className="flex flex-row justify-between items-center p-4 h-28">
            <Link href="/">
                <Image
                    src="/image/arka-logo.png"
                    width={100}
                    height={100}
                    alt="Logo"
                />
            </Link>
            <nav>
                <ul className="flex flex-row gap-4 justify-center items-center h-full">
                    {isLoggedIn ? (
                        <>
                            <Link href="/turnos">Turnos</Link>
                            <Link href="/perfil">Perfil</Link>
                            <button onClick={handleLogout}>Cerrar Sesión</button>
                        </>
                    ) : (
                        <>
                            <Link href="/signIn">Iniciar Sesión</Link>
                            <Link href="/signUp">Registrarse</Link>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}