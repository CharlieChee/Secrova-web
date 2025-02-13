import Image from "next/image";

export default function Technology() {
    return (
        <main className="technology-container">
            <h1 className="technology-title">核心技术</h1>
            <p className="technology-description">
                Secrova通过芯片级安全防护、AI 模型隐私保护与数据加密计算，打造全球领先的AI安全生态。
            </p>

            {/* 技术领域 */}
            <div className="technology-sectors">
                <div className="tech-card">
                    <div className="tech-header">
                        <Image src="/chip-security.jpg" alt="芯片安全" width={80} height={80} className="tech-icon" />
                        <h2>芯片安全</h2>
                    </div>
                    <p>
                        Secrova 开发基于 RISC-V 的 AI 安全芯片，支持后量子加密（PQC），
                        防止物理攻击、侧信道攻击，确保 AI 计算的安全性。
                    </p>
                </div>

                <div className="tech-card">
                    <div className="tech-header">
                        <Image src="/ai-security.jpg" alt="AI 模型安全" width={80} height={80} className="tech-icon"/>
                        <h2>AI 模型安全</h2>
                    </div>
                    <p>
                        我们的 AI 模型防火墙技术，可抵御数据中毒、对抗攻击，同时提供可解释性 AI，防止 AI 生成错误决策。
                    </p>
                    </div>

                <div className="tech-card">
                    <div className="tech-header">
                        <Image src="/privacy-ai.jpg" alt="隐私计算" width={80} height={80} className="tech-icon"/>
                        <h2>隐私计算</h2>
                    </div>
                    <p>
                        采用联邦学习和同态加密，支持企业在不共享数据的情况下训练 AI，保护个人和企业隐私。
                    </p>
                    </div>
                </div>

                {/* Secrova 的技术优势 */}
            <section className="tech-advantage">
                <h2> Secrova 的技术优势</h2>
                <ul className="advantage-list">
                    <li>全球首款 AI 安全芯片，支持硬件级 AI 计算保护</li>
                    <li>数据不出本地，通过隐私计算实现 AI 训练</li>
                    <li>符合 GDPR、CCPA、国密标准，全球合规</li>
                    <li>AI 可信计算，确保 AI 生成结果安全可靠</li>
                </ul>
            </section>
        </main>
    );
}

