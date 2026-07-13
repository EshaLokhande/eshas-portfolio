export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">

      <p className="text-lg font-medium text-purple-600">
        Welcome! to my portfolio.
      </p>

      <h1 className="text-5xl font-bold text-gray-800 mt-4 sm:text-6xl">
        Hi , I'm <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Esha</span>
      </h1>

      <p className="text-xl text-gray-600 max-w-xl mt-4 ">
        A passionate developer learning to build cool things🚀
      </p>

      <div className="flex mt-8 gap-4">
        <button className="bg-purple-600 rounded-full px-6 py-3 text-white font-medium transition hover:bg-purple-700 hover:scale-105">
          View Projects
        </button>
        <button className="border-2 border-purple-600 text-purple-600 font-medium rounded-full px-6 py-3 transition hover:bg-purple-50 hover:scale-105">
          Contact Me
        </button>
      </div>
    </main>
  )
}