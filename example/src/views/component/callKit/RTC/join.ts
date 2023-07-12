import { AgoraRTCUserId, Medias, appId, client, init } from "./init";
import { getToken } from "./token";
import AgoraRTC, { ILocalTrack } from 'agora-rtc-sdk-ng'
export let localAudioTrack: ILocalTrack, localVideoTrack: ILocalTrack
export interface JoinRoomType {
  channel: string
  uid: AgoraRTCUserId
}
export function join({ channel, uid }: JoinRoomType, media: Medias, mId: AgoraRTCUserId = '') {
  init(media, mId)
  getToken(channel)
  return Promise.all([
    getVideo(),
    getMicrophone(),
    getToken(channel).then((token) => client.join(appId, channel, token, uid))
  ]).then(() => {
    media[uid] = { video: localVideoTrack, audio: localAudioTrack, userId: uid }
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