export default function Projects() {
    const projects = [
        {
            title: "JetLens",
            description:
                "AI-powered flight booking platform combining LSTM and NLP with a React/Three.js frontend. The Node.js microservice backend integrates the Amadeus API for live flight data and Firebase for storage.",
            tech: ["React", "Three.js", "Node.js", "LSTM", "NLP", "Firebase"],
            github: "https://github.com/EshaLokhande/JetLens-LSTM-NLP-MERN-Microservices",
            live: "",
        },
        {
            title: "Velocity HR",
            description:
                "An AI-powered Human Resource Management system combining intelligent recruitment with smart workforce scheduling, automating time-consuming HR processes.",
            tech: ["React", "Node.js", "MongoDB", "AI/ML"],
            github: "https://github.com/EshaLokhande/Velocity-HR",
            live: "",
        },
        {
            title: "E-Optimise",
            description:
                "A VS Code extension to visualize and optimize code, helping developers identify inefficiencies directly inside their editor.",
            tech: ["JavaScript", "VS Code API"],
            github: "https://github.com/EshaLokhande/E-Optimise",
            live: "",
        }
    ];

    return (
        <main className="min-h-screen px-6 py-20 bg-white dark:bg-gray-950">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-10 text-center">My Projects</h1>
            {/* card container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> 
                {
                    projects.map((project) => (
                        <div key={project.title} className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-gray-50 dark:bg-gray-900 hover:shadow-lg dark:hover:shadow-purple-400 transition">

                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{project.title}</h2>

                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 font-medium">{t}</span>
                                ))}
                            </div>

                            <a href={project.github}
                               target="_blank"
                                rel="noopener noreferrer" 
                                className="inline-block mt-4 text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                            >
                                View Code →
                            </a>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}