# 存储

## 常用片段

### Session Storage

```js
sessionStorage.setItem('token', token)
const token = sessionStorage.getItem('token')
sessionStorage.removeItem('token')
```

### Cookie 读取

```js
function getCookie(name) {
  return document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${name}=`))
    ?.split('=')[1]
}
```

### 判断本地存储是否可用

```js
function canUseLocalStorage() {
  try {
    const key = '__storage_test__'
    localStorage.setItem(key, key)
    localStorage.removeItem(key)
    return true
  } catch {
    return false
  }
}
```
