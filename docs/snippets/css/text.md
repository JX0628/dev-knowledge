# 文本

## 常用片段

### 文本单行省略

```css
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### 文本多行省略

```css
.line-clamp-2 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
```

### 暗色模式变量

```css
:root {
  --color-bg: #ffffff;
  --color-text: #111827;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #111827;
    --color-text: #f9fafb;
  }
}

body {
  background: var(--color-bg);
  color: var(--color-text);
}
```
