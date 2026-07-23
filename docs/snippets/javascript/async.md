# 异步

## 等待一段时间

```js
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
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
