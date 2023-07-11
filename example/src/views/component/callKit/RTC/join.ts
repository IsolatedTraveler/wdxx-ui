import { appId, client, init } from "./init";
import { getToken } from "./token";
import AgoraRTC from 'agora-rtc-sdk-ng'
let localAudioTrack, localVideoTrack
export function join({ channel, uid }, media) {
  init(media)
  getToken(channel)
  return Promise.all([
    getVideo(),
    getMicrophone(),
    getToken(channel).then((token) => client.join(appId, channel, token, uid))
  ]).then(() => {
    media[uid] = { video: localVideoTrack, audio: localAudioTrack, id: uid }
    return client.publish([localAudioTrack, localVideoTrack])
  })
}
function getVideo() {
  return AgoraRTC.createCameraVideoTrack().then((res) => {
    localVideoTrack = res
  })
}
function getMicrophone() {
  return AgoraRTC.createMicrophoneAudioTrack().then((res) => {
    localAudioTrack = res
  })
}