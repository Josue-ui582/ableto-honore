"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, BriefcaseIcon, GraduationCap } from "lucide-react"
import Image from "next/image"
import ableto from "@/public/ableto.jpg"
import { training } from "@/data/training"

export default function About() {
  return (
    <main className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">À Propos de Moi</h1>
          <p className="text-lg text-muted-foreground">
            Entrepreneur passionné et évangéliste dévoué, mon parcours est marqué par la persévérance et la foi.
          </p>
        </motion.div>

        {/* Histoire personnelle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6">Mon Histoire</h2>
            <p className="text-muted-foreground">
              Mon voyage entrepreneurial a commencé à l'âge de 7 ans, aux côtés de mon père dans le commerce de poisson.
              Cette expérience précoce m'a enseigné les fondamentaux des affaires et l'importance du travail acharné.
            </p>
            <p className="text-muted-foreground">
              Motivé par ces compétences acquises au près de mon père, j'ai décidé de monter ma propre entreprise en travaillant moi même comme j'ai appris.
            </p>
            <p className="text-muted-foreground">
              Puisse que je détestais travailler pour les autres, je suis devenu l'entrepreneur de ma vie très tôt. J'achetais et revendais des marchandises grâce à l'import et l'export. Honnêtement, j'ai générer plus 01 million de CA dans ce business à moins de 25 ans.
            </p>
            <p className="text-muted-foreground">
              Après mon baccalauréat en 2018, j'ai lancé ma première entreprise indépendante, démontrant ma capacité
              à transformer les défis en opportunités.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src={ableto}
              alt="Entrepreneur au travail"
            />
          </motion.div>
        </div>

        {/* Valeurs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16 bg-card rounded-lg px-8 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Mes Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Apprentissage Continu</h3>
              <p className="text-muted-foreground">
                Chaque expérience est une opportunité d'apprendre et de grandir
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Viser l'excellence dans chaque entreprise
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BriefcaseIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Intégrité</h3>
              <p className="text-muted-foreground">
                Conduire les affaires avec honnêteté et transparence
              </p>
            </div>
          </div>
        </motion.section>

        {/* Formation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Formation</h2>
          <div className="flex md:flex-row flex-col flex-wrap justify-between">
          {training.map((item, index) => (
                <div key={index} className="flex w-96 items-start gap-4 mb-8">
                    <GraduationCap className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">{item.school}</h3>
                        <p className="text-muted-foreground underline">{item.formation}</p>
                        <p className="text-muted-foreground">{item.description}</p>
                        <p className="text-muted-foreground font-semibold">{item.year}</p>
                    </div>
                </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}