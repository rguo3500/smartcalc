# SmartCalc AdSense 审计结论

审计时间：2026-08-14。

## 已满足或已完成

SmartCalc 已有 28 个可用计算器、独立 URL、公式说明、示例、FAQ 和相关工具链接；已有 5 篇指南及真实的 `/guides` 内容中心。About、Contact、Privacy、Terms 和 Cookie Policy 均可访问，联系邮箱为 `contact@shenlanai.cc.cd`。网站所有权验证和 AdSense 审核请求已提交，Google 三选项 CMP 已保存。GA4 使用 `G-YX4PT011V`，通过 Google Consent Mode 以 denied 默认状态启动。根路径 `/ads.txt` 已公开，并使用账号提供的准确 publisher ID。

## 本轮发现并已修复

1. `/blog` 原本是“内容正在准备”的薄占位页，可能削弱网站完成度。现在已改为真实的 Calculation Notes 内容中心，展示五篇指南并说明编辑方法。
2. Privacy Policy 原本描述 Analytics 仍是“仅在配置 endpoint 后加载”，与实际 GA4 接入不一致。现在已说明 GA4、Consent Mode、Google CMP、AdSense 验证脚本、广告暂未启用状态，并提供 Google 官方隐私链接。
3. Cookie Policy 原本声称存在“网站 privacy settings”，但站点没有自建设置页。现在已改为准确说明 Google Privacy & Messaging 的隐私控制和撤回入口，并加入更新时间。
4. Privacy 和 Cookie Policy 现在都有明确的更新时间，便于审核和用户判断信息新鲜度。

## 仍需等待或用户操作

AdSense 网站目前仍显示“正在准备”，并不代表被拒绝；需要等待 Google 抓取、审核和状态更新。真实广告位仍应保持关闭，直到 AdSense 账号明确允许展示广告。审核通过后仍应使用无痕窗口测试 CMP 的同意、拒绝、管理和撤回路径，并检查移动端广告位距离计算器控件足够远，避免误点击。

## 参考来源

- Google Publisher Policies：https://support.google.com/adsense/answer/10502938?hl=en
- AdSense Required content：https://support.google.com/adsense/answer/1348695?hl=en
- Google AdSense ads.txt 指南：https://support.google.com/adsense/answer/12171612?hl=en
- Google Privacy & Messaging：https://support.google.com/adsense/answer/10924669?hl=en-GB
