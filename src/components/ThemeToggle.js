"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);


    //Kaam: Jab koi user pehli baar website par aata hai, toh yeh code check karta hai ki kya user ne pehle kabhi dark mode select kiya tha.
    // localStorage: Yeh browser ki memory hai. Agar wahan "theme": "dark" save milta hai, toh yeh screen ko dark kar deta hai (classList.add("dark")) aur state ko true kar deta hai.
    
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);



//     Agar abhi Dark Mode hai (isDark true hai):

// HTML element se "dark" class ko remove kar deta hai (document.documentElement.classList.remove("dark")).

// Browser memory mein save kar deta hai ki ab theme "light" hai.

// State ko false set kar deta hai.

// Agar abhi Light Mode hai (isDark false hai):

// HTML element mein "dark" class add kar deta hai taaki CSS variables change ho jayein.

// Browser memory mein save kar deta hai ki theme "dark" hai.

// State ko true set kar deta hai.


    
    function toggleTheme() {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    }

    return (
        <button onClick={toggleTheme}>
            {isDark ? "☀️" : "🌙"}
        </button>
    )
}
