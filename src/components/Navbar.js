"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <Link href="/">Esha.dev</Link>

            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/skills">Skills</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    )
}