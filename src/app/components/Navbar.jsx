import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <header className="flex flex-row justify-between p-4">
            <div>
                <Image
                    src="/image/arka-logo.png"
                    width={100}
                    height={100}
                    alt="Logo"
                /> 
            </div>
            <nav>
                <ul className="flex flex-row gap-4 justify-center items-center h-full">
                    <Link href={"../signIn"}>Iniciar Sesion</Link>
                    <Link href={"../signUp"}>Registrarse</Link>
                </ul>
            </nav>
        </header>
    )
}
