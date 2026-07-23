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

## 防抖

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

## 节流

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

## 深拷贝普通数据

适合只包含 JSON 数据的对象，不适合包含函数、`Date`、`Map`、`Set` 的复杂对象。

```js
const clone = structuredClone(data)
```

兼容旧环境：

```js
const clone = JSON.parse(JSON.stringify(data))
```

## 数组去重

```js
const uniqueList = [...new Set(list)]
```

按对象字段去重：

```js
const uniqueById = [...new Map(list.map((item) => [item.id, item])).values()]
```

## 数组分组

```js
function groupBy(list, key) {
  return list.reduce((result, item) => {
    const groupKey = item[key]
    result[groupKey] ??= []
    result[groupKey].push(item)
    return result
  }, {})
}

const grouped = groupBy(users, 'role')
```

## 获取 URL 参数

```js
const params = new URLSearchParams(window.location.search)
const id = params.get('id')
```

## 修改 URL 参数

```js
const url = new URL(window.location.href)
url.searchParams.set('page', '1')
window.history.replaceState(null, '', url)
```

## 复制文本到剪贴板

```js
async function copyText(text) {
  await navigator.clipboard.writeText(text)
}
```

## 下载文本文件

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

## 金额格式化

```js
const currency = new Intl.NumberFormat('zh-CN', {
  style: 'currency',
  currency: 'CNY'
})

currency.format(123456.78)
```

## 数字补零

```js
const value = String(8).padStart(2, '0')
```

## 生成随机 ID

```js
const id = crypto.randomUUID()
```

简短 ID：

```js
const shortId = Math.random().toString(36).slice(2, 10)
```

## 安全读取本地存储

```js
function getStorage(key, fallback = null) {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
```

## 判断空对象

```js
const isEmptyObject = (value) =>
  value && Object.keys(value).length === 0 && value.constructor === Object
```

## 并发请求

```js
const [user, orders] = await Promise.all([
  fetch('/api/user').then((res) => res.json()),
  fetch('/api/orders').then((res) => res.json())
])
```

## 带超时的请求

```js
async function fetchWithTimeout(url, options = {}, timeout = 8000) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeout)

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal
    })
  } finally {
    clearTimeout(timer)
  }
}
```
