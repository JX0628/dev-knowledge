# 布局

## 盒模型重置

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

## Flex 居中

```css
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Grid 自适应卡片

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
```

## 固定宽高比例

```css
.cover {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 100%;
}
```

## 响应式容器

```css
.container {
  width: min(100% - 32px, 1120px);
  margin-inline: auto;
}
```
