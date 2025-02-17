import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">À propos</h3>
            <p className="text-muted-foreground">
              Entrepreneur passionné et évangéliste dévoué, je transforme les défis en opportunités.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Expérience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <a href="tel:.2290157842135">00229 0157842135</a>
              </li>
              <li className="text-muted-foreground">
                <a href="tel:.2290168634719">00229 0168634719</a>
              </li>
              <li className="text-muted-foreground">
                <a href="mailto:honoreableto117@gmail.com">honoreableto117@gmail.com</a>
              </li>
              <li className="text-muted-foreground">
                <a href="mailto:cameleonservice117@gmail.com">cameleonservice117@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Suivez-moi</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@honoreableto.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Honoré ABLETO. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}