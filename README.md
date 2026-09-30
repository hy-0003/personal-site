# 贺毅 · Yi He — 个人主页（总部）

「1 个总部 + 7 个外部 IP」的总部站点。纯静态、零依赖，可部署到 GitHub Pages。

设计：大量留白 + 黑白灰打底 + 深色渐变封面，参考 Medium / Unsplash / 知乎的「高级简洁」路线。

## 封面图片

首屏（Hero）是一张深色渐变壁纸，也支持放你自己的图片：

1. 把你的图片命名为 `cover.jpg`，放进 `assets/` 目录。
2. 图片会自动铺满封面并叠加半透明蒙版（保证标题可读）。
3. 不放图时自动回退到内置渐变壁纸。

详见 `assets/README.md`。

## 本地预览

```bash
python -m http.server 8000
# 访问 http://localhost:8000
```

## 部署到 GitHub Pages

1. 新建仓库，命名为 `<用户名>.github.io`（例如 `hy-0003.github.io`）。
2. 推送：

```bash
git init && git add . && git commit -m "init"
git branch -M main
git remote add origin https://github.com/<用户名>/<用户名>.github.io.git
git push -u origin main
```

3. 仓库 **Settings → Pages**：Source 选 `Deploy from a branch`，分支 `main`、目录 `/ (root)`。

## 绑定自定义域名 hy0003.me

仓库已含 `CNAME` 文件（内容 `hy0003.me`）。到域名服务商加 DNS：

**裸域（A 记录，4 条）：**

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**www 子域（CNAME）：** `www → <用户名>.github.io`

生效后在 Pages 设置里勾选 Enforce HTTPS。若暂不绑定域名，删除 `CNAME` 即可。

## 需要手动改的地方

- **IP 矩阵**（`index.html` 的 `#hub`）：小红书 / io（学术）/ Unsplash / Medium / Substack 目前是「即将上线」，开通后把 `<div class="hub hub-soon">` 换成 `<a class="hub" href="...">` 并填链接。
- **论文**：更新 `#papers` 区块。
- **主题色**：`css/style.css` 顶部 `:root` 里的 `--accent`（浅色）与 `[data-theme="dark"]` 里的 `--accent`。
