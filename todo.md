# SmartCalc Google 广告准备实施清单

## 第一优先级：网站底部与政策页面

- [x] 完善 About 页面：运营主体、网站用途、原创内容原则与联系方式。
- [x] 完善 Contact 页面：真实联系邮箱、反馈类型、回复说明和隐私提示。
- [x] 完善 Privacy 页面：本地计算、localStorage、Analytics、广告、第三方服务、数据保留和用户权利。
- [x] 完善 Terms 页面：工具性质、责任限制、知识产权、可接受使用和政策更新。
- [x] 完善 Cookie Policy：必要存储、Analytics cookies、广告 cookies、同意与撤回机制。
- [x] 确认底部链接、页面标题、canonical 和现有 sitemap 路由一致；绝对 sitemap URL 在第五优先级处理。

## 第二优先级：20–30 个高质量 Calculator

- [ ] 同步第一优先级政策页面更新到 GitHub main，并确认 Cloudflare 自动部署。 
- [ ] 盘点现有 24 个工具与分类覆盖。
- [ ] 仅新增有真实用户需求、公式透明且能维护的工具，目标约 28 个。
- [ ] 为新增工具补充纯函数、输入校验、边界测试、详情页和分类入口。

## 第三优先级：逐 Calculator SEO 内容

- [ ] 每个工具补齐独立 Description、Formula、Examples、FAQ 和 Related Tools。
- [ ] 确保内容原创、具体、有输入限制和结果解释，避免重复模板页。
- [ ] 生成正确的 title、description、canonical、结构化数据和 sitemap URL。

## 第四优先级：Guides 内容中心

- [ ] 建立 `/guides` 索引页和可扩展的 Guide 数据结构。
- [ ] 首批发布与高意图 Calculator 对应的实用指南。
- [ ] 加入内链、作者/更新时间、免责声明和相关推荐。

## 第五优先级：Search Console + Sitemap + Robots

- [ ] 检查正式域名 canonical、sitemap 绝对 URL 和 robots sitemap 指向。
- [ ] 准备 Search Console 域名验证和 sitemap 提交步骤。
- [ ] 检查 404、移动端、HTTPS、重定向和索引阻止项。

## 第六优先级：Google Analytics

- [ ] 确认 Analytics 服务和真实 Measurement/Website ID。
- [ ] 配置 Cloudflare 环境变量并验证脚本仅在同意条件下加载。
- [ ] 在隐私与 Cookie 页面同步披露 Analytics。

## 第七优先级：AdSense

- [ ] 在前六阶段完成并验证后，选择 Google Privacy & Messaging 或认证 CMP。
- [ ] 获得 publisher ID 后添加正式广告代码与 ads.txt。
- [ ] 检查广告标签、误点击风险、移动端布局和页面内容/广告比例。
- [ ] 提交 AdSense 审核并保留政策变更记录。

## 最终验证

- [ ] 执行 check、test、build、Lighthouse、路由冒烟和移动端检查。
- [ ] 同步 GitHub、确认 Cloudflare 自动部署并验证正式域名。
- [ ] 保存最终检查点并报告发布结果。
