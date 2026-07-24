# package.json

## 常用片段

### 常用 scripts

```json
{
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "vite build",
    "preview": "vite preview --host 0.0.0.0",
    "typecheck": "tsc --noEmit",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

### 指定 Node 版本

```json
{
  "engines": {
    "node": ">=20"
  }
}
```
