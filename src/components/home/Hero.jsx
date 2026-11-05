
function Hero() {
  return (
    <section className="relative overflow-hidden bg-green-950">

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800"
        alt="Modern residential house"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Image overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">

        {/* Hero content */}
        <div>
          <p className="mb-4 font-semibold text-green-900">
            📍 Kalaburagi
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-green-950 sm:text-5xl md:text-6xl">
            Find a Home
            <br />
            You Can Trust.
          </h1>

          <p className="mt-5 max-w-lg text-base font-medium text-gray-800 sm:text-lg">
            Verified Properties, Transparent Deals
            in Kalaburagi City.
          </p>

          <a
            href="#buy"
            className="mt-7 inline-block rounded-lg bg-green-900 px-8 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Explore Properties →
          </a>
        </div>

        {/* Property promotion */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-xs rounded-2xl border border-green-100 bg-white/95 p-7 text-center shadow-xl sm:p-8">

            <div className="text-4xl">📣</div>

            <h2 className="mt-3 text-2xl font-bold text-green-950">
              List Your Property
            </h2>

            <p className="mt-2 text-gray-600">
              Reach genuine buyers in Kalaburagi.
            </p>

            <a
              href="#sell"
              className="mt-5 inline-block rounded-full bg-yellow-500 px-7 py-3 font-bold text-green-950 hover:bg-yellow-400"
            >
              Post Now →
            </a>

            <p className="mt-3 text-xs text-gray-500">
              Free property listing
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
