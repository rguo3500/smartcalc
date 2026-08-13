# SmartCalc 内容与索引推进清单

## 阶段一：同步并部署

- [ ] 将检查点 5647921c 的 Calculator 与 SEO 更新同步到 GitHub main。
- [ ] 确认 Cloudflare 执行 `pnpm build` 并发布 `dist/public`。
- [ ] 验证正式域名首页、四个新增 Calculator 和政策页面。

## 阶段二：/guides 内容中心

- [ ] 建立 `/guides` 索引页和可扩展指南数据结构。
- [ ] 发布 Percentage、Loan、BMI、Compound Interest、Working Days 五篇高意图指南。
- [ ] 为每篇指南添加标题、摘要、正文、公式解释、示例、FAQ、相关 Calculator、更新时间和免责声明。
- [ ] 为指南接入 canonical、BreadcrumbList、Article/FAQ 结构化数据和 sitemap URL。

## 阶段三：Search Console 与索引基础

- [ ] 将 sitemap.xml 的所有 loc 改为 `https://shenlanai.cc.cd/...` 绝对 URL。
- [ ] 确认 robots.txt 的 Sitemap 指向正式域名。
- [ ] 检查 canonical、HTTPS、404、移动端路由和索引阻止项。
- [ ] 准备在 Google Search Console 添加 Domain property、验证 DNS TXT，并提交 sitemap。

## 阶段四：最终验证

- [ ] 执行 check、test、build、Lighthouse 和路由冒烟。
- [ ] 保存检查点并报告 GitHub/Cloudflare/Guides/Search Console 状态。
