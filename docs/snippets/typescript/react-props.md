# React Props

## 带 children 的 Props

```ts
import type { PropsWithChildren } from 'react'

type CardProps = PropsWithChildren<{
  title: string
}>
```

## 继承原生按钮属性

```ts
import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}
```

## 组件引用类型

```ts
import type { ComponentPropsWithoutRef } from 'react'

type InputProps = ComponentPropsWithoutRef<'input'>
```
