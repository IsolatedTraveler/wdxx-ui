import AgoraRTC from 'agora-rtc-sdk-ng'
export let client,
  appId = 'a377b1eed7c24cd69a907cfb46a5d81e',
  // 证书
  appCertificate = '96883e5a99474ede89f4d0d970b5364d',
  media
export function init(obj) {
  media = obj
  if (!client) {
    client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })
    client.on('user-published', setMidia)
    client.on('user-unpublished', cancel)
    client.on('connection-state-change', stateChange)
  }
  return client
}
function setMidia(user, mediaType) {
  return client.subscribe(user, mediaType).then(() => {
    let id = user.uid
    media[id] = media[id] || { userId: id }
    if (mediaType === 'audio') {
      media[id].audio = user.audioTrack
    }
    if (mediaType === 'video') {
      media[id].video = user.videoTrack
    }
  })
}
function cancel(user, mediaType) {
  let id = user.uid
  if (media[id]) {
    if (mediaType === 'audio') {
      media[id].audio = undefined
    }
    if (mediaType === 'video') {
      media[id].video = undefined
    }
    media[id] = media[id].audio || media[id].video ? media[id] : undefined
  }
}
function stateChange(a, b) {
  console.warn(a)
  console.warn(b)
}