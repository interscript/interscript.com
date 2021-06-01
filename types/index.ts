export interface ReadmeSection {
  id: string
  html: string
  titleHTML: string
}

export interface RepoInfo {
  owner: string
  name: string
}

export interface ScriptConversionExample {
  lang: string,
  isoName: string,
  year?: number
  systemName: string,
  ogc11122?:string,
  samples: string[],
  english?: string[],
  result: string[]
}