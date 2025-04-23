# 个人导航网站

这是一个基于 HTML, CSS, 和 JavaScript 的简单个人导航网站项目，设计用于部署在 Cloudflare Pages 上。

## ✨ 特点

* **简洁设计**: 干净、响应式的布局。
* **易于定制**: 通过编辑 `data/links.json` 文件轻松添加、删除或修改导航链接和分类。
* **图标支持**: (可选) 在链接旁边显示小图标。
* **Cloudflare Pages 优化**: 易于部署和托管。
* **纯静态**: 无需后端数据库或复杂设置。

## 🛠️ 技术栈

* HTML5
* CSS3 (包含 Grid 布局和简单响应式设计)
* Vanilla JavaScript (用于动态加载 `links.json` 数据)
* Cloudflare Pages (部署平台)

## 🚀 部署到 Cloudflare Pages

1.  **Fork 或克隆此仓库**: 将项目代码获取到你的 GitHub 账户下。
2.  **登录 Cloudflare**: 打开 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
3.  **导航到 Pages**: 在左侧菜单中选择 `Workers & Pages` -> `Overview` -> `Create application` -> `Pages` -> `Connect to Git`。
4.  **连接 GitHub**: 授权 Cloudflare 访问你的 GitHub 仓库。
5.  **选择仓库**: 选择你刚刚 Fork 或创建的导航网站仓库。
6.  **配置构建设置**:
    * **Production branch**: 选择你的主分支 (通常是 `main` 或 `master`)。
    * **Framework preset**: 选择 `None` 或 `Static HTML`。
    * **Build command**: 留空 (因为我们没有复杂的构建步骤)。
    * **Build output directory**: 设置为 `public` (因为 `index.html` 在 `public` 文件夹内)。*如果你的 `index.html` 在根目录，则设为 `/`*。
7.  **保存并部署**: 点击 `Save and Deploy`。Cloudflare 将开始构建和部署你的网站。
8.  **完成**: 部署成功后，你将获得一个 `*.pages.dev` 的域名。你也可以在 Cloudflare 上设置自定义域名。

## 🔧 定制

* **修改链接**: 编辑 `data/links.json` 文件。按照现有的格式添加或修改分类和链接。
    * `category`: 分类的名称。
    * `links`: 该分类下的链接数组。
        * `name`: 链接显示的名称。
        * `url`: 链接的目标地址。
        * `icon` (可选): 链接图标的路径 (相对于 `public` 目录，例如 `assets/icon.png`)。
* **修改样式**: 编辑 `public/style.css` 文件来改变外观、颜色、布局等。
* **修改 HTML 结构**: 编辑 `public/index.html` 文件（如果你需要更改页面的基本布局或页头页脚内容）。
* **图标**: 将你的图标文件放入 `public/assets/` 目录，并在 `links.json` 中引用正确的路径。

## 💡 未来可能的改进

* 添加搜索功能。
* 实现主题切换 (亮色/暗色)。
* 使用更高级的前端框架 (React, Vue, Svelte) 或构建工具 (Vite, Webpack)。
* 如果需要动态功能，迁移到 Cloudflare Workers。
## 📄 许可证
