# 错误处理

## 包装异步结果

适合不想在调用处重复写 `try...catch` 的场景。

```js
async function to(promise) {
  try {
    const data = await promise
    return [null, data]
  } catch (error) {
    return [error, null]
  }
}

const [error, data] = await to(fetch('/api/user').then((res) => res.json()))
```

## 统一错误信息

```js
function getErrorMessage(error) {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  return 'Unknown error'
}
```

## 重试异步任务

```js
async function retry(fn, times = 3) {
  let lastError

  for (let index = 0; index < times; index += 1) {
    try {
      return await fn()
    } catch (error) {
      lastError = error
    }
  }

  throw lastError
}
```
