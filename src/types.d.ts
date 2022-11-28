export interface Project {
    id:string,
    projectName: string,
    description: string,
    thumbail?: string,
    tags: Array<string>,
    repositoryUrl?: string,
    siteUrl?: string
}