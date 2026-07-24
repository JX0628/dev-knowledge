# 函数

## 常用片段

### 只执行一次

```js
function once(fn) {
  let called = false
  let result

  return (...args) => {
    if (!called) {
      called = true
      result = fn(...args)
    }

    return result
  }
}
```

### 管道执行

```js
const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((result, fn) => fn(result), value)

const trimLower = pipe(
  (value) => value.trim(),
  (value) => value.toLowerCase()
)
```

### 安全调用可选回调

```js
function submit(data, onSuccess) {
  onSuccess?.(data)
}
```
