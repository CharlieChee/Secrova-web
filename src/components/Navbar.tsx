"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname(); // Get the current route

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">
                <Link href="/">
                    <Image src="/logo.jpg" alt="Secrova Logo" width={180} height={60} />
                </Link>
            </div>

            {/* Navigation Links */}
            <ul className="nav-links">
                <li>
                    <Link href="/" className={pathname === "/" ? "active" : ""}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/business" className={pathname === "/business" ? "active" : ""}>
                        Business
                    </Link>
                </li>
                <li>
                    <Link href="/technology" className={pathname === "/technology" ? "active" : ""}>
                        Technology
                    </Link>
                </li>
                <li>
                    <Link href="/investment" className={pathname === "/investment" ? "active" : ""}>
                        Investment
                    </Link>
                </li>
                <li>
                    <Link href="/partnerships" className={pathname === "/partnerships" ? "active" : ""}>
                        Partnerships
                    </Link>
                </li>
                <li>
                    <Link href="/funding" className={pathname === "/funding" ? "active" : ""}>
                        Funding
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

