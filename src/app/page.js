export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 dark:bg-none dark:bg-gray-950 ">

      <p className="text-lg font-medium text-purple-600">
        Welcome! to my portfolio.
      </p>

      <h1 className="text-5xl font-bold text-gray-800 mt-4 sm:text-6xl dark:text-gray-100">
        Hi , I'm <span className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-orange-300">Esha</span>
      </h1>

      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl mt-4  ">
        A passionate developer learning to build cool things🚀
      </p>

      <div className="flex mt-8 gap-4">
        <button className="bg-purple-600 rounded-full px-6 py-3 text-white font-medium transition hover:bg-purple-700 hover:scale-105">
          View Projects
        </button>
        <button className="border-2 border-purple-600 text-purple-600 font-medium rounded-full px-6 py-3 transition hover:bg-purple-50 hover:scale-105 dark:hover:bg-purple-950">
          Contact Me
        </button>
      </div>
    </main>
  )
}