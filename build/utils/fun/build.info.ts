import {buildConfig, Module, BuildInfo} from '../var'


export const buildConfigEntries = Object.entries(
  buildConfig
) as BuildConfigEntries



export type BuildConfigEntries = [Module, BuildInfo][]
