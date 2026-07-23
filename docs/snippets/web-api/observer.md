# Observer

## 监听元素进入视口

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
})

document.querySelectorAll('[data-reveal]').forEach((element) => {
  observer.observe(element)
})
```

## 监听元素尺寸变化

```js
const observer = new ResizeObserver((entries) => {
  for (const entry of entries) {
    console.log(entry.contentRect.width, entry.contentRect.height)
  }
})

observer.observe(document.querySelector('#panel'))
```
