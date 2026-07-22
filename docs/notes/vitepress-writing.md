# VitePress 文档写作

VitePress 使用 Markdown 编写内容，并通过 `.vitepress/config.mts` 配置导航、侧边栏、站点标题和主题。

## 新增页面

在 `docs/notes/` 下新建 Markdown 文件：

```bash
touch docs/notes/my-note.md
```

然后在 `docs/.vitepress/config.mts` 的 `sidebar` 中加入页面链接。

## Frontmatter

可以在 Markdown 顶部加入页面元信息：

```md
---
title: 页面标题
description: 页面描述
---
```

## 提示块

```md
::: tip
这里是提示内容。
:::
```
