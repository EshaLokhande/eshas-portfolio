"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md dark:bg-black/80">

            <div className="flex items-center justify-between max-w-5xl mx-auto px-6 py-4 ">
                <Link href="/" className="text-xl text-purple-600 font-bold">Esha
                    <span className ="text-gray-800 dark:text-gray-200 ">.dev</span>
                </Link>

                <div className=" hidden sm:flex gap-8">
                    <Link href="/" className="font-medium text-gray-700 dark:text-gray-300 transition hover:text-purple-600">Home</Link>

                    <Link href="/about" className="font-medium text-gray-700 dark:text-gray-300 transition hover:text-purple-600">About</Link>

                    <Link href="/skills" className="font-medium text-gray-700 dark:text-gray-300 transition hover:text-purple-600">Skills</Link>

                    <Link href="/projects" className="font-medium text-gray-700 dark:text-gray-300  transition hover:text-purple-600">Projects</Link>

                    <Link href="/contact" className="font-medium text-gray-700 dark:text-gray-300 transition hover:text-purple-600">Contact</Link>

                </div>

                <ThemeToggle/>

                <button className="sm:hidden text-2xl"
                    onClick={ ()=> setIsOpen(!isOpen)}>
                    {isOpen ? 'X' : '☰'}
                </button>
            </div>

            {isOpen && (
                <div className="flex flex-col gap-4 px-6 pb-4 sm:hidden">
                <Link href="/" onClick={() => setIsOpen(false)} className="font-medium text-gray-700">Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="font-medium text-gray-700">About</Link>
                <Link href="/skills" onClick={() => setIsOpen(false)} className="font-medium text-gray-700">Skills</Link>
                <Link href="/projects" onClick={() => setIsOpen(false)} className="font-medium text-gray-700">Projects</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="font-medium text-gray-700">Contact</Link>
                </div>
            )}

        </nav>
    )
}