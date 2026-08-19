# SmartCalc AdSense 上线前审核基准

## Google 官方基准

1. AdSense 资格要求网站拥有独特、有趣、高质量、原创并能吸引受众的内容，同时遵守 AdSense 计划政策。[Google AdSense eligibility](https://support.google.com/adsense/answer/9724?hl=en)
2. 广告不得以可能被误认为导航、菜单、下载或其他站内控件的方式实现；不得鼓励点击、用箭头或动画制造不自然注意力，也不得使用误导性标题。广告必须与页面内容清晰区分。[Google ad placement policies](https://support.google.com/adsense/answer/1346295?hl=en)
3. Privacy & messaging 用于管理隐私法规设置和用户消息，支持收集同意或退出请求；需要检查消息已发布、关联正确网站并提供用户选择。[Google Privacy & messaging](https://support.google.com/adsense/answer/10924669?hl=en)
4. ads.txt 不是强制项，但 Google 强烈建议使用；publisher 行应放在站点根路径 `/ads.txt`，并可通过浏览器直接访问验证。[Google ads.txt guide](https://support.google.com/adsense/answer/12171612?hl=en)

## SmartCalc 审核重点

- 审核前必须保持 `VITE_ADS_ENABLED` 关闭，不加载真实广告请求。
- 计算器输入、Calculate、Reset、Copy、结果卡片及首段解释不得被广告覆盖或紧贴。
- 广告应位于公式和示例之后、FAQ 之前，使用正常文档流并明确标记 Advertisement。
- 不使用 fixed、sticky、popup、pop-under、自动刷新或诱导点击布局。
- 检查 CMP、Consent Mode 默认拒绝、撤回入口、Privacy/Cookie Policy 和 Google 第三方披露一致。
- 检查根路径 ads.txt、robots、sitemap、canonical、404、移动菜单和错误边界。
- 审核通过后也只先在百分比、贷款、BMI 页面进行小范围发布，并观察移动端遮挡、误点击和 CLS。
