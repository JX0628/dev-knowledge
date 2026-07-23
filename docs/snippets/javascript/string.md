# 字符串

## 首字母大写

```js
const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1)
```

## 转换为短横线命名

```js
function kebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}
```

## 去除多余空格

```js
const normalizeSpace = (value) => value.trim().replace(/\s+/g, ' ')
```

## 简单转义 HTML

```js
function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}
```
