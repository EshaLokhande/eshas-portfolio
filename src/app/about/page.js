export default function About() {
    return (
        <main className="flex min-h-screen justify-center items-center px-6 py-20 dark:bg-gray-950">

            <div className="flex flex-col sm:flex-row items-center gap-10 max-w-4xl">

                <div >
                    <img
                        src="https://api.dicebear.com/9.x/avataaars/svg?seed=Esha&hair=long&hairColor=2c1b18"
                        alt="Esha's avatar"
                        className="w-48 h-48 rounded-full  border-purple-200 shadow-lg dark:border-purple-900"
                    />
                        
                </div>

                <div className="text-center sm:text-left">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-gray-100
">About Me</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                        Hello! I'm Esha, a passionate web developer with a love for creating dynamic and user-friendly web applications. I specialize in front-end development, utilizing technologies like React, Next.js, and Tailwind CSS to build responsive and visually appealing websites. My goal is to craft seamless user experiences while continuously learning and adapting to the ever-evolving landscape of web development.
                    </p>
                    <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
                        <p>📍 Location: Your City</p>
                        <p>🎓 Currently: B.Tech Computer Science</p>
                        <p>💻 Interested in: Web Development</p>
                   </div>
                </div>
            </div>
        </main>
    )
}