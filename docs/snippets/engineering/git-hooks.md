# Git Hooks

## 常用片段

### lint-staged

```json
{
  "lint-staged": {
    "*.{js,ts,tsx,vue}": ["eslint --fix"],
    "*.{css,scss,md,json}": ["prettier --write"]
  }
}
```

### Husky pre-commit

```bash
npx husky init
```

```bash
npm run lint
```
