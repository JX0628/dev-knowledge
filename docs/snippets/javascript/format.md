# 格式化

## 常用片段

### 格式化日期

```js
const formatter = new Intl.DateTimeFormat('zh-CN', {
  dateStyle: 'medium',
  timeStyle: 'short'
})

formatter.format(new Date())
```

### 金额格式化

```js
const currency = new Intl.NumberFormat('zh-CN', {
  style: 'currency',
  currency: 'CNY'
})

currency.format(123456.78)
```

### 数字补零

```js
const value = String(8).padStart(2, '0')
```

### 生成随机 ID

```js
const id = crypto.randomUUID()
```

简短 ID：

```js
const shortId = Math.random().toString(36).slice(2, 10)
```
