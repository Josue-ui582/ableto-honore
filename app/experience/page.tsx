"use client"

import { motion } from "framer-motion"
import { Calendar, DollarSign, TrendingUp } from "lucide-react"
import Image from "next/image"
import { experience } from "@/data/experiences"

export default function Experience() {
  return (
    <main className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Mon Parcours Professionnel</h1>
          <p className="text-lg text-muted-foreground">
            Une histoire de persévérance, d'apprentissage et de croissance continue, j'ai de solides compétences en vente
          </p>
        </motion.div>

        <div className="space-y-20">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">{exp.period}</span>
                </div>
                <h2 className="text-2xl font-bold">{exp.title}</h2>
                <p className="text-muted-foreground">{exp.description}</p>
                {exp.metrics && (
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp className="h-5 w-5" />
                    <span>{exp.metrics}</span>
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/2 h-[300px] relative rounded-lg overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compétences */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Mes Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Expert en stratégie marketing commercial",
              "Expert en développement marketing commercial",
              "Expert en transit et dédouanement",
              "Expert en communication marketing commercial",
              "Apporteur de projet et développeur business",
              "Développeur de projet marketing commercial"
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-6 bg-card rounded-lg"
              >
                <h3 className="font-semibold text-lg mb-2">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}