export interface Experience {
    period : string,
    title: string,
    description: string,
    metrics: string,
    image: string
}

export const experience: Experience[] = [
    {
        period: "2008 - 2018",
        title: "Commerce de Poisson avec mon Père",
        description: "Début précoce dans le commerce, passant de 50 à 250 cartons vendus par mois. CA généré : 3 millions FCFA (2008-2009)",
        metrics: "100 cartons/mois, Prix unitaire : 24.000 FCFA",
        image: "vente-de-poisson.jpg"
      },
      {
        period: "2018 - 2019",
        title: "Première Entreprise Indépendante",
        description: "Lancement de ma première entreprise de vente de poisson et d’huile. Grâce à mon expérience aux côtés de mon père, j’ai acquis de solides compétences en vente. Par la suite, j’ai créé ma propre entreprise et réalisé un chiffre d’affaires de 1 200 000 FCFA en une année.",
        metrics: "Financement des études universitaires",
        image: "fish.avif"
      },
      {
        period: "2021",
        title: "Innovation Place",
        description: "Une entreprise où la communication occupe une place essentielle. Nous accompagnons nos clients dans l’illustration et le développement de leur projet. Ils peuvent également créer leur entreprise et en profiter, même à la retraite. La liberté financière.",
        metrics: "Croissance de 2000% depuis sa création",
        image: "inovation.avif"
      },
      {
        period: "2022 - 2023",
        title: "Zoé-Change",
        description: "Zoé-Change est une entreprise basée en Côte d'Ivoire, spécialisée dans le service de transfert d'argent virtuel à l'échelle nationale et internationale. Avec Zoé, nous aidons n'importe qui à retirer ou envoyer de l'argent sans aucun protocole. On s'en charge.",
        metrics: "Croissance de 5566% en un an",
        image: "zoe.jpg"
      },
      {
        period: "2023 - Présent",
        title: "CAMELEON SERVICE",
        description: "Création et développement de CAMELEON SERVICE, une entreprise d'import-export spécialisée dans l'achat et la vente de marchandises entre l'Europe et l'Afrique.",
        metrics: "CA : 15.000.000 FCFA",
        image: "cameleon.avif"
      }
]