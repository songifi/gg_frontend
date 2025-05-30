import { useState } from "react"

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
       <header>
        <nav className="container mx-auto px-4 flex items-center justify-between py-6">
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>Mobile</button>
        </nav>
       </header>
    )
}