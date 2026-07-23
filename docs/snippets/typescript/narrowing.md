# 类型收窄

## 过滤空值

```ts
function isNonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined
}

const names = list.map((item) => item.name).filter(isNonNullable)
```

## 判断错误类型

```ts
function isError(error: unknown): error is Error {
  return error instanceof Error
}
```

## 穷尽检查

```ts
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`)
}
```
