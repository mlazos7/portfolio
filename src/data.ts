import { Project } from "./types"

const data: Array<Project> = [
    {
        id: 1,
        projectName: 'Cryptocurrencies Dashboard',
        description: 'Cryptocurrencies prices by marketcap and volatility in 24 hours.',
        tags: ['react', 'redux'],
        repositoryUrl: 'https://github.com/mlazos7/crypto-dashboard',
        siteUrl: 'https://mlazos7.github.io/crypto-dashboard/',
        thumbail: 'crypto.png'
        
    },
    {
        id: 2,
        projectName: 'AxieChile',
        description: 'AxieChile academy landing page',
        tags: ['html','css'],
        repositoryUrl: 'https://github.com/mlazos7/axiechile-landing',
        siteUrl: 'https://www.axiechile.cl/',
        thumbail: 'axie.png'
    },
    {
        id: 3,
        projectName: 'Column card component',
        description: 'A frontendmentors challenge',
        tags: ['html','css'],
        repositoryUrl: 'https://github.com/mlazos7/3column-card-component',
        siteUrl: 'https://mlazos7.github.io/3column-card-component/',
        thumbail: '3column.png'
    },
    {
        id: 4,
        projectName: 'QuestioNAS',
        description: 'App for contest Nebulas(NAS) blockchain',
        tags: ['js'],
        repositoryUrl: 'https://github.com/mlazos7/QuestioNAS-Blockchain',
        siteUrl: 'https://mlazos7.github.io/QuestioNAS-Blockchain/',
        thumbail: 'nebulas.png'
    }
]
export default data;