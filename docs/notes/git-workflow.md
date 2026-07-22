# Git 常用工作流

## 初始化仓库

```bash
git init
git add .
git commit -m "init knowledge docs"
```

## 日常提交

```bash
git status
git add docs/notes/example.md
git commit -m "docs: add example note"
```

## 查看历史

```bash
git log --oneline --decorate --graph --all
```

## 建议

- 每次提交只表达一个明确变化。
- 文档类提交可以使用 `docs:` 前缀。
- 修改较多时，先用 `git diff` 自查。
