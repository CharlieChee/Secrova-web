import Link from "next/link";

export default function Team() {
    return (
        <main className="team-container">
            <h1 className="team-title">我们的团队</h1>
            <p className="team-description">
                Secrova 团队由全球顶尖的人工智能安全专家、加密学学者和行业领袖组成，专注于打造全球领先的 AI 安全技术。
            </p>

            {/* 核心创始团队 */}
            <section className="team-section">
                <h2>核心创始团队</h2>
                <div className="team-members">
                    <div className="team-card">
                        <h3>
                            <Link href="https://sites.google.com/view/qiongxiuli/home" target="_blank">李琼秀</Link> - 创始人
                        </h3>
                        <p>丹麦奥尔堡大学助理教授 & 复旦大学副教授，安全计算专家</p>
                        <p><strong>职责：</strong> 负责 AI 安全与大模型安全的技术方向规划，主导软件研究合作</p>
                    </div>

                    <div className="team-card">
                        <h3>
                            <Link href="https://faculty.sdu.edu.cn/chenghao/zh_CN/index.htm" target="_blank">程皓</Link> - 创始人
                        </h3>
                        <p>山东大学网安学院教授，芯片加密领域专家</p>
                        <p><strong>职责：</strong> 负责芯片加密架构设计与关键技术攻关，主导硬件安全方案</p>
                    </div>

                    <div className="team-card">
                        <h3>
                            <Link href="https://lixiaothu.github.io/" target="_blank">李潇</Link> - 创始人
                        </h3>
                        <p>字节跳动豆包大模型研发科学家，清华大学博士</p>
                        <p><strong>职责：</strong> 主导核心技术研发与产品实现，搭建技术团队</p>
                    </div>
                </div>
            </section>

            {/* 管理团队 */}
            <section className="team-section">
                <h2>管理团队</h2>
                <div className="team-members">
                    <div className="team-card">
                        <h3>
                            <Link href="https://www.hongyang-li.cn/" target="_blank">李弘扬</Link> - CEO
                        </h3>
                        <p>巴黎萨克雷大学人工智能博士生</p>
                        <p><strong>职责：</strong> 负责公司运营与管理，推动业务落地</p>
                    </div>

                    <div className="team-card">
                        <h3>
                            <Link href="https://sites.google.com/view/changlongji/homepage" target="_blank">纪昌龙</Link> - CTO
                        </h3>
                        <p>巴黎理工学院人工智能硕士</p>
                        <p><strong>职责：</strong> 负责 AI 算法创新，推进模型安全与隐私保护技术</p>
                    </div>

                    <div className="team-card">
                        <h3>
                            <Link href="https://www.linkedin.com/in/yixuan-li-26125919b/" target="_blank">李奕萱</Link> - CFO</h3>
                        <p>慕尼黑工业大学土木 & 企业经济学硕士，半导体行业财务专家</p>
                        <p><strong>职责：</strong> 负责公司财务规划、融资与风险管理</p>
                    </div>
                </div>
            </section>

            {/* 主要管理层 */}
            <section className="team-section">
                <h2>主要管理层</h2>
                <div className="team-members">
                    <div className="team-card">
                        <h3>
                            <Link href="https://scholar.google.com/citations?user=zpHQDQgAAAAJ&hl=en" target="_blank">罗霄宇</Link> - 安全负责人
                        </h3>
                        <p>米兰理工大学人工智能硕士， AI 安全专家，专注于大模型安全攻防</p>
                        <p><strong>职责：</strong> 主导 AI 产品安全漏洞识别，构建大模型安全防御体系</p>
                    </div>

                    <div className="team-card">
                        <h3>
                           柏林岑 - 产品负责人
                        </h3>
                        <p>北京航空航天大学计算机本硕，AI 产品创新与商业化专家</p>
                        <p><strong>职责：</strong> 推动 AI 安全产品落地，实现产品与市场需求的无缝对接</p>
                    </div>
                </div>
            </section>

            {/* 顾问团队 */}
            <section className="team-section">
                <h2>顾问团队</h2>
                <div className="team-members">
                    <div className="team-card">
                        <h3>
                            *** - 科学顾问
                        </h3>
                        <p>清华大学人工智能安全副教授，TSAIL 研究团队核心成员</p>
                        <p><strong>职责：</strong> 提供前沿 AI 安全研究指导，推动科研项目与专利布局</p>
                    </div>

                    <div className="team-card">
                        <h3>
                            <Link href="https://economics.camden.rutgers.edu/faculty/jinpeng-ma/" target="_blank">马金鹏</Link> - 战略顾问
                        </h3>
                        <p>美国新泽西州立大学经济学教授</p>
                        <p><strong>职责：</strong> 负责海外资本引荐，提供战略方向咨询</p>
                    </div>

                    <div className="team-card">
                        <h3>
                            <Link href="https://math.tju.edu.cn/info/1715/5503.htm" target="_blank">戴嵩</Link> - 算法顾问
                        </h3>
                        <p>天津大学数学系副教授</p>
                        <p><strong>职责：</strong> 提供数学模型与算法支持，助力密码学安全与 AI 算法优化</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
