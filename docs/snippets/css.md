# CSS 片段

## 盒模型重置

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

## 文本单行省略

```css
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## 文本多行省略

```css
.line-clamp-2 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
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

## 按钮基础样式

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 16px;
  border: 0;
  border-radius: 6px;
  background: #2563eb;
  color: #fff;
  font: inherit;
  cursor: pointer;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
```

## 输入框基础样式

```css
.input {
  width: 100%;
  min-height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #fff;
  color: #111827;
  font: inherit;
}

.input:focus {
  border-color: #2563eb;
  outline: 3px solid rgb(37 99 235 / 16%);
}
```

## 隐藏滚动条

```css
.hide-scrollbar {
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
```

## 粘性顶部栏

```css
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgb(255 255 255 / 86%);
  backdrop-filter: blur(12px);
}
```

## 移动端安全区

```css
.safe-area {
  padding-bottom: env(safe-area-inset-bottom);
}
```

## 暗色模式变量

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

## 可访问的隐藏文本

适合只给屏幕阅读器读取的按钮文本。

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## 平滑滚动

```css
html {
  scroll-behavior: smooth;
}
```

## 减少动画偏好

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
