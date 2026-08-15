# SmartCalc GA4、CMP 与 AdSense 执行清单

## 当前推进顺序

- [ ] 验证 Cloudflare 最新部署已包含 Google CMP 与 Consent Mode。
- [ ] 用无痕窗口检查 CMP 的同意、拒绝和管理入口。
- [ ] 检查 AdSense 网站状态和审核状态。
- [ ] 只有获得最终 publisher 配置后才创建 ads.txt。
- [ ] 审核通过后再开启真实广告位并做移动端误点击检查。

### 广告位规划（审核通过后执行）

- [ ] 为计算器详情页设计不遮挡核心操作的广告容器位置。
- [ ] 移动端广告与输入框、计算按钮、结果卡片保持独立流布局。
- [ ] 禁止覆盖式、底部悬浮式和紧贴操作按钮的广告。
- [ ] 广告容器预留稳定高度，避免广告加载造成页面跳动。
- [ ] 上线前验证 320px、375px、390px 和 430px 宽度的核心流程。
- [ ] 通过 CMP 同意后才加载需要同意的广告请求，并保留清晰广告标签。

## 第一阶段：GA4

- [ ] 将 Cloudflare Production 变量改为 `VITE_GA_MEASUREMENT_ID=G-YX4PT011V`。
- [ ] 触发并确认最新 GitHub 提交 `fba8c34` 的 Cloudflare 部署。
- [ ] 在正式域名点击 Allow analytics，确认 dataLayer 使用 `G-YX4PT011V`。
- [ ] 在 GA4 Realtime 确认 SmartCalc 访问出现。

## 第二阶段：CMP

- [ ] 在 AdSense 的 Privacy & messaging 创建 European regulations 消息。
- [ ] 关联网站 `shenlanai.cc.cd` 并发布 Google 提供的正式 CMP 配置。
- [ ] 确认 CMP 的拒绝、同意、个性化广告说明和撤回入口。

## 第三阶段：代码切换

- [ ] 移除 SmartCalc 临时 Analytics 同意横幅，避免与正式 CMP 重复。
- [ ] 更新 Privacy/Cookie Policy 的 CMP 和 Google 数据披露。
- [ ] 验证 GA4/Google 广告标签只按同意信号加载。

## 第四阶段：AdSense

- [ ] 在 AdSense 账号获批并取得 publisher ID 后启用广告。
- [ ] 将 AdSlot 从关闭状态改为真实广告代码，并保留清晰广告标签。
- [ ] 用准确 publisher ID 创建 `/ads.txt`，不猜测或伪造值。
- [ ] 检查 Calculator 操作区距离、移动端布局和误点击风险。

## 最终验证

- [ ] 执行 check、test、build、线上同意测试、Realtime、CMP 和广告代码检查。
- [ ] 保存检查点并交付最终操作结果。
