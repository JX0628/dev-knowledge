# 变量与主题

## 常用片段

### 颜色变量

```css
:root {
  --color-primary: #2563eb;
  --color-success: #059669;
  --color-warning: #d97706;
  --color-danger: #dc2626;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-bg: #ffffff;
}
```

### 主题切换

```css
:root {
  color-scheme: light;
}

[data-theme='dark'] {
  color-scheme: dark;
  --color-text: #f9fafb;
  --color-muted: #9ca3af;
  --color-border: #374151;
  --color-bg: #111827;
}
```

### 统一间距

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
}
```
