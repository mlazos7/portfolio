export type Tags = 'css' | 'html' | 'react' | 'redux' | 'js' | 'ts' | 'blockchain';

export interface Project {
    id:string,
    projectName: string,
    description: string,
    thumbail?: string,
    tags: Array<Tags>,
    repositoryUrl?: string,
    siteUrl?: string
}