# SmartCalc 后续合规与索引推进

## 一、Search Console

- [ ] 核对正式 sitemap、robots、canonical 和 HTTPS。
- [x] 用户已在 Search Console 添加并验证 `shenlanai.cc.cd` Domain property。
- [x] 用户已在 Cloudflare DNS 添加 Google 提供的 TXT 验证记录并通过验证。
- [x] 用户已提交完整 URL `https://shenlanai.cc.cd/sitemap.xml`；重点页面请求编入索引待后续进行。

## 二、Guides 结构化数据

- [x] 五篇指南已补充 SmartCalc Editorial 作者、发布日期、更新时间和可见元信息。
- [x] 五篇指南已生成 Article、BreadcrumbList 和每篇真实 FAQ 的 JSON-LD，并同步显示 FAQ 内容。
- [x] 指南页面内容、相关 Calculator 内链、24 项测试、类型检查和生产构建已验证。

## 三、Analytics

- [x] 已确认 GA4 服务和真实 Measurement ID `G-83V594TWDW`。
- [ ] 在 Cloudflare Pages 环境变量中配置 `VITE_GA_MEASUREMENT_ID=G-83V594TWDW`，然后重新部署。
- [ ] 部署后验证同意横幅、拒绝/允许行为和 GA4 实时数据；当前代码已默认不加载，只有用户主动允许后加载。

## 四、AdSense/CMP

- [ ] 复核当前 AdSlot 是否关闭且无占位广告代码。
- [ ] 选择 Google Privacy & Messaging 或 IAB TCF 认证 CMP。
- [ ] 在获得 publisher ID 后再添加正式广告代码和 ads.txt。
- [ ] 检查广告与 Calculator 操作区的距离、标签和移动端误点击风险。

## 五、最终验证

- [ ] 执行 check、test、build、结构化数据检查和线上路由验证。
- [ ] 保存检查点并同步 GitHub/Cloudflare。
