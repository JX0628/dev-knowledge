# 环境变量

## 常用片段

### Vite 环境变量

```text
VITE_API_BASE_URL=https://api.example.com
```

```ts
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
```

### 环境变量类型声明

```ts
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```
