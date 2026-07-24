# 滚动

## 常用片段

### 滚动吸附

```css
.snap-list {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.snap-item {
  flex: 0 0 80%;
  scroll-snap-align: start;
}
```

### 保留滚动条空间

```css
html {
  scrollbar-gutter: stable;
}
```

### 指定滚动容器内边距

```css
.scroll-container {
  overflow: auto;
  scroll-padding: 16px;
}
```
