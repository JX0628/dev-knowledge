# 数组

## 常用片段

### 数组去重

```js
const uniqueList = [...new Set(list)]
```

### 按对象字段去重

```js
const uniqueById = [...new Map(list.map((item) => [item.id, item])).values()]
```

### 数组分组

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
