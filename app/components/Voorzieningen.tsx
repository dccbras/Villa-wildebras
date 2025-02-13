const Voorzieningen = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Voorzieningen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Slapen</h3>
            <p>In een heerlijk tweepersoonsbed op onze slaapvide.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Stap zo de duinen in richting het strand</h3>
            <p>Begin je wandeling direct vanuit het tiny house.</p>
          </div>
          {/* Add more voorzieningen as needed */}
        </div>
      </div>
    </section>
  )
}

export default Voorzieningen

