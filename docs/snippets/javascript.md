# JavaScript 片段

## 格式化日期

```js
const formatter = new Intl.DateTimeFormat('zh-CN', {
  dateStyle: 'medium',
  timeStyle: 'short'
})

formatter.format(new Date())
```

## 等待一段时间

```js
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
```
