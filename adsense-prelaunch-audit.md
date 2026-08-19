# SmartCalc Google AdSense 上线前详细审核

审核日期：2026-08-18

## 结论

SmartCalc 的**广告布局和技术保护措施已达到可进行小范围发布准备的状态**，但当前不能宣称已获 AdSense 最终批准，因为 AdSense 账号会话在审核时仍显示已退出，最终网站状态尚未被重新读取。审核状态确认前，生产环境应继续保持 `VITE_ADS_ENABLED` 关闭。

## 已通过项目

| 检查项 | 结果 | 说明 |
|---|---|---|
| 原创工具和内容 | 通过准备检查 | 当前有 28 个真实计算器、公式、示例、FAQ、相关工具和指南中心。最终批准仍由 Google 决定。 |
| 隐私与政策 | 通过准备检查 | Privacy、Cookie Policy、Terms、About、Contact 页面已存在，并披露本地存储、GA4、Google CMP、广告和撤回机制。 |
| CMP | 配置已提交 | 已选择 Google 三选项消息：同意、不同意、管理；需要重新登录 AdSense 复核发布状态。 |
| ads.txt | 通过 | `https://shenlanai.cc.cd/ads.txt` 返回 200，内容为 `google.com, pub-8499470613171796, DIRECT, f08c47fec0942fa0`。 |
| robots/sitemap | 通过 | robots 指向正式 sitemap；sitemap 使用正式域名并列出主要页面、28 个计算器和 5 篇指南。 |
| 广告位置 | 通过准备检查 | 广告壳位于公式和示例之后、FAQ 之前；使用正常文档流；不使用 fixed、sticky、popup、pop-under 或覆盖式布局。 |
| 移动端布局 | 通过 | 320、390、430px 下已检查百分比、贷款和 BMI；输入、Calculate、结果卡片和 FAQ 未被广告遮挡。 |
| 工程质量 | 通过 | TypeScript check、24 项测试和 production build 均通过；关键正式路由、政策页和静态资源均返回 200。 |

## 必须在真实广告上线前确认

1. 重新登录绑定 `pub-8499470613171796` 的 AdSense 账号，读取网站状态是否为 Ready/准备就绪，而不是仅仅“已验证”或“已请求审核”。
2. 在 Privacy & messaging 中确认三选项 CMP 对 `shenlanai.cc.cd` 显示为 Published/已发布，并用无痕窗口测试同意、不同意、管理和撤回入口。
3. 检查 AdSense 的 ads.txt 状态是否为 Authorized/已授权；如果仍是 Not found 或 Unauthorized，应在 AdSense 中点击 Check for updates，而不是重复添加行。
4. 确认 Cloudflare Production 没有把 `VITE_ADS_ENABLED` 设置为 `true`。当前代码默认只有该变量明确为 `true` 才渲染真实广告状态；`VITE_ADS_LAYOUT_PREVIEW` 只用于布局预览，不应在生产开启。
5. 首批只在百分比、贷款和 BMI 页面投放一个广告位；先观察 72 小时再扩展，不要一次性在 28 个页面全部开启。

## 当前非阻塞警告

生产构建提示 JavaScript bundle 大于 500 kB。它不是 AdSense 政策失败项，但可能影响移动端加载体验。广告上线前可通过路由级动态导入、拆分图标/组件依赖和延迟非首屏代码改善性能；不要为了拆包而改变计算器核心交互。

## 禁止事项

不得点击自己的广告、请求他人点击、购买低质量流量、使用自动刷新或刷量服务、把广告做成导航/下载/复制按钮样式、在计算按钮附近放置广告、使用箭头或文案引导点击，也不得在审核未完成时通过广告开关提前投放。

## 官方依据

[1]: https://support.google.com/adsense/answer/9724?hl=en "Eligibility requirements for AdSense"
[2]: https://support.google.com/adsense/answer/1346295?hl=en "Ad placement policies"
[3]: https://support.google.com/adsense/answer/10924669?hl=en "About Privacy & messaging"
[4]: https://support.google.com/adsense/answer/12171612?hl=en "ads.txt guide"

Google 要求网站具有高质量、原创并能吸引受众的内容，并遵守 AdSense 政策。[1] 广告不得以可能被误认为导航、菜单、下载或其他站内控件的方式放置，也不得鼓励误点击或以误导性标题呈现。[2] Privacy & messaging 用于管理隐私设置和用户同意/退出消息。[3] ads.txt 应放在站点根路径，并包含准确的 publisher ID 行。[4]

## 2026-08-18 复审结果

本次复审重新检查了主页、百分比计算器、Privacy 和 Cookie Policy 的 390px 全页布局。结果显示导航、输入框、Calculate 按钮、结果卡片、公式、FAQ、政策正文和页脚均保持正常流布局；当前预览中没有真实广告元素。代码审查确认广告壳只出现在公式/示例之后，并由 `VITE_ADS_ENABLED` 控制真实广告状态；根路径 ads.txt、robots.txt 和 sitemap.xml 均存在。

本次未发现需要立即修改的 AdSense 阻断项。仍需账号侧确认的项目只有：网站最终审核状态、CMP 是否 Published、ads.txt 是否 Authorized，以及生产环境变量是否保持真实广告关闭。构建包体积优化仍属于性能建议，可在广告上线前通过路由级动态导入处理。
