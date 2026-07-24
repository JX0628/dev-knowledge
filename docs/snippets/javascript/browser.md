# 浏览器

## 常用片段

### 防抖

适合搜索框输入、窗口尺寸变化等高频事件。

```js
function debounce(fn, delay = 300) {
  let timer = null

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

const onSearch = debounce((keyword) => {
  console.log(keyword)
}, 300)
```

### 节流

适合滚动、拖拽、按钮防连点等场景。

```js
function throttle(fn, delay = 300) {
  let lastTime = 0

  return (...args) => {
    const now = Date.now()

    if (now - lastTime >= delay) {
      lastTime = now
      fn(...args)
    }
  }
}
```

### 获取 URL 参数

```js
const params = new URLSearchParams(window.location.search)
const id = params.get('id')
```

### 修改 URL 参数

```js
const url = new URL(window.location.href)
url.searchParams.set('page', '1')
window.history.replaceState(null, '', url)
```

### 复制文本到剪贴板

```js
async function copyText(text) {
  await navigator.clipboard.writeText(text)
}
```

### 下载文本文件

```js
function downloadText(filename, content) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = filename
  link.click()

  URL.revokeObjectURL(url)
}
```
