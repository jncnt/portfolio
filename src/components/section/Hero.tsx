const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="flex items-center gap-8 max-w-4xl px-4">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">
            Welcome! 🚀
          </h1>
          <p className="text-lg text-gray-300">
            I'm a passionate developer building amazing projects
          </p>
        </div>
        <div className="shrink-0">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="w-48 h-48 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

