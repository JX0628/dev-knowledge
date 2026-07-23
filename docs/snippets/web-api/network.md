# 网络

## 判断在线状态

```js
const isOnline = navigator.onLine

window.addEventListener('online', () => {
  console.log('online')
})

window.addEventListener('offline', () => {
  console.log('offline')
})
```

## 请求 JSON

```js
async function requestJson(url, options) {
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json()
}
```
