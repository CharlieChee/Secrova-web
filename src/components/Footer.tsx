import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>CONTACT US</p>
                <p>Email: <a href="mailto:qiongxiuli@outlook.com">qiongxiuli@outlook.com</a></p>
                <p><a href="mailto:xiaoli.cst@gmail.com">xiaoli.cst@gmail.com</a></p>
                <p><a href="mailto:hongyang.li1996@outlook">hongyang.li1996@outlook</a></p>
            </div>
            <p className="footer-copy">© 2025 Secrova. All rights reserved.</p>
        </footer>
    );
}
