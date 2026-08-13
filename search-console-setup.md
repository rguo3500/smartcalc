# SmartCalc Google Search Console 设置

## 当前线上状态

正式站点为 `https://shenlanai.cc.cd`。`robots.txt`、`sitemap.xml`、`/guides` 索引页和两篇指南详情页均已返回 HTTP 200。线上 sitemap 使用绝对 URL，并由 robots.txt 指向 `https://shenlanai.cc.cd/sitemap.xml`。

## 用户需要在 Google 中完成的步骤

1. 登录 [Google Search Console](https://search.google.com/search-console)。
2. 点击“添加资源”，选择“域名资源”，输入 `shenlanai.cc.cd`，不要输入 `https://` 或路径。
3. Google 会提供一条 DNS TXT 验证记录。进入 Cloudflare DNS，在 `shenlanai.cc.cd` 对应的 DNS 区域新增 TXT 记录；名称通常填写 `@`，内容完整粘贴 Google 提供的值，TTL 保持 Auto。不要修改或删除现有 CNAME。
4. 返回 Search Console 点击“验证”。DNS 传播可能需要时间；验证成功后可保留 TXT 记录。
5. 在左侧选择“Sitemaps”，提交 `sitemap.xml`。因为它位于同一正式域名下，不需要输入完整 URL，但输入完整地址也应指向同一站点。
6. 在“网址检查”中测试首页、`/calculators/percentage`、`/guides` 和一篇指南详情页，使用“请求编入索引”提交重要新页面。不要一次性重复提交所有 URL。

## 验证完成标准

Search Console 的资源状态应显示已验证；Sitemaps 页面应显示 `sitemap.xml` 已提交并能读取；URL 检查应能抓取正式 HTTPS 页面。发现“已发现但尚未编入索引”不等于网站故障，继续保持原创内容、内链和稳定更新即可。

## 官方参考

[1]: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap "Google Search Central: Build and submit a sitemap"
[2]: https://search.google.com/search-console/about "Google Search Console"
[3]: https://support.google.com/webmasters/answer/9008080 "Google Search Console Help: Verify your site ownership"
