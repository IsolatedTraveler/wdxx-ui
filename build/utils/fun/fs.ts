import fs from 'fs'
import path from 'path'
const judgeDir = (file: string, name: string) => {
  return new Promise((resolve) => {
    fs.stat(file, (err, stats) => {
      resolve(!err && stats.isDirectory() ? {file, name} : '')
    })
  })
}
export const readdir = (dir: string) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(null)
      } else {
        Promise.all(files.map(file => judgeDir(path.resolve(dir, file), file))).then(res => {
          resolve(res.filter(it => it))
        })
      }
    })
  })
}
export const write = (url: string, data: string) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(url, data, 'utf-8', err => {
      if (err) {
        reject()
      } else {
        resolve(null)
      }
    })
  })
}