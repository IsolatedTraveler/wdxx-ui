import { post } from './magic'
export function getToken(channelName: string): Promise<string> {
  return post('/yy89-yzhz/swjk/fwlp-1', {channelName}).then((res:any) => res.data)
}