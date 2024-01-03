import fs from 'fs';
import path from 'path';

export const zjzViteCopy = (from, to) => {
  return {
    name: 'zjz-vite-copy',
    apply: 'build',
    buildEnd() {
      setTimeout(() => {
        const srcFolder = path.resolve(__dirname, from);
        const distFolder = path.resolve(__dirname, to);
        fs.promises.mkdir(distFolder, { recursive: true }) // 创建目标文件夹
          .then((err, res) => {
            return fs.promises.readdir(srcFolder);
          }) // 读取源文件夹
          .then(files => Promise.all( // 复制所有文件
            files.map(file => {
              fs.promises.copyFile(path.join(srcFolder, file), path.join(distFolder, file))
            }
            )
          ))
          .catch(console.error);
      }, 1000);
    },
  };
};