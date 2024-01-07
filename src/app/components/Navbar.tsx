import Image from "next/image"

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
                    <li>Iniciar Sesion</li>
                    <li>Registrarse</li>
                </ul>
            </nav>
        </header>
    )
}
