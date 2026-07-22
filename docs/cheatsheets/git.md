# Git 常用命令

## 状态与差异

```bash
git status --short
git diff
git diff --stat
```

## 提交

```bash
git add .
git commit -m "docs: update notes"
```

## 历史

```bash
git log --oneline --decorate --graph --all
```

## 分支

```bash
git branch
git switch -c feature/name
git switch main
```

## 远程

```bash
git remote -v
git push origin main
git pull --rebase
```
