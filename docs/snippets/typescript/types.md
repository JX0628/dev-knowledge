# 类型工具

## 常用片段

### 对象值类型

```ts
type ValueOf<T> = T[keyof T]
```

### 让指定字段变为必填

```ts
type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>
```

### 让指定字段变为可选

```ts
type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
```

### 提取 Promise 返回值

```ts
type AwaitedReturn<T extends (...args: any[]) => Promise<any>> = Awaited<ReturnType<T>>
```
