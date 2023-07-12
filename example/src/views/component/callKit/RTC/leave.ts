import { client, media } from "./init";
import { localAudioTrack, localVideoTrack } from "./join";

export async function leave() {
  if (client) {
    Object.keys(media).forEach(key => {
      media[key] = undefined
    })
    await client.unpublish()
    localVideoTrack.stop()
    localVideoTrack.close()
    localAudioTrack.stop()
    localAudioTrack.close()
    await client.leave()
  }
}