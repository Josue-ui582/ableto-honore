"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/experience", label: "Expérience" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.header 
      className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          Honoré ABLETO
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`relative ${
                    pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary transition-colors"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="navbar-underline"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-background border-b"
        >
          <ul className="container mx-auto px-4 py-4 space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 ${
                    pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Navbar