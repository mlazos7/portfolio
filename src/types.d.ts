export type Tags = 'css' | 'html' | 'react' | 'redux' | 'js' | 'ts';

export interface Project {
    id:number,
    projectName: string,
    description: string,
    thumbail?: string,
    tags: Array<Tags>,
    repositoryUrl: string,
    siteUrl: string
}