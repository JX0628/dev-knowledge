# Node 版本问题

## 现象

安装依赖或启动项目时报 Node.js 版本不满足要求。

## 排查

```bash
node -v
npm -v
```

查看项目要求：

```bash
cat package.json
```

## 解决方案

使用 `nvm` 切换到项目需要的版本：

```bash
nvm install 20
nvm use 20
```

## 验证

```bash
npm install
npm run build
```
