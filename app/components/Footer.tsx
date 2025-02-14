import Link from "next/link"
import { Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Villa Wildebras. All rights reserved.</p>
          <Link href="https://www.instagram.com/villawildebras/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

