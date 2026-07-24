# 对象

## 常用片段

### 深拷贝普通数据

适合只包含 JSON 数据的对象，不适合包含函数、`Date`、`Map`、`Set` 的复杂对象。

```js
const clone = structuredClone(data)
```

兼容旧环境：

```js
const clone = JSON.parse(JSON.stringify(data))
```

### 判断空对象

```js
const isEmptyObject = (value) =>
  value && Object.keys(value).length === 0 && value.constructor === Object
```

### 安全读取本地存储

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
