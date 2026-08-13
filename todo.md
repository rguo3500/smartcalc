# SmartCalc Cloudflare 域名发布清单

- [ ] 将所有 YOURDOMAIN.com 占位替换为 https://shenlanart.cc.cd。
- [ ] 更新 canonical、Open Graph、sitemap、robots 和部署说明。
- [ ] 重新执行 check、test、build 与 Wrangler dry-run。
- [x] 用户已完成 Cloudflare 发布授权并触发部署。
- [ ] 确认域名在 Cloudflare DNS 中已接入并可绑定到 Workers/Pages。
- [ ] 将 SmartCalc 最新检查点同步到 GitHub main；当前 GitHub main 为 `98b1066`，落后于本地 `d2bc660`，Cloudflare 已发布旧提交。 
- [ ] 修正 Pages 构建配置，明确执行 `pnpm build` 并发布 `dist/public`；当前 Cloudflare 日志显示配置被跳过且未执行构建。
- [ ] 发布后验证首页、Calculator、History、robots、sitemap 和 HTTPS；当前上传成功但尚未确认使用的是最新构建产物。 
