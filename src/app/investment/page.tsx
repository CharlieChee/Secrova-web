import Image from "next/image";

export default function Investment() {
    return (
        <main className="investment-container">
            <h1 className="investment-title">投资价值与市场前景</h1>
            <p className="investment-description">
                AI 安全市场正迎来爆发增长，Secrova 站在技术最前沿，为全球企业和政府提供最先进的 AI 安全解决方案。
            </p>

            {/* 市场数据部分 */}
            <div className="investment-stats">
                <div className="stat-card">
                    <Image src="/growth.jpg" alt="市场增长" width={60} height={80} className="stat-icon" />
                    <div className="stat-content">
                        <h2>全球 AI 安全市场增长</h2>
                        <p>预计2023-2030年复合增长率32%，市场规模将突破500亿美元。</p>
                    </div>
                </div>

                <div className="stat-card">
                    <Image src="/data-security.jpg" alt="数据安全" width={60} height={80} className="stat-icon" />
                    <div className="stat-content">
                        <h2>AI 领域数据泄露风险</h2>
                        <p>大模型相关数据泄露事件年增长200%，AI安全需求急剧上升。</p>
                    </div>
                </div>

                <div className="stat-card">
                    <Image src="/policy.jpg" alt="政策推动" width={60} height={80} className="stat-icon" />
                    <div className="stat-content">
                        <h2>政策推动 AI 安全市场</h2>
                        <p>欧盟《AI 法案》、中国《数据安全法》强制 AI 安全合规，推动行业增长。</p>
                    </div>
                </div>
            </div>



            {/* 融资计划 */}
            <section className="funding-plan">
                <h2>Secrova 的融资计划</h2>
                <table className="funding-table">
                    <thead>
                    <tr>
                        <th>轮次</th>
                        <th>融资金额</th>
                        <th>投资回报</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>天使轮</td>
                        <td>$30 万美元</td>
                        <td>股权 7%</td>
                    </tr>
                    <tr>
                        <td>Pre-A 轮</td>
                        <td>$150-300 万美元</td>
                        <td>市场扩展 & 商业化</td>
                    </tr>
                    <tr>
                        <td>A 轮</td>
                        <td>$2000-3000 万美元</td>
                        <td>全球市场扩张</td>
                    </tr>
                    </tbody>
                </table>
            </section>

            {/* 投资机会 */}
            <section className="investment-opportunities">
                <h2>为什么投资 Secrova？</h2>
                <ul className="opportunity-list">
                    <li>全球 AI 安全市场龙头，领先技术布局</li>
                    <li>采用RISC-V AI 安全芯片，硬件级加密</li>
                    <li>符合GDPR、CCPA、国密标准，全球市场准入</li>
                    <li>通过 AI 隐私计算，赋能金融、医疗、政府等行业</li>
                </ul>
            </section>
        </main>
    );
}

