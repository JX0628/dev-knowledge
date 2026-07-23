# 动画

## 淡入

```css
.fade-in {
  animation: fade-in 180ms ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

## 上移动效

```css
.slide-up {
  animation: slide-up 220ms ease-out;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Skeleton 加载

```css
.skeleton {
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 37%, #f3f4f6 63%);
  background-size: 400% 100%;
  animation: skeleton-loading 1.4s ease infinite;
}

@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}
```
