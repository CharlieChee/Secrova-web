export default function Business() {
    return (
        <main className="business-container">
            <h1 className="business-title">Secrova <span className="highlight">业务领域</span></h1>
            <p className="business-description">
                在 AI 时代，数据就是资产，安全是生命线。Secrova 致力于打造从芯片层到模型层的全链路 AI 安全解决方案，
                通过硬件加密与隐私保护 AI 技术，为全球企业和政府提供最安全的 AI 计算环境。
            </p>

            {/* 业务领域 */}
            <div className="business-sectors">
                <div className="sector-card">
                    <img src="/finance-icon.jpg" alt="金融安全" className="sector-icon" />
                    <h2>金融安全解决方案</h2>
                    <p>
                        在金融交易、银行风控领域，Secrova 采用隐私计算 + AI 反欺诈方案，确保数据安全合规，帮助企业符合 GDPR、CCPA 等监管要求，
                        实现“零信任”风险防范，防止数据泄露和欺诈行为。
                    </p>
                </div>

                <div className="sector-card">
                    <img src="/iot-icon.jpg" alt="工业与物联网安全" className="sector-icon" />
                    <h2>工业与物联网安全</h2>
                    <p>
                        物联网（IoT）设备易受攻击，Secrova 通过 AI 芯片级加密保障传感器、自动驾驶、智能制造系统的安全，
                        让边缘 AI 计算在未受信任的环境中依然可用、不可篡改。
                    </p>
                </div>

                <div className="sector-card">
                    <img src="/healthcare-icon.jpg" alt="医疗 AI 隐私" className="sector-icon" />
                    <h2>医疗AI与数据隐私</h2>
                    <p>
                        医疗行业对数据安全要求极高。Secrova 采用联邦学习 + 同态加密技术，使 AI 可在不访问患者隐私数据的情况下进行训练，
                        符合 HIPAA、GDPR 监管要求，同时提升医疗 AI 预测能力。
                    </p>
                </div>

                <div className="sector-card">
                    <img src="/government-icon.jpg" alt="政府与智能城市安全" className="sector-icon" />
                    <h2>政府与智能城市AI安全</h2>
                    <p>
                        AI 在公共安全、智能交通、政务大数据领域的应用越来越广泛。Secrova 通过AI 数据保护与国密级加密计算，
                        确保政府数据安全无泄露，防止恶意攻击与数据篡改，助力智慧城市安全建设。
                    </p>
                </div>
            </div>

        </main>
    );
}

