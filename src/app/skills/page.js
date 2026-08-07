export default function Skills() {
        const skillGroups = [
                {
                    category: "Frontend",
                    items: ["React", "Next.js", "JavaScript"],
                },
                {
                    category: "Styling",
                    items: ["Tailwind CSS", "HTML", "CSS"],
                },
                {
                    category: "Tools",
                    items: ["Git & GitHub"],
                },
        ];

    return (
        <main className="min-h-screen text-center px-6 py-20 bg-white dark:bg-gray-950 text-center">

            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-10">
                My Skills
            </h1>
            
            <div className="flex flex-col gap-8 max-w-2xl mx-auto">
                {skillGroups.map(
                    (group => (
                        <div key={group.category}>

                            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                                {group.category}
                            </h2>

                            <div className="flex flex-wrap justify-center gap-3">
                                {group.items.map((skill) => (
                                    <span
                                    key={skill}
                                    className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 font-medium text-sm transition hover:scale-110 hover:bg-purple-200 dark:hover:bg-purple-800/50"
                                    >
                                    {skill}
                                    </span>
                                ))}
                                </div>

                        </div>
                    ))
                )}
            </div>

        </main>
    )
}