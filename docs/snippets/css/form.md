# 表单

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
