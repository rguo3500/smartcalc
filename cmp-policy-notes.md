# Google CMP 合规要点（2026-08-13）

来源：
- https://support.google.com/adsense/answer/13554116?hl=en
- https://support.google.com/adsense/answer/10924669?hl=en-GB
- https://www.google.com/about/company/user-consent-policy-help/

Google 官方说明：使用 AdSense、Ad Manager 或 AdMob 向 EEA、英国和瑞士用户提供个性化广告时，需要使用 Google 认证且集成 IAB TCF 的 CMP。认证 CMP 流量可用于个性化、非个性化和受支持的 limited ads；非认证 CMP 流量可能只能使用非个性化或 limited ads。Google Privacy & Messaging 的欧洲法规消息属于认证方案之一。

同意机制需要在用户首次访问时提供清晰选择，披露广告个性化、Cookie/类似标识符、Google 与其他第三方的数据使用，并提供 Google Business Data Responsibility 链接。撤回同意必须与首次同意一样容易。Google 的认证只代表其认证标准，不等于对当地隐私法律的全面审查。

SmartCalc 当前的临时同意横幅可用于 GA4 的基础测试，但不能作为 AdSense 面向 EEA/英国/瑞士的最终认证 CMP。正式启用 AdSense 前，应在 AdSense 的 Privacy & messaging 中创建并发布欧洲法规消息，接入其正式代码；之后移除或停用临时 Analytics 横幅，避免两个同意机制冲突，并让 Privacy/Cookie Policy 与撤回入口同步更新。
