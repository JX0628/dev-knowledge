# VitePress 常用语法

VitePress 页面默认使用 Markdown 编写，同时支持 Frontmatter、容器块、代码高亮、Vue 表达式和 Vue 组件。

## Frontmatter

Frontmatter 写在 Markdown 文件顶部，用来配置当前页面。

```md
---
title: 页面标题
description: 页面描述
outline: deep
---
```

常用字段：

- `title`：页面标题。
- `description`：页面描述。
- `layout`：页面布局，例如首页使用 `home`。
- `outline`：右侧目录级别，常用 `false`、`[2, 3]` 或 `deep`。

## 目录

在页面中插入当前文档的目录：

```md
[[toc]]
```

## 提示块

VitePress 支持自定义容器，适合写提示、警告和风险说明。

```md
::: tip
这是提示内容。
:::

::: info
这是普通信息。
:::

::: warning
这是警告内容。
:::

::: danger
这是危险操作说明。
:::
```

也可以自定义标题：

```md
::: tip 自定义标题
这里是内容。
:::
```

## 代码块

基础代码块：

````md
```js
console.log('hello')
```
````

高亮指定行：

````md
```js{2}
const name = 'VitePress'
console.log(name)
```
````

高亮多行或范围：

````md
```js{1,3-4}
const a = 1
const b = 2
const sum = a + b
console.log(sum)
```
````

使用特殊注释标记代码差异：

````md
```js
const oldName = 'docs' // [!code --]
const newName = 'dev-knowledge' // [!code ++]
```
````

聚焦某一行：

````md
```js
const message = 'hello'
console.log(message) // [!code focus]
```
````

## 链接

站内链接建议使用绝对路径：

```md
[首页](/)
[Git 常用命令](/cheatsheets/git)
```

链接到同目录文档也可以使用相对路径：

```md
[参考资料首页](./)
```

## 静态资源

放在 `docs/public` 下的文件会作为站点根路径资源访问。

例如 `docs/public/logo.svg`：

```md
![Logo](/logo.svg)
```

## Vue 表达式

Markdown 中可以使用 Vue 模板表达式：

```md
{{ 1 + 1 }}
```

也可以使用 `<script setup>`：

```md
<script setup>
const message = 'Hello VitePress'
</script>

# {{ message }}
```

## Vue 组件

可以直接使用内置组件：

```md
<Badge type="tip" text="推荐" />
<Badge type="warning" text="注意" />
<Badge type="danger" text="风险" />
```

也可以在 Markdown 中写普通 HTML：

```md
<kbd>Ctrl</kbd> + <kbd>C</kbd>
```

## 首页语法

首页通常使用 `layout: home`，并通过 Frontmatter 配置 hero 和 features。

```md
---
layout: home

hero:
  name: Dev Knowledge
  text: 常用信息速查库
  tagline: 把常用内容放在一个地方。
  actions:
    - theme: brand
      text: 常用速查
      link: /cheatsheets/

features:
  - title: 常用速查
    details: Git、npm、Shell 等高频命令。
---
```

## 常见注意点

- 站内链接不要带 `.md` 后缀，优先写 `/references/vitepress-syntax` 这种路径。
- 静态资源放在 `docs/public` 后，用 `/文件名` 访问。
- Markdown 中写 Vue 代码时，花括号会被 Vue 解析；如果只是展示示例，放进代码块。
- 代码块外层需要展示三个反引号时，可以用四个反引号包裹。
