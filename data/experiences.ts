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
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      },
      {
        period: "2018 - 2019",
        title: "Première Entreprise Indépendante",
        description: "Lancement de ma première entreprise de vente de poisson et d'huile. CA : 1.200.000 FCFA",
        metrics: "Financement des études universitaires",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      },
      {
        period: "2021",
        title: "Commerce d'Accessoires Téléphoniques",
        description: "Développement d'un commerce au Bénin avec un budget initial de 15.000 FCFA",
        metrics: "",
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      },
      {
        period: "2022 - 2023",
        title: "Expansion Commerciale",
        description: "Démarrage avec 30.000 FCFA, développement d'un business model efficace. CA : 1.700.000 FCFA en un an",
        metrics: "Croissance de 5566% en un an",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2815&q=80"
      },
      {
        period: "2023 - Présent",
        title: "CAMELEON SERVICE",
        description: "Création et développement de CAMELEON SERVICE",
        metrics: "CA : 15.000.000 FCFA",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      }
]