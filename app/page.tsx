"use client"

import { motion } from "framer-motion"
import { ArrowRight, Award, Briefcase, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import QuoteCarousel from "@/components/quoteCarousel";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(honore.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 10%",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 z-10 flex md:flex-row flex-col items-center justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Honoré ABLETO
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Entrepreneur passionné & Évangéliste dévoué
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Collaborons ensemble
                  <ArrowRight className="ml-2 h-4 w-4 animate-slide" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/experience">
                  Voir mon parcours
                </Link>
              </Button>
            </div>
          </motion.div>
          {/* quote */}
          <motion.div>
            <QuoteCarousel />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
            >
              <Briefcase className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">15M FCFA</h3>
              <p className="text-muted-foreground">CA généré par CAMELEON SERVICE</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
            >
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">15+ ans</h3>
              <p className="text-muted-foreground">d'expérience entrepreneuriale</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
            >
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="text-muted-foreground">Clients satisfaits</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}