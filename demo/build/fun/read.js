import { readFile, existsSync, mkdirSync, writeFileSync } from 'fs';
import { glob } from 'glob'
import path from 'path'
export async function read(dir) {
  dir = path.resolve(dir)
  try {
    const files = glob.sync(`${dir}/**/*.vue`, { ignore: ['**/index.vue'] });
    for (const filePath of files) {
      try {
        readFile
        const content = await readF(filePath)
          , err = write(content, filePath)
        if (err) {
          throw err
        }
      } catch (error) {
        throw `读取文件 ${filePath} 时出错: ${error.message}`
      }

    }
  } catch (err) {
    throw `读取文件时出错: ${err.message}`
  }
}
function write(data, filePath) {
  filePath = path.resolve(filePath.replace(/\\(views|module|view)\\/g, '\\').replace(/^src/, 'public\\vue\\'))
  filePath = filePath.replace(/vue$/, 'text')
  const directoryPath = path.dirname(filePath);
  if (!existsSync(directoryPath)) {
    try {
      mkdirSync(directoryPath, { recursive: true });
    } catch (error) {
      return '创建目录时出错:', error.message
    }
    try {
      writeFileSync(filePath, data, 'utf8');
    } catch (error) {
      return '写入文件时出错:', error.message;
    }
  }
}
function readF(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}