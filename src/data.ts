import { Proyect } from "./types"

const data : Array<Proyect> = [
    {
        proyectName: 'Cryptocurrencies Dashboard',
        description: 'Cryptocurrencies prices by marketcap and volatility in 24 hours.',
        tags: ['react','redux','js'],
        repositoryUrl: 'https://github.com/mlazos7/crypto-dashboard',
        siteUrl: 'mlazos7.github.io/crypto-dashboard/'
    },
    {
       proyectName: 'AxieChile' ,
       description: 'AxieChile academy landing page',
       tags: ['css'],
       repositoryUrl: 'https://github.com/mlazos7/axiechile-landing',
       siteUrl: '* https://www.axiechile.cl/'
    },
    {
        proyectName: 'Column card component',
        description: 'A frontendmentors challenge',
        tags: ['css'],
        repositoryUrl: 'https://github.com/mlazos7/3column-card-component',
        siteUrl: '* https://mlazos7.github.io/3column-card-component/'
    },
    {
        proyectName: 'QuestioNAS',
        description: 'App for contest Nebulas(NAS) blockchain',
        tags: ['js', 'blockchain'],
        repositoryUrl: 'https://github.com/mlazos7/QuestioNAS-Blockchain',
        siteUrl: '* https://mlazos7.github.io/QuestioNAS-Blockchain/'
    }
]
export { data }