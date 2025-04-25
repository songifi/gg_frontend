import Link from "next/link"
import { Twitter, Linkedin, Instagram, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(to right, #cbc9db, #998bc0)',
      fontFamily: 'Haettenschweiler, sans-serif'
    }}  className="w-full py-8 px-4 md:px-8">
      <div className=" mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center md:items-start gap-2">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-24 h-24 relative mb-2">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-20 h-20 relative">
                <Image src="/noNameLogo.png" alt="Gasless Gossip Logo" width={300} height={300} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <h2 className="text-green-800 text-xl font-bold">Gasless Gossip</h2>
        </div>

        {/* Quick Links Section */}
        <div className="text-center md:text-left">
          <h3 className="text-indigo-900 font-bold text-lg mb-4">QUICK LINKS</h3>
          <nav className="flex flex-col items-center justify-center space-y-2">
            <Link href="/" className="text-indigo-900 hover:text-indigo-700 transition-colors">
              Homepage
            </Link>
            <Link href="/chats" className="text-indigo-900 hover:text-indigo-700 transition-colors">
              Chats
            </Link>
            <Link href="/nfts" className="text-indigo-900 hover:text-indigo-700 transition-colors">
              NFTs
            </Link>
            <Link href="/wallet" className="text-indigo-900 hover:text-indigo-700 transition-colors">
              Wallet
            </Link>
            <Link href="/notifications" className="text-indigo-900 hover:text-indigo-700 transition-colors">
              Notifications
            </Link>
          </nav>
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-left my-5 md:my-0">
          <h3 className="text-indigo-900 font-bold text-lg mb-4">SOCIAL MEDIA</h3>
          <div className="flex flex-col items-center justify-center space-y-4">
            <Link
              href="https://twitter.com"
              className="text-indigo-900 hover:text-indigo-700 transition-colors flex items-center justify-center md:justify-start"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-indigo-900 hover:text-indigo-700 transition-colors flex items-center justify-center md:justify-start"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-indigo-900 hover:text-indigo-700 transition-colors flex items-center justify-center md:justify-start"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://discord.com"
              className="text-indigo-900 hover:text-indigo-700 transition-colors flex items-center justify-center md:justify-start"
            >
              <MessageSquare className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
