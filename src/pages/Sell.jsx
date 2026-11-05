
import Navbar from "../components/common/Navbar";

function Sell() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-green-950">
          Sell Your Property with NIDHI
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          We're preparing a simple way for property owners to
          submit their properties and connect with genuine buyers.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          Property submission form coming soon.
        </p>
      </main>
    </>
  );
}

export default Sell;
