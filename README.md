使用方法
在`vite.config.js`中引入
```

    import { zjzViteCopy } from 'zjzViteCopy';
```

在plugin中写入:

```

    plugins: [
        zjzViteCopy('./src/assets', './dist/png') // 第一个被拷贝的文件夹，第二个是拷贝到的文件夹，拷贝文件夹中的内容
    ],

```