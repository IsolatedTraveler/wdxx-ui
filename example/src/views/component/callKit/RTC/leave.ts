import { client, media } from "./init";

export async function leave() {
  if (client) {
    Object.keys(media).forEach(key => {
      media[key] = undefined
    })
    await client.unpublish()
    await client.leave()
  }
}