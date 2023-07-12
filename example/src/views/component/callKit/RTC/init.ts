import AgoraRTC, { IAgoraRTCClient, IAgoraRTCRemoteUser, IRemoteAudioTrack, IRemoteVideoTrack, ILocalTrack } from 'agora-rtc-sdk-ng'
export type AgoraRTCUserId = string | number
export type MediaType = 'audio' | 'video'
export interface MediaT {
  userId?: AgoraRTCUserId
  video?: IRemoteVideoTrack | ILocalTrack
  audio?: IRemoteAudioTrack | ILocalTrack
}
export type Media = MediaT | undefined
export interface Medias {
  [index: AgoraRTCUserId]: Media
}
export let client: IAgoraRTCClient,
  appId: string = 'a377b1eed7c24cd69a907cfb46a5d81e',
  // 证书
  appCertificate: string = '96883e5a99474ede89f4d0d970b5364d',
  media: Medias,
  mainId: AgoraRTCUserId;
export function init(obj: Medias, mId: AgoraRTCUserId = '') {
  media = obj
  if (!client) {
    client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })
    client.on('user-published', setMidia)
    client.on('user-unpublished', cancel)
    client.on('connection-state-change', stateChange)
    setMain(mId)
  }
  return client
}
export function setMain(mId: AgoraRTCUserId) {
  if (client && mId) {
    if (!mainId) {
      client.enableDualStream()
      client.setRemoteDefaultVideoStreamType(1)
    } else if (mainId != mId) {
      client.setRemoteVideoStreamType(mainId, 1)
    }
    mainId = mId
    client.setRemoteVideoStreamType(mId, 0)
  }
}
function setMidia(user: IAgoraRTCRemoteUser, mediaType: MediaType) {
  return client.subscribe(user, mediaType).then(() => {
    let id: AgoraRTCUserId = user.uid, obj: Media = media[id]
    if (!obj) {
      media[id] = obj = { userId: id }
    }
    if (mediaType === 'audio') {
      obj.audio = user.audioTrack
    }
    if (mediaType === 'video') {
      obj.video = user.videoTrack
    }
  })
}
function cancel(user: IAgoraRTCRemoteUser, mediaType: MediaType) {
  let id = user.uid, obj: Media = media[id]
  if (obj) {
    if (mediaType === 'audio') {
      obj.audio = undefined
    }
    if (mediaType === 'video') {
      obj.video = undefined
    }
    media[id] = obj.audio || obj.video ? obj : undefined
  }
}
function stateChange(a: any, b: any) {
  console.warn(a)
  console.warn(b)
}