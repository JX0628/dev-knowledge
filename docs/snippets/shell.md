# Shell 片段

## 查找文件

```bash
find . -name "*.md" -maxdepth 3
```

## 统计 Markdown 文件数量

```bash
find docs -name "*.md" | wc -l
```

## 按名称搜索文本

```bash
rg "keyword" docs
```
