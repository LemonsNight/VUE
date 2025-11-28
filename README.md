# Komoe 自动签到工具

这是一个用于 Komoe 平台的自动签到工具，使用 Node.js 编写，可以手动运行或通过 GitHub Actions 实现每日自动签到。
繁中赛马娘交流QQ群: 1049070239

## 功能特点

- 自动执行 Komoe 平台的签到操作
- 支持手动运行和 GitHub Actions 自动运行
- 生成安全的签名参数
- 详细的日志输出

## 安装方法

1. 确保已安装 Node.js 18 或更高版本

2. 克隆项目仓库

```bash
git clone https://github.com/your-username/komoe-signin.git
cd komoe-signin
```

3. 安装依赖

```bash
npm install
```

## 使用说明

### 手动运行

1. 配置环境变量

   创建 `.env` 文件（可选，也可以直接设置环境变量）：

   ```
   KOMOE_COOKIE=your_komoe_cookie_here
   ```

2. 运行签到脚本

   ```bash
   npm run signin
   ```

### 通过 GitHub Actions 自动运行

1. Fork 本项目到你的 GitHub 账户

2. 在项目的 Settings > Secrets and variables > Actions 中添加以下 Secret：

   - `KOMOE_COOKIE`: 你的 Komoe 平台 Cookie

3. GitHub Actions 会在每天早上 9 点（北京时间）自动运行签到脚本

   你也可以通过 GitHub Actions 页面手动触发工作流

## 获取 Cookie

1. 打开浏览器，访问 Komoe 平台
2. 登录你的账户
3. 打开浏览器的开发者工具（通常按 F12 或 Ctrl+Shift+I）
4. 切换到 Network（网络）选项卡
5. 刷新页面，找到一个请求
6. 在请求的 Headers（请求头）中找到 Cookie 字段
7. 复制 Cookie 的完整内容

## 项目结构

```
komoe-signin/
├── .github/workflows/      # GitHub Actions 工作流配置
│   └── signin.yml          # 自动签到工作流
├── .gitignore              # Git 忽略文件
├── package-lock.json       # 依赖锁定文件
├── package.json            # 项目配置文件
├── signin.js               # 签到脚本主文件
└── README.md               # 项目说明文档
```

## 技术实现

- 使用 `node-fetch` 发送 HTTP 请求
- 使用 `crypto` 模块生成 MD5 签名
- 使用 GitHub Actions 实现定时执行
- 采用环境变量管理敏感信息

## 注意事项

1. 请妥善保管你的 Cookie，不要泄露给他人
2. 定期检查脚本是否正常运行，因为 Cookie 可能会过期
3. 如果签到失败，请检查 Cookie 是否有效
4. 本工具仅用于学习和个人使用，请勿滥用

## 许可证

[MIT](LICENSE)
