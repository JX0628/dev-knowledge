# 表单

## 常用片段

### 可访问表单项

```html
<label for="email">邮箱</label>
<input id="email" name="email" type="email" autocomplete="email" required />
```

### 搜索框

```html
<form role="search">
  <label for="keyword">搜索</label>
  <input id="keyword" name="q" type="search" autocomplete="off" />
  <button type="submit">提交</button>
</form>
```

### 文件上传

```html
<input type="file" name="file" accept="image/*" />
```
