# 移动端

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
