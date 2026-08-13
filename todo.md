# SmartCalc 内容与索引推进清单

## 阶段一：同步并部署

- [x] 将检查点 5647921c 的 Calculator 与 SEO 更新同步到 GitHub main，远程提交为 `bf2dd4d`。
- [x] Cloudflare 已使用 `bf2dd4d`，执行 `pnpm build`，读取 `dist/public` 并成功发布。
- [x] 正式域名上的 Sales Tax 页面已验证；四个新增 Calculator 和政策页面随同一构建发布。

## 阶段二：/guides 内容中心

- [x] 建立 `/guides` 索引页和可扩展指南数据结构。
- [x] 发布 Percentage、Loan、BMI、Compound Interest、Working Days 五篇高意图指南。
- [x] 为每篇指南添加标题、摘要、正文、公式解释、示例、相关 Calculator、更新时间和免责声明；FAQ 结构化数据入口已接入。
- [ ] 为指南补入 sitemap URL，并在索引阶段复核 Article/BreadcrumbList/FAQ 结构化数据。

## 阶段三：Search Console 与索引基础

- [ ] 将 sitemap.xml 的所有 loc 改为 `https://shenlanai.cc.cd/...` 绝对 URL。
- [ ] 确认 robots.txt 的 Sitemap 指向正式域名。
- [ ] 检查 canonical、HTTPS、404、移动端路由和索引阻止项。
- [ ] 准备在 Google Search Console 添加 Domain property、验证 DNS TXT，并提交 sitemap。

## 阶段四：最终验证

- [ ] 执行 check、test、build、Lighthouse 和路由冒烟。
- [ ] 保存检查点并报告 GitHub/Cloudflare/Guides/Search Console 状态。
