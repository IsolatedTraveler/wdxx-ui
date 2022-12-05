export interface SearchData {
  page?: number
  size?: number
  jsm: string
}
export declare type SearchFun = (v: SearchData) => Promise<Array<any> | Error>