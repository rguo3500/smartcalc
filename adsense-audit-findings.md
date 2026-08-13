# AdSense 合规审计发现

## Google 官方要求

1. Google Publisher Policies 将要求分为内容、行为、隐私相关政策和其他标准；使用 Google 广告代码必须遵守，违规可能导致广告被阻止、账户暂停或终止。来源：https://support.google.com/adsense/answer/10502938?hl=en
2. AdSense 资格页要求申请者拥有高质量、原创且能吸引受众的内容，内容符合政策，并且申请人年满 18 岁；申请者还应能够访问提交网站的 HTML 源码。来源：https://support.google.com/adsense/answer/9724?hl=en
3. 对 EEA、英国和瑞士用户，Google 提供自建同意方案、Privacy & Messaging 或 IAB 认证 CMP 等路径；广告实施必须配合用户同意和个性化控制。来源：https://support.google.com/adsense/answer/9031649?hl=en

## SmartCalc 线上现状

1. `https://shenlanai.cc.cd/privacy` 能访问，页面目前只说明本地计算和尽量减少数据收集。
2. 隐私页目前未明确披露 Analytics、广告供应商、广告 cookies、个性化/非个性化广告、数据保留、用户删除/访问请求、联系邮箱或同意管理机制。
3. 首页和路由已可访问；站点有 About、Contact、Privacy、Terms、Cookie Policy 链接，但这些页面需要逐项核对是否有完整、真实、可联系的内容。
4. 线上当前广告位默认关闭；启用广告前应先接入 Google AdSense 代码、ads.txt、CMP/Privacy & Messaging 和明确的广告标签，不应直接打开占位 AdSlot。
