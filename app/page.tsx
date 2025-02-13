import Footer from "./components/Footer"
import Voorzieningen from "./components/Voorzieningen"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Your existing content */}
      <Voorzieningen />
      <Footer />
    </main>
  )
}

